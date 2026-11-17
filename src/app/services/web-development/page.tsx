import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  Code2,
  Server,
  Zap,
  ShieldCheck,
  Layers,
  ArrowRight,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Web Engineering & Next.js Development | Qrious Tech",
  description: "Full-lifecycle enterprise web development with React, Next.js, Node.js, TypeScript, microservices, and cloud-native serverless backends.",
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      title: "Modern React & Next.js Stacks",
      desc: "Server-side rendered (SSR), statically generated (SSG), and edge-rendered applications optimized for sub-second page loads and top Core Web Vitals.",
      icon: Globe,
    },
    {
      title: "Resilient Microservices & APIs",
      desc: "RESTful and GraphQL API gateways built on Node.js, NestJS, FastAPI, and Go with Redis caching and PostgreSQL persistence.",
      icon: Server,
    },
    {
      title: "Cloud Native & Serverless (AWS / GCP)",
      desc: "Architectures deployed on AWS Lambda, ECS Fargate, Kubernetes, and Cloudflare Workers with automated blue-green CI/CD deployment pipelines.",
      icon: Cpu,
    },
    {
      title: "SaaS Multi-Tenant Platforms",
      desc: "Scalable SaaS architectures with isolated database schemas, custom tenant domains, subscription billing, and RBAC security.",
      icon: Layers,
    },
    {
      title: "Progressive Web Apps (PWA)",
      desc: "Offline-capable web applications with service workers, local storage caching, background sync, and native-like push notifications.",
      icon: Zap,
    },
    {
      title: "Enterprise Security & Compliance",
      desc: "Built-in SOC2, HIPAA, and GDPR compliance, OAuth2 / OIDC authentication flows, rate limiting, and encrypted data at rest and in transit.",
      icon: ShieldCheck,
    },
  ];

  const techStack = [
    { name: "Next.js 15 & React 19", role: "Frontend Core" },
    { name: "TypeScript", role: "Type Safety" },
    { name: "Node.js & NestJS", role: "Backend Microservices" },
    { name: "PostgreSQL & Prisma", role: "Database & ORM" },
    { name: "Tailwind CSS", role: "Design Systems" },
    { name: "Docker & Kubernetes", role: "Containerization" },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Practice: Full-Stack Engineering
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Enterprise <span className="text-[#FF6B00]">Web Engineering</span> & Cloud Architecture
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            We build high-concurrency, cloud-native web applications that power market leaders. From interactive SaaS platforms to global digital commerce, our senior engineering squads deliver speed, scalability, and clean code.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start Web Project <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              Explore Web Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              End-to-End Web Engineering Services
            </h2>
            <p className="mt-2 text-slate-600">
              Disciplined architectural design, responsive interfaces, and secure backend systems.
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

      {/* Tech Stack Matrix */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Primary Web Stack
            </h2>
            <p className="mt-2 text-slate-600">Battle-tested tools and frameworks chosen for speed and maintainability.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((t, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                <span className="text-sm font-bold text-slate-900 block mb-1">{t.name}</span>
                <span className="text-xs font-mono text-[#FF6B00]">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
