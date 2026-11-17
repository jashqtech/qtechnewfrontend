import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BarChart3,
  LineChart,
  PieChart,
  Database,
  Layers,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Power BI & Data Visualization Consulting | Qrious Tech",
  description: "Enterprise Power BI development, multi-ERP consolidation, DAX modeling, and executive business intelligence dashboards.",
};

export default function DataVisualizationPage() {
  const capabilities = [
    {
      title: "Interactive Executive Dashboards",
      desc: "Turn complex, multi-source organizational data into real-time KPI dashboards for C-suite and department leaders.",
      icon: BarChart3,
    },
    {
      title: "Multi-ERP & Database Consolidation",
      desc: "Ingest and reconcile data across SAP, Oracle, NetSuite, Salesforce, PostgreSQL, and Snowflake into a unified semantic layer.",
      icon: Database,
    },
    {
      title: "Advanced DAX & Power Query Modeling",
      desc: "Custom calculations, dynamic time-intelligence formulas, and star-schema dimensional modeling for instant query performance.",
      icon: Layers,
    },
    {
      title: "Embedded Analytics & Row-Level Security",
      desc: "Embed secure, tenant-isolated Power BI reports directly into your SaaS web portals with granular Row-Level Security (RLS).",
      icon: ShieldCheck,
    },
    {
      title: "Automated Refresh Pipelines & Gateway",
      desc: "Zero-latency data refreshes with Power BI on-premise gateways, scheduled REST API syncs, and data drift alerts.",
      icon: TrendingUp,
    },
    {
      title: "Tableau & Legacy BI Migration",
      desc: "Migrate legacy Tableau, Qlik, or Excel workbooks into modern, cost-efficient Power BI Premium / Fabric workspaces.",
      icon: LineChart,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="amber" className="mb-4">
            Practice: Business Intelligence
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Enterprise <span className="text-[#FF6B00]">Power BI</span> & Data Visualization
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Transform disparate data silos into unified, decision-ready intelligence. Our certified Power BI architects build high-performance data models, automated ETL pipelines, and embedded analytics for global enterprises.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Consult a BI Architect <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View BI Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Core Capabilities in Data Intelligence
            </h2>
            <p className="mt-2 text-slate-600">
              End-to-end data pipeline design from raw warehouse extraction to interactive visual storytelling.
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

      {/* Tech Stack Bar */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold">
                Enterprise Toolchain
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                Technologies We Leverage
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Microsoft Power BI Pro & Premium, Microsoft Fabric, Azure Synapse Analytics, Snowflake, Databricks, SQL Server Analysis Services (SSAS), DAX Studio, and Tabular Editor.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Button href="/contact" variant="primary" size="lg" className="bg-[#FF6B00] hover:bg-[#FF7A1A]">
                Request BI Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
