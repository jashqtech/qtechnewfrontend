"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Search, HelpCircle, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

export default function FAQsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "How long has Qrious Tech been in business?",
      a: "Qrious Tech Team LLP has been proudly serving clients in the IT engineering industry since 2017. With over 8 years of specialized execution, we have delivered 37+ major production initiatives across web development, mobile apps, enterprise Salesforce, and autonomous AI workflows.",
      cat: "Company",
    },
    {
      q: "What qualifications and experience do your developers possess?",
      a: "Our squad consists of 88+ full-time engineers with an average of 4-7 years of production experience. All developers hold university degrees in computer science or engineering, and maintain professional certifications in AWS, GCP, Next.js, and Salesforce (PD1, PD2, Admin, Platform App Builder).",
      cat: "Engineering",
    },
    {
      q: "Can clients interview and request specific developers?",
      a: "Yes, absolutely. We provide full CVs and GitHub/portfolio references for candidates matched to your requirements. You conduct your own technical interviews and coding assessments before finalizing your team members.",
      cat: "Engagement",
    },
    {
      q: "What is your approach to agile project management?",
      a: "We work in 2-week agile sprints adhering to Scrum best practices. Clients receive direct access to engineers via Slack/Teams, daily async or live standups, weekly sprint demos, and real-time Jira / ClickUp burndown tracking.",
      cat: "Process",
    },
    {
      q: "What role does the client play in the development lifecycle?",
      a: "You retain full product ownership and backlog prioritization. Whether you provide a hands-on Product Owner or prefer our technical delivery leads to manage day-to-day execution, we adapt to your preferred governance cadence.",
      cat: "Process",
    },
    {
      q: "What level of support do you provide during and after deployment?",
      a: "Every engagement includes comprehensive post-launch SLA support, 24/7 critical issue monitoring, automated rollbacks, and bug triage. We also offer ongoing maintenance agreements for scaling architectures.",
      cat: "Support",
    },
    {
      q: "How do you address and resolve bugs or unexpected issues?",
      a: "All code passes through multi-tier automated test suites, CI/CD linters, and peer code reviews before staging. In production, bugs are classified by P1-P4 severities with guaranteed 1-hour P1 response times and hotfix deployments.",
      cat: "Support",
    },
    {
      q: "How quickly can you scale up or allocate additional engineers?",
      a: "Because we maintain an active bench of senior architects across our 5 primary practices, we can onboard additional vetted developers within 48 to 72 hours.",
      cat: "Engagement",
    },
    {
      q: "What measures do you take to protect intellectual property and data?",
      a: "All work is covered by enterprise-grade mutual NDAs. All source code, repositories, databases, and IP belong 100% to the client from day one. Our engineers operate on secure, monitored workstations with strict data protection compliance.",
      cat: "Security",
    },
    {
      q: "What is your contract termination policy?",
      a: "We provide complete contract flexibility with simple 30-day notice periods and no lock-in fees or penalties. We ensure complete handover of all repositories, documentation, and credentials during any transition.",
      cat: "Engagement",
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Badge variant="amber" className="mb-4">
            Help & Guidance
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Frequently Asked <span className="text-[#FF6B00]">Questions</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Clear answers on engagement terms, IP ownership, engineering standards, and onboarding timelines.
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions by topic (e.g. IP, contract, interview)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 text-sm outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center text-slate-500 rounded-2xl border border-slate-200">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or contact our team directly.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
                          {faq.cat}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform shrink-0 ${
                          isOpen ? "rotate-180 text-[#FF6B00]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick Contact Card */}
          <div className="mt-16 p-8 rounded-3xl bg-amber-50/60 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                Have a unique question about your project?
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Our solutions engineering team can review your tech requirements and answer specific architectural questions.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="md" className="shrink-0">
              Ask Our Team <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
