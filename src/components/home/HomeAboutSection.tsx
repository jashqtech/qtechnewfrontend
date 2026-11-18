"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const highlights = [
  "Providing tailored IT solutions for your unique business & other needs.",
  "Driving technological advancement to keep your business ahead.",
  "Implementing robust measures to safeguard your data and systems.",
  "Adapting solutions to accommodate your company's growth seamlessly.",
  "Committed to staying ahead through ongoing learning and evolution.",
  "Open and clear communication to foster a strong partnership.",
];

export function HomeAboutSection() {
  return (
    <section id="more_details" className="relative py-20 lg:py-28 bg-white overflow-hidden scroll-mt-20">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headings & 6 Bullet Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-block">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
                  Have a product{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF5A36]">
                    idea ?
                  </span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 font-display">
                Let us be your next{" "}
                <strong className="text-slate-900 font-bold">Preferred IT Partner</strong>
              </h2>
            </div>

            <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed text-justify">
              Qrious Tech Team LLP as your go-to IT partner for simple and effective solutions.
              We&apos;re here to provide you with the right tech support, tailored to your business.
              Count on us as more than just service providers – we&apos;re your reliable friends in the
              world of tech, helping you succeed in the digital age.
            </p>

            {/* 6 Bullet Points from Original Site */}
            <ul className="space-y-3.5 pt-2">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-snug">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 fill-[#FF6B00]/20" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/company"
                className="inline-flex items-center gap-2 font-semibold text-[#FF6B00] hover:text-[#FF5A36] group transition-colors"
              >
                <span>Learn more about our company culture & philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Photo Collage preserving original assets */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Image 1: Logo / Brand Badge */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] flex items-center justify-center p-6">
                <Image
                  src="/images/icons/LogoQtech.png"
                  alt="Qrious Tech Logo"
                  width={320}
                  height={240}
                  className="w-full h-auto max-h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Image 2: Meeting Room */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <Image
                  src="/images/meeting-room.png"
                  alt="Qrious Tech Meeting Room & Collaboration Space"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium drop-shadow">
                  Collaboration Hub
                </div>
              </div>

              {/* Image 3: Real Office Work Photo 2 */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <Image
                  src="/images/home-page-2.webp"
                  alt="Engineering & Product Design Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium drop-shadow">
                  Engineering Team
                </div>
              </div>

              {/* Image 4: Real Office Work Photo 3 */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <Image
                  src="/images/home-page-3.webp"
                  alt="Agile Sprint Planning & Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium drop-shadow">
                  Agile Sprint Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
