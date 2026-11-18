"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ItSolutionsBanner() {
  return (
    <section id="it-solutions" className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-r from-slate-900 via-[#1e1b4b] to-slate-900 text-white">
      {/* Stripe-inspired luminous gradient ribbon elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-bl from-[#FF6B00]/25 via-[#D946EF]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gradient-to-tr from-[#06B6D4]/20 via-[#6366F1]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
          Our IT Solutions will get you on move towards your destination{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C38] to-[#D946EF]">
            faster than rivals in a more reliably way!
          </span>
        </h2>

        <div>
          <Link
            href="/working-methodology"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF5A36] hover:from-[#FF5A36] hover:to-[#FF6B00] shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Proven IT Solutions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
