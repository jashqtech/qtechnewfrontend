"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Terminal, Activity, Cpu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#FF6B00]/14 via-[#06B6D4]/6 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <Badge variant="amber" size="md" hasDot>
              Enterprise AI • Cloud Engineering • Dedicated Squads
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] font-display leading-[1.08]">
              Pioneering Business Growth with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-[#06B6D4]">
                Enterprise AI
              </span>{" "}
              & Software Engineering
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              We architect high-concurrency cloud systems, autonomous AI workflows, and dedicated developer teams that help global organizations scale operational velocity and grow their businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Technical Consultation
              </Button>
              <Button href="/case-studies" size="lg" variant="secondary">
                View 37 Enterprise Case Studies
              </Button>
            </div>

            {/* Guarantees / Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Full IP Ownership & NDA Protection
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Direct Senior Engineer Collaboration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Rapid 2-Week Squad Deployment
              </span>
            </div>
          </div>

          {/* Right Interactive Telemetry & Architecture Card */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="rounded-2xl border border-white/10 bg-[#11131B]/90 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[#64748B] pl-2">qtech-inference-node.cluster</span>
                </div>
                <span className="flex items-center gap-1 font-mono text-[#10B981]">
                  <Activity className="h-3 w-3 animate-pulse" /> Live Telemetry
                </span>
              </div>

              {/* Status Metric Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-b border-white/10">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="text-[11px] font-mono uppercase text-[#64748B] block">Model Latency</span>
                  <span className="text-xl font-bold font-mono text-[#06B6D4]">142 ms</span>
                  <span className="text-[10px] text-[#10B981] block mt-0.5">↓ 24% vs benchmark</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="text-[11px] font-mono uppercase text-[#64748B] block">Production SLA</span>
                  <span className="text-xl font-bold font-mono text-[#10B981]">99.98%</span>
                  <span className="text-[10px] text-[#94A3B8] block mt-0.5">High-Availability AWS</span>
                </div>
              </div>

              {/* Architecture Stream Nodes */}
              <div className="py-4 space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-[#FF6B00]" />
                    <span className="text-[#F8FAFC]">Autonomous Workflow Agent</span>
                  </div>
                  <span className="text-[#10B981]">Active (4 Nodes)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-[#06B6D4]" />
                    <span className="text-[#F8FAFC]">LangChain RAG Semantic Engine</span>
                  </div>
                  <span className="text-[#10B981]">Indexed 1.2M Docs</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#3B82F6]" />
                    <span className="text-[#F8FAFC]">Enterprise RBAC & Encryption</span>
                  </div>
                  <span className="text-[#F8FAFC]/70">AES-256 Validated</span>
                </div>
              </div>

              {/* Bottom live event log */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>Throughput: 12,400 req/min</span>
                <span className="text-[#FF6B00]">Region: Global Edge</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
