import React from "react";
import { Hero } from "@/components/home/Hero";
import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { QuickCtaBar } from "@/components/home/QuickCtaBar";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { VideoBannerSection } from "@/components/home/VideoBannerSection";
import { IndustriesShowcase } from "@/components/home/IndustriesShowcase";
import { TechPracticeExplorer } from "@/components/home/TechPracticeExplorer";
import { MetricsTrustBar } from "@/components/home/MetricsTrustBar";
import { AppointmentSection } from "@/components/home/AppointmentSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ItSolutionsBanner } from "@/components/home/ItSolutionsBanner";
import { TeamMosaic } from "@/components/home/TeamMosaic";

export default function Home() {
  return (
    <main className="relative bg-white selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
      {/* 1. HERO: Multi-stop fluid gradient mesh ribbon, original copy & real artwork (ai_baner_v1.png) */}
      <Hero />

      {/* 2. ABOUT: "Have a product idea?" with 6 key points and 2x2 photo collage of actual assets */}
      <HomeAboutSection />

      {/* 3. QUICK CTA: "Are you in a need of developer?" with direct appointment trigger */}
      <QuickCtaBar />

      {/* 4. WHAT WE DO: Original 3-column asymmetric layout (Product Development, Architect, Power BI, Testing, Cloud) */}
      <WhatWeDoSection />

      {/* 5. VIDEO BANNER: Real 10.webp background, pulsing play button & company video lightbox */}
      <VideoBannerSection />

      {/* 6. INDUSTRIES: "To Whom We Provide Solutions?" covering 8 dedicated sector specializations */}
      <IndustriesShowcase />

      {/* 7. TECHNOLOGIES: "Technologies @ Qtech — Learn More With Us" interactive practice selector */}
      <TechPracticeExplorer />

      {/* 8. FUN FACTS & TRUST: Verified metrics (200+ Clients, 500+ Projects, 88+ Engineers) */}
      <MetricsTrustBar />

      {/* 9. APPOINTMENT: Why Choose Qtech (3 pillars) + book-an-appointment graphic + working form with PDF upload */}
      <AppointmentSection />

      {/* 10. TESTIMONIALS: Real executive reviews from Stuart Rox, Lorel Parker, Shota Oda, Shin Paul */}
      <TestimonialSection />

      {/* 11. IT SOLUTIONS BANNER: "Our IT Solutions will get you on move towards your destination" */}
      <ItSolutionsBanner />

      {/* 12. TEAM MOSAIC: "Teamwork is the only way we work" featuring all 88 real staff headshots */}
      <TeamMosaic />
    </main>
  );
}
