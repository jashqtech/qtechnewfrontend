"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Play, Sparkles, Heart, Users, Award, Calendar, ArrowRight, X } from "lucide-react";

export default function LifeAtQtechPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const celebrationReels = [
    { title: "Diwali Celebration", tag: "Festival", video: "/images/video/diwali.mp4", thumbnail: "/images/resource/IMG_7618.webp" },
    { title: "Christmas & New Year", tag: "Holiday Party", video: "/images/video/chrismas.mp4", thumbnail: "/images/resource/IMG_3318.webp" },
    { title: "Saturday Tech & Fun", tag: "Weekly Culture", video: "/images/video/saturday-fun.mp4", thumbnail: "/images/resource/ASU07005.webp" },
    { title: "Republic Day", tag: "National Honor", video: "/images/video/republic.mp4", thumbnail: "/images/resource/IMG_7554.webp" },
    { title: "Annual Awards Night", tag: "Recognition", video: "/images/video/awards.mp4", thumbnail: "/images/resource/awards.webp" },
    { title: "Birthday Milestones", tag: "Community", video: "/images/video/birthday.mp4", thumbnail: "/images/resource/IMG_2294.webp" },
  ];

  const galleryImages = [
    { src: "/images/resource/IMG_2530.webp", alt: "Qtech Team Collaboration", label: "Engineering Squads" },
    { src: "/images/resource/IMG_7698.webp", alt: "Office Retreat & Gathering", label: "Team Retreats" },
    { src: "/images/resource/IMG_2738.webp", alt: "Tech Brainstorming", label: "Innovation Sessions" },
    { src: "/images/resource/IMG_7616.webp", alt: "Workplace Celebrations", label: "Festival Celebrations" },
    { src: "/images/resource/DSC_0404.webp", alt: "Annual Day Awards", label: "Awards & Honors" },
    { src: "/images/resource/ASU07123.webp", alt: "Fun Activities", label: "Happy Hours" },
  ];

  const pillars = [
    {
      title: "People First",
      desc: "We prioritize psychological safety, open feedback loops, and well-being with flexible hybrid policies.",
      icon: Heart,
    },
    {
      title: "Continuous Learning",
      desc: "Weekly tech brown-bags, sponsored cloud/Salesforce certifications, and modern AI hackathons.",
      icon: Sparkles,
    },
    {
      title: "Unmatched Camaraderie",
      desc: "From festive traditional celebrations to weekend gaming, we work hard and celebrate every milestone together.",
      icon: Users,
    },
    {
      title: "Merit & Recognition",
      desc: "Quarterly excellence awards, project performance bonuses, and transparent career advancement ladders.",
      icon: Award,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Culture & Community
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Life <span className="text-[#FF6B00]">@ QTech</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
            A dynamic tech collective uniting 88+ engineers in collaboration, creativity, and celebrations. Discover the people behind our enterprise digital solutions.
          </p>
        </div>
      </section>

      {/* Photo Gallery Mosaic */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Vibrant Workplace Moments
            </h2>
            <p className="mt-2 text-slate-600">
              Capturing team gatherings, daily energy, and milestones across our Ahmedabad engineering hub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-72 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono font-medium border border-white/20 inline-block mb-1">
                    {img.label}
                  </span>
                  <p className="text-sm font-semibold text-white drop-shadow-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels Section */}
      <section id="celebrations" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold uppercase tracking-wider text-[#FF6B00] mb-3">
              <Calendar className="h-3.5 w-3.5" /> Celebrations & Reels
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
              Workplace Happy <span className="text-[#FF6B00]">Hours</span>
            </h2>
            <p className="mt-2 text-slate-600">
              Watch real celebration videos from our festival gatherings, award ceremonies, and weekend retreats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrationReels.map((reel, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideo(reel.video)}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative h-56 w-full bg-slate-900">
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono">
                    {reel.tag}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h4 className="font-semibold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                    {reel.title}
                  </h4>
                  <span className="text-xs text-[#FF6B00] font-medium flex items-center gap-1">
                    Play <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Pillars */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Why Engineers Love Qtech
            </h2>
            <p className="mt-2 text-slate-600">
              Our culture empowers every engineer with autonomy, freedom, and continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:shadow-md transition-shadow"
                >
                  <div className="h-11 w-11 rounded-xl bg-amber-50 text-[#FF6B00] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold font-display">Ready to build your career with us?</h3>
              <p className="text-slate-400 text-sm mt-1">Explore open engineering positions and apply in under 2 minutes.</p>
            </div>
            <Button href="/crew" variant="primary" size="lg" className="shrink-0 bg-[#FF6B00] hover:bg-[#FF7A1A]">
              Join The Crew <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
