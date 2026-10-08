"use client";

import { useState, useRef } from "react";
import { FormField, Input, Textarea, Select } from "./FormField";
import { Upload, X, Check, Image as ImageIcon, ShieldCheck } from "lucide-react";

const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // 4 MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

interface EstimateFormProps {
  defaultTopic?: string;
}

interface FormErrors {
  [key: string]: string;
}

export function EstimateForm({ defaultTopic }: EstimateFormProps) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    description: defaultTopic ? `Inquiring about ${defaultTopic}` : "",
    timeframe: "",
    materialsStatus: "",
    paintingNeeded: "",
    address: "",
    city: "",
    honeypot: "", // spam trap
  });

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => {
      const n = { ...prev };
      delete n[field];
      return n;
    });
  };

  const validateStep1 = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^\+?[\d\s()-]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!/^\d{5}$/.test(form.zip)) e.zip = "Enter a 5-digit zip code.";
    if (!form.description.trim()) e.description = "Please describe the work needed.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    const allFiles = [...files, ...newFiles];

    if (allFiles.length > MAX_FILES) {
      setErrors((prev) => ({ ...prev, photos: `Maximum ${MAX_FILES} photos allowed.` }));
      return;
    }

    const invalidType = newFiles.find((f) => !ACCEPTED_TYPES.includes(f.type));
    if (invalidType) {
      setErrors((prev) => ({
        ...prev,
        photos: `"${invalidType.name}" is not a supported format. Use JPEG, PNG, or WebP.`,
      }));
      return;
    }

    const totalSize = allFiles.reduce((sum, f) => sum + f.size, 0);
    if (totalSize > MAX_TOTAL_BYTES) {
      setErrors((prev) => ({
        ...prev,
        photos: "Total file size must be under 4 MB. Try smaller images.",
      }));
      return;
    }

    setFiles(allFiles);
    setErrors((prev) => {
      const n = { ...prev };
      delete n.photos;
      return n;
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // spam trap
    if (!validateStep1()) {
      setStep(1);
      return;
    }
    setSubmitting(true);
    setServerError("");

    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (k !== "honeypot") body.append(k, v);
      });
      files.forEach((f) => body.append("photos", f));

      const res = await fetch("/api/estimate", { method: "POST", body });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setServerError(data.error || "Something went wrong. Please try again or call us.");
        return;
      }

      setSuccess(true);
    } catch {
      setServerError("Could not submit the form. Please call (484) 272-5220.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-cloud rounded-3xl p-8 sm:p-12 border border-border text-center shadow-sm space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-display text-charred">Estimate Request Received</h3>
        <p className="text-base text-iron max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-charred">{form.name}</strong>. Our regional dispatch team has received your project details and will review them shortly.
        </p>
        <div className="p-4 rounded-2xl bg-stone/60 border border-border text-xs text-iron max-w-sm mx-auto space-y-1 text-left">
          <p><strong className="text-charred">Target Response:</strong> Within 1 business day</p>
          <p><strong className="text-charred">Confirmation sent to:</strong> {form.email}</p>
          <p><strong className="text-charred">Urgent questions:</strong> Call (484) 272-5220</p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSuccess(false);
              setStep(1);
              setFiles([]);
            }}
            className="text-xs font-utility text-flame-button hover:underline uppercase tracking-wider font-semibold"
          >
            Submit Another Request →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-cloud rounded-3xl p-6 sm:p-8 lg:p-10 border border-border shadow-sm space-y-6"
    >
      {/* Spam trap — hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={set("honeypot")}
        />
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-2 p-1.5 bg-stone/80 rounded-2xl border border-border w-full sm:w-fit">
        <button
          type="button"
          onClick={() => setStep(1)}
          className={`flex-1 sm:flex-initial text-xs font-body font-semibold px-4 py-2 rounded-xl transition-all ${
            step === 1
              ? "bg-flame-button text-white shadow-sm"
              : "text-iron hover:text-charred"
          }`}
        >
          1. Scope &amp; Contact
        </button>
        <button
          type="button"
          onClick={() => {
            if (validateStep1()) setStep(2);
          }}
          className={`flex-1 sm:flex-initial text-xs font-body font-semibold px-4 py-2 rounded-xl transition-all ${
            step === 2
              ? "bg-flame-button text-white shadow-sm"
              : "text-iron hover:text-charred"
          }`}
        >
          2. Preferences <span className="text-[11px] font-normal opacity-80">(optional)</span>
        </button>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <FormField label="Full Name" name="name" error={errors.name} required>
            <Input
              name="name"
              value={form.name}
              onChange={set("name")}
              placeholder="e.g. Robert Vance"
              error={errors.name}
            />
          </FormField>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Mobile Number" name="phone" error={errors.phone} required>
              <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="(555) 123-4567"
                error={errors.phone}
              />
            </FormField>
            <FormField label="Email Address" name="email" error={errors.email} required>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@email.com"
                error={errors.email}
              />
            </FormField>
          </div>

          <FormField label="5-Digit Zip Code" name="zip" error={errors.zip} required>
            <Input
              name="zip"
              value={form.zip}
              onChange={set("zip")}
              placeholder="75067"
              maxLength={5}
              className="max-w-[180px]"
              error={errors.zip}
            />
          </FormField>

          <FormField label="Describe the Work Needed" name="description" error={errors.description} required>
            <Textarea
              name="description"
              value={form.description}
              onChange={set("description")}
              placeholder="Please provide details about what needs repair or renovation (e.g. bathroom tile replacement, drywall patching, emergency plumbing diagnostics)."
              error={errors.description}
            />
          </FormField>

          {/* Photo upload dropzone */}
          <FormField
            label={`Attach Project Photos (optional, max ${MAX_FILES})`}
            name="photos"
            error={errors.photos}
          >
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={ACCEPTED_TYPES.join(",")}
                onChange={handleFileChange}
                className="hidden"
                id="photos"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border hover:border-flame-button/60 rounded-2xl p-4 sm:p-6 text-center cursor-pointer transition-all bg-stone/40 hover:bg-stone/70 group"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-cloud border border-border group-hover:border-flame-button/40 flex items-center justify-center text-iron group-hover:text-flame-button transition-colors">
                  <Upload className="w-5 h-5" />
                </div>
                <p className="text-sm font-body font-semibold text-charred">
                  Tap to upload photos or diagrams
                </p>
                <p className="text-xs text-iron/70 mt-1">
                  JPEG, PNG, WebP • Up to {MAX_FILES} photos (under 4 MB total)
                </p>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-utility uppercase tracking-wider text-iron font-semibold">
                    Attached Files ({files.length}/{MAX_FILES}):
                  </p>
                  <ul className="space-y-1.5">
                    {files.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-stone/70 border border-border text-xs"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <ImageIcon className="w-4 h-4 text-flame-button shrink-0" />
                          <span className="truncate font-medium text-charred">{f.name}</span>
                          <span className="text-iron/60 text-[11px] shrink-0">
                            ({(f.size / 1024).toFixed(0)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(i);
                          }}
                          className="p-1 rounded-lg hover:bg-error/10 text-error transition-colors shrink-0"
                          title="Remove image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FormField>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="button"
              onClick={() => {
                if (validateStep1()) setStep(2);
              }}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-body font-semibold text-white bg-flame-button hover:bg-flame-hover rounded-xl shadow-md transition-all text-center"
            >
              Continue to Step 2 →
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-body font-semibold border-2 border-charred text-charred rounded-xl hover:bg-charred hover:text-cloud transition-all disabled:opacity-50 text-center"
            >
              {submitting ? "Submitting..." : "Submit Project Scope"}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <p className="text-xs text-iron/80">
            These additional details are optional, but allow us to assemble an accurate labor and materials breakdown faster.
          </p>

          <FormField label="Preferred Timeframe" name="timeframe">
            <Select name="timeframe" value={form.timeframe} onChange={set("timeframe") as any}>
              <option value="">Select timeframe...</option>
              <option value="emergency-today">Emergency / Urgent (Next 24h)</option>
              <option value="within-2-weeks">Within next 2 weeks</option>
              <option value="within-2-months">Within 1–2 months</option>
              <option value="flexible">Flexible / Planning ahead</option>
            </Select>
          </FormField>

          <FormField label="Materials & Fixtures" name="materialsStatus">
            <Select name="materialsStatus" value={form.materialsStatus} onChange={set("materialsStatus") as any}>
              <option value="">Select materials preference...</option>
              <option value="bestfix-supplies">I would like BestFix Home to source all materials</option>
              <option value="homeowner-supplies">I have purchased / will supply all fixtures and materials</option>
              <option value="consultation-needed">Need trade advice on materials selection</option>
            </Select>
          </FormField>

          <FormField label="Does the project require painting?" name="paintingNeeded">
            <Select name="paintingNeeded" value={form.paintingNeeded} onChange={set("paintingNeeded") as any}>
              <option value="">Select...</option>
              <option value="yes">Yes, include wall or trim painting</option>
              <option value="no">No painting required</option>
              <option value="maybe">Unsure / Depends on repair patch</option>
            </Select>
          </FormField>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Street Address (optional)" name="address">
              <Input
                name="address"
                value={form.address}
                onChange={set("address")}
                placeholder="123 Main St"
              />
            </FormField>
            <FormField label="City (optional)" name="city">
              <Input
                name="city"
                value={form.city}
                onChange={set("city")}
                placeholder="Lewisville"
              />
            </FormField>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-body font-semibold text-white bg-flame-button hover:bg-flame-hover rounded-xl shadow-md transition-all disabled:opacity-50 text-center"
            >
              {submitting ? "Submitting..." : "Submit Estimate Request"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-body font-semibold text-iron hover:text-charred border border-border rounded-xl transition-all text-center"
            >
              ← Back to Step 1
            </button>
          </div>
        </div>
      )}

      {serverError && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-xl" role="alert">
          <p className="text-sm text-error font-body">{serverError}</p>
        </div>
      )}

      <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-iron/60">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Your contact info is strictly confidential</span>
        </span>
        <a href="/privacy" className="hover:text-flame-button hover:underline">
          Privacy Policy
        </a>
      </div>
    </form>
  );
}
