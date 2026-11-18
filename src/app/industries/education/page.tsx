import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  BookOpen,
  Video,
  Award,
  Users,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education & EdTech Software Solutions | Qrious Tech",
  description: "Custom Learning Management Systems (LMS), virtual classrooms, AI tutoring engines, and interactive student assessment platforms by Qrious Tech.",
};

export default function EducationPage() {
  const solutions = [
    {
      title: "Interactive Learning Management Systems (LMS)",
      desc: "Custom multi-tenant LMS platforms with SCORM compliance, automated grading, modular course builders, and gamification badges.",
      icon: BookOpen,
    },
    {
      title: "Virtual Classroom & Live Video Streaming",
      desc: "Low-latency WebRTC video classrooms with interactive whiteboards, screen sharing, breakout rooms, and session recording.",
      icon: Video,
    },
    {
      title: "AI-Powered Adaptive Learning",
      desc: "Personalized learning pathways that adapt difficulty and content based on student assessment performance and engagement telemetry.",
      icon: GraduationCap,
    },
    {
      title: "Student Information Systems (SIS)",
      desc: "Centralized attendance, grading, fee management, transcript generation, and parent portal synchronization.",
      icon: Users,
    },
    {
      title: "Gamified Quizzing & Assessments",
      desc: "Timed quizzes, proctored exams, automated plagiarism checks, and instant skill mastery feedback.",
      icon: Award,
    },
    {
      title: "FERPA & COPPA Data Compliance",
      desc: "Strict student data privacy protection adhering to FERPA, COPPA, and GDPR requirements with role-based access control.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Vertical: Education & EdTech
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Next-Gen <span className="text-[#FF6B00]">EdTech Platforms</span> & Digital Classrooms
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Empower educators and engage students with custom learning portals, adaptive testing algorithms, and scalable virtual classroom software.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your EdTech Project <ArrowRight className="h-4 w-4 ml-1.5" />
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
              EdTech Digital Solutions
            </h2>
            <p className="mt-2 text-slate-600">
              Transforming traditional educational models into interactive, accessible digital experiences.
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
