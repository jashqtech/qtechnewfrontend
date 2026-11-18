import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import caseStudiesData from "@/data/case-studies.json";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Cpu, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs: any) => ({
    id: cs.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudiesData.find((cs: any) => cs.id === id);
  if (!study) return { title: "Case Study Not Found | Qrious Tech" };

  return {
    title: `${study.title} | Case Study | Qrious Tech`,
    description: study.heroDesc,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { id } = await params;
  const study = caseStudiesData.find((cs: any) => cs.id === id);

  if (!study) {
    notFound();
  }

  const imageSrc = study.image.startsWith("/") ? study.image : `/${study.image}`;

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Breadcrumb Header */}
      <section className="py-8 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#FF6B00] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-amber-50 text-[#FF6B00] border border-amber-200 text-xs font-mono font-medium">
              {study.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-display leading-tight">
              {study.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed pt-2">
              {study.heroDesc}
            </p>
          </div>

          {/* Main Visual */}
          <div className="mt-10 relative aspect-[16/9] w-full max-w-5xl rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
            <Image
              src={imageSrc}
              alt={study.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Key Metrics / KPIs Bar */}
          {study.kpis && study.kpis.length > 0 && (
            <div className="mt-10 max-w-5xl grid grid-cols-2 sm:grid-cols-3 gap-4">
              {study.kpis.map((kpi: any, idx: number) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-3xl sm:text-4xl font-bold font-mono text-[#FF6B00] block mb-1">
                    {kpi.val}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    {kpi.lbl}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge, Approach & Results Narrative */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/60 border border-slate-200/70">
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-4">
                The Technical Challenge
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {study.challengeText}
              </p>
            </div>

            {/* Our Approach */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-4">
                Engineering Approach & Architecture
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {study.approachText}
              </p>
            </div>

            {/* Measurable Results */}
            <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/40 border border-amber-200/80">
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-4">
                Production Outcomes & Results
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {study.resultsText}
              </p>
            </div>
          </div>

          {/* Highlights / Overview if available */}
          {study.overview?.highlights && study.overview.highlights.length > 0 && (
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white">
              <h3 className="text-xl font-bold font-display mb-6">Key Engineering Highlights</h3>
              <div className="space-y-4">
                {study.overview.highlights.map((h: { title: string; desc: string; icon?: string }, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">{h.title}</strong>
                      {h.desc && <p className="text-slate-300 text-xs mt-0.5">{h.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-3">
              Facing a similar engineering challenge?
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm">
              Our solutions architects can review your codebase and design a tailored sprint roadmap.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Speak With Our Architects <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
