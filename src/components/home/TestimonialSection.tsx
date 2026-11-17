import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Stuart Rox",
      role: "Founder / Chief Executive Officer",
      company: "Healthcare & Digital Services Group",
      quote:
        "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
      rating: 5,
      metric: "On-Time Milestone SLA: 100%",
    },
    {
      name: "Shota Oda",
      role: "Chief Executive Officer",
      company: "Cross-Border Enterprise SaaS",
      quote:
        "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly with our internal processes, demonstrating exceptional problem-solving abilities and domain expertise. Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementations helped us scale rapidly.",
      rating: 5,
      metric: "Engineering Velocity: +45%",
    },
    {
      name: "Shin Paul",
      role: "Co-Founder / Managing Director",
      company: "Media Streaming & Sports Platform",
      quote:
        "The Qrioustech team exceeded our expectations. Their proactive approach and deep technical knowledge in streaming, mobile platforms, and enterprise integrations ensured our project launched ahead of schedule with remarkable stability and zero production downtime.",
      rating: 5,
      metric: "Live Concurrency: 12,000+ Users",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/10 bg-[#11131B]/40">
      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <Badge variant="amber" size="sm">
            Client Trust & Verification
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-display tracking-tight">
            Endorsed by Enterprise Leaders
          </h2>
          <p className="text-base text-[#94A3B8]">
            Hear directly from founders and engineering executives who rely on Qrious Tech to architect, build, and scale their critical digital infrastructure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-[#11131B] p-8 flex flex-col justify-between hover:border-white/20 transition-all relative overflow-hidden"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-white/[0.03] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FF6B00]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Narrative */}
                <p className="text-sm text-[#F8FAFC] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-[#10B981]">
                  <CheckCircle className="h-3 w-3 shrink-0" />
                  <span>{t.metric}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#171B26] border border-white/10 flex items-center justify-center font-bold text-sm text-[#FF6B00]">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
