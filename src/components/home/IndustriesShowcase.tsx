"use client";

import React, { useState } from "react";
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
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function IndustriesShowcase() {
  const industries = [
    {
      id: "healthcare",
      title: "Healthcare",
      icon: <HeartPulse className="h-5 w-5" />,
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
    },
    {
      id: "finance",
      title: "FinTech & Banking",
      icon: <Landmark className="h-5 w-5" />,
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
    },
    {
      id: "education",
      title: "EdTech",
      icon: <GraduationCap className="h-5 w-5" />,
      tagline: "Interactive LMS & Virtual Learning Platforms",
      description:
        "Building engaging student learning management systems, video classrooms, automated grading pipelines, and gamified educational experiences.",
      compliance: "FERPA & COPPA Compliant",
      impact: "250,000+ active students supported",
      features: [
        "Gamified Curriculum Engines",
        "Automated Assessment Evaluation",
        "Interactive Classroom Video Streams",
        "Institutional Progress Analytics",
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
        "Architecting unified retail experiences, real-time multi-warehouse inventory synchronization, custom POS interfaces, and high-conversion checkouts.",
      compliance: "Sub-Second Cart Synchronization",
      impact: "+35% uplift in checkout conversion velocity",
      features: [
        "Headless Commerce Microservices",
        "Real-Time Multi-Store POS Integration",
        "AI Recommendation & Upsell Matrix",
        "Automated Inventory Reorder Workflows",
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
        "Delivering real-time athlete biometrics telemetry, live match score broadcast engines, stadium fan engagement, and fantasy league portals.",
      compliance: "<50ms Real-Time WebSocket Latency",
      impact: "12,000+ concurrent broadcast listeners",
      features: [
        "Live Sensor Telemetry Processing",
        "Low-Latency Game Match Feeds",
        "Athlete Performance Diagnostics",
        "Fan Interaction & Community Apps",
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
        "Developing scalable video-on-demand architectures, digital rights management (DRM), social interactive feeds, and live ticketing platforms.",
      compliance: "Global CDN Edge Distribution",
      impact: "Zero buffering across 1080p/4K streams",
      features: [
        "Multi-Bitrate Adaptive Streaming",
        "Widevine & FairPlay DRM Protection",
        "High-Concurrency Ticketing Engine",
        "Real-Time Audience Chat Feeds",
      ],
      href: "/industries/entertainment",
      accent: "#EC4899",
    },
    {
      id: "hcm",
      title: "Human Capital Management",
      icon: <Users2 className="h-5 w-5" />,
      tagline: "Enterprise HRMS & Payroll Automation",
      description:
        "Automating employee lifecycle tracking, multi-country tax and payroll processing, performance appraisal cycles, and attendance workflows.",
      compliance: "ISO 27001 & Data Encryption Standard",
      impact: "90% reduction in manual HR payroll effort",
      features: [
        "Multi-Tier Payroll & Tax Calculation",
        "Automated Shift Scheduling Engine",
        "Self-Service Employee Portals",
        "Talent Sourcing & Applicant Pipeline",
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
        "Engineering driver dispatch algorithms, real-time GPS fleet telemetry, multi-sided marketplace billing, and route optimization.",
      compliance: "Real-Time Fleet Routing Engines",
      impact: "18% faster delivery dispatch velocity",
      features: [
        "Algorithmic Driver Matching",
        "Live Telemetry Map Geofencing",
        "Automated Fare Calculation & Splits",
        "Multi-Sided Rating & Dispute Systems",
      ],
      href: "/industries/on-demand",
      accent: "#14B8A6",
    },
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  const currentIndustry = industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/10 bg-[#090A0F]">
      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <Badge variant="amber" size="sm">
            Industry-Tailored Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-display tracking-tight">
            To Whom We Provide Solutions
          </h2>
          <p className="text-base text-[#94A3B8]">
            At Qrious Tech Team LLP, our specialized engineering squads cater to diverse industries, empowering organizations to thrive with domain-specific compliance and technological rigor.
          </p>
        </div>

        {/* Tab Buttons (Horizontal Scroll on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
          {industries.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all shrink-0 cursor-pointer",
                  isActive
                    ? "bg-[#171B26] text-[#F8FAFC] border border-white/20 shadow-sm"
                    : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]"
                )}
              >
                <span className={cn(isActive ? "text-[#FF6B00]" : "opacity-60")}>
                  {ind.icon}
                </span>
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Panel */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#11131B] p-8 lg:p-12 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: currentIndustry.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-[#FF6B00] uppercase tracking-wider">
                  {currentIndustry.title} Domain Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] font-display">
                  {currentIndustry.tagline}
                </h3>
              </div>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                {currentIndustry.description}
              </p>

              {/* Compliance & Impact Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-xs text-[#F8FAFC]">
                  <ShieldCheck className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>{currentIndustry.compliance}</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-xs text-[#F8FAFC]">
                  <Zap className="h-4 w-4 text-[#FF6B00] shrink-0" />
                  <span>{currentIndustry.impact}</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={currentIndustry.href}
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore {currentIndustry.title} Solutions
                </Button>
              </div>
            </div>

            {/* Right Capability Matrix Box */}
            <div className="lg:col-span-5 rounded-xl border border-white/10 bg-[#171B26] p-6 space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase text-[#94A3B8] tracking-wider">
                Key Technical Modules
              </h4>
              <ul className="space-y-3">
                {currentIndustry.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 text-sm text-[#F8FAFC] p-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FF6B00] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
