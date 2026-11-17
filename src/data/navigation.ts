import { NavItem } from "@/types";

export const NAVIGATION_CONFIG: NavItem[] = [
  {
    label: "Solutions",
    isMegaMenu: true,
    megaMenu: [
      {
        title: "Practices & Technologies",
        description: "Full-lifecycle engineering and specialized digital practices.",
        items: [
          {
            title: "AI & Machine Learning",
            description: "Custom models, generative AI, biometrics & computer vision.",
            href: "/services/ai-ml-development",
            badge: "Hot",
          },
          {
            title: "Web Engineering",
            description: "High-performance React, Next.js, Node.js & cloud applications.",
            href: "/services/web-development",
          },
          {
            title: "Mobile App Development",
            description: "Cross-platform and native iOS, Android, watchOS & tvOS apps.",
            href: "/services/mobile-development",
          },
          {
            title: "Data Visualization & BI",
            description: "Enterprise Power BI, Tableau migration & analytics dashboards.",
            href: "/services/data-visualization",
          },
          {
            title: "Salesforce Practice",
            description: "Sales, Service, Experience Cloud, FSL & CPQ customization.",
            href: "/services/salesforce-development",
          },
          {
            title: "UI/UX Design Engineering",
            description: "User research, interactive design systems & rapid prototypes.",
            href: "/services/ui-ux-design",
          },
          {
            title: "Product Development",
            description: "6-stage agile framework from requirements to scalable MVP.",
            href: "/services/product-development",
          },
        ],
        featured: {
          title: "AI Modernization Framework",
          description: "Discover how we embed autonomous agents and RAG pipelines into legacy software.",
          href: "/how-we-work/ai-modernization",
          tag: "Featured Guide",
        },
      },
    ],
  },
  {
    label: "Engagement",
    isMegaMenu: true,
    megaMenu: [
      {
        title: "Delivery & Partnership Models",
        description: "Flexible collaboration frameworks tailored to your business stage.",
        items: [
          {
            title: "How We Work",
            description: "Strategic overview of our engineering models and guarantees.",
            href: "/how-we-work",
          },
          {
            title: "Dedicated Development Teams",
            description: "Embedded senior engineering squads and staff augmentation.",
            href: "/how-we-work/dedicated-teams",
            badge: "Popular",
          },
          {
            title: "SaaS Development Partner",
            description: "End-to-end cloud product incubation, architecture & launch.",
            href: "/how-we-work/saas-partner",
          },
          {
            title: "AI Modernization Partner",
            description: "Transforming legacy enterprise stacks with intelligent AI workflows.",
            href: "/how-we-work/ai-modernization",
          },
          {
            title: "Working Methodology",
            description: "Our 5-stage sprint lifecycle: scoping, vetting, and delivery.",
            href: "/working-methodology",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    isMegaMenu: true,
    megaMenu: [
      {
        title: "Industry Verticals",
        description: "Domain-specific compliance, workflows, and digital solutions.",
        items: [
          {
            title: "Healthcare & Life Sciences",
            description: "HIPAA-compliant telemedicine, EHR/EMR, and patient portals.",
            href: "/industries/healthcare",
          },
          {
            title: "Financial Services & FinTech",
            description: "Secure payment gateways, fraud detection & ledger systems.",
            href: "/industries/finance",
          },
          {
            title: "Education & EdTech",
            description: "Interactive learning management systems (LMS) & virtual tools.",
            href: "/industries/education",
          },
          {
            title: "Retail & E-Commerce",
            description: "Omnichannel platforms, POS integrations & cart optimization.",
            href: "/industries/retail",
          },
          {
            title: "Sports & Fitness Analytics",
            description: "Athlete telemetry, live scoring & event management portals.",
            href: "/industries/sports",
          },
          {
            title: "Media & Entertainment",
            description: "Low-latency streaming, DRM security & ticketing engines.",
            href: "/industries/entertainment",
          },
          {
            title: "Human Capital Management (HCM)",
            description: "Automated payroll, talent lifecycle tracking & HRMS portals.",
            href: "/industries/hcm",
          },
          {
            title: "On-Demand Economy",
            description: "Real-time dispatching, GPS routing & multi-sided marketplaces.",
            href: "/industries/on-demand",
          },
        ],
      },
    ],
  },
  {
    label: "Work",
    items: [
      {
        title: "Enterprise Case Studies",
        description: "Explore 37 verified engineering and AI transformation case studies.",
        href: "/case-studies",
      },
      {
        title: "Client Portfolio",
        description: "16 real-world digital applications across enterprise domains.",
        href: "/portfolio",
      },
      {
        title: "Client Testimonials",
        description: "Verified reviews, client endorsements, and Clutch ratings.",
        href: "/testimonials",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        title: "The Company",
        description: "Our history, leadership, and engineering standards.",
        href: "/company",
      },
      {
        title: "Join The Crew",
        description: "Explore active engineering, AI, and Salesforce career openings.",
        href: "/crew",
        badge: "We're Hiring",
      },
      {
        title: "Life @ QTech",
        description: "Team celebrations, retreats, and culture video reels.",
        href: "/life-at-qtech",
      },
      {
        title: "QT Kids Product Suite",
        description: "Proprietary early-childhood learning and educational apps.",
        href: "/products/qt-kids",
      },
      {
        title: "FAQs",
        description: "Common questions regarding engagement, IP security, and pricing.",
        href: "/faqs",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
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
