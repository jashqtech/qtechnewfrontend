import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  UserCheck,
  Code2,
  FileCheck,
  Rocket,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Working Methodology | Qrious Tech",
  description: "Explore Qrious Tech's 5-stage sprint methodology: requirement scoping, CV vetting, technical interview, flexible contract, and sprint kickoff.",
};

export default function WorkingMethodologyPage() {
  const steps = [
    {
      num: "01",
      title: "Share Your Business Requirements",
      desc: "Tell us about your product goals, technical stack, team composition needs, and timeline. Our solution architects analyze your requirements and define the optimal squad structure.",
      timeframe: "Day 1",
      icon: FileText,
      bullets: [
        "Architecture & tech stack assessment",
        "Seniority and skill matrix definition",
        "Sprint cadence & communication guidelines",
      ],
    },
    {
      num: "02",
      title: "Receive Hand-Picked Developer CVs",
      desc: "Within 48 hours, receive curated profiles of pre-vetted engineers matched directly with your tech stack, domain nuances, and timezone preferences.",
      timeframe: "Within 48 Hours",
      icon: UserCheck,
      bullets: [
        "Pre-screened technical proficiencies",
        "Verified past production project deliveries",
        "Direct portfolio and code repository access",
      ],
    },
    {
      num: "03",
      title: "Conduct Technical Interviews",
      desc: "Evaluate candidates through your own coding challenges, system design interviews, and culture assessments. You have final approval on every engineer joining your squad.",
      timeframe: "Days 3 – 5",
      icon: Code2,
      bullets: [
        "Direct 1-on-1 interviews with developers",
        "System architecture & problem-solving evaluation",
        "Risk-free trial period guarantee",
      ],
    },
    {
      num: "04",
      title: "Review & Sign Flexible Contract",
      desc: "Simple, transparent contractual agreements with 100% intellectual property assignment, mutual non-disclosure agreements (NDAs), and zero hidden clauses.",
      timeframe: "Day 6",
      icon: FileCheck,
      bullets: [
        "100% client IP and source code ownership",
        "Enterprise-grade NDA & data privacy",
        "Flexible scaling up or down with 30-day notice",
      ],
    },
    {
      num: "05",
      title: "Sprint Kickoff & Continuous Delivery",
      desc: "Your dedicated engineers seamlessly integrate into your Git repos, Slack channels, and Jira sprints. Daily standups and bi-weekly sprint demos ensure high velocity.",
      timeframe: "Sprint 1 (Day 7+)",
      icon: Rocket,
      bullets: [
        "Immediate onboarding into your CI/CD pipelines",
        "Daily standups, sprint planning & retrospectives",
        "Dedicated technical delivery manager support",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Disciplined Engineering Process
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Working <span className="text-[#FF6B00]">Methodology</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Acquire dedicated engineering talent and launch high-impact digital initiatives with our streamlined, 5-stage collaboration model. From requirement scoping to sprint kickoff in under 7 days.
          </p>
        </div>
      </section>

      {/* 5-Stage Roadmap */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <div className="h-14 w-14 rounded-2xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono font-bold text-[#FF6B00]">
                            STEP {s.num}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-medium">
                            {s.timeframe}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 font-display">
                          {s.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          {s.desc}
                        </p>
                        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {s.bullets.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 font-display">
            Our Delivery Guarantees
          </h2>
          <p className="mt-3 text-slate-600 mb-10">
            Engineered to remove friction and give you complete confidence in your extended development squad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <Zap className="h-6 w-6 text-[#FF6B00] mb-3" />
              <h4 className="font-bold text-slate-900 mb-1">48-Hour Talent Turnaround</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Receive vetted engineering profiles within 2 business days of sharing requirements.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <ShieldCheck className="h-6 w-6 text-[#FF6B00] mb-3" />
              <h4 className="font-bold text-slate-900 mb-1">100% IP Security</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Strict bilateral NDAs, secure Git controls, and complete intellectual property assignment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <Clock className="h-6 w-6 text-[#FF6B00] mb-3" />
              <h4 className="font-bold text-slate-900 mb-1">2-Week Trial Period</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Work risk-free during the initial two-week trial. If not satisfied, no questions asked.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="primary" size="lg">
              Initiate Your Project Sprint <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
