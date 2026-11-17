"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobOpening } from "@/types";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  ChevronDown,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Send,
  X,
  FileText
} from "lucide-react";

export default function CrewPage() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data = await res.json();
          setJobs(data);
        }
      } catch (err) {
        console.error("Failed to load jobs", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const benefits = [
    { title: "Competitive Salary & Merit Bonuses", desc: "Top-tier compensation packages with quarterly performance bonuses." },
    { title: "Flexible & Hybrid Work", desc: "Balance focused remote work with collaborative office days in Ahmedabad." },
    { title: "Sponsored Certifications", desc: "Full funding for AWS, GCP, and Salesforce professional certifications." },
    { title: "Comprehensive Health Cover", desc: "Family healthcare coverage, annual wellness checkups, and mental health support." },
    { title: "Cutting-Edge Tech Stack", desc: "Work with modern Next.js 15, FastAPI, LangGraph, and enterprise Salesforce." },
    { title: "Global Client Interaction", desc: "Direct engineering collaboration with technology leaders in the US and Europe." },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-4">
              Join Our Engineering Crew
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
              Build the Future of <span className="text-[#FF6B00]">Enterprise Tech</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              We are hiring ambitious full-stack engineers, AI researchers, and cloud architects. Join a high-trust, engineering-first culture that solves difficult technical challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Why Engineers Choose Qtech
            </h2>
            <p className="mt-2 text-slate-600">
              A workplace engineered for technical mastery, autonomy, and personal well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="h-9 w-9 rounded-xl bg-amber-50 text-[#FF6B00] flex items-center justify-center font-bold font-mono text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{b.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Openings Section */}
      <section id="openings" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-2">
                <Briefcase className="h-3.5 w-3.5" /> Current Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                Open Engineering Roles
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-2 md:mt-0 font-mono">
              Direct resume dispatch to:{" "}
              <a href="mailto:hr@qrioustech.in" className="text-[#FF6B00] underline">
                hr@qrioustech.in
              </a>
            </p>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-500 font-mono">
              Loading active positions...
            </div>
          ) : jobs.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 text-slate-600">
              No active openings at the moment. Please send your speculative CV to{" "}
              <strong className="text-slate-900">hr@qrioustech.in</strong>.
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, idx) => {
                const isExpanded = expandedIndex === idx;
                const details = job.opening_details_field || {};

                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <div
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-lg font-bold text-slate-900 font-display">
                            {job.name_of_opening}
                          </h3>
                          {details.contract && (
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
                              {details.contract}
                            </span>
                          )}
                          {details.no_of_openings && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#FF6B00] border border-amber-200 text-xs font-mono font-medium">
                              {details.no_of_openings} Openings
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          {details.expirence && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-slate-400" /> {details.expirence} Years Exp
                            </span>
                          )}
                          {details.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-slate-400" /> {details.location}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedJob(job);
                          }}
                          variant="primary"
                          size="sm"
                          className="bg-[#FF6B00] hover:bg-[#FF7A1A]"
                        >
                          Apply Now
                        </Button>
                        <ChevronDown
                          className={`h-5 w-5 text-slate-400 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40">
                        <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 mb-3">
                          Role Responsibilities & Key Requirements
                        </h4>
                        <ul className="space-y-2.5">
                          {job.description.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <CheckCircle2 className="h-4 w-4 text-[#FF6B00] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            Apply directly or email your portfolio to{" "}
                            <strong className="text-slate-800">{job.to_email || "hr@qrioustech.in"}</strong>
                          </span>
                          <Button
                            onClick={() => setSelectedJob(job)}
                            variant="primary"
                            size="sm"
                          >
                            Apply For This Role <ArrowRight className="h-3.5 w-3.5 ml-1" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <Badge variant="amber" className="mb-2">
              Job Application
            </Badge>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {selectedJob.name_of_opening}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Send your CV directly to our talent acquisition team.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700">
                <p className="mb-2">
                  To apply for this position, please email your resume and LinkedIn profile to:
                </p>
                <div className="font-mono font-semibold text-[#FF6B00] text-base select-all">
                  {selectedJob.to_email || "hr@qrioustech.in"}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Subject line: <span className="font-semibold text-slate-800">Application: {selectedJob.name_of_opening}</span>
                </div>
              </div>

              <a
                href={`mailto:${selectedJob.to_email || "hr@qrioustech.in"}?subject=${encodeURIComponent(
                  `Application: ${selectedJob.name_of_opening}`
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B00] text-white font-semibold hover:bg-[#FF7A1A] transition-colors shadow-md text-sm"
              >
                <Send className="h-4 w-4" /> Open Email Client
              </a>

              <Button
                onClick={() => setSelectedJob(null)}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
