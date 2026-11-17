import { NavItem } from "@/types";

export const NAVIGATION_CONFIG: NavItem[] = [
  {
    label: "About",
    items: [
      {
        title: "The Company",
        description: "Empowering innovation through cutting-edge technology and client-focused solutions.",
        href: "/company",
      },
      {
        title: "Life @ Qtech",
        description: "A dynamic tech community driving innovation, celebrations, and team culture.",
        href: "/life-at-qtech",
      },
      {
        title: "Join The Crew",
        description: "Explore active engineering careers and join our world-class talent pool.",
        href: "/crew",
        badge: "Hiring",
      },
      {
        title: "Working Methodology",
        description: "Our 5-stage sprint lifecycle: scoping, vetting, contract, and agile delivery.",
        href: "/working-methodology",
      },
      {
        title: "FAQs",
        description: "Frequently asked questions regarding engagement, tech expertise, and IP security.",
        href: "/faqs",
      },
    ],
  },
  {
    label: "Tech Practices",
    items: [
      {
        title: "Power BI",
        description: "Enterprise data visualization, multi-ERP consolidation & executive dashboards.",
        href: "/services/data-visualization",
      },
      {
        title: "Web Development",
        description: "Modern full-stack web applications, React, Next.js, Node.js & cloud infrastructure.",
        href: "/services/web-development",
      },
      {
        title: "Mobile Apps",
        description: "Native iOS/Android and cross-platform React Native & Flutter mobile engineering.",
        href: "/services/mobile-development",
      },
      {
        title: "Salesforce",
        description: "Sales, Service, Experience Cloud, Lightning Web Components & CPQ customization.",
        href: "/services/salesforce-development",
      },
      {
        title: "AI / ML",
        description: "Custom AI models, Generative AI, LLM workflows, computer vision & biometrics.",
        href: "/services/ai-ml-development",
        badge: "",
      },
    ],
  },
  {
    label: "Industries",
    items: [
      {
        title: "Healthcare",
        description: "HIPAA-compliant telemedicine, EHR/EMR platforms & patient portals.",
        href: "/industries/healthcare",
      },
      {
        title: "Finance",
        description: "Secure payment gateways, FinTech platforms & fraud detection systems.",
        href: "/industries/finance",
      },
      {
        title: "Education",
        description: "Interactive learning management systems (LMS) & virtual classroom tools.",
        href: "/industries/education",
      },
      {
        title: "Retail",
        description: "Omnichannel e-commerce platforms, POS integrations & cart optimization.",
        href: "/industries/retail",
      },
      {
        title: "Sports",
        description: "Athlete telemetry, live scoring engines & sports analytics dashboards.",
        href: "/industries/sports",
      },
      {
        title: "Entertainment",
        description: "Low-latency streaming architectures, DRM security & media ticketing.",
        href: "/industries/entertainment",
      },
      {
        title: "HCM",
        description: "Automated payroll, talent lifecycle tracking & enterprise HRMS portals.",
        href: "/industries/hcm",
      },
      {
        title: "On-Demand",
        description: "Real-time dispatching, GPS routing & multi-sided marketplace platforms.",
        href: "/industries/on-demand",
      },
    ],
  },
  {
    label: "How we work",
    href: "/how-we-work",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
];

export const COMPANY_COORDINATES = {
  name: "Qrious Tech (Qrioustech Team LLP)",
  tagline: "Enterprise AI Solutions & Software Engineering",
  address: "A - 706/707/708/709, Dev Aurum, Near Deer Circle, 100ft Anandnagar Cross Road, Prahaladnagar, Ahmedabad - 380015, Gujarat, India",
  phone: "+91 63557 94606",
  salesEmail: "info@qrioustech.com",
  talentEmail: "hr@qrioustech.in",
  executiveEmail: "rikinthakkar1991@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/company/qrious-tech/",
    twitter: "https://twitter.com/qrious_tech",
    instagram: "https://www.instagram.com/qrioustechteam.llp",
    facebook: "https://www.facebook.com/qrioustech/",
  },
};
