import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL =
  process.env.API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://qrioustech.com/qtech-website/api/v1";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^\d{10}$/;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { status: "failure", message: "Content type must be multipart/form-data" },
        { status: 400 }
      );
    }

    const formData = await req.formData();

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const mobile = (formData.get("mobile") as string)?.trim();
    const type = (formData.get("type") as string)?.trim();
    const message = (formData.get("additional_msg") as string)?.trim() || "";
    const recipient = formData.get("recipient") as string | null;
    const attachment = formData.get("attachment") as File | null;

    // Validation
    const missing: string[] = [];
    if (!name) missing.push("Name");
    if (!email) missing.push("Email");
    if (!type) missing.push("Inquiry Type");
    if (!mobile) missing.push("Mobile number");

    if (missing.length > 0) {
      return NextResponse.json(
        { status: "failure", message: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { status: "failure", message: "Invalid email address format." },
        { status: 400 }
      );
    }

    if (!MOBILE_REGEX.test(mobile)) {
      return NextResponse.json(
        { status: "failure", message: "Mobile number must be a 10-digit number." },
        { status: 400 }
      );
    }

    if (attachment && attachment.size > 0) {
      if (attachment.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { status: "failure", message: "File size exceeds the 5MB maximum limit." },
          { status: 400 }
        );
      }
      if (attachment.type && !attachment.type.includes("pdf") && !attachment.name.endsWith(".pdf")) {
        return NextResponse.json(
          { status: "failure", message: "Only PDF attachments are permitted." },
          { status: 400 }
        );
      }
    }

    // Construct payload for upstream API
    const upstreamFormData = new FormData();
    upstreamFormData.append("name", name);
    upstreamFormData.append("email", email);
    upstreamFormData.append("mobile", mobile);
    upstreamFormData.append("type", type);
    upstreamFormData.append("additional_msg", message);

    if (recipient) {
      upstreamFormData.append("recipient", recipient);
    }

    if (attachment && attachment.size > 0) {
      upstreamFormData.append("attachment", attachment, attachment.name);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    try {
      const upstreamRes = await fetch(`${API_BASE_URL}/contact-us`, {
        method: "POST",
        body: upstreamFormData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseText = await upstreamRes.text();
      let responseJson: Record<string, unknown> = {};

      try {
        responseJson = JSON.parse(responseText);
      } catch {
        // If upstream returned non-JSON (e.g. 502 HTML)
        console.warn("Upstream API returned non-JSON:", responseText.slice(0, 200));
        return NextResponse.json(
          {
            status: "failure",
            message:
              "Our communication server is temporarily busy. Please contact info@qrioustech.com or call +91 63557 94606 directly.",
          },
          { status: 502 }
        );
      }

      if (upstreamRes.ok && responseJson.status === "success") {
        return NextResponse.json(
          {
            status: "success",
            message: "Your message has been received. Our leadership will respond within 24 hours.",
            id: responseJson.id,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            status: "failure",
            message:
              (responseJson.message as string) ||
              "Could not complete submission. Please try again or email info@qrioustech.com.",
          },
          { status: upstreamRes.status || 400 }
        );
      }
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      const isAbort = (fetchErr as { name?: string })?.name === "AbortError";
      console.error("Upstream contact-us fetch error:", fetchErr);

      return NextResponse.json(
        {
          status: "failure",
          message: isAbort
            ? "Submission timed out connecting to the backend. Please email info@qrioustech.com directly."
            : "Backend connection unavailable. Please email info@qrioustech.com or call +91 63557 94606.",
        },
        { status: 503 }
      );
    }
  } catch (err: unknown) {
    console.error("Internal API error in /api/contact:", err);
    return NextResponse.json(
      { status: "failure", message: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
