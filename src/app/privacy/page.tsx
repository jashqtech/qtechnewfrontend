import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock, FileText, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Qrious Tech Team LLP",
  description: "Our commitment to data privacy, confidentiality, GDPR/HIPAA compliance, and intellectual property protection.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Legal & Governance
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Privacy <span className="text-[#FF6B00]">Policy</span>
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Effective Date: November 2026. This policy outlines how Qrious Tech Team LLP handles your personal data, project materials, and intellectual property.
          </p>
        </div>
      </section>

      {/* Policy Clauses */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
          <div className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              1. Overview & Commitment
            </h2>
            <p className="text-sm leading-relaxed">
              At <strong>Qrious Tech (Qrioustech Team LLP)</strong>, accessible from <Link href="/" className="text-[#FF6B00] underline">https://qrioustech.com</Link>, one of our fundamental priorities is ensuring the privacy, confidentiality, and security of our clients, visitors, and partners. This policy outlines the categories of data we collect and how we safeguard it.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              2. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              When you submit an inquiry, request developer CVs, or upload project attachments:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] mt-2 shrink-0" />
                <span><strong>Contact Details:</strong> Name, corporate email, mobile phone number, job title, and company name.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] mt-2 shrink-0" />
                <span><strong>Project Documentation:</strong> Technical requirements, project briefs, RFPs, and uploaded PDF attachments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] mt-2 shrink-0" />
                <span><strong>Telemetry:</strong> Anonymized browser, device type, and visit timestamps via standard access logs.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              3. 100% Intellectual Property & NDA Guarantee
            </h2>
            <p className="text-sm leading-relaxed">
              All software, algorithms, databases, repositories, designs, and proprietary know-how engineered by Qrious Tech developers on client engagements remain the <strong>sole and exclusive intellectual property of the client</strong> from the moment of creation. We execute strict bilateral Non-Disclosure Agreements (NDAs) before reviewing any client architecture or requirements.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-3">
              4. Contact Our Compliance Office
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions or data requests regarding our privacy practices, please contact us at <a href="mailto:info@qrioustech.com" className="text-[#FF6B00] font-mono underline">info@qrioustech.com</a> or mail us at our registered office: Dev Aurum, Prahladnagar, Ahmedabad - 380015, Gujarat, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
