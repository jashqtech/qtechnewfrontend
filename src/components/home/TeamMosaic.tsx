"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TOTAL_STAFF = 88;

export function TeamMosaic() {
  const staff = Array.from({ length: TOTAL_STAFF }, (_, i) => i + 1);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-white">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10 mb-12 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
          Teamwork is the only{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF5A36]">
            way we work
          </span>
        </h2>
        <h3 className="text-2xl font-semibold text-slate-800 font-display">
          Strength in Unity, <strong className="text-slate-900 font-bold">Success in Teamwork</strong>
        </h3>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Every face represents a dedicated in-house engineer, architect, and problem solver driving
          enterprise excellence for our global partners.
        </p>

        <div className="pt-2">
          <Link
            href="/crew"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF5A36] hover:from-[#FF5A36] hover:to-[#FF6B00] shadow-md shadow-[#FF6B00]/25 hover:shadow-lg hover:shadow-[#FF6B00]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Join Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      {/* Panoramic Wall of Photographs — All 88 Real Engineer Headshots */}
      <div className="w-full bg-slate-950/95 py-3 shadow-inner">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 lg:grid-cols-11 gap-1.5 sm:gap-2">
            {staff.map((id) => (
              <div
                key={id}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-900 shadow-sm transition-all duration-300 hover:scale-110 hover:z-20 hover:shadow-xl hover:shadow-[#FF6B00]/20"
              >
                <Image
                  src={`/images/staff-headshots/${id}.webp`}
                  alt={`Qrious Tech Engineer #${id}`}
                  fill
                  sizes="(max-width: 640px) 16vw, (max-width: 1024px) 10vw, 8vw"
                  className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                  loading="lazy"
                />
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1">
                  <span className="text-[10px] font-mono text-white/90 truncate w-full text-center">
                    Engineer #{id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
