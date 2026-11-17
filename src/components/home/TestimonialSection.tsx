"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Stuart Rox",
      role: "Founder & Chief Executive Officer",
      company: "Healthcare & Digital Services Group",
      quote:
        "Partnering with Qrious Tech has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across healthcare compliance and HIPAA has been invaluable.",
      rating: 5,
      metric: "On-Time Milestone SLA: 100%",
    },
    {
      name: "Shota Oda",
      role: "Chief Executive Officer",
      company: "Cross-Border Enterprise SaaS",
      quote:
        "We were impressed by Qrious Tech's commitment to excellence. Their engineers integrated effortlessly with our internal processes, demonstrating exceptional problem-solving abilities and domain expertise. Their work in Mobile Apps and CRM implementations helped us scale rapidly.",
      rating: 5,
      metric: "Engineering Velocity: +45%",
    },
    {
      name: "Shin Paul",
      role: "Co-Founder & Managing Director",
      company: "Media Streaming & Sports Platform",
      quote:
        "The Qrious Tech team exceeded our expectations. Their proactive approach and deep technical knowledge in streaming, mobile platforms, and enterprise integrations ensured our project launched ahead of schedule with remarkable stability and zero production downtime.",
      rating: 5,
      metric: "Live Concurrency: 12,000+ Users",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-[#FAFAF9] border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF6B00]/8 via-[#D946EF]/5 to-[#06B6D4]/8 blur-[100px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono font-semibold text-[#FF6B00]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Verified Executive Endorsements</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Endorsed by Enterprise Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hear directly from founders and engineering executives who rely on Qrious Tech to architect, build, and scale their critical digital infrastructure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-slate-200/80 bg-white/95 p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-100 pointer-events-none group-hover:text-amber-50 transition-colors" />

              <div className="space-y-5 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FF6B00]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Narrative */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-semibold text-emerald-800">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#10B981]" />
                  <span>{t.metric}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5 relative z-10">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center font-bold text-sm text-[#FF6B00] shadow-sm shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
