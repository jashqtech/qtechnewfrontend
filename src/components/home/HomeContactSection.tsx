"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  Upload,
  X,
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_COORDINATES } from "@/data/navigation";
import { formatBytes } from "@/lib/utils";

export function HomeContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    type: "Had a Product Idea?",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateAndSetFile = (file: File) => {
    if (file.type !== "application/pdf" && !file.name.endsWith(".pdf")) {
      setStatus("error");
      setStatusMessage("Only PDF files are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setStatus("error");
      setStatusMessage("File size cannot exceed 5MB.");
      return;
    }
    setSelectedFile(file);
    setStatus("idle");
    setStatusMessage("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    // Validate 10-digit mobile
    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      setStatus("error");
      setStatusMessage("Mobile must be a valid 10-digit phone number.");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", `${formData.firstName.trim()} ${formData.lastName.trim()}`);
      data.append("email", formData.email.trim());
      data.append("mobile", formData.mobile.trim());
      data.append("type", formData.type);
      data.append("additional_msg", formData.message.trim());

      if (selectedFile) {
        data.append("attachment", selectedFile);
      }

      // Check for career session recipient if user navigated from job posting
      const applyRecipient = typeof window !== "undefined" ? sessionStorage.getItem("apply_recipient") : null;
      if (applyRecipient) {
        data.append("recipient", applyRecipient);
        sessionStorage.removeItem("apply_recipient");
        sessionStorage.removeItem("apply_position");
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (res.ok && json.status === "success") {
        setStatus("success");
        setStatusMessage(json.message || "Thank you! Your inquiry has been dispatched to our engineering leadership.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          type: "Had a Product Idea?",
          message: "",
        });
        handleClearFile();
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Failed to submit request. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error occurred. Please reach out to info@qrioustech.com directly.");
    }
  };

  return (
    <section
      className="relative py-24 sm:py-36 overflow-hidden border-t border-slate-200/80"
      id="contact"
      style={{
        background: "linear-gradient(135deg, #FFF5EE 0%, #FAF8F5 40%, #F0F7FF 100%)",
      }}
    >
      {/* Luminous Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[450px] bg-gradient-to-br from-[#FF6B00]/12 via-[#FF5A36]/5 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-tl from-[#06B6D4]/12 via-[#6366F1]/8 to-transparent blur-[85px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-25 pointer-events-none" />

      {/* Flowing Subtle Ribbon SVG */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full pointer-events-none overflow-hidden opacity-25 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 150, -50 C 350, 150 550, 250 500, 500 C 450, 680 250, 650 150, 720"
            stroke="url(#contactRibbon)"
            strokeWidth="80"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="contactRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#D946EF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Engagement Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-[#FF6B00]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Section 09 &bull; Direct Technical Consultation</span>
              </div> */}

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
                Let&apos;s Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#D946EF] to-[#6366F1]">
                  Extraordinary.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you have a product idea, need to augment your team with senior engineers, or want to modernize legacy enterprise systems — our architects respond within one business day.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-7 text-sm text-slate-600 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-md">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 shrink-0">
                  <MapPin className="h-4 w-4 text-[#FF6B00]" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-mono text-xs uppercase tracking-wider mb-0.5">
                    Offices &bull; North America &amp; Asia
                  </strong>
                  <span className="text-xs text-slate-600 leading-relaxed block">
                    {COMPANY_COORDINATES.address}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3.5 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200/60 shrink-0">
                  <Phone className="h-4 w-4 text-[#06B6D4]" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-mono text-xs uppercase tracking-wider mb-0.5">
                    Direct Engineering Hotline
                  </strong>
                  <a
                    href={`tel:${COMPANY_COORDINATES.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#FF6B00] transition-colors font-semibold text-slate-900 text-sm font-mono"
                  >
                    {COMPANY_COORDINATES.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3.5 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200/60 shrink-0">
                  <Mail className="h-4 w-4 text-[#6366F1]" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-mono text-xs uppercase tracking-wider mb-0.5">
                    Architecture &amp; Sales Desk
                  </strong>
                  <a
                    href={`mailto:${COMPANY_COORDINATES.salesEmail}`}
                    className="hover:text-[#FF6B00] transition-colors font-semibold text-slate-900 text-sm font-mono"
                  >
                    {COMPANY_COORDINATES.salesEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3.5 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60 shrink-0">
                  <Clock className="h-4 w-4 text-[#10B981]" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-mono text-xs uppercase tracking-wider mb-0.5">
                    Guaranteed Turnaround SLA
                  </strong>
                  <span className="text-xs text-slate-600">
                    Technical feasibility feedback &amp; scoping within &lt; 4 business hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Assurance Strip */}
            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono">
              <ShieldCheck className="h-4 w-4 text-[#10B981] shrink-0" />
              <span>Strict Mutual NDAs &bull; 100% IP Assignment &bull; SOC 2 Protocol</span>
            </div>
          </div>

          {/* Right Column: Luminous Contact Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white/95 p-8 sm:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Submit Technical Inquiry
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  Step 1 of 1 &bull; Direct Route
                </span>
              </div>

              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-xs font-semibold text-slate-800">
                    First Name <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. Alexander"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-xs font-semibold text-slate-800">
                    Last Name <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Vance"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                  />
                </div>
              </div>

              {/* Email & Mobile Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-800">
                    Work Email <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mobile" className="text-xs font-semibold text-slate-800">
                    10-Digit Mobile <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Type Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="type" className="text-xs font-semibold text-slate-800">
                  Inquiry Category <span className="text-[#FF6B00]">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors cursor-pointer"
                >
                  <option value="Had a Product Idea?">Had a Product Idea? (New Product Scoping)</option>
                  <option value="Work with us">Work With Us (Partnership / General Inquiry)</option>
                  <option value="Dedicated Developer Requirement">Dedicated Developer Requirement (Staff Augmentation)</option>
                  <option value="We're Hiring">Careers &amp; Application Submission</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-800">
                  Project Scoping / Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your tech stack, project timeline, or specific engineering requirements..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                />
              </div>

              {/* PDF File Dropzone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-800">
                  Optional Attachment (PDF Specs or Resume, Max 5MB)
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="pdfUpload"
                />

                {!selectedFile ? (
                  <label
                    htmlFor="pdfUpload"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer group ${isDragging
                        ? "border-[#FF6B00] bg-amber-50"
                        : "border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#FF6B00]/60 shadow-inner"
                      }`}
                  >
                    <Upload className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B00] transition-colors mb-1.5" />
                    <span className="text-xs font-medium text-slate-800">
                      {isDragging ? "Drop your PDF here" : "Click to browse or drop PDF specification"}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">
                      PDF format only (Max 5MB)
                    </span>
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-slate-900">
                    <div className="flex items-center gap-2.5 truncate">
                      <FileText className="h-4 w-4 text-[#FF6B00] shrink-0" />
                      <span className="truncate font-medium">{selectedFile.name}</span>
                      <span className="text-slate-500 text-[11px] shrink-0">
                        ({formatBytes(selectedFile.size)})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleClearFile}
                      className="p-1 rounded-lg hover:bg-amber-100 text-slate-500 hover:text-slate-800 transition-colors ml-2"
                      aria-label="Remove attachment"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Feedback Alert */}
              {statusMessage && (
                <div
                  className={`p-3.5 rounded-xl border text-xs flex items-center gap-2 ${status === "success"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-rose-50 border-rose-200 text-rose-800"
                    }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "loading"}
                className="w-full text-base font-semibold shadow-[0_4px_16px_rgba(255,107,0,0.25)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.35)]"
                rightIcon={<Send className="h-4 w-4" />}
              >
                {status === "loading" ? "Submitting Inquiry..." : "Submit Technical Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
