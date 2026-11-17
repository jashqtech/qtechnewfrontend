import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  HeartPulse,
  ShieldCheck,
  Activity,
  Stethoscope,
  Video,
  Database,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare & Life Sciences Digital Solutions | Qrious Tech",
  description: "HIPAA-compliant telemedicine platforms, EHR/EMR integrations, clinical data analytics, and patient engagement portals engineered by Qrious Tech.",
};

export default function HealthcarePage() {
  const solutions = [
    {
      title: "HIPAA-Compliant Telemedicine",
      desc: "WebRTC encrypted video consultations, waiting room triage, digital e-prescriptions, and seamless schedule synchronization.",
      icon: Video,
    },
    {
      title: "EHR / EMR Interoperability (FHIR / HL7)",
      desc: "Bi-directional integration connecting web and mobile applications with Epic, Cerner, and Athenahealth using modern FHIR standards.",
      icon: Database,
    },
    {
      title: "Patient Self-Service Portals",
      desc: "Responsive portals for medical history access, lab result reviews, appointment self-scheduling, and secure billing payments.",
      icon: Stethoscope,
    },
    {
      title: "Remote Patient Monitoring (IoMT)",
      desc: "Real-time telemetry ingestion from medical wearables, glucose monitors, and pulse oximeters with clinician alert triggers.",
      icon: Activity,
    },
    {
      title: "Clinical Analytics & Power BI Dashboards",
      desc: "Departmental capacity planning, patient readmission risk modeling, and operational KPI dashboards for hospital leadership.",
      icon: HeartPulse,
    },
    {
      title: "Strict Health Data Security",
      desc: "End-to-end encryption for data in transit and at rest, BAA agreements, audit logging, and automated HIPAA compliance enforcement.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Healthcare & Life Sciences
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            HIPAA-Compliant <span className="text-[#FF6B00]">Healthcare Software</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            We engineer secure, certified digital healthcare applications that improve patient outcomes and streamline provider workflows. From telemedicine platforms to clinical EHR integrations.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Consult a Healthcare Architect <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Domain Solutions for Healthcare
            </h2>
            <p className="mt-2 text-slate-600">
              Built with patient safety, clinical accuracy, and regulatory compliance at the core.
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
