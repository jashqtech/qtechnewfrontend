"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Award, Shield, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function TeamMosaic() {
  const [showAll, setShowAll] = useState(false);
  // Generate array for 88 team photos
  const totalStaff = 88;
  const initialDisplayCount = 28;
  const staffArray = Array.from({ length: totalStaff }, (_, i) => i + 1);
  const displayedStaff = showAll ? staffArray : staffArray.slice(0, initialDisplayCount);

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/10 bg-[#090A0F]">
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="cyan" size="sm">
              Engineering Strength & Scale
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-display tracking-tight">
              Teamwork Is The Only Way We Work
            </h2>
            <p className="text-base text-[#94A3B8]">
              Over 88 full-time software engineers, AI architects, data specialists, and Salesforce consultants united under a single standard of engineering excellence.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `View All ${totalStaff} Engineers`}
            </Button>
            <Button href="/crew" variant="secondary" size="sm">
              Join Our Crew &rarr;
            </Button>
          </div>
        </div>

        {/* Headshots Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-14 gap-2.5 sm:gap-3">
          {displayedStaff.map((num) => (
            <div
              key={num}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#171B26] border border-white/10 hover:border-[#FF6B00]/60 transition-all duration-300 hover:scale-105 hover:z-20 shadow-md"
            >
              <Image
                src={`/images/staff-headshots/${num}.webp`}
                alt={`Qrious Tech Engineer #${num}`}
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 14vw, 7vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1">
                <span className="text-[9px] font-mono font-bold text-white truncate">
                  QTech #{num}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Stats */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#11131B] p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Users className="h-5 w-5 text-[#FF6B00]" />
            <div className="text-left">
              <span className="text-lg font-bold text-[#F8FAFC] block">88+ Engineers</span>
              <span className="text-xs text-[#94A3B8]">100% In-House Full-Time</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Award className="h-5 w-5 text-[#06B6D4]" />
            <div className="text-left">
              <span className="text-lg font-bold text-[#F8FAFC] block">4.9/5 Rating</span>
              <span className="text-xs text-[#94A3B8]">Verified Clutch & Upwork</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Shield className="h-5 w-5 text-[#10B981]" />
            <div className="text-left">
              <span className="text-lg font-bold text-[#F8FAFC] block">Strict NDAs</span>
              <span className="text-xs text-[#94A3B8]">Enterprise Security Standard</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
