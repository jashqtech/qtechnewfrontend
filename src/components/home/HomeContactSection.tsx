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
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
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

      const res = await fetch("https://qrioustech.com/qtech-website/api/v1/contact-us", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (res.ok && json.status === "success") {
        setStatus("success");
        setStatusMessage("Thank you! Your inquiry has been dispatched to our engineering leadership.");
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
    <section className="relative py-24 sm:py-32 border-t border-white/10 bg-[#090A0F]" id="contact">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Engagement Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="amber" size="sm">
                Get In Touch With Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-display tracking-tight">
                Architect Your Next Milestone With Us
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Whether you need dedicated developers, SaaS MVP engineering, or an AI modernization audit, our leadership and technical architects are ready to assist.
              </p>
            </div>

            <div className="space-y-5 rounded-2xl border border-white/10 bg-[#11131B] p-6 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8FAFC] block font-mono text-xs uppercase tracking-wider mb-1">
                    Headquarters
                  </strong>
                  <span>{COMPANY_COORDINATES.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <Phone className="h-5 w-5 text-[#FF6B00] shrink-0" />
                <div>
                  <strong className="text-[#F8FAFC] block font-mono text-xs uppercase tracking-wider mb-1">
                    Call Directly
                  </strong>
                  <a
                    href={`tel:${COMPANY_COORDINATES.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#F8FAFC] transition-colors font-medium text-[#F8FAFC]"
                  >
                    {COMPANY_COORDINATES.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <Mail className="h-5 w-5 text-[#FF6B00] shrink-0" />
                <div>
                  <strong className="text-[#F8FAFC] block font-mono text-xs uppercase tracking-wider mb-1">
                    Email Inquiries
                  </strong>
                  <a
                    href={`mailto:${COMPANY_COORDINATES.salesEmail}`}
                    className="hover:text-[#F8FAFC] transition-colors"
                  >
                    Sales: {COMPANY_COORDINATES.salesEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <Clock className="h-5 w-5 text-[#06B6D4] shrink-0" />
                <div>
                  <strong className="text-[#F8FAFC] block font-mono text-xs uppercase tracking-wider mb-1">
                    Turnaround SLA
                  </strong>
                  <span>Technical feasibility response within 24 hours.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Precision Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#11131B] p-8 sm:p-10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-xs font-semibold text-[#F8FAFC]">
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
                    className="w-full rounded-lg border border-white/10 bg-[#171B26] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-xs font-semibold text-[#F8FAFC]">
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
                    className="w-full rounded-lg border border-white/10 bg-[#171B26] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              {/* Email & Mobile Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#F8FAFC]">
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
                    className="w-full rounded-lg border border-white/10 bg-[#171B26] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mobile" className="text-xs font-semibold text-[#F8FAFC]">
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
                    className="w-full rounded-lg border border-white/10 bg-[#171B26] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              {/* Inquiry Type Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="type" className="text-xs font-semibold text-[#F8FAFC]">
                  Inquiry Category <span className="text-[#FF6B00]">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-white/10 bg-[#171B26] px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                >
                  <option value="Had a Product Idea?">Had a Product Idea? (New Product Scoping)</option>
                  <option value="Work with us">Work With Us (Partnership / General Inquiry)</option>
                  <option value="Dedicated Developer Requirement">Dedicated Developer Requirement (Staff Augmentation)</option>
                  <option value="We're Hiring">Careers & Application Submission</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#F8FAFC]">
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
                  className="w-full rounded-lg border border-white/10 bg-[#171B26] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                />
              </div>

              {/* PDF File Dropzone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#F8FAFC]">
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
                    className="flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-white/15 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#FF6B00]/50 transition-all cursor-pointer group"
                  >
                    <Upload className="h-6 w-6 text-[#94A3B8] group-hover:text-[#FF6B00] transition-colors mb-2" />
                    <span className="text-xs font-medium text-[#F8FAFC]">
                      Click to browse or drop PDF specification
                    </span>
                    <span className="text-[11px] text-[#64748B] mt-0.5">
                      PDF format only (Max 5MB)
                    </span>
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-3.5 rounded-lg border border-[#FF6B00]/30 bg-[#FF6B00]/5 text-xs text-[#F8FAFC]">
                    <div className="flex items-center gap-2.5 truncate">
                      <FileText className="h-4 w-4 text-[#FF6B00] shrink-0" />
                      <span className="truncate font-medium">{selectedFile.name}</span>
                      <span className="text-[#64748B] text-[11px] shrink-0">
                        ({formatBytes(selectedFile.size)})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleClearFile}
                      className="p-1 rounded hover:bg-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors ml-2"
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
                  className={`p-3.5 rounded-lg border text-xs flex items-center gap-2 ${
                    status === "success"
                      ? "bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]"
                      : "bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
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
                className="w-full"
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
