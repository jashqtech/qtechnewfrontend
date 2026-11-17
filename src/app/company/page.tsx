import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Award, Sparkles, Building2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "The Company | Qrious Tech",
  description: "Learn about Qrious Tech Team LLP, our leadership, core values, mission, and message from CEO Rikin Thakkar.",
};

export default function CompanyPage() {
  const values = [
    {
      title: "Client-Centric Approach",
      desc: "For any business, customers are at the center. We think from your end customers' perspectives, their friction points, and devise architecture that solves core business problems.",
      icon: Users,
    },
    {
      title: "Engineering Excellence",
      desc: "We enforce rigorous CI/CD workflows, comprehensive automated testing, and strict code review standards across our entire 88+ engineer squads.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Collaboration",
      desc: "Direct access to engineers, daily standups, clear sprint burndowns, and zero hidden friction. We operate as an extension of your in-house team.",
      icon: Award,
    },
    {
      title: "Futuristic R&D",
      desc: "Continuous exploration in agentic AI, modern data platforms, and high-performance cloud architectures so our clients stay ahead of market shifts.",
      icon: Sparkles,
    },
  ];

  const milestones = [
    { year: "2018", label: "Foundation", desc: "Established with core focus on web and mobile development excellence." },
    { year: "2020", label: "Global Footprint", desc: "Expanded engineering contracts across North America and Europe." },
    { year: "2022", label: "Specialized Practices", desc: "Launched enterprise Salesforce and Power BI business intelligence practices." },
    { year: "2024+", label: "Autonomous AI Modernization", desc: "Pioneering agentic workflows, multi-agent LLM systems, and RAG architectures." },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-4">
              About Qrioustech Team LLP
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
              Empowering <span className="text-[#FF6B00]">Innovation</span> Through Technology
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Qrious Tech Team LLP is an enterprise engineering force dedicated to driving transformative digital change. We pair senior software architects and autonomous AI workflows with global enterprises to build mission-critical products.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">
                Executive Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                Message from the <span className="text-[#FF6B00]">CEO</span>
              </h2>
              <div className="text-lg font-medium text-slate-700">
                Rikin Thakkar — CEO, <strong className="text-slate-900">Qrioustech Team LLP</strong>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed italic border-l-4 border-[#FF6B00] pl-6 py-2 bg-slate-50/70 rounded-r-2xl">
                <p>
                  &ldquo;At Qrioustech, our mission is to provide businesses with world-class development talent, enabling them to focus on their core objectives while we handle the technology backbone. Our skilled engineering teams work across web development, mobile technologies, AI/ML, and Salesforce, ensuring the highest standard of execution for every client.&rdquo;
                </p>
                <p>
                  &ldquo;Our contractual staffing models, including nested OEM partnerships, guarantee flexibility, complete IP confidentiality, and seamless integration with client squads. Thank you for trusting Qrioustech as your engineering partner.&rdquo;
                </p>
              </div>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md">
                  Speak with Our Leadership <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-900 p-8 flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <div className="relative h-12 w-48">
                    <Image
                      src="/images/icons/Letter Head Header.png"
                      alt="Qrious Tech"
                      fill
                      className="object-contain object-left invert"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-mono tracking-wider uppercase pt-4">
                    HQ: Ahmedabad, India • Global Delivery
                  </p>
                </div>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-[#FF6B00] flex items-center justify-center font-bold">
                      88+
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Full-Time Engineers</div>
                      <div className="text-xs text-slate-400">Senior architects & developers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-[#06B6D4] flex items-center justify-center font-bold">
                      37+
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Production Case Studies</div>
                      <div className="text-xs text-slate-400">Across 8 global industries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">
                Who We Are
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Qtech is a team of passionate engineers representing togetherness and engineering craft. For us, success means translating complex, innovative ideas into resilient, production-ready software systems that scale smoothly.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our vision has established Qtech as a trusted IT engineering partner for clients across India, the United States, and Europe, delivering transparent, high-velocity digital solutions.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 text-[#06B6D4] flex items-center justify-center mb-6">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">
                What We Do
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We design and build bespoke software across web, mobile, autonomous AI/ML workflows, enterprise Salesforce architectures, and Power BI visualization suites.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By pairing certified domain experts with disciplined agile methodologies, our squads empower businesses to achieve faster time-to-market while reducing engineering overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
              Passionate <span className="text-[#FF6B00]">Dedication</span>
            </h2>
            <p className="mt-3 text-slate-600">
              The engineering convictions that guide every decision and sprint delivery at Qtech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:border-amber-200 hover:shadow-md transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-colors mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Roadmap */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Our Growth Journey
            </h2>
            <p className="mt-2 text-slate-600">
              Two decades of continuous technological evolution and client trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                <span className="text-2xl font-bold text-[#FF6B00] font-mono block mb-1">
                  {m.year}
                </span>
                <h4 className="text-base font-semibold text-slate-900 mb-1">{m.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/crew" variant="secondary" size="lg" className="mr-3">
              Explore Careers
            </Button>
            <Button href="/contact" variant="primary" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
