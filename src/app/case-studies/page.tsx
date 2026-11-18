"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import caseStudiesData from "@/data/case-studies.json";
import { Search, ArrowRight, Sparkles, TrendingUp, Filter } from "lucide-react";

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tabs = [
    { id: "all", label: "All Case Studies" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "web", label: "Web Engineering" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "power-bi", label: "Power BI & Data" },
    { id: "salesforce", label: "Salesforce Practice" },
  ];

  const filteredStudies = caseStudiesData.filter((cs: any) => {
    const matchesTab = activeTab === "all" || cs.tab === activeTab;
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.heroDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Production Outcomes
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Enterprise <span className="text-[#FF6B00]">Case Studies</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Explore 37 verified production initiatives across North America, Europe, and India. Real engineering challenges, architectural solutions, and measurable business outcomes.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search case studies by domain, tech, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 text-sm outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Tabs & Grid */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Studies Grid */}
          {filteredStudies.length === 0 ? (
            <div className="p-16 text-center text-slate-500 rounded-3xl border border-slate-200">
              No case studies found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((cs: any) => {
                const imageSrc = cs.image.startsWith("/") ? cs.image : `/${cs.image}`;
                return (
                  <Link
                    key={cs.id}
                    href={`/case-studies/${cs.id}`}
                    className="group rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
                  >
                    <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={cs.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback if image path differs
                          (e.target as any).src = "/images/resource/case-study-fitmindai.png";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-mono font-medium">
                          {cs.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors font-display line-clamp-2">
                          {cs.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                          {cs.heroDesc}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100">
                        {/* KPI highlights */}
                        {cs.kpis && cs.kpis.length > 0 && (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {cs.kpis.slice(0, 2).map((kpi: any, kIdx: number) => (
                              <div key={kIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-sm font-bold font-mono text-[#FF6B00] block">
                                  {kpi.val}
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium line-clamp-1">
                                  {kpi.lbl}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between text-xs font-semibold text-[#FF6B00]">
                          <span>Read Full Architecture</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
