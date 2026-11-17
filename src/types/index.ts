export interface CaseStudyKPI {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  tab: "AI" | "Web" | "Mobile" | "Salesforce" | "Power BI" | string;
  category: string;
  title: string;
  themeColor: string;
  image: string;
  heroDesc: string;
  challengeText: string;
  approachText: string;
  resultsText: string;
  kpis: CaseStudyKPI[];
  overview?: string[];
  architecture?: string[];
  problems?: string[];
  engineering?: string[];
  performance?: string[];
}

export interface PortfolioMetric {
  metric: string;
  label: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  originalContext: string;
  year: string;
  domain: string;
  category: string;
  image: string;
  accent: string;
  summary: string;
  overview: string;
  technicalOverview: string;
  technologies: string[];
  features: string[];
  metrics: PortfolioMetric[];
}

export interface JobOpeningDetails {
  expirence?: string;
  no_of_openings?: number;
  contract?: string;
  location?: string;
}

export interface JobOpening {
  name_of_opening: string;
  to_email?: string;
  opening_details_field: JobOpeningDetails;
  description: string[];
}

export interface NavSubItem {
  title: string;
  description?: string;
  href: string;
  badge?: string;
  icon?: string;
}

export interface NavCategory {
  title: string;
  description?: string;
  items: NavSubItem[];
  featured?: {
    title: string;
    description: string;
    href: string;
    tag?: string;
  };
}

export interface NavItem {
  label: string;
  href?: string;
  isMegaMenu?: boolean;
  megaMenu?: NavCategory[];
  items?: NavSubItem[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  type: string;
  message: string;
  recipient?: string;
  attachment?: File | null;
}
