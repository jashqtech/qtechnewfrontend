"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FeaturedCaseStudies() {
  const megaProject = {
    id: "fitmindai",
    title: "FitMind AI: Autonomous Multi-Agent Health & Biomechanical Engine",
    category: "Autonomous AI & LangGraph",
    image: "/images/resource/case-study-fitmindai.png",
    description:
      "Engineered an asynchronous, domain-driven multi-agent architecture orchestrated by LangGraph StateGraph on FastAPI and PostgreSQL with pgvector. The system synchronizes 8 specialized AI agents with deterministic biomechanical formulas in a continuous closed physiological feedback loop.",
    kpis: [
      { value: "100%", label: "Dynamic Adaptation Rate" },
      { value: "< 1.2s", label: "Multi-Agent Decision Cycle" },
      { value: "3.2x", label: "Long-Term Retention Boost" },
    ],
    tags: ["LangGraph StateGraph", "pgvector 768-dim", "FastAPI Async", "Closed-Loop Biometrics"],
    theme: "#FF6B00",
  };

  const supportingProjects = [
    {
      id: "enterprise-gpt",
      title: "Enterprise GPT: Role-Authorized Company Knowledge Hub",
      category: "Enterprise AI & RAG",
      image: "/images/resource/case-study-enterprise-gpt.png",
      description:
        "Custom private LLM assistant indexing 250,000+ proprietary technical specifications, Jira tickets, and Confluence docs with strict SOC 2 RBAC permissions.",
      kpis: [
        { value: "94%", label: "First-Touch Resolution" },
        { value: "< 280ms", label: "Semantic Search Latency" },
      ],
      tags: ["Private VPC", "LlamaIndex RAG", "Zero Training on Data"],
      theme: "#06B6D4",
    },
    {
      id: "fitze",
      title: "MoveMint: Real-Time Fleet & Behavioral Telemetry Platform",
      category: "Mobile & Telemetry",
      image: "/images/resource/case-study-movemint.png",
      description:
        "High-concurrency mobile application processing real-time GPS telemetry, anti-spoofing verification, and micro-incentive reward distributions.",
      kpis: [
        { value: "120k+", label: "Daily Active Users" },
        { value: "99.98%", label: "Telemetry Anti-Spoof Precision" },
      ],
      tags: ["React Native", "AWS IoT Core", "Sub-Second Sync"],
      theme: "#6366F1",
    },
  ];

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-[#FFFFFF] border-b border-slate-200/80">
      {/* Ambient Background Lighting */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[400px] bg-gradient-to-bl from-[#FF6B00]/10 via-[#D946EF]/5 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-[#6366F1]/10 via-[#06B6D4]/8 to-transparent blur-[85px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-20 pointer-events-none" />

      <Container size="lg" className="relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div className="space-y-3 max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-xs font-mono text-slate-700">
              <TrendingUp className="h-3.5 w-3.5 text-[#FF6B00]" />
              <span>Section 07 &bull; Proven Technical Outcomes</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900">
              Real Architectures.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#D946EF] to-[#6366F1]">
                Measurable Impact.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore how our dedicated engineering squads solve complex architectural bottlenecks, eliminate manual latency, and deliver verified production metrics for global enterprises.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#FF7A1A] shadow-[0_2px_12px_rgba(255,107,0,0.25)] transition-all"
            >
              Explore All 37 Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 1. MEGA FEATURED CASE STUDY: Full-Width Asymmetric Showcase */}
        <div className="rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_12px_45px_rgba(0,0,0,0.06)] overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Screenshot Side (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] bg-gradient-to-br from-slate-100 via-slate-50 to-amber-50/40 p-6 sm:p-10 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200/70">
              <div className="absolute inset-0 bg-dot-grid-light opacity-30 pointer-events-none" />
              <div className="relative w-full h-full max-h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-300/80 group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={megaProject.image}
                  alt={megaProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating verified badge */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center gap-2 text-xs font-mono text-slate-800">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                <span>Production Architecture Verified</span>
              </div>
            </div>

            {/* Narrative & Metrics Side (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-semibold text-[#FF6B00]">
                    {megaProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Featured Study #01</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display leading-tight">
                  {megaProject.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {megaProject.description}
                </p>

                {/* Hard KPIs */}
                <div className="grid grid-cols-3 gap-2.5 pt-3">
                  {megaProject.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-mono">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900 block">
                        {kpi.value}
                      </span>
                      <span className="text-[10px] uppercase text-slate-500 block leading-tight mt-0.5">
                        {kpi.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Architecture Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {megaProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/case-studies/${megaProject.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:text-[#FF7A1A] transition-colors"
                >
                  Read Full Architecture &amp; Engineering Breakdown{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. DUAL SUPPORTING PROJECTS: 2-Column Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-100 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200/70">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md border border-slate-200 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-xs font-mono font-semibold text-slate-800 shadow-sm">
                  {proj.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900 font-display group-hover:text-[#FF6B00] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* KPIs */}
                  <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
                    {proj.kpis.map((kpi, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                        <span className="text-lg font-bold text-slate-900 block">
                          {kpi.value}
                        </span>
                        <span className="text-[10px] uppercase text-slate-500 block leading-tight mt-0.5">
                          {kpi.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 group-hover:text-[#FF6B00] transition-colors">
                  <Link href={`/case-studies/${proj.id}`} className="inline-flex items-center gap-1.5">
                    View Case Study <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-slate-400">Production Live</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
