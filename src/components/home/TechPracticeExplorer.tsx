"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Smartphone, BarChart3, Cloud, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function TechPracticeExplorer() {
  const practices = [
    {
      id: "ai",
      title: "AI / ML Practice",
      icon: <Cpu className="h-4 w-4" />,
      description: "Autonomous agents, deep learning models, computer vision & semantic search engines.",
      link: "/services/ai-ml-development",
      technologies: [
        { name: "Python", category: "Core Language" },
        { name: "LangChain", category: "LLM Orchestration" },
        { name: "LlamaIndex", category: "RAG Retrieval" },
        { name: "PyTorch & TensorFlow", category: "Deep Learning" },
        { name: "Biometric Recognition", category: "Computer Vision" },
        { name: "Sentiment Analysis", category: "NLP Processing" },
        { name: "Whisper & FastSpeech", category: "Voice AI" },
        { name: "Hugging Face Models", category: "Foundation Models" },
      ],
    },
    {
      id: "web",
      title: "Web Engineering",
      icon: <Code className="h-4 w-4" />,
      description: "Enterprise web platforms built for speed, multi-tenant scale, and 99.9% availability.",
      link: "/services/web-development",
      technologies: [
        { name: "React.js", category: "Frontend Core" },
        { name: "Next.js (App Router)", category: "Full-Stack Framework" },
        { name: "Node.js & Express", category: "High-Concurrency Backend" },
        { name: "NestJS", category: "Enterprise TypeScript" },
        { name: "Java & Spring Boot", category: "Microservices" },
        { name: "Progressive Web Apps (PWA)", category: "Offline Capabilities" },
        { name: "AWS Cloud & Lambda", category: "Cloud Infrastructure" },
        { name: "Google Cloud Platform", category: "Scalable Compute" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone className="h-4 w-4" />,
      description: "Native and cross-platform mobile apps delivering smooth 60fps user experiences.",
      link: "/services/mobile-development",
      technologies: [
        { name: "React Native", category: "Cross-Platform" },
        { name: "Flutter", category: "Multi-Platform Dart" },
        { name: "iOS (Swift / SwiftUI)", category: "Apple Native" },
        { name: "Android (Kotlin)", category: "Google Native" },
        { name: "watchOS & HealthKit", category: "Wearable Tech" },
        { name: "tvOS Apps", category: "Smart TV Platforms" },
        { name: "BLE & IoT Hardware Sync", category: "Device Telemetry" },
        { name: "Firebase Backend", category: "Real-Time Sync" },
      ],
    },
    {
      id: "bi",
      title: "Data Visualization & BI",
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Interactive analytics dashboards, multi-ERP consolidation & cloud BI migrations.",
      link: "/services/data-visualization",
      technologies: [
        { name: "Microsoft Power BI", category: "Executive Dashboards" },
        { name: "Power Automate", category: "Workflow Automation" },
        { name: "DAX & Data Modeling", category: "Analytical Calculations" },
        { name: "Tableau Cloud Migration", category: "Cloud BI Transition" },
        { name: "Amazon QuickSight", category: "Embedded Cloud BI" },
        { name: "Multi-ERP Consolidation", category: "ETL Pipelines" },
        { name: "Real-Time Telemetry Feeds", category: "Live Analytics" },
        { name: "Governance & Security", category: "Role-Based Access" },
      ],
    },
    {
      id: "salesforce",
      title: "Salesforce Cloud Ecosystem",
      icon: <Cloud className="h-4 w-4" />,
      description: "Custom Apex, Lightning Web Components, CPQ rules & seamless enterprise CRM.",
      link: "/services/salesforce-development",
      technologies: [
        { name: "Sales Cloud", category: "Pipeline Automation" },
        { name: "Service Cloud", category: "Omnichannel Support" },
        { name: "Experience Cloud", category: "Partner & Client Portals" },
        { name: "Field Service Lightning", category: "Mobile Dispatch" },
        { name: "Tableau CRM", category: "Embedded Insights" },
        { name: "Salesforce CPQ", category: "Configure Price Quote" },
        { name: "Conga CPQ & Contracts", category: "Document Automation" },
        { name: "Custom LWC & Apex", category: "Custom Architecture" },
      ],
    },
  ];

  const [activePracticeId, setActivePracticeId] = useState(practices[0].id);
  const activePractice = practices.find((p) => p.id === activePracticeId) || practices[0];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F0F7FF] border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-gradient-to-bl from-[#06B6D4]/10 via-[#6366F1]/5 to-transparent blur-[85px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-gradient-to-tr from-[#FF6B00]/8 to-transparent blur-[75px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-semibold text-[#06B6D4]">
            <Layers className="h-3.5 w-3.5" />
            <span>Technologies @ QTech</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Enterprise Technology Stacks
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore the specialized programming languages, frameworks, and cloud systems our senior engineers leverage across production deployments.
          </p>
        </div>

        {/* Practice Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {practices.map((p) => {
            const isSelected = p.id === activePracticeId;
            return (
              <button
                key={p.id}
                onClick={() => setActivePracticeId(p.id)}
                className={cn(
                  "flex items-center gap-2 p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                  isSelected
                    ? "bg-slate-900 border-slate-900 text-white shadow-md"
                    : "bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                )}
              >
                <span className={cn(isSelected ? "text-[#FF6B00]" : "text-slate-400")}>
                  {p.icon}
                </span>
                <span className="text-xs font-semibold">{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Grid Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {activePractice.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {activePractice.description}
              </p>
            </div>
            <Link
              href={activePractice.link}
              className="text-xs font-semibold text-[#FF6B00] hover:text-[#FF7A1A] inline-flex items-center gap-1.5 shrink-0"
            >
              View Full Practice Details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activePractice.technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl border border-slate-200/70 bg-slate-50/70 hover:border-slate-300 hover:bg-white transition-all shadow-sm"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  {tech.category}
                </span>
                <span className="text-sm font-bold text-slate-900 mt-1 block">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
