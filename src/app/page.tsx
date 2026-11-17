import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Smartphone,
  BarChart3,
  Cloud,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

// Modular Section Components
import { Hero } from "@/components/home/Hero";
import { IndustriesShowcase } from "@/components/home/IndustriesShowcase";
import { TechPracticeExplorer } from "@/components/home/TechPracticeExplorer";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { TeamMosaic } from "@/components/home/TeamMosaic";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export default function Home() {
  const metrics = [
    { value: "37+", label: "Enterprise Case Studies", detail: "Across AI, Web & Cloud" },
    { value: "88+", label: "Full-Time Engineers", detail: "Senior Specialists" },
    { value: "<180ms", label: "Model Latency Target", detail: "High-Throughput Inferences" },
    { value: "99.9%", label: "Production SLA", detail: "Enterprise Reliability" },
  ];

  const capabilities = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-[#FF6B00]" />,
      title: "AI & Machine Learning",
      description:
        "Custom machine learning models, generative AI integrations, biometrics, and autonomous workflow automation agents.",
      href: "/services/ai-ml-development",
      accent: "#FF6B00",
      pill: "High Impact",
    },
    {
      icon: <Code2 className="h-6 w-6 text-[#06B6D4]" />,
      title: "Full-Stack Web Engineering",
      description:
        "Scalable, resilient web applications built with React, Next.js, Node.js, NestJS, and enterprise cloud microservices.",
      href: "/services/web-development",
      accent: "#06B6D4",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#3B82F6]" />,
      title: "Cross-Platform Mobile Apps",
      description:
        "Native iOS, Android, and cross-platform React Native & Flutter applications engineered for millions of users.",
      href: "/services/mobile-development",
      accent: "#3B82F6",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#10B981]" />,
      title: "Data Visualization & Power BI",
      description:
        "Real-time analytical dashboards, multi-ERP data consolidation, and seamless cloud migration from Tableau or QuickSight.",
      href: "/services/data-visualization",
      accent: "#10B981",
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Salesforce Cloud Ecosystem",
      description:
        "End-to-end Sales Cloud, Service Cloud, Experience Cloud, Field Service Lightning, and complex CPQ workflow delivery.",
      href: "/services/salesforce-development",
      accent: "#8B5CF6",
    },
    {
      icon: <Layers className="h-6 w-6 text-[#EC4899]" />,
      title: "Dedicated Engineering Squads",
      description:
        "Seamlessly augment your engineering capacity with embedded senior talent, tech leads, and managed sprint teams.",
      href: "/how-we-work/dedicated-teams",
      accent: "#EC4899",
      pill: "Team Scaling",
    },
  ];

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Metrics KPI Ticker */}
      <section className="relative z-10 border-y border-white/10 bg-[#11131B]/60 backdrop-blur-md py-12">
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metrics.map((m, idx) => (
              <div
                key={m.label}
                className={`flex flex-col items-center text-center ${
                  idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""
                }`}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-[#F8FAFC] tracking-tight">
                  {m.value}
                </span>
                <span className="text-sm font-semibold text-[#FF6B00] mt-1 font-sans">
                  {m.label}
                </span>
                <span className="text-xs text-[#64748B] mt-0.5 font-sans">
                  {m.detail}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Core Capabilities Bento Grid (What We Do) */}
      <section className="relative z-10 py-24 sm:py-32">
        <Container size="lg">
          <div className="space-y-4 max-w-3xl mb-16">
            <Badge variant="cyan" size="sm">
              Core Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-display tracking-tight">
              Enterprise Engineering Practices
            </h2>
            <p className="text-base text-[#94A3B8]">
              From autonomous agentic AI and computer vision pipelines to high-concurrency web backends and cloud BI dashboards, we cover the full software lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <SpotlightCard
                key={c.title}
                spotlightColor={`${c.accent}14`}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform duration-200">
                      {c.icon}
                    </div>
                    {c.pill && (
                      <Badge variant="neutral" size="sm">
                        {c.pill}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B00] hover:text-[#FF7A1A] transition-colors"
                  >
                    Explore Practice <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Industry Vertical Solutions (To Whom We Provide Solutions) */}
      <IndustriesShowcase />

      {/* 5. Technologies @ QTech Explorer */}
      <TechPracticeExplorer />

      {/* 6. Collaboration Models Showcase */}
      <section className="relative z-10 py-24 sm:py-32 border-t border-white/10 bg-[#11131B]/40">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="amber" size="sm">
                Collaboration Models
              </Badge>
              <h2 className="text-3xl font-bold text-[#F8FAFC] font-display tracking-tight">
                How We Partner With You
              </h2>
              <p className="text-sm text-[#94A3B8]">
                Whether you need senior talent to augment your internal engineering team, a full-cycle SaaS development partner, or AI workflow modernization.
              </p>
            </div>
            <Button href="/how-we-work" variant="outline" size="sm">
              View All Models &rarr;
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#11131B] p-8 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#FF6B00] uppercase">
                  Model 01
                </span>
                <h3 className="text-xl font-bold text-[#F8FAFC] mt-2 mb-3">
                  Dedicated Development Teams
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  Full-time embedded senior software engineers, tech leads, and QA specialists integrated seamlessly into your daily agile workflow.
                </p>
              </div>
              <Link
                href="/how-we-work/dedicated-teams"
                className="text-xs font-semibold text-[#FF6B00] inline-flex items-center gap-1.5"
              >
                Explore Dedicated Squads <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#11131B] p-8 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#06B6D4] uppercase">
                  Model 02
                </span>
                <h3 className="text-xl font-bold text-[#F8FAFC] mt-2 mb-3">
                  SaaS Development Partner
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  We take your software concept from architecture and prototyping through to scalable multi-tenant MVP launch and post-release support.
                </p>
              </div>
              <Link
                href="/how-we-work/saas-partner"
                className="text-xs font-semibold text-[#06B6D4] inline-flex items-center gap-1.5"
              >
                Explore SaaS Acceleration <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#11131B] p-8 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#3B82F6] uppercase">
                  Model 03
                </span>
                <h3 className="text-xl font-bold text-[#F8FAFC] mt-2 mb-3">
                  AI Modernization Partner
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  Transform legacy enterprise applications by infusing autonomous AI agents, semantic retrieval (RAG), and intelligent automation.
                </p>
              </div>
              <Link
                href="/how-we-work/ai-modernization"
                className="text-xs font-semibold text-[#3B82F6] inline-flex items-center gap-1.5"
              >
                Explore AI Modernization <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Featured Case Studies */}
      <FeaturedCaseStudies />

      {/* 8. Verified Testimonials */}
      <TestimonialSection />

      {/* 9. 88-Member Team Photo Mosaic */}
      <TeamMosaic />

      {/* 10. Multi-Purpose Contact & Inquiry Section */}
      <HomeContactSection />
    </div>
  );
}
