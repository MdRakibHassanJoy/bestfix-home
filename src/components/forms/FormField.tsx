"use client";

import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export function FormField({ label, name, error, required, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-body font-semibold text-charred">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-error font-body" role="alert" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-4 py-3 sm:py-2.5 border rounded-xl text-base sm:text-sm font-body text-charred bg-cloud placeholder:text-iron/50 focus:border-flame-button focus:ring-2 focus:ring-flame-button/20 outline-none transition-all ${
        error ? "border-error ring-1 ring-error/20" : "border-border hover:border-iron/40"
      } ${className}`}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error && props.name ? `${props.name}-error` : undefined}
      {...props}
    />
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export function Textarea({ error, className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full px-4 py-3 sm:py-2.5 border rounded-xl text-base sm:text-sm font-body text-charred bg-cloud placeholder:text-iron/50 focus:border-flame-button focus:ring-2 focus:ring-flame-button/20 outline-none transition-all resize-y min-h-[110px] ${
        error ? "border-error ring-1 ring-error/20" : "border-border hover:border-iron/40"
      } ${className}`}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error && props.name ? `${props.name}-error` : undefined}
      {...props}
    />
  );
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  error?: string;
  children: React.ReactNode;
}

export function Select({ error, className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full px-4 py-3 sm:py-2.5 border rounded-xl text-base sm:text-sm font-body text-charred bg-cloud focus:border-flame-button focus:ring-2 focus:ring-flame-button/20 outline-none transition-all ${
        error ? "border-error ring-1 ring-error/20" : "border-border hover:border-iron/40"
      } ${className}`}
      {...(props as any)}
    >
      {children}
    </select>
  );
}
