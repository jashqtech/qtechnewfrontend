"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, LayoutGrid, BarChart3, CheckSquare, Cloud, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function WhatWeDoSection() {
  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC] overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-b from-[#FF6B00]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Column 1: Header + Product Development */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
                What{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF5A36]">
                  we do ?
                </span>
              </h2>
              <h3 className="text-2xl font-medium text-slate-700 font-display">
                Solutions And <strong className="text-slate-900 font-bold">Focus Areas</strong>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                We engineer scalable digital systems, intelligent automation, and bespoke software
                designed to empower market leaders across high-stakes domains.
              </p>
            </div>

            {/* Service 1: Product Development */}
            <div className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-3">
                Product Development
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Crafting visionary products from concept to reality, our development team turns ideas
                into impactful solutions for market success.
              </p>
              <Link
                href="/working-methodology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Methodology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Product Architect + Power BI */}
          <div className="space-y-8">
            {/* Service 2: Product Architect */}
            <div className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center mb-6 group-hover:bg-[#6366F1] group-hover:text-white transition-colors">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-3">
                Product Architect
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Product architecture is the strategic design plan orchestrating the arrangement and
                interaction of components for optimal functionality and user experience.
              </p>
              <Link
                href="/working-methodology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] group-hover:translate-x-1 transition-transform"
              >
                <span>Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 3: Power BI */}
            <div className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center mb-6 group-hover:bg-[#06B6D4] group-hover:text-white transition-colors">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-3">
                Power BI & Data Visualization
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Unlock insights at a glance with Power BI. Transform your data into stunning
                visualizations for smarter decisions and actionable intelligence.
              </p>
              <Link
                href="/services/data-visualization"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] group-hover:translate-x-1 transition-transform"
              >
                <span>View BI Practice</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 3: Product Testing + Cloud Service */}
          <div className="space-y-8">
            {/* Service 4: Product Testing */}
            <div className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-3">
                Product Testing
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Ensure seamless functionality and optimal performance with our rigorous product
                testing, guaranteeing a flawless user experience for your IT solutions.
              </p>
              <Link
                href="/working-methodology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#10B981] group-hover:translate-x-1 transition-transform"
              >
                <span>Quality Assurance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 5: Cloud Service */}
            <div className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D946EF]/10 text-[#D946EF] flex items-center justify-center mb-6 group-hover:bg-[#D946EF] group-hover:text-white transition-colors">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-3">
                Cloud Service & Salesforce
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Elevate your business to new heights with our cutting-edge Cloud Services, delivering
                seamless scalability, security, and efficiency for your IT infrastructure.
              </p>
              <Link
                href="/services/salesforce-development"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D946EF] group-hover:translate-x-1 transition-transform"
              >
                <span>Cloud Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner from original */}
        <div className="mt-16 text-center pt-8 border-t border-slate-200">
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            We&apos;re ready to discover and unlock your potential.{" "}
            <strong className="text-slate-900">
              Get The <span className="text-[#FF6B00]">Solutions</span>
            </strong>{" "}
            or{" "}
            <Link href="/contact" className="text-[#FF6B00] underline font-semibold hover:text-[#FF5A36]">
              Call us Today!
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
