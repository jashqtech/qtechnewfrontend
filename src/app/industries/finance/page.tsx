import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Landmark,
  ShieldAlert,
  CreditCard,
  TrendingUp,
  FileCheck2,
  Lock,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "FinTech & Financial Services Software Engineering | Qrious Tech",
  description: "Secure financial platforms, payment gateway integrations, fraud prevention systems, and automated wealth management portals engineered by Qrious Tech.",
};

export default function FinancePage() {
  const solutions = [
    {
      title: "Secure Payment Gateways & Wallets",
      desc: "PCI-DSS Level 1 compliant payment workflows, Stripe/Adyen orchestrations, multi-currency wallets, and instant payout rails.",
      icon: CreditCard,
    },
    {
      title: "Algorithmic Fraud & Anomaly Detection",
      desc: "Real-time transaction scoring using streaming ML inference to flag suspicious patterns and prevent chargebacks before settlement.",
      icon: ShieldAlert,
    },
    {
      title: "Wealth Management & Stock Portfolios",
      desc: "Automated tax receipting, direct stock donation workflows, real-time portfolio valuations, and household account management.",
      icon: TrendingUp,
    },
    {
      title: "Digital Loan & Credit Origination",
      desc: "Automated KYC/AML verification, credit bureau API integrations, document extraction, and dynamic underwriting rules.",
      icon: Landmark,
    },
    {
      title: "Regulatory Reporting & Compliance",
      desc: "Comprehensive audit trail logging, SOC2 compliance, immutable transaction ledgers, and automated regulatory filing extracts.",
      icon: FileCheck2,
    },
    {
      title: "Bank-Grade Cryptographic Security",
      desc: "Zero-knowledge encryption for financial records, biometric multi-factor authentication, and tokenized account storage.",
      icon: Lock,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Financial Services & FinTech
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            High-Security <span className="text-[#FF6B00]">FinTech & Financial</span> Systems
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Build resilient financial applications that safeguard sensitive assets and scale smoothly. From wealth management portals to algorithmic fraud detection platforms.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Speak with a FinTech Lead <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Explore FinTech Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Enterprise FinTech Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              Architected for high throughput, sub-100ms latency, and absolute transactional integrity.
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
