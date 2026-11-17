"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  Smartphone,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface MetricCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function MetricCounter({ end, suffix = "", duration = 1800 }: MetricCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function MetricsTrustBar() {
  const capabilities = [
    {
      title: "Autonomous AI Agents",
      desc: "Multi-agent LangChain & RAG pipelines with sub-second execution",
      icon: <Bot className="h-5 w-5 text-[#FF6B00]" />,
      badge: "LLMs & Automation",
      accent: "from-[#FF6B00]/15 to-[#FF5A36]/5",
      borderHover: "hover:border-[#FF6B00]/40",
      link: "/services/ai-ml-development",
    },
    {
      title: "Enterprise Cloud Platforms",
      desc: "Microservices, AWS/GCP architecture, multi-tenant SaaS scaling",
      icon: <Cloud className="h-5 w-5 text-[#06B6D4]" />,
      badge: "99.99% Availability",
      accent: "from-[#06B6D4]/15 to-[#3B82F6]/5",
      borderHover: "hover:border-[#06B6D4]/40",
      link: "/services/web-development",
    },
    {
      title: "Mobile App Engineering",
      desc: "High-performance React Native, Flutter, Swift & Kotlin mobile ecosystems",
      icon: <Smartphone className="h-5 w-5 text-[#6366F1]" />,
      badge: "60 FPS Native",
      accent: "from-[#6366F1]/15 to-[#D946EF]/5",
      borderHover: "hover:border-[#6366F1]/40",
      link: "/services/mobile-development",
    },
    {
      title: "Business Intelligence & BI",
      desc: "Power BI, Tableau & automated analytics pipelines for executive telemetry",
      icon: <BarChart3 className="h-5 w-5 text-[#D946EF]" />,
      badge: "Real-Time Telemetry",
      accent: "from-[#D946EF]/15 to-[#FF6B00]/5",
      borderHover: "hover:border-[#D946EF]/40",
      link: "/services/power-bi",
    },
    {
      title: "Salesforce & Multi-Cloud CRM",
      desc: "Sales, Service, Experience Cloud & CPQ enterprise integration",
      icon: <Layers className="h-5 w-5 text-[#10B981]" />,
      badge: "Certified Architects",
      accent: "from-[#10B981]/15 to-[#06B6D4]/5",
      borderHover: "hover:border-[#10B981]/40",
      link: "/services/salesforce",
    },
  ];

  const trustedSectors = [
    { label: "Healthcare & Life Sciences", code: "HIPAA Compliant" },
    { label: "FinTech & Digital Banking", code: "PCI-DSS Level 1" },
    { label: "EdTech & Learning Portals", code: "FERPA Ready" },
    { label: "Retail & Omnichannel", code: "Sub-Second Sync" },
    { label: "Sports & Athlete Telemetry", code: "<50ms WebSockets" },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#F1F5F9] via-[#FAF9F6] to-[#FFFFFF] border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-br from-[#FF6B00]/10 via-[#D946EF]/5 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-gradient-to-bl from-[#06B6D4]/10 via-[#6366F1]/5 to-transparent blur-[70px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-25 pointer-events-none" />

      <Container size="lg" className="relative z-10 space-y-16">
        {/* Top Header: Trust Narrative */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div className="space-y-3 max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-xs font-mono text-slate-700">
              <Sparkles className="h-3.5 w-3.5 text-[#FF6B00]" />
              <span>Section 02 &bull; Trust &amp; Capabilities</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900">
              Engineered for Enterprise Rigor.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#D946EF] to-[#6366F1]">
                Proven in Production.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every system we engineer is backed by hard production telemetry, audited enterprise security frameworks, and full-time in-house engineering squads.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow transition-all"
            >
              Explore Portfolio <ArrowRight className="h-4 w-4 text-[#FF6B00]" />
            </Link>
          </div>
        </div>

        {/* 4 Large Editorial Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B00]/10 rounded-bl-full transition-transform group-hover:scale-110 pointer-events-none" />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-slate-900 block">
              <MetricCounter end={500} suffix="+" />
            </span>
            <span className="text-sm font-semibold text-[#FF6B00] mt-2 block font-sans">
              Delivered Digital Projects
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Enterprise Web, Mobile &amp; Cloud platforms shipped to global markets.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#06B6D4]/10 rounded-bl-full transition-transform group-hover:scale-110 pointer-events-none" />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-slate-900 block">
              <MetricCounter end={200} suffix="+" />
            </span>
            <span className="text-sm font-semibold text-[#06B6D4] mt-2 block font-sans">
              Global Enterprise Clients
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Venture-backed scaleups &amp; Fortune 500 leaders across North America &amp; Europe.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366F1]/10 rounded-bl-full transition-transform group-hover:scale-110 pointer-events-none" />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-slate-900 block">
              <MetricCounter end={88} suffix="+" />
            </span>
            <span className="text-sm font-semibold text-[#6366F1] mt-2 block font-sans">
              Engineers in Residence
            </span>
            <p className="text-xs text-slate-500 mt-1">
              100% full-time, in-house software architects, AI researchers &amp; leads.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D946EF]/10 rounded-bl-full transition-transform group-hover:scale-110 pointer-events-none" />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-slate-900 block">
              <MetricCounter end={37} suffix="" />
            </span>
            <span className="text-sm font-semibold text-[#D946EF] mt-2 block font-sans">
              Documented Case Studies
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Verified business outcomes with complete architectural breakdowns.
            </p>
          </div>
        </div>

        {/* Practice Capabilities Showcase Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Core Engineering Capabilities
              </h3>
              <p className="text-xs text-slate-500">
                End-to-end full lifecycle architecture tailored for mission-critical software.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              5 Dedicated Practices
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.link}
                className={`group p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between ${cap.borderHover}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {cap.badge}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                    {cap.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#FF6B00] transition-colors">
                  <span>Learn Practice</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Verified Compliance & Sector Trust Strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200/70 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#10B981] shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block font-mono">
                Verified Compliance &amp; Security Standards
              </span>
              <span className="text-[11px] text-slate-500 block">
                SOC 2 Type II audit readiness &bull; End-to-end encryption &bull; Strict IP protection
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustedSectors.map((sector) => (
              <span
                key={sector.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                {sector.label}
                <span className="text-[10px] font-mono text-slate-400 pl-1 border-l border-slate-200">
                  {sector.code}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
