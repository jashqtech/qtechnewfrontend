"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { NAVIGATION_CONFIG } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-9 w-36 sm:w-44">
              <Image
                src="/images/icons/Letter Head Header.png"
                alt="Qrious Tech Team LLP"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAVIGATION_CONFIG.map((item) => {
              const hasDropdown = item.items || item.megaMenu;
              const isOpen = activeDropdown === item.label;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    className={cn(
                      "px-3.5 py-2 text-sm font-medium transition-colors rounded-xl",
                      pathname === item.href
                        ? "text-[#FF6B00] bg-amber-50 font-semibold"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-xl cursor-pointer",
                      isOpen
                        ? "text-slate-950 bg-slate-100 font-semibold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/70"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200 opacity-60",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isOpen && item.isMegaMenu && item.megaMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] xl:w-[840px] animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
                        {item.megaMenu.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <div>
                              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#FF6B00] font-mono">
                                {category.title}
                              </h4>
                              {category.description && (
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {category.description}
                                </p>
                              )}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {category.items.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  className="group flex flex-col p-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                                      {sub.title}
                                    </span>
                                    {sub.badge && (
                                      <Badge size="sm" variant="amber">
                                        {sub.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  {sub.description && (
                                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                                      {sub.description}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>

                            {category.featured && (
                              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between bg-amber-50/50 p-3.5 rounded-xl border border-amber-100">
                                <div className="flex items-center gap-2">
                                  <Sparkles className="h-4 w-4 text-[#FF6B00]" />
                                  <span className="text-xs text-slate-700">
                                    <strong className="text-slate-900">
                                      {category.featured.title}:
                                    </strong>{" "}
                                    {category.featured.description}
                                  </span>
                                </div>
                                <Link
                                  href={category.featured.href}
                                  className="text-xs font-semibold text-[#FF6B00] hover:text-[#FF7A1A] inline-flex items-center gap-1 shrink-0"
                                >
                                  Explore <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standard Dropdown */}
                  {isOpen && !item.isMegaMenu && item.items && (
                    <div className="absolute top-full left-0 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-2xl backdrop-blur-xl space-y-1">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                                {sub.title}
                              </span>
                              {sub.badge && (
                                <Badge size="sm" variant="amber">
                                  {sub.badge}
                                </Badge>
                              )}
                            </div>
                            {sub.description && (
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {sub.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              variant="primary"
              className="font-medium rounded-xl transition-all shadow-md bg-[#FF6B00] hover:bg-[#FF7A1A] text-white"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Consult an Expert
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white/98 backdrop-blur-2xl border-t border-slate-200 p-6 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {NAVIGATION_CONFIG.map((item) => {
              const hasSub = item.items || item.megaMenu;
              const isSubOpen = openMobileSubmenu === item.label;

              if (!hasSub) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    className="text-base font-semibold text-slate-900 hover:text-[#FF6B00] py-2 border-b border-slate-100"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() =>
                      setOpenMobileSubmenu(isSubOpen ? null : item.label)
                    }
                    className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isSubOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isSubOpen && (
                    <div className="pl-4 pt-2 space-y-2">
                      {item.items &&
                        item.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block text-sm text-slate-600 hover:text-[#FF6B00] py-1.5"
                          >
                            {sub.title}
                          </Link>
                        ))}

                      {item.megaMenu &&
                        item.megaMenu.map((cat) => (
                          <div key={cat.title} className="space-y-1 pt-2">
                            <span className="text-xs font-mono font-semibold uppercase text-[#FF6B00] block">
                              {cat.title}
                            </span>
                            {cat.items.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="block text-sm text-slate-600 hover:text-[#FF6B00] py-1"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full">
                Consult an Expert &rarr;
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
