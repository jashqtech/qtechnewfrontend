"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  ShieldCheck,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [activeStep, setActiveStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateWorkflow = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 700);
    setTimeout(() => {
      setActiveStep(3);
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-36 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#F1F5F9]">
      {/* Stripe-inspired Fluid Mesh Gradient Ribbon Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[680px] pointer-events-none overflow-hidden select-none">
        {/* Deep atmospheric glow layers */}
        <div className="absolute top-[-10%] right-[-5%] w-[580px] h-[580px] rounded-full bg-gradient-to-br from-[#FF6B00]/25 via-[#D946EF]/20 to-transparent blur-[90px] animate-pulse-glow" />
        <div className="absolute top-[20%] right-[15%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#06B6D4]/20 to-transparent blur-[80px]" />

        {/* Dynamic 3D Ribbon Paths */}
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-80"
          viewBox="0 0 800 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FF5A36" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#D946EF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="ribbonGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#D946EF" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="softLight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Sweeping Ribbon 1 */}
          <path
            d="M 250, -50 C 420, 120 720, 160 850, 420 C 950, 620 620, 680 480, 720"
            stroke="url(#ribbonGrad1)"
            strokeWidth="110"
            strokeLinecap="round"
            className="opacity-70 mix-blend-multiply"
          />

          {/* Sweeping Ribbon 2 with Counter-Curve */}
          <path
            d="M 180, 50 C 480, 80 650, 320 780, 550"
            stroke="url(#ribbonGrad2)"
            strokeWidth="70"
            strokeLinecap="round"
            className="opacity-60 mix-blend-multiply"
          />

          {/* Precision Accent Contours */}
          <path
            d="M 280, 20 C 500, 140 680, 240 820, 480"
            stroke="url(#softLight)"
            strokeWidth="3"
            strokeDasharray="8 6"
            className="opacity-40"
          />
        </svg>

        {/* Ambient Subtle Grid Lines */}
        <div className="absolute inset-0 bg-dot-grid-light opacity-30" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14 pt-4">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-7 max-w-2xl lg:max-w-none">
            {/* Live Practice Telemetry Pill */}
            {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-xs font-mono text-slate-700 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="font-semibold text-slate-900">Proven Engineering Scale:</span>
              <span className="text-slate-600">500+ Projects • 200+ Clients • 37 Case Studies</span>
            </div> */}

            {/* Editorial Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-slate-900 font-display leading-[1.06]">
              Architecting the Next Frontier of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5A36] to-[#D946EF]">
                Enterprise AI
              </span>{" "}
              & Digital Platforms
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              We engineer autonomous agentic workflows, high-concurrency cloud backends, and dedicated software teams that help global enterprises scale velocity, automate workflows, and drive business growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="bg-[#0A2540] hover:bg-[#1A385A] text-white shadow-xl shadow-slate-900/15 border-0 font-medium px-7 py-3.5 rounded-xl group transition-all"
                rightIcon={<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              >
                Schedule Technical Consultation
              </Button>
              <Button
                href="/case-studies"
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-900 font-medium px-6 py-3.5 rounded-xl transition-all"
              >
                Explore 37 Case Studies
              </Button>
            </div>

            {/* Enterprise Assurance Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Complete IP Ownership & Strict NDA
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Direct Senior Engineer Collaboration
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Rapid 2-Week Squad Deployment
              </span>
            </div>
          </div>

          {/* Right Column: Floating Perspective AI Orchestrator Visual Artifact */}
          <div className="w-full lg:w-[500px] shrink-0 relative mt-6 lg:mt-0">
            {/* Floating Top Badge */}
            <div className="absolute -top-4 -left-3 z-20 animate-float-slow hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-lg shadow-black/5 text-[11px] font-mono text-slate-700">
              <Sparkles className="h-3.5 w-3.5 text-[#FF6B00]" />
              <span>Multi-Agent Runtime Engine</span>
            </div>

            {/* Floating Bottom Trust Badge */}
            <div className="absolute -bottom-5 -right-3 z-20 animate-float-reverse hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xl text-xs font-mono">
              <ShieldCheck className="h-4 w-4 text-[#10B981]" />
              <span>SOC 2 & HIPAA Architecture Ready</span>
            </div>

            {/* Main Interactive Interface Panel */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-950 text-white shadow-2xl shadow-slate-900/25 p-6 relative overflow-hidden">
              {/* Terminal Chrome Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444] inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B] inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] inline-block" />
                  </div>
                  <span className="font-mono text-slate-400 pl-2 text-[11px]">
                    qtech-orchestrator.v2
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    Illustrative Demo
                  </span>
                  <button
                    onClick={simulateWorkflow}
                    className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Re-run interactive simulation"
                  >
                    <RotateCcw className={`h-3.5 w-3.5 ${isSimulating ? "animate-spin" : ""}`} />
                  </button>
                </div>
              </div>

              {/* Sample User Prompt Block */}
              <div className="py-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                  Input Enterprise Instruction
                </span>
                <div className="p-3 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200 flex items-start gap-2.5">
                  <Terminal className="h-4 w-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>
                    "Synchronize real-time EHR records & trigger automated clinician follow-up protocol."
                  </span>
                </div>
              </div>

              {/* Multi-Stage Agentic Reasoning Stream */}
              <div className="py-4 space-y-2.5">
                {/* Step 1: Ingestion & Validation */}
                <div
                  className={`p-3 rounded-xl border transition-all duration-300 text-xs font-mono flex items-center justify-between ${activeStep >= 1
                    ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-200"
                    : "bg-white/[0.02] border-white/5 text-slate-500"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      className={`h-4 w-4 ${activeStep >= 1 ? "text-[#10B981]" : "text-slate-600"
                        }`}
                    />
                    <div>
                      <span className="font-semibold block text-slate-100">
                        1. Schema Validation & RAG Indexing
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Verified HL7/FHIR compliant data stream
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-[#10B981]">
                    Passed
                  </span>
                </div>

                {/* Step 2: Autonomous Reasoning */}
                <div
                  className={`p-3 rounded-xl border transition-all duration-300 text-xs font-mono flex items-center justify-between ${activeStep >= 2
                    ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-200"
                    : "bg-white/[0.02] border-white/5 text-slate-500"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Cpu
                      className={`h-4 w-4 ${activeStep >= 2 ? "text-[#06B6D4] animate-spin" : "text-slate-600"
                        }`}
                    />
                    <div>
                      <span className="font-semibold block text-slate-100">
                        2. Multi-Agent Reasoning Chain
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Synthesizing predictive medical heuristics
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-[#06B6D4]">
                    {activeStep >= 2 ? "Active" : "Queued"}
                  </span>
                </div>

                {/* Step 3: Verified Execution */}
                <div
                  className={`p-3 rounded-xl border transition-all duration-300 text-xs font-mono flex items-center justify-between ${activeStep >= 3
                    ? "bg-purple-950/40 border-purple-500/30 text-purple-200"
                    : "bg-white/[0.02] border-white/5 text-slate-500"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Zap
                      className={`h-4 w-4 ${activeStep >= 3 ? "text-[#D946EF]" : "text-slate-600"
                        }`}
                    />
                    <div>
                      <span className="font-semibold block text-slate-100">
                        3. Cloud Action Dispatch
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Webhook dispatched to clinician workstation
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-[#D946EF]">
                    {activeStep >= 3 ? "Executed" : "Standby"}
                  </span>
                </div>
              </div>

              {/* Console Footer Status */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                  Zero Memory Leak Container
                </span>
                <span className="text-slate-300">
                  Target SLA: <strong className="text-white">99.9%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
