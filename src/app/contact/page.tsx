import React from "react";
import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/shared/ContactForm";
import { COMPANY_COORDINATES } from "@/data/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Let's Connect | Contact Qrious Tech Team LLP",
  description: "Get in touch with Qrious Tech. Share your technical requirements, request a developer squad, or visit our engineering headquarters in Ahmedabad, India.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Badge variant="amber" className="mb-4">
            Direct Communication
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Let&apos;s <span className="text-[#FF6B00]">Connect</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Have a product vision, need a dedicated engineering squad, or want to modernize legacy workflows? Reach our leadership team directly.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Suite */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Coordinates & Guarantees */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3">
                  Reach Our Headquarters
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We reply to all enterprise project inquiries within 24 hours with an NDA and initial architectural evaluation.
                </p>
              </div>

              {/* Coordinates Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {COMPANY_COORDINATES.address}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Direct Emails</h4>
                    <p className="text-xs text-slate-600">
                      General & Inquiries:{" "}
                      <a href={`mailto:${COMPANY_COORDINATES.salesEmail}`} className="text-[#FF6B00] font-mono font-medium">
                        {COMPANY_COORDINATES.salesEmail}
                      </a>
                    </p>
                    <p className="text-xs text-slate-600">
                      Talent & Careers:{" "}
                      <a href={`mailto:${COMPANY_COORDINATES.talentEmail}`} className="text-[#FF6B00] font-mono font-medium">
                        {COMPANY_COORDINATES.talentEmail}
                      </a>
                    </p>
                    <p className="text-xs text-slate-600">
                      Executive Desk:{" "}
                      <a href={`mailto:${COMPANY_COORDINATES.executiveEmail}`} className="text-[#FF6B00] font-mono font-medium">
                        {COMPANY_COORDINATES.executiveEmail}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Direct Phone</h4>
                    <a
                      href={`tel:${COMPANY_COORDINATES.phone}`}
                      className="text-sm font-mono font-bold text-slate-900 hover:text-[#FF6B00] transition-colors"
                    >
                      {COMPANY_COORDINATES.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Monday – Friday: 9:30 AM to 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] font-semibold">
                  Client Guarantees
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#FF6B00]" />
                    <span>Strict Bilateral Non-Disclosure Agreement (NDA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#FF6B00]" />
                    <span>24-Hour Guaranteed Executive Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-[#FF6B00]" />
                    <span>100% Client Intellectual Property (IP) Ownership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Working Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                  Send Your Project Inquiry
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-8">
                  Fill in your details below. You can also attach project scope documents or CVs (.pdf format up to 5MB).
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="py-12 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Visit Our Engineering Office
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Dev Aurum, Anandnagar Cross Road, Prahladnagar, Ahmedabad
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-96 w-full">
            <iframe
              title="Qrious Tech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.484931818274!2d72.51139457608148!3d23.005952979183427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8568e27c0f17%3A0xe54d2459fb0a2ea9!2sDev%20Aurum!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
