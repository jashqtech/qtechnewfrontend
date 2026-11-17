import React from "react";
import { Hero } from "@/components/home/Hero";
import { MetricsTrustBar } from "@/components/home/MetricsTrustBar";
import { AgenticWorkflowSection } from "@/components/home/AgenticWorkflowSection";
import { EnterprisePlatformShowcase } from "@/components/home/EnterprisePlatformShowcase";
import { IndustriesShowcase } from "@/components/home/IndustriesShowcase";
import { CollaborationModelsSection } from "@/components/home/CollaborationModelsSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { TeamMosaic } from "@/components/home/TeamMosaic";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export default function Home() {
  return (
    <main className="relative bg-white selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
      {/* SECTION 1 — HERO: Editorial typography, luminous gradient mesh, flowing ribbon, live AI dashboard simulation */}
      <Hero />

      {/* SECTION 2 — TRUST AND CAPABILITIES: Bright background, verified metrics, sector compliance, and creative capabilities showcase */}
      <MetricsTrustBar />

      {/* SECTION 3 — AUTONOMOUS AI ARCHITECTURE: Light atmospheric background, colorful workflow diagram, interactive connected nodes */}
      <AgenticWorkflowSection />

      {/* SECTION 4 — ENTERPRISE PLATFORM: Asymmetric editorial split layout, large floating dashboard composition, ambient gradient lighting */}
      <EnterprisePlatformShowcase />

      {/* SECTION 5 — INDUSTRY SOLUTIONS: Panoramic visual arrangement, creative bento grid, interactive sector insights */}
      <IndustriesShowcase />

      {/* SECTION 6 — COLLABORATION MODELS: Creative split layout with real engineering squad and modernizing visuals */}
      <CollaborationModelsSection />

      {/* SECTION 7 — CASE STUDIES: Large real project imagery, asymmetric showcases, actual production outcomes */}
      <FeaturedCaseStudies />

      {/* VERIFIED CLIENT ENDORSEMENTS: High-trust executive testimonials */}
      <TestimonialSection />

      {/* SECTION 8 — TEAM AND ENGINEERING CULTURE: Asymmetric 4-tier mosaic of real engineer headshots and office photography */}
      <TeamMosaic />

      {/* SECTION 9 — CONTACT: Luminous gradient composition, direct coordinates, SLA guarantees, and enterprise inquiry suite */}
      <HomeContactSection />
    </main>
  );
}
