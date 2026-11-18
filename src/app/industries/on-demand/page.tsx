import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Truck,
  Navigation,
  Smartphone,
  CreditCard,
  Clock,
  Layers,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "On-Demand Delivery & Marketplace Platforms | Qrious Tech",
  description: "Real-time dispatching engines, driver routing, multi-sided marketplace platforms, and customer tracking apps by Qrious Tech.",
};

export default function OnDemandPage() {
  const solutions = [
    {
      title: "Real-Time Driver Dispatch & Routing",
      desc: "Automated match algorithms, shortest-path GPS routing, batch order assignment, and real-time fleet telemetry.",
      icon: Navigation,
    },
    {
      title: "Multi-Sided Marketplace Architecture",
      desc: "Synchronized interfaces for customers, independent service providers/drivers, and central merchant dispatchers.",
      icon: Layers,
    },
    {
      title: "Live GPS Telemetry & Customer Tracking",
      desc: "Sub-second WebSocket order tracking on interactive maps with dynamic ETA calculations and delivery progress notifications.",
      icon: Truck,
    },
    {
      title: "Dynamic Surge Pricing & Earnings Wallets",
      desc: "Algorithmic supply/demand price adjustments, driver cashout wallets, automated tip disbursement, and tax reporting.",
      icon: CreditCard,
    },
    {
      title: "Native Driver Companion Apps",
      desc: "One-tap order acceptance, turn-by-turn in-app navigation, proof-of-delivery photo capture, and digital signatures.",
      icon: Smartphone,
    },
    {
      title: "High-Concurrency Cloud Infrastructure",
      desc: "Autoscaling microservices engineered to handle millions of daily pings, sudden weather-driven volume spikes, and 99.99% uptime.",
      icon: Clock,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: On-Demand Economy
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            High-Velocity <span className="text-[#FF6B00]">On-Demand & Logistics</span> Platforms
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Connect supply and demand in milliseconds. We build scalable real-time dispatch systems, driver companion apps, and dynamic logistics platforms for global urban markets.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your On-Demand App <ArrowRight className="h-4 w-4 ml-1.5" />
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
              On-Demand Platform Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              Engineered for ultra-low latency, real-time map synchronization, and seamless transactions.
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
