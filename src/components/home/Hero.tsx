"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Play, ShieldCheck, Zap, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VideoModal } from "@/components/ui/VideoModal";

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToMoreDetails = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("more_details");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#F8FAFC]">
        {/* Stripe-inspired Multi-Stop Fluid Mesh Gradient Ribbon Background */}
        <div className="absolute top-0 right-0 w-full lg:w-[68%] h-[720px] pointer-events-none overflow-hidden select-none">
          {/* Deep atmospheric glow layers */}
          <div className="absolute top-[-10%] right-[-5%] w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#FF6B00]/22 via-[#D946EF]/18 to-transparent blur-[100px] animate-pulse-glow" />
          <div className="absolute top-[25%] right-[20%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#6366F1]/18 via-[#06B6D4]/18 to-transparent blur-[90px]" />

          {/* Dynamic 3D Ribbon Paths with multi-stop transitions */}
          <svg
            className="absolute top-0 right-0 w-full h-full opacity-80"
            viewBox="0 0 850 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#FF5A36" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#D946EF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="heroRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#D946EF" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="softLightHero" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Sweeping Ribbon 1 */}
            <path
              d="M 240, -40 C 420, 130 730, 170 860, 430 C 960, 630 630, 690 470, 730"
              stroke="url(#heroRibbon1)"
              strokeWidth="110"
              strokeLinecap="round"
              className="opacity-70 mix-blend-multiply"
            />

            {/* Counter-Curve Ribbon 2 */}
            <path
              d="M 170, 60 C 470, 90 660, 330 790, 560"
              stroke="url(#heroRibbon2)"
              strokeWidth="70"
              strokeLinecap="round"
              className="opacity-60 mix-blend-multiply"
            />

            {/* Precision Accent Contours */}
            <path
              d="M 270, 30 C 490, 150 670, 250 810, 490"
              stroke="url(#softLightHero)"
              strokeWidth="3"
              strokeDasharray="8 6"
              className="opacity-40"
            />
          </svg>

          {/* Ambient Subtle Grid Lines */}
          <div className="absolute inset-0 bg-dot-grid-light opacity-30" />
        </div>

        <Container size="lg" className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14 pt-4">
            {/* Left Content Column — Preserving Original Copy with High-End Styling */}
            <div className="flex-1 text-center lg:text-left space-y-7 max-w-2xl lg:max-w-none">
              {/* Original Subtitle badge */}
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-xs sm:text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span>
                  IT Solutions For Easy{" "}
                  <strong className="text-[#FF6B00] font-semibold">Integration</strong>
                </span>
              </div> */}

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-slate-900 font-display leading-[1.08]">
                Pioneering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF5A36] to-[#D946EF]">
                  Business Growth
                </span>{" "}
                with AI Innovation
              </h1>

              {/* Original Sub-copy */}
              <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building a relationship between IT companies & experts. Delivering scalable
                platforms, AI automation, and bespoke software systems designed for enterprise agility.
              </p>

              {/* CTA Action Buttons: More Details + Watch Now */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#more_details"
                  onClick={scrollToMoreDetails}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-[#FF6B00] to-[#FF5A36] hover:from-[#FF5A36] hover:to-[#FF6B00] shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#FF6B00]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>More Details</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-medium text-slate-800 bg-white/90 hover:bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 group cursor-pointer"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-200">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </span>
                  <span>Watch Now</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-bold font-mono text-slate-900">200+</div>
                  <div className="text-xs text-slate-500 font-medium">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-slate-900">500+</div>
                  <div className="text-xs text-slate-500 font-medium">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-slate-900">88+</div>
                  <div className="text-xs text-slate-500 font-medium">Team Members</div>
                </div>
              </div>
            </div>

            {/* Right Column — Real Artwork: ai_baner_v1.png with Art-Directed Lighting */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none relative flex justify-center items-center">
              {/* Soft ambient spotlight beneath image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/20 via-[#D946EF]/15 to-[#06B6D4]/15 rounded-3xl filter blur-3xl -z-10 transform scale-95" />

              <div className="relative w-full max-w-lg lg:max-w-xl transition-transform duration-500 hover:scale-[1.02]">
                {/* <Image
                  src="/images/ai_baner_v1.png"
                  alt="Pioneering Business Growth with AI Innovation"
                  width={680}
                  height={560}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                /> */}

                {/* Floating Badge 1: Bottom Left - AI Innovation */}
                <div className="absolute -bottom-3 -left-7 sm:bottom-4 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200/80 flex items-center gap-3 animate-fade-in z-20">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FF5A36] flex items-center justify-center text-white shadow-md shadow-[#FF6B00]/30">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">AI Innovation & Integration</div>
                    <div className="text-[11px] text-slate-500">Autonomous Workflows</div>
                  </div>
                </div>

                {/* Floating Badge 2: Top Right - Enterprise Verified */}
                <div className="hidden sm:flex absolute -top-3 -right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/80 items-center gap-3 animate-fade-in z-20">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#06B6D4] flex items-center justify-center text-white shadow-md shadow-[#6366F1]/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Enterprise Verified</div>
                    <div className="text-[11px] text-slate-500">100% IP & NDA Protected</div>
                  </div>
                </div>

                {/* Floating Badge 3: Top Left - Delivery SLA */}
                <div className="hidden md:flex absolute top-10 -left-6 lg:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/80 items-center gap-3 animate-fade-in z-20">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center text-white shadow-md shadow-[#10B981]/30">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">99.8% On-Time Delivery</div>
                    <div className="text-[11px] text-slate-500">500+ Shipped Releases</div>
                  </div>
                </div>

                {/* Floating Badge 4: Bottom Right - Dedicated Squads */}
                <div className="hidden sm:flex absolute bottom-12 -right-4 lg:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/80 items-center gap-3 animate-fade-in z-20">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D946EF] to-[#6366F1] flex items-center justify-center text-white shadow-md shadow-[#D946EF]/30">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Senior Dedicated Squads</div>
                    <div className="text-[11px] text-slate-500">88+ In-House Engineers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube-nocookie.com/embed/BRqfdyGFnvw?autoplay=1"
        title="Qrious Tech Team Video"
      />
    </>
  );
}
