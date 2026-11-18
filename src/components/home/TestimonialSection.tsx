"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Stuart Rox",
      initials: "SR",
      role: "Founder / CEO",
      company: "Healthcare & Digital Services Group",
      quote:
        "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
      rating: 5,
    },
    {
      name: "Lorel Parker",
      initials: "LP",
      role: "Managing Director",
      company: "Enterprise Cloud & Operations",
      quote:
        "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support.",
      rating: 5,
    },
    {
      name: "Shota Oda",
      initials: "SO",
      role: "Head of Engineering",
      company: "Cross-Border FinTech Platform",
      quote:
        "The agility and speed of Qrioustech engineers allowed us to launch two quarters ahead of schedule with zero architectural debt. Truly a premier technology partner who brings technical rigor and deep architecture ownership to every milestone.",
      rating: 5,
    },
    {
      name: "Shin Paul",
      initials: "SP",
      role: "VP Product",
      company: "Digital Media & Sports Streaming",
      quote:
        "Exceptional communication, domain knowledge, and engineering rigor. They don't just write code; they act as proactive product thinkers who optimize cost, performance, and user experience at scale.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-[#FAFAF9] border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF6B00]/8 via-[#D946EF]/5 to-[#06B6D4]/8 blur-[100px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF5A36]">
              Testimonials
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hear directly from founders and engineering executives who rely on Qrious Tech to
            architect, build, and scale their critical digital infrastructure.
          </p>
        </div>

        {/* Testimonials Grid — 2x2 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-slate-200/80 bg-white/95 p-8 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#FF6B00]/30 transition-all duration-300 relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-100 pointer-events-none group-hover:text-amber-100 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FF6B00]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Narrative Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4 relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#FF6B00]/15 to-[#FF5A36]/10 border border-[#FF6B00]/30 flex items-center justify-center font-bold text-sm text-[#FF6B00] shadow-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role} &bull; {t.company}
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
