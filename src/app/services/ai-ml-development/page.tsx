import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BrainCircuit,
  Bot,
  Eye,
  FileSearch,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  Database
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Machine Learning Engineering | Qrious Tech",
  description: "Enterprise AI and machine learning engineering: custom LLM fine-tuning, autonomous agentic workflows, RAG pipelines, computer vision, and predictive analytics.",
};

export default function AiMlDevelopmentPage() {
  const capabilities = [
    {
      title: "Agentic AI & Multi-Agent Workflows",
      desc: "Stateful multi-agent systems orchestrated with LangGraph, AutoGen, and CrewAI that automate complex, multi-step enterprise reasoning processes.",
      icon: Bot,
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      desc: "Enterprise semantic search connecting private company documents, PDFs, and SQL tables to LLMs using Pinecone, Qdrant, and pgvector.",
      icon: FileSearch,
    },
    {
      title: "Computer Vision & Visual Telemetry",
      desc: "Real-time object detection, facial verification, optical character recognition (OCR), and industrial defect inspection using PyTorch and OpenCV.",
      icon: Eye,
    },
    {
      title: "Custom Model Fine-Tuning & Quantization",
      desc: "Domain-specific fine-tuning (LoRA, QLoRA) on open-source foundation models (Llama 3, Mistral, DeepSeek) for strict cost and latency targets.",
      icon: Cpu,
    },
    {
      title: "Predictive Analytics & Forecasting",
      desc: "Time-series demand forecasting, churn prediction, algorithmic pricing, and anomaly detection engines on structured relational data.",
      icon: BrainCircuit,
    },
    {
      title: "Enterprise AI Governance & Guardrails",
      desc: "Strict hallucination mitigation, PII redaction, prompt injection defense, and continuous evaluation pipelines (Ragas, TruLens).",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Practice: Enterprise Artificial Intelligence
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Autonomous <span className="text-[#FF6B00]">AI Solutions</span> & Machine Learning
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Move beyond generic chatbots. We build production-grade agentic workflows, deterministic RAG pipelines, and custom computer vision architectures integrated directly into your existing enterprise software.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Explore AI Architecture <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View AI Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Enterprise AI Capabilities
            </h2>
            <p className="mt-2 text-slate-600">
              Deterministic architectures engineered for accuracy, low latency, and zero hallucination risk.
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

      {/* Featured AI Spotlight */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-[#FF6B00] text-xs font-mono font-medium border border-amber-500/30">
                Production Benchmark
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                Featured Case Study: FitMind AI Ecosystem
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Engineered an asynchronous, domain-driven multi-agent architecture orchestrated by LangGraph StateGraph on FastAPI and PostgreSQL with pgvector. Achieved 99.4% dynamic workout adaptation with sub-1.2s decision cycles.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/case-studies" variant="primary" size="lg" className="bg-[#FF6B00] hover:bg-[#FF7A1A]">
                Explore Case Study <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
