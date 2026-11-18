import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Trophy,
  Activity,
  Flame,
  BarChart,
  Users,
  Timer,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sports & Fitness Analytics Platforms | Qrious Tech",
  description: "Athlete telemetry monitoring, live scoring engines, tournament management systems, and workout tracking mobile apps engineered by Qrious Tech.",
};

export default function SportsPage() {
  const solutions = [
    {
      title: "Athlete Telemetry & Biometrics",
      desc: "Wearable sensor ingestion (HRV, GPS, velocity, muscle load) with automated fatigue scoring and injury prevention alerts.",
      icon: Activity,
    },
    {
      title: "Live Scoring & Tournament Engines",
      desc: "Sub-second event streaming, bracket generation, automated rankings, and official referee adjudication portals.",
      icon: Trophy,
    },
    {
      title: "Autonomous AI Fitness Coaching",
      desc: "Multi-agent personal training platforms synchronizing daily workout splits, nutrition logs, and recovery feedback loops in real time.",
      icon: Flame,
    },
    {
      title: "Sports League & Club Management",
      desc: "Player roster management, contract tracking, facility scheduling, ticket sales, and merchandise commerce.",
      icon: Users,
    },
    {
      title: "High-Performance Video Breakdown",
      desc: "Frame-by-frame match analysis, automated clip tagging, tactical play drawing boards, and scouting report generators.",
      icon: BarChart,
    },
    {
      title: "Real-Time Fan Engagement Apps",
      desc: "In-stadium ordering, interactive polls, live stats push notifications, and gamified digital fan passes.",
      icon: Timer,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Sports & Fitness Technology
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            High-Performance <span className="text-[#FF6B00]">Sports Analytics</span> & Fitness Tech
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            From connected wearable telemetry to autonomous personal training AI, we build software that elevates athletic performance and captivates global fanbases.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Consult a Sports Tech Lead <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View Sports Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Sports Tech Engineering Solutions
            </h2>
            <p className="mt-2 text-slate-600">
              Trusted by professional sports leagues, fitness franchises, and health-tech startups.
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
