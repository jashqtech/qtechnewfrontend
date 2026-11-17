import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Smartphone,
  Tablet,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  WifiOff
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development (React Native & Flutter) | Qrious Tech",
  description: "Cross-platform and native iOS & Android mobile applications engineered for high responsiveness, offline sync, and seamless cloud integrations.",
};

export default function MobileDevelopmentPage() {
  const capabilities = [
    {
      title: "React Native & Flutter Engineering",
      desc: "Single codebase, 60fps performance across iOS and Android with custom native modules and optimized memory usage.",
      icon: Smartphone,
    },
    {
      title: "Native iOS (Swift & SwiftUI)",
      desc: "Deep integration with iOS ecosystem capabilities including CoreML, ARKit, Apple Pay, widgets, and HealthKit telemetry.",
      icon: Tablet,
    },
    {
      title: "Native Android (Kotlin & Jetpack Compose)",
      desc: "Modern reactive Android architectures targeting millions of active devices with battery and network optimizations.",
      icon: Cpu,
    },
    {
      title: "Offline-First Data Sync & Local SQLite",
      desc: "Reliable mobile performance with local database persistence (WatermelonDB, Realm) and asynchronous conflict-free cloud sync.",
      icon: WifiOff,
    },
    {
      title: "Wearable & Smart IoT Companion Apps",
      desc: "Companion mobile software for BLE devices, Apple Watch (watchOS), WearOS, and connected hardware sensors.",
      icon: Layers,
    },
    {
      title: "App Store & Play Store CI/CD",
      desc: "Automated build, test, and release pipelines using Fastlane, App Store Connect, and Google Play Console release rings.",
      icon: Zap,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Practice: Mobile Engineering
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Native & Cross-Platform <span className="text-[#FF6B00]">Mobile Apps</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            From consumer wellness applications to enterprise workforce field tools, our mobile engineering team builds responsive, fluid mobile experiences that rank at the top of the App Store and Google Play.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Mobile App <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Mobile Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Comprehensive Mobile Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              Architected for high user retention, low latency, and rock-solid offline reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border border-slate-200/80 bg-white hover:border-amber-200 hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 font-display">
            Need a dedicated mobile squad?
          </h2>
          <p className="mt-3 text-slate-600 mb-8">
            Deploy an experienced mobile team with proven track records in React Native, Flutter, Swift, and Kotlin.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Build Your Mobile Squad <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
