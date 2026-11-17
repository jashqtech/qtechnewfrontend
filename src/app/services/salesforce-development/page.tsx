import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Cloud,
  Layers,
  Code2,
  Workflow,
  ShieldCheck,
  Zap,
  ArrowRight,
  Database
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salesforce Consulting & Custom LWC Development | Qrious Tech",
  description: "Certified Salesforce development practice covering Sales Cloud, Service Cloud, Experience Cloud, Lightning Web Components (LWC), Apex, and CPQ integrations.",
};

export default function SalesforceDevelopmentPage() {
  const capabilities = [
    {
      title: "Sales & Service Cloud Modernization",
      desc: "Custom lead routing, opportunity pipelines, Omni-Channel support queues, and automated customer service workflows.",
      icon: Cloud,
    },
    {
      title: "Lightning Web Components (LWC)",
      desc: "High-performance reactive UI components built using standard web components, reducing page load overhead in Salesforce Lightning.",
      icon: Code2,
    },
    {
      title: "Experience Cloud (Communities)",
      desc: "Branded customer, partner, and vendor portals integrated deeply with core CRM objects and custom self-service knowledge bases.",
      icon: Layers,
    },
    {
      title: "Salesforce CPQ & Billing Automation",
      desc: "Complex product bundle configurations, dynamic discounting matrices, multi-currency quote generation, and ERP invoicing sync.",
      icon: Workflow,
    },
    {
      title: "Third-Party ERP & API Integrations",
      desc: "Bi-directional real-time integrations connecting Salesforce with SAP, NetSuite, Stripe, QuickBooks, and internal microservices via REST/SOAP.",
      icon: Database,
    },
    {
      title: "Apex Architecture & Governor Limit Tuning",
      desc: "Scalable batch Apex, queueable jobs, trigger frameworks, and governor limit optimization for multi-million record orgs.",
      icon: Zap,
    },
  ];

  const certs = [
    "Salesforce Certified Technical Architect",
    "Platform Developer I & II (PD1 / PD2)",
    "Sales Cloud & Service Cloud Consultant",
    "Salesforce Certified Administrator",
    "Experience Cloud Specialist",
    "Salesforce CPQ Specialist",
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Practice: Enterprise Salesforce
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Certified <span className="text-[#FF6B00]">Salesforce</span> Development & Consulting
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Maximize your CRM return on investment. Our certified Salesforce architects build scalable Lightning Web Components, automated CPQ workflows, and bulletproof integrations for mid-market and enterprise businesses.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Consult a Salesforce Lead <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Salesforce Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Enterprise Salesforce Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              End-to-end consulting from architectural audits to custom Apex and LWC engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border border-slate-200/80 bg-white hover:border-amber-200 hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold">
                Certified Practice
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display mt-1">
                Salesforce Certifications Held by Our Squad
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm text-slate-200 font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-[#FF6B00]" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
