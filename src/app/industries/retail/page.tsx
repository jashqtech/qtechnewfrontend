import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShoppingBag,
  Store,
  Layers,
  Zap,
  TrendingUp,
  CreditCard,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & Omnichannel E-Commerce Software | Qrious Tech",
  description: "High-conversion e-commerce platforms, POS integrations, real-time inventory synchronization, and custom shopping apps by Qrious Tech.",
};

export default function RetailPage() {
  const solutions = [
    {
      title: "Headless E-Commerce Platforms",
      desc: "High-speed storefronts built with Next.js and Shopify Plus / MedusaJS / Commerce Layer for sub-second checkout speeds.",
      icon: ShoppingBag,
    },
    {
      title: "Omnichannel POS & Store Integration",
      desc: "Synchronize online orders, physical in-store POS terminals, BOPIS (buy-online-pickup-in-store), and curbside fulfillment.",
      icon: Store,
    },
    {
      title: "Real-Time Inventory Synchronization",
      desc: "Automated multi-warehouse stock reconciliation across Shopify, Amazon, ERP, and physical retail stockrooms.",
      icon: Layers,
    },
    {
      title: "AI Product Recommendations",
      desc: "Personalized upsells and cross-sells powered by real-time machine learning, increasing average order value (AOV) by 24%+.",
      icon: TrendingUp,
    },
    {
      title: "One-Click Checkout & Frictionless Pay",
      desc: "Optimized cart flows with Apple Pay, Google Pay, Klarna, and Stripe Express Checkout to reduce cart abandonment.",
      icon: CreditCard,
    },
    {
      title: "Mobile Shopping Apps (iOS & Android)",
      desc: "Native mobile apps with push notification re-engagement, barcode scanning, loyalty rewards, and wishlist sync.",
      icon: Zap,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Retail & E-Commerce
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            High-Performance <span className="text-[#FF6B00]">Retail & E-Commerce</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Scale your retail operations with lightning-fast headless storefronts, automated multi-channel inventory sync, and intelligent recommendation engines.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Talk to a Retail Architect <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Explore Retail Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Retail Engineering Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              Engineered for Black Friday peak loads, 99.99% uptime, and frictionless checkout.
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
