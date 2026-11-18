import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Film,
  Music,
  Tv,
  Lock,
  Ticket,
  Zap,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Media & Entertainment Streaming Platforms | Qrious Tech",
  description: "Low-latency video streaming, DRM protected media delivery, digital ticketing engines, and music artist engagement portals by Qrious Tech.",
};

export default function EntertainmentPage() {
  const solutions = [
    {
      title: "Low-Latency Video & Audio Streaming",
      desc: "Ultra-low latency HLS/DASH media streaming pipelines with adaptive bitrate switching and global CDN caching.",
      icon: Tv,
    },
    {
      title: "Digital Rights Management (DRM)",
      desc: "Multi-DRM protection (Widevine, FairPlay, PlayReady) safeguarding premium studio content, music tracks, and live broadcasts.",
      icon: Lock,
    },
    {
      title: "Scalable Event Ticketing Engines",
      desc: "High-concurrency digital box offices handling sudden ticket drop spikes with queueing rooms, dynamic seat maps, and fraud prevention.",
      icon: Ticket,
    },
    {
      title: "Music Streaming & Artist Portals",
      desc: "Artist royalty tracking, playlist curation engines, audio waveform visualizations, and direct-to-fan monetization.",
      icon: Music,
    },
    {
      title: "Interactive Second-Screen Experiences",
      desc: "Real-time viewer trivia, synchronized multi-angle live viewing, and interactive creator tip jars.",
      icon: Film,
    },
    {
      title: "Multi-Platform OTT Apps (Smart TV & Mobile)",
      desc: "Unified media applications engineered across Apple TV, Android TV, Fire TV, Roku, iOS, and Android.",
      icon: Zap,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Media & Entertainment
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            High-Performance <span className="text-[#FF6B00]">Streaming & Media</span> Tech
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Deliver immersive digital entertainment to millions of concurrent viewers. We build DRM-secured OTT platforms, live ticketing engines, and creator monetization systems.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Media Architecture <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Explore Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Entertainment Engineering Solutions
            </h2>
            <p className="mt-2 text-slate-600">
              High-throughput architectures built for viral audience demand and studio-grade security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border border-slate-200/80 bg-white hover:border-amber-200 hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
