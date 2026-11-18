"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Send,
  Upload,
  X,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Zap,
  TrendingUp,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { formatBytes } from "@/lib/utils";

export function AppointmentSection() {
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
      setStatusMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("mobile", formData.mobile);
      data.append("type", formData.type);
      data.append("message", formData.message || "Consultation requested from home page");
      if (selectedFile) {
        data.append("file", selectedFile);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to schedule appointment.");
      }

      setStatus("success");
      setStatusMessage("Your appointment request has been submitted! Our specialists will reach out shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        type: "Had a Product Idea?",
        message: "",
      });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err: unknown) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "An error occurred while submitting.");
    }
  };

  return (
    <section id="appointment" className="relative py-24 sm:py-32 overflow-hidden bg-white scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#FF6B00]/10 via-[#D946EF]/5 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#06B6D4]/10 via-[#6366F1]/5 to-transparent blur-[85px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Why Choose Qrious Tech Team LLP */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight block">
                Qrious Tech{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF5A36]">
                  Team LLP
                </span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 font-display">
                Why Choose <strong className="text-slate-900 font-bold">Qrious Tech Team LLP</strong>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                Schedule a Meeting with Our Specialists for Tailored Solutions and Insights.
              </p>
            </div>

            {/* 3 Core Benefits from Original Website */}
            <div className="space-y-6 pt-2">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#FF6B00]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-1">
                    Easier To Implement
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Make tech changes smoothly with our easy-to-use systems and helpful support.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#06B6D4]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-1">
                    Increase Growth Rates
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Grow your business faster with our tech that adapts and improves your work.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#6366F1]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center shrink-0">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-1">
                    Branding Of The Future
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Get your brand ready for tomorrow with our cool tech that attracts more people online.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Image Graphic + Working Appointment Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Real Graphic: images/book-an-appointment.png */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-4 shadow-sm text-center">
              <Image
                src="/images/book-an-appointment.png"
                alt="Book Your Appointment with Qrious Tech"
                width={500}
                height={300}
                className="w-full max-h-48 object-contain mx-auto transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Form Container */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xl relative">
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Book Your Appointment
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans">
                  We Help Customers Digital Transformation By IT Solutions
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 focus:border-[#FF6B00] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 focus:border-[#FF6B00] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 focus:border-[#FF6B00] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 focus:border-[#FF6B00] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Requirement Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 focus:border-[#FF6B00] bg-white transition"
                  >
                    <option value="Had a Product Idea?">Had a Product Idea?</option>
                    <option value="Need Dedicated Developers">Need Dedicated Developers</option>
                    <option value="AI / ML Integration">AI / ML Integration</option>
                    <option value="Power BI & Data Visualization">Power BI &amp; Data Visualization</option>
                    <option value="Salesforce / Cloud Consulting">Salesforce / Cloud Consulting</option>
                    <option value="Enterprise Architecture Modernization">Enterprise Architecture Modernization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Project Brief
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, timeline, or objectives..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 focus:border-[#FF6B00] transition resize-none"
                  />
                </div>

                {/* PDF File Attachment Upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Attach Project Brief (PDF, Max 5MB)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="appointment-pdf-upload"
                  />
                  {!selectedFile ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-3 text-center cursor-pointer transition ${
                        isDragging
                          ? "border-[#FF6B00] bg-[#FF6B00]/5"
                          : "border-slate-300 hover:border-[#FF6B00] bg-slate-50/50"
                      }`}
                    >
                      <Upload className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                      <span className="text-xs font-medium text-slate-600 block">
                        Drop your PDF here, or <span className="text-[#FF6B00]">browse</span>
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-slate-800 truncate">{selectedFile.name}</span>
                        <span className="text-slate-500 text-[10px]">({formatBytes(selectedFile.size)})</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleClearFile}
                        className="text-slate-400 hover:text-red-500 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Feedback Status Alert */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF6B00] to-[#FF5A36] hover:from-[#FF5A36] hover:to-[#FF6B00] shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#FF6B00]/35 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "loading" ? "Scheduling Appointment..." : "Schedule Appointment"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
