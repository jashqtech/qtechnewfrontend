"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Award, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const TOTAL_STAFF = 89;
const TIER1_COUNT = 5;   // large featured portraits
const TIER2_COUNT = 15;  // medium grid (indices 6-20)
const TIER3_COUNT = 20;  // small mosaic (indices 21-40)
// Tier 4: 41-89 (49 headss)

const TIER2_ROTATIONS = [
  "-1deg", "0.5deg", "-0.5deg", "1deg", "0deg",
  "0.5deg", "-1deg", "0deg", "1deg", "-0.5deg",
  "-1deg", "0.5deg", "0deg", "-0.5deg", "1deg",
];

export function TeamMosaic() {
  const [showAll, setShowAll] = useState(false);

  const staffArray = Array.from({ length: TOTAL_STAFF }, (_, i) => i + 1);
  const tier1 = staffArray.slice(0, TIER1_COUNT);
  const tier2 = staffArray.slice(TIER1_COUNT, TIER1_COUNT + TIER2_COUNT);
  const tier3 = staffArray.slice(TIER1_COUNT + TIER2_COUNT, TIER1_COUNT + TIER2_COUNT + TIER3_COUNT);
  const tier4All = staffArray.slice(TIER1_COUNT + TIER2_COUNT + TIER3_COUNT);
  // Show first 20 by default in tier4, all when expanded
  const tier4Visible = showAll ? tier4All : tier4All.slice(0, 20);

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#FAFAF9" }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.10) 0%, rgba(255,107,0,0.03) 55%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.03) 55%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            {/* <Badge variant="amber" size="sm">
              Engineering Strength &amp; Scale
            </Badge> */}
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight font-display"
              style={{ color: "#0F172A" }}
            >
              88+ Engineers Who Build The Future
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
              Every person you see is a full-time Qrious Tech specialist.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `View All ${TOTAL_STAFF} Engineers`}
            </Button>
            <Button href="/crew" variant="secondary" size="sm">
              Join Our Crew &rarr;
            </Button>
          </div>
        </div>

        {/* ── TIER 1: Featured Portrait Row ── */}





        {/* ── TIER 3: Small Mosaic (grayscale → color on hover) ── */}
        <div className="mb-5">
          <div
            className="flex flex-wrap gap-[7px]"
          >
            {tier3.map((num) => (
              <div
                key={num}
                className="group relative rounded-xl overflow-hidden shrink-0"
                style={{
                  width: 90,
                  height: 110,
                  boxShadow: "0 1px 6px rgba(15,23,42,0.07)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.07)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 6px 20px rgba(99,102,241,0.15), 0 2px 6px rgba(15,23,42,0.08)";
                  (e.currentTarget as HTMLDivElement).style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 1px 6px rgba(15,23,42,0.07)";
                  (e.currentTarget as HTMLDivElement).style.zIndex = "auto";
                }}
              >
                <Image
                  src={`/images/staff-headss/${num}.webp`}
                  alt={`Qrious Tech Engineer #${num}`}
                  fill
                  sizes="90px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── TIER 4: Compact Strip ── */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-[5px]">
            {tier4Visible.map((num) => (
              <div
                key={num}
                className="group relative rounded-lg overflow-hidden shrink-0"
                style={{
                  width: 70,
                  height: 85,
                  boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.09)";
                  (e.currentTarget as HTMLDivElement).style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.zIndex = "auto";
                }}
              >
                <Image
                  src={`/images/staff-headss/${num}.webp`}
                  alt={`Qrious Tech Engineer #${num}`}
                  fill
                  sizes="70px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {!showAll && tier4All.length > 20 && (
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(15,23,42,0.12)",
                  color: "#0F172A",
                  boxShadow: "0 2px 8px rgba(15,23,42,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#FF6B00";
                  (e.currentTarget as HTMLButtonElement).style.color = "#FF6B00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(15,23,42,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#0F172A";
                }}
              >
                Show All {TOTAL_STAFF} Engineers
                <span
                  className="inline-flex items-center justify-center rounded-full text-[10px] font-bold w-5 h-5"
                  style={{ background: "#FF6B00", color: "white" }}
                >
                  +
                </span>
              </button>
            </div>
          )}
          {showAll && (
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(15,23,42,0.12)",
                  color: "#334155",
                  boxShadow: "0 2px 8px rgba(15,23,42,0.07)",
                }}
              >
                Show Less
              </button>
            </div>
          )}
        </div>

        {/* ── Culture & Team Life Snaps Bar (Real Project Pos) ── */}
        <div className="mb-12 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#06B6D4] block">
                Engineering Culture &amp; Life at QTech
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Real People. Real Team Collaboration. Zero Outsourcing.
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Pune Engineering Center &bull; Global Operations
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/70">
              <Image
                src="/images/resource/ASU07005.webp"
                alt="Qrious Tech Engineering Squad Collaboration"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">Sprint Architecture Sessions</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/70">
              <Image
                src="/images/weekend/weekend-1.webp"
                alt="Qrious Tech Team Retreat and Hackathon"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">Annual Team Hackathons</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/70">
              <Image
                src="/images/resource/awards.webp"
                alt="Clutch and Upwork Top Rated Awards"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">Verified Clutch Excellence</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/70">
              <Image
                src="/images/birthday/birthday-main.webp"
                alt="QTech Milestones and Celebrations"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">Milestones &amp; Culture</span>
              </div>
            </div>
          </div>
        </div>
        {/* ── Stats Bar ── */}
        <div
          className="rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          style={{
            background: "linear-gradient(135deg, #FFF9F5 0%, #F5FAFF 100%)",
            border: "1.5px solid rgba(15,23,42,0.07)",
            boxShadow:
              "0 4px 24px rgba(15,23,42,0.07), 0 1px 4px rgba(15,23,42,0.04)",
          }}
        >
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{
                background: "rgba(255,107,0,0.10)",
              }}
            >
              <Users className="h-5 w-5" style={{ color: "#FF6B00" }} />
            </div>
            <div className="text-left">
              <span
                className="text-xl font-bold block"
                style={{ color: "#0F172A" }}
              >
                88+ In-House
              </span>
              <span className="text-xs" style={{ color: "#64748B" }}>
                100% Full-Time Specialists
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block absolute self-stretch w-px"
            style={{ background: "rgba(15,23,42,0.08)" }}
          />

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{
                background: "rgba(6,182,212,0.10)",
              }}
            >
              <Award className="h-5 w-5" style={{ color: "#06B6D4" }} />
            </div>
            <div className="text-left">
              <span
                className="text-xl font-bold block"
                style={{ color: "#0F172A" }}
              >
                4.9/5 Client Rating
              </span>
              <span className="text-xs" style={{ color: "#64748B" }}>
                Verified Clutch &amp; Upwork
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{
                background: "rgba(99,102,241,0.10)",
              }}
            >
              <Globe className="h-5 w-5" style={{ color: "#6366F1" }} />
            </div>
            <div className="text-left">
              <span
                className="text-xl font-bold block"
                style={{ color: "#0F172A" }}
              >
                15+ Countries
              </span>
              <span className="text-xs" style={{ color: "#64748B" }}>
                Clients Served Globally
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
