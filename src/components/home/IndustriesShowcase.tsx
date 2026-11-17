"use client";

import React from "react";
import Link from "next/link";
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Trophy,
  Film,
  Users2,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface Industry {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  compliance: string;
  impact: string;
  features: string[];
  href: string;
  accent: string;
  large?: boolean;
}

export function IndustriesShowcase() {
  const industries: Industry[] = [
    {
      id: "healthcare",
      title: "Healthcare",
      icon: <HeartPulse className="h-6 w-6" />,
      tagline: "HIPAA-Compliant Medical Software & Telemedicine",
      description:
        "Streamlining clinical workflows, EHR/EMR patient record systems, intelligent diagnostics, and secure doctor-patient teleconsultation platforms.",
      compliance: "HIPAA, HL7 & FHIR Standards",
      impact: "40% reduction in patient intake latency",
      features: [
        "Encrypted Telehealth Consultation",
        "EHR/EMR System Interoperability",
        "AI Diagnostic Image Segmentation",
        "Automated Patient Billing Portals",
      ],
      href: "/industries/healthcare",
      accent: "#FF6B00",
      large: true,
    },
    {
      id: "finance",
      title: "FinTech & Banking",
      icon: <Landmark className="h-6 w-6" />,
      tagline: "High-Security Payment Rails & Digital Banking Portals",
      description:
        "Engineering PCI-DSS compliant financial platforms, automated payment gateways, fraud detection algorithms, and real-time ledger synchronization.",
      compliance: "PCI-DSS Level 1 & SOC 2 Ready",
      impact: "99.999% ledger consistency across microservices",
      features: [
        "Real-Time Fraud Prevention Engine",
        "Multi-Currency Settlement Gateways",
        "Automated Compliance & KYC Audits",
        "Algorithmic Wealth Advisory Portals",
      ],
      href: "/industries/finance",
      accent: "#06B6D4",
      large: true,
    },
    {
      id: "education",
      title: "EdTech",
      icon: <GraduationCap className="h-5 w-5" />,
      tagline: "Interactive LMS & Virtual Learning Platforms",
      description:
        "Building engaging student learning management systems, video classrooms, and gamified educational experiences.",
      compliance: "FERPA & COPPA Compliant",
      impact: "250,000+ active students supported",
      features: [
        "Gamified Curriculum Engines",
        "Automated Assessment Evaluation",
        "Interactive Classroom Video Streams",
      ],
      href: "/industries/education",
      accent: "#3B82F6",
    },
    {
      id: "retail",
      title: "Retail & E-Commerce",
      icon: <ShoppingBag className="h-5 w-5" />,
      tagline: "Omnichannel Commerce & Real-Time Logistics",
      description:
        "Architecting unified retail experiences, real-time multi-warehouse inventory synchronization, and high-conversion checkouts.",
      compliance: "Sub-Second Cart Synchronization",
      impact: "+35% checkout conversion uplift",
      features: [
        "Headless Commerce Microservices",
        "Real-Time Multi-Store POS Integration",
        "AI Recommendation & Upsell Matrix",
      ],
      href: "/industries/retail",
      accent: "#10B981",
    },
    {
      id: "sports",
      title: "Sports Analytics",
      icon: <Trophy className="h-5 w-5" />,
      tagline: "Athlete Telemetry & Live Event Streaming",
      description:
        "Delivering real-time athlete biometrics telemetry, live match score broadcast engines, and fan engagement apps.",
      compliance: "<50ms Real-Time WebSocket Latency",
      impact: "12,000+ concurrent broadcast listeners",
      features: [
        "Live Sensor Telemetry Processing",
        "Low-Latency Game Match Feeds",
        "Athlete Performance Diagnostics",
      ],
      href: "/industries/sports",
      accent: "#8B5CF6",
    },
    {
      id: "entertainment",
      title: "Media & Entertainment",
      icon: <Film className="h-5 w-5" />,
      tagline: "High-Concurrency Video Streaming & DRM Security",
      description:
        "Developing scalable video-on-demand architectures, digital rights management, and live ticketing platforms.",
      compliance: "Global CDN Edge Distribution",
      impact: "Zero buffering across 1080p/4K streams",
      features: [
        "Multi-Bitrate Adaptive Streaming",
        "Widevine & FairPlay DRM Protection",
        "High-Concurrency Ticketing Engine",
      ],
      href: "/industries/entertainment",
      accent: "#EC4899",
    },
    {
      id: "hcm",
      title: "Human Capital Mgmt",
      icon: <Users2 className="h-5 w-5" />,
      tagline: "Enterprise HRMS & Payroll Automation",
      description:
        "Automating employee lifecycle tracking, multi-country tax and payroll processing, and attendance workflows.",
      compliance: "ISO 27001 & Data Encryption Standard",
      impact: "90% reduction in manual HR payroll effort",
      features: [
        "Multi-Tier Payroll & Tax Calculation",
        "Automated Shift Scheduling Engine",
        "Self-Service Employee Portals",
      ],
      href: "/industries/hcm",
      accent: "#F59E0B",
    },
    {
      id: "demand",
      title: "On-Demand Economy",
      icon: <Navigation className="h-5 w-5" />,
      tagline: "Dynamic Geolocation Dispatch & Marketplaces",
      description:
        "Engineering driver dispatch algorithms, real-time GPS fleet telemetry, and route optimization for multi-sided marketplaces.",
      compliance: "Real-Time Fleet Routing Engines",
      impact: "18% faster delivery dispatch velocity",
      features: [
        "Algorithmic Driver Matching",
        "Live Telemetry Map Geofencing",
        "Automated Fare Calculation & Splits",
      ],
      href: "/industries/on-demand",
      accent: "#14B8A6",
    },
  ];

  const largeIndustries = industries.filter((i) => i.large);
  const smallIndustries = industries.filter((i) => !i.large);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0F7FF 0%, #FAFCFF 50%, #FFFFFF 100%)" }}>
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #BAE6FD 0%, transparent 70%)" }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #DDD6FE 0%, transparent 70%)" }} />
      </div>

      <Container size="lg">
        {/* Section Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto mb-16">
          {/* <Badge variant="amber" size="sm">Industry-Tailored Excellence</Badge> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight" style={{ color: "#0F172A" }}>
            Built for the Industries<br />
            <span style={{ color: "#FF6B00" }}>That Matter</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#334155" }}>
            Our specialized engineering squads cater to diverse industries, empowering organizations to thrive with domain-specific compliance and technological rigor.
          </p>
        </div>

        {/* Bento/Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* LEFT: 2 Large Featured Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {largeIndustries.map((industry) => (
              <LargeIndustryCard key={industry.id} industry={industry} />
            ))}
          </div>

          {/* RIGHT: 2x2 Grid of Smaller Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {smallIndustries.map((industry) => (
              <SmallIndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LargeIndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={industry.href}
      className="group flex flex-col flex-1 rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.97)",
        border: `1.5px solid rgba(15,23,42,0.08)`,
        borderLeftWidth: "4px",
        borderLeftColor: industry.accent,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px ${industry.accent}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
      }}
    >
      {/* Ambient glow on hover */}
      <div
        className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
        style={{ background: industry.accent }}
      />

      <div className="relative z-10 flex flex-col h-full space-y-4">
        {/* Icon + Title Row */}
        <div className="flex items-start gap-3">
          <div
            className="p-2.5 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${industry.accent}15`, color: industry.accent }}
          >
            {industry.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight" style={{ color: "#0F172A" }}>
              {industry.title}
            </h3>
            <p className="text-xs mt-0.5 font-medium" style={{ color: "#64748B" }}>
              {industry.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
          {industry.description}
        </p>

        {/* Feature Chips */}
        <div className="flex flex-wrap gap-2">
          {industry.features.map((feat) => (
            <span
              key={feat}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ background: `${industry.accent}12`, color: industry.accent }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Compliance Badge */}
        <div className="flex items-center gap-2 text-xs" style={{ color: "#334155" }}>
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" style={{ color: "#10B981" }} />
          <span>{industry.compliance}</span>
        </div>

        {/* Impact Metric + Link Row */}
        <div className="flex items-center justify-between pt-3 border-t mt-auto" style={{ borderColor: "rgba(15,23,42,0.07)" }}>
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 shrink-0" style={{ color: "#FF6B00" }} />
            <span className="text-xs font-semibold" style={{ color: "#92400E" }}>
              {industry.impact}
            </span>
          </div>
          <span
            className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: industry.accent }}
          >
            Explore <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function SmallIndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={industry.href}
      className="group flex flex-col rounded-2xl p-5 relative overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.97)",
        border: "1.5px solid rgba(15,23,42,0.08)",
        borderLeftWidth: "3px",
        borderLeftColor: industry.accent,
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 10px 32px rgba(0,0,0,0.11), 0 0 0 1px ${industry.accent}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: industry.accent }}
      />

      <div className="relative z-10 flex flex-col h-full space-y-3">
        {/* Icon + Name */}
        <div className="flex items-center gap-2.5">
          <div
            className="p-2 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${industry.accent}15`, color: industry.accent }}
          >
            {industry.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold" style={{ color: "#0F172A" }}>
              {industry.title}
            </h3>
            <p className="text-[11px] leading-tight" style={{ color: "#64748B" }}>
              {industry.tagline}
            </p>
          </div>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap gap-1.5">
          {industry.features.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{ background: `${industry.accent}12`, color: industry.accent }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Impact metric + link */}
        <div className="flex items-center justify-between pt-2 border-t mt-auto" style={{ borderColor: "rgba(15,23,42,0.07)" }}>
          <span className="text-[11px] font-semibold" style={{ color: "#92400E" }}>
            {industry.impact}
          </span>
          <span
            className="text-[11px] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all"
            style={{ color: industry.accent }}
          >
            Explore <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
