"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  GitBranch,
  Terminal,
  Layers,
  Activity,
  CheckCircle2,
  Workflow,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function AgenticWorkflowSection() {
  const [selectedNode, setSelectedNode] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const nodes = [
    {
      id: 0,
      title: "Data Ingestion & Parsing",
      category: "Layer 01 &bull; Ingestion",
      icon: <Database className="h-5 w-5 text-[#FF6B00]" />,
      badge: "Multimodal Inputs",
      accent: "#FF6B00",
      description:
        "High-throughput vector indexing, OCR extraction, and schema normalization for EHRs, financial PDFs, SQL streams, and voice data.",
      telemetry: {
        latency: "18ms",
        throughput: "4,200 docs/min",
        accuracy: "99.94%",
        status: "Active Streaming",
      },
      tags: ["HL7 / FHIR", "Unstructured PDF", "Vector DB", "Embedding Cache"],
    },
    {
      id: 1,
      title: "Agentic Orchestration Core",
      category: "Layer 02 &bull; Decisioning",
      icon: <Cpu className="h-5 w-5 text-[#06B6D4]" />,
      badge: "Multi-Agent Router",
      accent: "#06B6D4",
      description:
        "LangChain & LlamaIndex orchestrator coordinating specialized subagents, semantic retrieval, dynamic prompt synthesis, and state persistence.",
      telemetry: {
        latency: "142ms",
        throughput: "850 req/sec",
        accuracy: "99.82%",
        status: "Parallel Evaluating",
      },
      tags: ["LangChain", "LlamaIndex", "Semantic Router", "Zero-Shot RAG"],
    },
    {
      id: 2,
      title: "Domain Intelligence Execution",
      category: "Layer 03 &bull; Execution",
      icon: <GitBranch className="h-5 w-5 text-[#6366F1]" />,
      badge: "Deterministic Logic",
      accent: "#6366F1",
      description:
        "Specialized reasoning workers executing domain logic: clinical diagnosis validation, real-time fraud scoring, or automated code compilation.",
      telemetry: {
        latency: "94ms",
        throughput: "1,200 tasks/min",
        accuracy: "99.98%",
        status: "Verified Safe",
      },
      tags: ["Domain Models", "Sandboxed Python", "Hallucination Guardrails", "Confidence Gates"],
    },
    {
      id: 3,
      title: "Verified Action & Webhook Dispatch",
      category: "Layer 04 &bull; Settlement",
      icon: <Zap className="h-5 w-5 text-[#D946EF]" />,
      badge: "System of Record",
      accent: "#D946EF",
      description:
        "Cryptographically signed webhooks dispatched to Salesforce, ERPs, EHR clinical workstations, and payment gateways with automated retry loops.",
      telemetry: {
        latency: "32ms",
        throughput: "99.99% Delivery SLA",
        accuracy: "100% Idempotent",
        status: "Dispatched",
      },
      tags: ["Idempotent Webhooks", "Audit Trail", "Human-in-Loop Gate", "ERP Sync"],
    },
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 4;
      setSelectedNode(step);
      if (step === 3) {
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 800);
      }
    }, 650);
  };

  const currentNode = nodes[selectedNode];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-[#FAF5FF] to-[#F8FAFC] border-b border-slate-200/80">
      {/* Luminous Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#6366F1]/10 via-[#06B6D4]/10 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[400px] bg-gradient-to-tl from-[#D946EF]/10 via-[#FF6B00]/8 to-transparent blur-[85px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-20 pointer-events-none" />

      {/* Flowing Subtle SVG Ribbon Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none overflow-hidden opacity-30 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100,50 C 350,150 550,200 650,450 C 720,620 500,700 350,780"
            stroke="url(#lavenderRibbon)"
            strokeWidth="90"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="lavenderRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#D946EF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container size="lg" className="relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div className="space-y-3 max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-xs font-mono text-slate-700">
              <Workflow className="h-3.5 w-3.5 text-[#6366F1]" />
              <span>Section 03 &bull; Autonomous AI Architecture</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900">
              Build AI That Works{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#FF6B00]">
                While You Sleep.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We design and deploy autonomous, deterministic multi-agent systems that ingest multimodal data, reason through complex enterprise workflows, and execute verified actions with audit trails.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-800 shadow-sm hover:border-[#6366F1]/50 hover:text-[#6366F1] transition-all disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isSimulating ? "animate-spin text-[#6366F1]" : ""}`} />
              {isSimulating ? "Simulating Workflow..." : "Simulate Flow"}
            </button>
            <Link
              href="/services/ai-ml-development"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#FF7A1A] shadow-[0_2px_12px_rgba(255,107,0,0.25)] transition-all"
            >
              Explore AI Practice <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Architecture Flow: 4 Nodes + Live Inspection Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Connected Visual Stages (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2">
              <span>Interactive Pipeline Stages (Click to Inspect)</span>
              <span className="text-[#6366F1] font-semibold">Active: Stage 0{selectedNode + 1}</span>
            </div>

            <div className="space-y-3.5 relative">
              {/* Connecting vertical line on desktop */}
              <div className="absolute left-[34px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#FF6B00] via-[#06B6D4] to-[#D946EF] opacity-40 hidden sm:block pointer-events-none" />

              {nodes.map((node, idx) => {
                const isActive = selectedNode === idx;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(idx)}
                    className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative ${isActive
                        ? "bg-white border-slate-300 shadow-[0_8px_30px_rgba(99,102,241,0.08)] ring-2 ring-slate-900/5 translate-x-1 sm:translate-x-2"
                        : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-sm"
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Node Icon Box */}
                      <div
                        className={`p-3 rounded-xl border shrink-0 transition-transform ${isActive
                            ? "bg-slate-50 border-slate-200 scale-105"
                            : "bg-slate-100/60 border-slate-200/60"
                          }`}
                      >
                        {node.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] font-mono uppercase font-semibold tracking-wider text-slate-400">
                            {node.category}
                          </span>
                          <span
                            className="text-[10px] font-mono px-2 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor: `${node.accent}15`,
                              color: node.accent,
                            }}
                          >
                            {node.badge}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {node.title}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {node.description}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {node.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100/80 text-slate-600 border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Floating Telemetry & Deep-Inspection Console (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Real-Time Stage Inspection Card (Light Glassmorphic with Dark Terminal Contrast) */}
            <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 sm:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative overflow-hidden space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[#10B981] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                    Stage Telemetry Inspector
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {currentNode.telemetry.status}
                </span>
              </div>

              {/* Title & Stage */}
              <div>
                <span className="text-xs font-mono text-[#6366F1] font-semibold">
                  Inspection Focus:
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-0.5 font-display">
                  {currentNode.title}
                </h4>
              </div>

              {/* Hard Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] uppercase text-slate-500 block">
                    Execution Latency
                  </span>
                  <span className="text-xl font-bold text-slate-900 mt-0.5 block">
                    {currentNode.telemetry.latency}
                  </span>
                  <span className="text-[10px] text-emerald-600 block mt-0.5">
                    &bull; Sub-second SLA
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] uppercase text-slate-500 block">
                    Throughput Rate
                  </span>
                  <span className="text-xl font-bold text-slate-900 mt-0.5 block">
                    {currentNode.telemetry.throughput}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    &bull; Auto-scaled pods
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] uppercase text-slate-500 block">
                    Output Precision
                  </span>
                  <span className="text-xl font-bold text-slate-900 mt-0.5 block">
                    {currentNode.telemetry.accuracy}
                  </span>
                  <span className="text-[10px] text-emerald-600 block mt-0.5">
                    &bull; Zero Hallucination
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] uppercase text-slate-500 block">
                    Security Layer
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-1 block">
                    mTLS + AES-256
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    &bull; Encrypted in transit
                  </span>
                </div>
              </div>

              {/* Dark Terminal Preview Inside Light Card (Crisp Developer Contrast) */}
              <div className="rounded-2xl bg-[#090A0F] border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="h-3 w-3 text-[#06B6D4]" />
                    runtime_log.stream
                  </span>
                  <span className="text-[#10B981]">status: 200 OK</span>
                </div>

                <div className="space-y-1 text-[11px] pt-1">
                  <p className="text-slate-400">
                    <span className="text-emerald-400">&gt;</span> dispatch_event:{" "}
                    <span className="text-white">agent_routing_complete</span>
                  </p>
                  <p className="text-slate-400">
                    <span className="text-cyan-400">&gt;</span> target_node:{" "}
                    <span className="text-yellow-300">"{currentNode.title}"</span>
                  </p>
                  <p className="text-slate-400">
                    <span className="text-purple-400">&gt;</span> validation:{" "}
                    <span className="text-emerald-300">Deterministic check passed</span>
                  </p>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>Fully auditable execution trace stored in PostgreSQL with pgvector.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
