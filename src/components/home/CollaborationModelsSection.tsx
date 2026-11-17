"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Rocket,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

type TabKey = "squad" | "saas" | "modernize";

const tabs: { key: TabKey; label: string }[] = [
  { key: "squad", label: "Engineering Squads" },
  { key: "saas", label: "SaaS Partner" },
  { key: "modernize", label: "AI Modernization" },
];

const tabContent: Record<
  TabKey,
  {
    image: string;
    accent: string;
    badge: string;
    badgeBg: string;
    model: string;
    headline: string;
    body: string;
    features: string[];
    cta: string;
    href: string;
  }
> = {
  squad: {
    image: "/images/resource/ASU07123.webp",
    accent: "#FF6B00",
    badge: "2-Week Kickoff",
    badgeBg: "rgba(16,185,129,0.15)",
    model: "Model 01",
    headline: "Dedicated Development Squads",
    body: "Augment your team with full-time, senior software engineers and technical leads embedded directly into your daily agile sprints. We work as an extension of your team—same tools, same rhythm.",
    features: [
      "Senior Full-Stack Architects & AI/ML leads",
      "Full-time 160h/month commitment per engineer",
      "2-week ramp — sprint-ready from day one",
      "Daily standups, Jira, Slack, your stack",
    ],
    cta: "Explore Dedicated Squads",
    href: "/how-we-work/dedicated-teams",
  },
  saas: {
    image: "/images/resource/dedicated-teams-cover.png",
    accent: "#06B6D4",
    badge: "Concept to Scale",
    badgeBg: "rgba(6,182,212,0.15)",
    model: "Model 02",
    headline: "SaaS Product Development",
    body: "We take your software vision from requirements and architecture through high-fidelity UX prototyping to multi-tenant MVP launch and sustainable growth. Full product ownership, zero guesswork.",
    features: [
      "Architecture → Wireframes → Cloud MVP",
      "Multi-tenant, SOC 2 ready from day one",
      "Security & penetration testing built-in",
      "Continuous scaling & feature velocity",
    ],
    cta: "Explore SaaS Acceleration",
    href: "/how-we-work/saas-partner",
  },
  modernize: {
    image: "/images/resource/ai-modernization-cover.png",
    accent: "#6366F1",
    badge: "Legacy Upgrade",
    badgeBg: "rgba(99,102,241,0.15)",
    model: "Model 03",
    headline: "Enterprise AI Modernization",
    body: "Transform legacy enterprise applications by infusing autonomous AI agents, semantic retrieval (RAG), and automated intelligent workflows. Zero data loss. Minimal operational disruption.",
    features: [
      "Full audit of existing monolith & data layer",
      "RAG + Agentic AI workflow insertion",
      "Incremental migration — zero big-bang risk",
      "Cloud-native target architecture on AWS/GCP",
    ],
    cta: "Explore AI Modernization",
    href: "/how-we-work/ai-modernization",
  },
};

export function CollaborationModelsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("squad");
  const content = tabContent[activeTab];

  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFF5F0 0%, #FFFBF5 60%, #FFF8F0 100%)" }}
    >
      {/* Ambient amber glow top-right */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,107,0,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Faint violet glow bottom-left */}
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Editorial column (30%) ── */}
          <div className="w-full lg:w-[30%] shrink-0 space-y-8 lg:sticky lg:top-28">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold"
              style={{
                background: "rgba(255,107,0,0.08)",
                border: "1px solid rgba(255,107,0,0.22)",
                color: "#FF6B00",
              }}
            >
              <Users className="h-3.5 w-3.5" />
              <span>Engagement Models</span>
            </div>

            <div className="space-y-3">
              <h2
                className="font-display font-bold leading-tight tracking-tight"
                style={{ color: "#0F172A", fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}
              >
                How We Partner
                <br />
                With You
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                Three ways to work with us — from embedded engineering squads to full SaaS builds and AI-led modernization.
              </p>
            </div>

            {/* Tab selectors */}
            <div className="flex flex-col gap-2.5">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                const accent = tabContent[tab.key].accent;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: isActive ? `${accent}12` : "rgba(15,23,42,0.03)",
                      border: `1.5px solid ${isActive ? accent + "45" : "rgba(15,23,42,0.08)"}`,
                      color: isActive ? accent : "#64748B",
                      transform: isActive ? "translateX(4px)" : "none",
                      boxShadow: isActive ? `0 2px 12px ${accent}1A` : "none",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* "View all" link */}
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: "#64748B" }}
            >
              View All Engagement Models <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* ── RIGHT: Content panel (70%) ── */}
          <div className="w-full lg:flex-1 relative">
            {/* Card with real image bg */}
            <div
              key={activeTab}
              className="rounded-3xl overflow-hidden relative"
              style={{
                boxShadow: "0 4px 40px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                border: "1px solid rgba(15,23,42,0.08)",
                animation: "tabFadeIn 0.35s ease forwards",
                minHeight: "500px",
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${content.image}')` }}
              />

              {/* Dark gradient overlay for readability */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,20,0.75) 0%, rgba(10,10,20,0.45) 50%, rgba(10,10,20,0.20) 100%)",
                }}
              />

              {/* Inner content: frosted glass panel */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full min-h-[500px]">
                {/* Top: model label + badge */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-widest"
                    style={{ color: content.accent }}
                  >
                    {content.model}
                  </span>
                  <span
                    className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: content.badgeBg,
                      color: content.accent,
                      border: `1px solid ${content.accent}40`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {content.badge}
                  </span>
                </div>

                {/* Bottom frosted glass text panel */}
                <div
                  className="mt-auto rounded-2xl p-6 sm:p-8 space-y-5"
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.60)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  <div>
                    <h3
                      className="font-display font-bold text-xl sm:text-2xl mb-2"
                      style={{ color: "#0F172A" }}
                    >
                      {content.headline}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                      {content.body}
                    </p>
                  </div>

                  {/* Feature list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center"
                          style={{ background: `${content.accent}15` }}
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5"
                            style={{ color: content.accent }}
                          />
                        </span>
                        <span className="text-xs leading-relaxed" style={{ color: "#334155" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <div className="pt-1">
                    <Link
                      href={content.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: content.accent }}
                    >
                      {content.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
