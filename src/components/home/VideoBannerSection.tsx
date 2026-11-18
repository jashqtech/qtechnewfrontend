"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

export function VideoBannerSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
        {/* Real Background Image: images/10.webp */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/10.webp"
            alt="Qrious Tech Team Overview"
            fill
            className="object-cover object-center filter brightness-[0.45] contrast-105 scale-105 transition-transform duration-700 hover:scale-100"
            sizes="100vw"
          />
          {/* Subtle multi-stop gradient overlay for elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 via-transparent to-[#6366F1]/20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Pulsing Play Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Play Qrious Tech video"
              className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 text-[#FF6B00] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {/* Outer pulsing ring */}
              <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-60 pointer-events-none" />
              <span className="absolute -inset-2 rounded-full border border-white/50 animate-pulse pointer-events-none" />

              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-md">
            <strong className="text-white font-extrabold">Qrious Tech Team LLP</strong> will get you
            on the move towards your goals.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Discover how our engineers, designers, and AI specialists collaborate with global
            enterprises to turn ambitious roadmaps into reality.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube-nocookie.com/embed/BRqfdyGFnvw?autoplay=1"
        title="Qrious Tech Video"
      />
    </>
  );
}
