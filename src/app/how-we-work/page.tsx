import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Users,
  Rocket,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  Globe2
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Collaboration Models | Qrious Tech",
  description: "Explore our 3 flexible collaboration models: Dedicated Development Teams, SaaS Development Partner, and AI Modernization Partner.",
};

export default function HowWeWorkPage() {
  const models = [
    {
      badge: "Staff Augmentation",
      title: "Dedicated Development Teams",
      desc: "Pre-vetted senior engineers and complete squads that seamlessly integrate into your Jira sprints, Slack channels, and Git repositories.",
      image: "/images/resource/IMG_2432.webp",
      tags: ["Full-Stack", "Mobile", "Salesforce", "Power BI", "DevOps"],
      bullets: [
        "Vetted senior engineers matched in 48 hours",
        "Direct 1-on-1 daily communication & standups",
        "Flexible scaling up or down with 30-day notice",
        "100% IP ownership and complete bilateral NDAs",
      ],
      cta: "Build Dedicated Squad",
    },
    {
      badge: "Full-Lifecycle Incubation",
      title: "SaaS Development Partner",
      desc: "End-to-end cloud product development from initial requirements scoping and high-fidelity UX prototyping to production MVP launch and multi-tenant scaling.",
      image: "/images/home-page-2.webp",
      tags: ["MVP Incubation", "Multi-Tenant", "Stripe Billing", "AWS Cloud", "Next.js"],
      bullets: [
        "Fixed-scope or sprint-based milestone delivery",
        "Modern cloud-native architectures (Next.js, Node, PostgreSQL)",
        "Automated CI/CD pipelines and SOC2 compliance",
        "Post-launch SLA maintenance and scale monitoring",
      ],
      cta: "Launch Your SaaS",
    },
    {
      badge: "Enterprise Transformation",
      title: "AI Modernization Partner",
      desc: "Transform legacy databases, ERP systems, and monolithic software by embedding autonomous AI agents, deterministic RAG pipelines, and real-time inference.",
      image: "/images/AI.webp",
      tags: ["LangGraph", "RAG Pipelines", "pgvector", "FastAPI", "Agentic AI"],
      bullets: [
        "Architectural audit of legacy bottlenecks and manual workflows",
        "Deterministic multi-agent reasoning without hallucination risk",
        "Sub-1.2s inference speeds with private data protection",
        "Production telemetry and continuous evaluation guardrails",
      ],
      cta: "Modernize With AI",
    },
  ];

  const process = [
    { num: "01", title: "Discovery & Scoping", desc: "We evaluate your product backlog, technical requirements, and target timeline." },
    { num: "02", title: "Talent Vetting", desc: "Receive matched senior engineer profiles within 48 hours and conduct direct technical interviews." },
    { num: "03", title: "Agile Onboarding", desc: "Engineers join your Slack, repos, and sprints on Day 1 with dedicated project management." },
    { num: "04", title: "Bi-Weekly Deliveries", desc: "Demonstrable software delivered in 2-week sprint cycles with transparent burndowns." },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Engagement & Collaboration
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            How We <span className="text-[#FF6B00]">Work With You</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Three disciplined partnership models tailored to your business stage. Whether you need embedded senior engineers, an end-to-end SaaS build, or autonomous AI modernization.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Explore Engagement Terms <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/working-methodology" variant="secondary" size="lg">
              Working Methodology
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Collaboration Models */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {models.map((m, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : ""}`}>
                      <span className="px-3 py-1 rounded-full bg-amber-50 text-[#FF6B00] border border-amber-200 text-xs font-mono font-medium">
                        {m.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                        {m.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {m.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {m.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2.5 pt-3">
                        {m.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-[#FF6B00] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Button href="/contact" variant="primary" size="md">
                          {m.cta} <ArrowRight className="h-4 w-4 ml-1.5" />
                        </Button>
                      </div>
                    </div>

                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : ""}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Process Strip */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              The Sprint Onboarding Cadence
            </h2>
            <p className="mt-2 text-slate-600">From initial introduction to code commits in under 7 days.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold font-mono text-[#FF6B00] block mb-2">{p.num}</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
