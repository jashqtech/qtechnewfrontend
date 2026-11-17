import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_COORDINATES } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-[#FAF9F6] text-slate-600 relative overflow-hidden">
      {/* Subtle Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#FF6B00]/8 to-transparent pointer-events-none blur-3xl" />

      {/* Top Pre-Footer Callout */}
      <div className="border-b border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#FF6B00] font-mono">
                Transform Your Digital Operations
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                Ready to architect your enterprise AI or custom software platform?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consult directly with our principal engineers. We scope technical requirements, validate architectures, and deploy dedicated teams within 2 weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button href="/contact" size="lg" variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Schedule Consultation
              </Button>
              <Button href="/case-studies" size="lg" variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-50">
                Explore Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Coordinates */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/icons/Letter Head Header.png"
                  alt="Qrious Tech Team LLP"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Qrious Tech (Qrioustech Team LLP) delivers enterprise AI engineering, intelligent workflow automation, and custom digital product development to high-growth organizations worldwide.
            </p>

            <div className="space-y-3 text-xs text-slate-600 font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span className="font-sans text-xs">{COMPANY_COORDINATES.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#FF6B00] shrink-0" />
                <a
                  href={`tel:${COMPANY_COORDINATES.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#FF6B00] transition-colors font-semibold text-slate-800"
                >
                  {COMPANY_COORDINATES.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#FF6B00] shrink-0" />
                <a
                  href={`mailto:${COMPANY_COORDINATES.salesEmail}`}
                  className="hover:text-[#FF6B00] transition-colors font-semibold text-slate-800"
                >
                  Sales: {COMPANY_COORDINATES.salesEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#06B6D4] shrink-0" />
                <a
                  href={`mailto:${COMPANY_COORDINATES.talentEmail}`}
                  className="hover:text-[#06B6D4] transition-colors font-semibold text-slate-800"
                >
                  Talent: {COMPANY_COORDINATES.talentEmail}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_COORDINATES.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#FF6B00] hover:border-[#FF6B00]/40 shadow-sm transition-all"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                </svg>
              </a>
              <a
                href={COMPANY_COORDINATES.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#FF6B00] hover:border-[#FF6B00]/40 shadow-sm transition-all"
                aria-label="Twitter / X"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={COMPANY_COORDINATES.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#FF6B00] hover:border-[#FF6B00]/40 shadow-sm transition-all"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={COMPANY_COORDINATES.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#FF6B00] hover:border-[#FF6B00]/40 shadow-sm transition-all"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-900 tracking-wider uppercase font-mono">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/ai-ml-development" className="hover:text-[#FF6B00] transition-colors">
                  AI &amp; Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-[#FF6B00] transition-colors">
                  Web Engineering (React/Next/Node)
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="hover:text-[#FF6B00] transition-colors">
                  Mobile Apps (React Native/Flutter)
                </Link>
              </li>
              <li>
                <Link href="/services/data-visualization" className="hover:text-[#FF6B00] transition-colors">
                  Data Analytics &amp; Power BI
                </Link>
              </li>
              <li>
                <Link href="/services/salesforce-development" className="hover:text-[#FF6B00] transition-colors">
                  Salesforce &amp; Cloud CRM
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-[#FF6B00] transition-colors">
                  UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services/product-development" className="hover:text-[#FF6B00] transition-colors">
                  Agile Product Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-900 tracking-wider uppercase font-mono">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/industries/healthcare" className="hover:text-[#FF6B00] transition-colors">
                  Healthcare &amp; Life Sciences
                </Link>
              </li>
              <li>
                <Link href="/industries/finance" className="hover:text-[#FF6B00] transition-colors">
                  Financial Services &amp; FinTech
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-[#FF6B00] transition-colors">
                  Education &amp; EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="hover:text-[#FF6B00] transition-colors">
                  Retail &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/sports" className="hover:text-[#FF6B00] transition-colors">
                  Sports Analytics
                </Link>
              </li>
              <li>
                <Link href="/industries/entertainment" className="hover:text-[#FF6B00] transition-colors">
                  Media &amp; Entertainment
                </Link>
              </li>
              <li>
                <Link href="/industries/hcm" className="hover:text-[#FF6B00] transition-colors">
                  Human Capital Management
                </Link>
              </li>
              <li>
                <Link href="/industries/on-demand" className="hover:text-[#FF6B00] transition-colors">
                  On-Demand Marketplaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Engagement & Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-900 tracking-wider uppercase font-mono">
              Engagement &amp; Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/how-we-work" className="hover:text-[#FF6B00] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/how-we-work/dedicated-teams" className="hover:text-[#FF6B00] transition-colors">
                  Dedicated Development Teams
                </Link>
              </li>
              <li>
                <Link href="/how-we-work/saas-partner" className="hover:text-[#FF6B00] transition-colors">
                  SaaS Development Partner
                </Link>
              </li>
              <li>
                <Link href="/how-we-work/ai-modernization" className="hover:text-[#FF6B00] transition-colors">
                  AI Modernization Partner
                </Link>
              </li>
              <li>
                <Link href="/working-methodology" className="hover:text-[#FF6B00] transition-colors">
                  Working Methodology
                </Link>
              </li>
              <li>
                <Link href="/crew" className="hover:text-[#FF6B00] transition-colors">
                  Join The Crew <span className="text-[#FF6B00] font-medium font-mono">(Hiring)</span>
                </Link>
              </li>
              <li>
                <Link href="/life-at-qtech" className="hover:text-[#FF6B00] transition-colors">
                  Life @ QTech
                </Link>
              </li>
              <li>
                <Link href="/products/qt-kids" className="hover:text-[#FF6B00] transition-colors">
                  QT Kids Educational Suite
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#FF6B00] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Qrioustech Team LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/llms.txt" className="hover:text-slate-900 transition-colors">
              AI Index (llms.txt)
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
