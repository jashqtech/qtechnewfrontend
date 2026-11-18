"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Upload, X, FileText, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatBytes } from "@/lib/utils";

interface ContactFormProps {
  defaultType?: string;
  defaultPosition?: string;
  className?: string;
  onSuccess?: () => void;
}

export function ContactForm({
  defaultType = "Had a Product Idea?",
  defaultPosition,
  className = "",
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    type: defaultType,
    message: defaultPosition ? `Applying for position: ${defaultPosition}` : "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if session storage has job application handoff details
    if (typeof window !== "undefined") {
      const position = sessionStorage.getItem("apply_position");
      if (position) {
        setFormData((prev) => ({
          ...prev,
          type: "We're Hiring",
          message: prev.message ? prev.message : `Applying for position: ${position}`,
        }));
      }
    }
  }, []);

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

    // Validate 10-digit mobile number
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
      const applyRecipient =
        typeof window !== "undefined" ? sessionStorage.getItem("apply_recipient") : null;
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
        setStatusMessage(
          json.message || "Thank you! Your inquiry has been dispatched to our engineering leadership."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          type: defaultType,
          message: "",
        });
        handleClearFile();
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Failed to submit request. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network communication error. Please reach out to info@qrioustech.com directly or call +91 63557 94606."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} id="postForm">
      {/* Name row */}
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
            placeholder="Ada"
            className="w-full rounded-lg border border-white/10 bg-gray-100 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
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
            placeholder="Lovelace"
            className="w-full rounded-lg border border-white/10 bg-gray-100 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
          />
        </div>
      </div>

      {/* Email and Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-[#F8FAFC]">
            Business Email <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ada@enterprise.com"
            className="w-full rounded-lg border border-white/10 bg-gray-100 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="mobile" className="text-xs font-semibold text-[#F8FAFC]">
            Mobile Phone (10 digits) <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            required
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="9876543210"
            className="w-full rounded-lg border border-white/10 bg-gray-100 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
          />
        </div>
      </div>

      {/* Inquiry Type */}
      <div className="space-y-1.5">
        <label htmlFor="type" className="text-xs font-semibold text-[#F8FAFC]">
          Inquiry Purpose <span className="text-[#FF6B00]">*</span>
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-white/10 bg-gray-100 px-3.5 py-2.5 text-sm text-black focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
        >
          <option value="Had a Product Idea?">Had a Product Idea? (Architecture & MVP)</option>
          <option value="Work with us">Work with us (Enterprise Partnership)</option>
          <option value="Request a Quote">Request a Quote / Project Estimation</option>
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
          className="w-full rounded-lg border border-white/10 bg-gray-100 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
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
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center p-6 rounded-xl border border-dashed transition-all cursor-pointer group ${isDragging
              ? "border-[#FF6B00] bg-[#FF6B00]/10"
              : "border-white/15 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#FF6B00]/50"
              }`}
          >
            <Upload className="h-6 w-6 text-[#94A3B8] group-hover:text-[#FF6B00] transition-colors mb-2" />
            <span className="text-xs font-medium text-[#F8FAFC]">
              {isDragging ? "Drop your PDF here" : "Click to browse or drop PDF specification"}
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
          className={`p-3.5 rounded-lg border text-xs flex items-center gap-2 transition-all ${status === "success"
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
        className="w-full justify-center group font-semibold shadow-lg shadow-[#FF6B00]/20"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <span>Submit Engineering Inquiry</span>
            <Send className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </Button>

      <p className="text-[11px] text-[#64748B] text-center pt-1">
        Protected under NDA. Your intellectual property and technical specifications remain confidential.
      </p>
    </form>
  );
}
