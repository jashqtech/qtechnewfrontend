import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import caseStudiesData from "@/data/case-studies.json";
import { CaseStudy } from "@/types";

export function FeaturedCaseStudies() {
  // Select 3 premier case studies across AI, BI, and Mobile
  const featuredIds = ["fitmindai", "vitco-foods", "movemint"];
  const allCaseStudies = caseStudiesData as unknown as CaseStudy[];
  const featured = allCaseStudies
    .filter((cs) => featuredIds.includes(cs.id))
    .slice(0, 3);

  // Fallback if specific IDs differ
  const displayStudies = featured.length >= 3 ? featured : allCaseStudies.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/10 bg-[#090A0F]">
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="amber" size="sm">
              Proven Business Impact
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-display tracking-tight">
              Featured Enterprise Case Studies
            </h2>
            <p className="text-base text-[#94A3B8]">
              Discover how our engineering squads solved complex architectural bottlenecks, automated enterprise workflows, and delivered measurable business results.
            </p>
          </div>
          <Button href="/case-studies" variant="secondary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Explore All 37 Case Studies
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayStudies.map((cs) => (
            <article
              key={cs.id}
              className="rounded-2xl border border-white/10 bg-[#11131B] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div className="space-y-5">
                {/* Meta Header */}
                <div className="flex items-center justify-between">
                  <Badge variant="neutral" size="sm">
                    {cs.tab || cs.category}
                  </Badge>
                  <span className="text-xs font-mono text-[#64748B]">Case Study</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#FF6B00] transition-colors leading-snug">
                  {cs.title}
                </h3>

                {/* Narrative Summary */}
                <p className="text-xs text-[#94A3B8] line-clamp-3 leading-relaxed">
                  {cs.heroDesc || cs.challengeText}
                </p>

                {/* KPI Highlights */}
                {cs.kpis && cs.kpis.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    {cs.kpis.slice(0, 2).map((kpi, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="text-[10px] font-mono uppercase text-[#64748B] block truncate">
                          {kpi.label}
                        </span>
                        <span className="text-base font-bold font-mono text-[#10B981] mt-0.5 block">
                          {kpi.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <Link
                  href={`/case-studies/${cs.id}`}
                  className="text-xs font-semibold text-[#FF6B00] group-hover:text-[#FF7A1A] inline-flex items-center gap-1.5 transition-colors"
                >
                  Read Full Architecture Breakdown <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
