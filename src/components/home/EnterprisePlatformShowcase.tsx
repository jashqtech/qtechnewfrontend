"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Server,
  Lock,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Terminal,
  Activity,
  BarChart2,
  HardDrive,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function EnterprisePlatformShowcase() {
  const [activeModule, setActiveModule] = useState<string>("agents");

  const modules = [
    { id: "agents", name: "AI Agent Orchestrator", icon: <Cpu className="h-4 w-4" />, count: "12 Active" },
    { id: "rag", name: "Semantic RAG & Vector Index", icon: <Database className="h-4 w-4" />, count: "1.4M Vectors" },
    { id: "pipeline", name: "Real-Time Event Bus", icon: <Workflow className="h-4 w-4" />, count: "14.2k evt/s" },
    { id: "security", name: "Zero-Trust Identity & RBAC", icon: <Lock className="h-4 w-4" />, count: "SOC 2" },
  ];

  const differentiators = [
    {
      title: "Sub-200ms Inference & Execution SLA",
      detail: "Optimized model quantization and distributed edge caching guarantee enterprise response velocities.",
    },
    {
      title: "Zero Data Leakage & Private Model Hosting",
      detail: "Isolated VPC deployments on AWS/GCP with dedicated tenancy and zero training on customer proprietary data.",
    },
    {
      title: "Self-Healing Distributed Microservices",
      detail: "Kubernetes container orchestration with automated horizontal scaling and multi-region failover protocols.",
    },
    {
      title: "Deterministic Guardrails & Audit Trails",
      detail: "Real-time hallucination prevention filters, schema verification, and cryptographically signed audit logs.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FAF8F4] to-[#FFFFFF] border-b border-slate-200/80">
      {/* Luminous Ambient Lighting */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[400px] bg-gradient-to-br from-[#FF6B00]/10 via-[#D946EF]/5 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[450px] bg-gradient-to-tl from-[#06B6D4]/10 via-[#6366F1]/8 to-transparent blur-[95px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-20 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT COLUMN: Large Asymmetric Editorial Block (45%) */}
          <div className="w-full lg:w-[45%] space-y-8 text-left">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-xs font-mono text-slate-700">
              <Server className="h-3.5 w-3.5 text-[#FF6B00]" />
              <span>Section 04 &bull; Enterprise Platform Architecture</span>
            </div> */}

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 leading-[1.12]">
                The Operating System for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#D946EF] to-[#6366F1]">
                  AI-Powered Enterprise.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We engineer scalable cloud platforms that bridge legacy business systems with autonomous intelligence. Highly modular, strictly governed, and built to withstand enterprise volume.
              </p>
            </div>

            {/* Differentiators with colored icons */}
            <div className="space-y-4 pt-2">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-emerald-50 border border-emerald-200 mt-1 shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {diff.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {diff.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#FF7A1A] shadow-[0_4px_16px_rgba(255,107,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,107,0,0.35)] transition-all"
              >
                Explore Platform Architecture <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all"
              >
                View Benchmarks
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Multi-Layered Floating Dashboard Showcase (55%) */}
          <div className="w-full lg:w-[55%] relative">
            {/* Ambient Background Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B00]/15 via-[#06B6D4]/15 to-[#6366F1]/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Floating Satellite Card 1 (Top Left Overlapping) */}
            <div className="absolute -top-6 -left-4 sm:-left-8 z-20 p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md hidden sm:flex items-center gap-3 animate-float-slow">
              <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Activity className="h-5 w-5 text-[#10B981]" />
              </div>
              <div className="font-mono text-left">
                <span className="text-[10px] uppercase text-slate-500 block">System Availability</span>
                <span className="text-sm font-bold text-slate-900 block">99.99% Uptime</span>
              </div>
            </div>

            {/* Floating Satellite Card 2 (Bottom Right Overlapping) */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md hidden sm:flex items-center gap-3 animate-float-reverse">
              <div className="h-9 w-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                <Zap className="h-5 w-5 text-[#06B6D4]" />
              </div>
              <div className="font-mono text-left">
                <span className="text-[10px] uppercase text-slate-500 block">p99 Latency</span>
                <span className="text-sm font-bold text-[#06B6D4] block">&lt; 140ms Global</span>
              </div>
            </div>

            {/* Main Interactive Floating Dashboard Card */}
            <div className="relative z-10 rounded-3xl border border-slate-200/90 bg-white/95 shadow-[0_16px_50px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Dashboard Browser Header Bar */}
              <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-500 ml-2">
                    console.qtech.internal/platform-orchestrator
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                    Production Mesh Live
                  </span>
                </div>
              </div>

              {/* Dashboard Interior */}
              <div className="p-6 space-y-6">
                {/* Top Telemetry Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-mono">
                    <span className="text-[10px] text-slate-500 block uppercase">Active Pods</span>
                    <span className="text-base font-bold text-slate-900 mt-0.5 block">64 Containers</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-mono">
                    <span className="text-[10px] text-slate-500 block uppercase">Throughput</span>
                    <span className="text-base font-bold text-[#FF6B00] mt-0.5 block">14.2k req/s</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-mono">
                    <span className="text-[10px] text-slate-500 block uppercase">Compliance</span>
                    <span className="text-base font-bold text-emerald-600 mt-0.5 block">SOC 2 Ready</span>
                  </div>
                </div>

                {/* Main Dashboard Body: Left Module Switcher + Right Topology Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                  {/* Left Module Navigation (5 cols) */}
                  <div className="sm:col-span-5 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block px-1">
                      Platform Modules
                    </span>
                    {modules.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setActiveModule(m.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between ${activeModule === m.id
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/60"
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={activeModule === m.id ? "text-[#FF6B00]" : "text-slate-500"}>
                            {m.icon}
                          </span>
                          <span className="font-semibold truncate max-w-[110px]">{m.name}</span>
                        </div>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${activeModule === m.id
                              ? "bg-white/20 text-white"
                              : "bg-white text-slate-600 border border-slate-200"
                            }`}
                        >
                          {m.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Right Module Details & Topology (7 cols) */}
                  <div className="sm:col-span-7 rounded-2xl bg-slate-50 border border-slate-200/70 p-4 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-700 font-bold">Topology Monitor</span>
                      <span className="text-[10px] text-emerald-600 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Healthy
                      </span>
                    </div>

                    {/* Topology Mini Schematic */}
                    <div className="space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <HardDrive className="h-3.5 w-3.5 text-[#06B6D4]" />
                          <span className="text-slate-800 font-medium">Gateway &amp; Auth Edge</span>
                        </div>
                        <span className="text-[10px] text-slate-400">12ms</span>
                      </div>

                      <div className="pl-4 text-slate-400 flex items-center gap-1.5 text-[10px]">
                        <span>&darr;</span>
                        <span>mTLS Authenticated Internal Mesh</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-3.5 w-3.5 text-[#6366F1]" />
                          <span className="text-slate-800 font-medium">Distributed LLM Runners</span>
                        </div>
                        <span className="text-[10px] text-[#10B981]">100% Load Balanced</span>
                      </div>

                      <div className="pl-4 text-slate-400 flex items-center gap-1.5 text-[10px]">
                        <span>&darr;</span>
                        <span>Zero-Leak Vector Sync</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-3.5 w-3.5 text-[#FF6B00]" />
                          <span className="text-slate-800 font-medium">PostgreSQL pgvector Engine</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Encrypted</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Bottom Log Bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                    All microservices responding within nominal SLA bounds.
                  </span>
                  <span className="font-semibold text-slate-700">Cluster: us-east-1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
