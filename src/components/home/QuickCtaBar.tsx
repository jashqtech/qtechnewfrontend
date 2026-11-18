"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function QuickCtaBar() {
  const scrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("appointment");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-12 md:py-14 bg-gradient-to-r from-slate-900 via-[#1e1b4b] to-slate-900 text-white overflow-hidden shadow-inner">
      {/* Dynamic ambient lights */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF6B00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Are you in a need of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8C38]">
                developer?
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Proven IT Outsourcing <strong className="text-white font-semibold">excellence across industries.</strong>
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#appointment"
              onClick={scrollToAppointment}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF5A36] hover:from-[#FF5A36] hover:to-[#FF6B00] shadow-lg shadow-[#FF6B00]/30 hover:shadow-xl hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
