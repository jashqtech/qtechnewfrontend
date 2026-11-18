import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Users2,
  CalendarCheck,
  CreditCard,
  Briefcase,
  LineChart,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Human Capital Management (HCM) & HR Tech Software | Qrious Tech",
  description: "Automated payroll processing, employee lifecycle management, talent onboarding, and workforce intelligence systems engineered by Qrious Tech.",
};

export default function HcmPage() {
  const solutions = [
    {
      title: "Automated Payroll & Tax Compliance",
      desc: "Multi-jurisdiction payroll processing, direct deposit disbursement, tax withholding automation, and year-end reporting.",
      icon: CreditCard,
    },
    {
      title: "Applicant Tracking & AI Resume Screening",
      desc: "End-to-end recruitment pipelines with AI candidate ranking, interview scheduling, and automated offer letter workflows.",
      icon: Briefcase,
    },
    {
      title: "Employee Self-Service (ESS) Portals",
      desc: "Mobile and web portals for leave requests, paystub downloads, benefits enrollment, and personal information updates.",
      icon: Users2,
    },
    {
      title: "Time & Attendance Geofencing",
      desc: "Mobile punch-in with GPS geofencing, biometric verification, overtime calculation, and shift swap workflows.",
      icon: CalendarCheck,
    },
    {
      title: "Workforce Analytics & Retention Modeling",
      desc: "Predictive turnover modeling, department capacity heatmaps, headcount budgeting, and executive Power BI dashboards.",
      icon: LineChart,
    },
    {
      title: "Enterprise HR Security & Audit Compliance",
      desc: "Strict role-based access control (RBAC), immutable audit logging, SOC2 compliance, and secure document archiving.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Human Capital Management
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Modern <span className="text-[#FF6B00]">Human Capital & HR</span> Technology
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Streamline the entire employee lifecycle. From automated multi-state payroll engines to workforce analytics portals, we engineer HR tech that empowers global teams.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Consult an HCM Specialist <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View HCM Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Enterprise HCM Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              Designed to eliminate administrative friction and deliver seamless workforce experiences.
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
