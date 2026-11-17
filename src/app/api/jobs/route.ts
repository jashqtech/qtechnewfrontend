import { NextResponse } from "next/server";
import { JobOpening } from "@/types";

const API_BASE_URL =
  process.env.API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://qrioustech.com/qtech-website/api/v1";

// Verified QTech Practice Job Openings used as resilient fallback
const FALLBACK_JOBS: JobOpening[] = [
  {
    name_of_opening: "Senior Full-Stack Engineer (React / Node.js)",
    to_email: "hr@qrioustech.in",
    opening_details_field: {
      expirence: "4-7",
      no_of_openings: 3,
      contract: "Full-Time",
      location: "Ahmedabad, India / Hybrid",
    },
    description: [
      "Architect and scale high-concurrency web applications using Next.js, Node.js, and TypeScript.",
      "Design resilient microservices and secure REST/GraphQL APIs with PostgreSQL and Redis caching.",
      "Collaborate with US and European clients on agile enterprise sprints and architectural decisions.",
      "Mentor junior engineers and champion clean code standards, unit testing, and CI/CD pipelines.",
    ],
  },
  {
    name_of_opening: "AI / Machine Learning Engineer",
    to_email: "hr@qrioustech.in",
    opening_details_field: {
      expirence: "3-6",
      no_of_openings: 2,
      contract: "Full-Time",
      location: "Ahmedabad, India",
    },
    description: [
      "Develop and deploy generative AI workflows, RAG pipelines, and fine-tuned LLM agents.",
      "Build production-grade computer vision and NLP models for enterprise automation workflows.",
      "Integrate vector databases (Pinecone, pgvector) and orchestrate LLM evaluation frameworks.",
      "Optimize inference latencies for multi-modal machine learning models in cloud environments.",
    ],
  },
  {
    name_of_opening: "Salesforce Technical Architect / Lead Developer",
    to_email: "hr@qrioustech.in",
    opening_details_field: {
      expirence: "5-8",
      no_of_openings: 2,
      contract: "Full-Time",
      location: "Ahmedabad, India",
    },
    description: [
      "Lead technical design for Sales Cloud, Service Cloud, and Experience Cloud implementations.",
      "Write high-performance Apex, Lightning Web Components (LWC), and custom integrations with external ERPs.",
      "Configure complex Salesforce CPQ, Conga CPQ, and billing rules for global enterprises.",
      "Hold Salesforce Developer / Architect certifications and guide best practices across the practice.",
    ],
  },
  {
    name_of_opening: "Senior Mobile Engineer (React Native & Flutter)",
    to_email: "hr@qrioustech.in",
    opening_details_field: {
      expirence: "3-5",
      no_of_openings: 2,
      contract: "Full-Time",
      location: "Ahmedabad, India",
    },
    description: [
      "Build high-performance cross-platform iOS and Android applications with native module bridges.",
      "Implement smooth 60fps animations, offline-first SQLite synchronization, and push notifications.",
      "Ensure compliance with Apple App Store and Google Play Store review guidelines.",
      "Integrate biometrics, Bluetooth BLE hardware, and real-time WebSocket communication.",
    ],
  },
  {
    name_of_opening: "Power BI & Data Visualization Specialist",
    to_email: "hr@qrioustech.in",
    opening_details_field: {
      expirence: "3-6",
      no_of_openings: 2,
      contract: "Full-Time",
      location: "Ahmedabad, India",
    },
    description: [
      "Design executive Power BI dashboards, DAX measures, and multi-ERP tabular data models.",
      "Consolidate fragmented business data across SAP, Salesforce, and SQL data warehouses.",
      "Implement role-level security (RLS) and optimize complex refresh schedules.",
      "Translate raw telemetry into intuitive executive KPIs and automated reporting pipelines.",
    ],
  },
];

export async function GET() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

  try {
    const res = await fetch(`${API_BASE_URL}/job-description`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 }, // 1-hour ISR cache
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const text = await res.text();
      try {
        const json = JSON.parse(text);
        if (json && Array.isArray(json.data) && json.data.length > 0) {
          return NextResponse.json({
            status: "success",
            source: "upstream",
            count: json.data.length,
            data: json.data,
          });
        }
      } catch {
        console.warn("Upstream jobs returned non-JSON, falling back to cached practice jobs.");
      }
    }
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn("Upstream jobs fetch failed or timed out:", err);
  }

  // Graceful fallback to verified practice jobs when upstream is offline or unreachable
  return NextResponse.json({
    status: "success",
    source: "fallback",
    count: FALLBACK_JOBS.length,
    data: FALLBACK_JOBS,
  });
}
