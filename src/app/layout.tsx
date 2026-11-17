import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qrioustech.com"),
  title: {
    default: "Qrious Tech | Enterprise AI Solutions & Software Engineering",
    template: "%s | Qrious Tech",
  },
  description:
    "Qrious Tech provides enterprise software engineering, AI workflow modernization, dedicated developer teams, and full-stack digital product development.",
  keywords: [
    "Enterprise AI Development",
    "Workflow Automation",
    "Full-Stack Web Development",
    "React Native",
    "Next.js Engineering",
    "Power BI Consulting",
    "Dedicated Development Teams",
    "SaaS Development Partner",
    "Salesforce Development",
  ],
  authors: [{ name: "Qrioustech Team LLP" }],
  creator: "Qrioustech Team LLP",
  publisher: "Qrioustech Team LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/images/icons/Letter Head Header.png",
  },
  openGraph: {
    title: "Qrious Tech | Enterprise AI Solutions & Software Engineering",
    description:
      "Enterprise AI development, workflow automation, and dedicated engineering squads for global leaders.",
    url: "https://qrioustech.com",
    siteName: "Qrious Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qrious Tech | Enterprise AI Solutions & Software Engineering",
    description:
      "Enterprise AI development, workflow automation, and dedicated engineering squads for global leaders.",
    creator: "@qrious_tech",
  },
};

export const viewport: Viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090A0F] text-[#F8FAFC] antialiased flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
