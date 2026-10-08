"use client";

import { useSearchParams } from "next/navigation";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { Suspense } from "react";

function FormWithParams() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || undefined;
  return <EstimateForm defaultTopic={topic} />;
}

export function ContactFormClient() {
  return (
    <Suspense fallback={<div className="h-96 bg-stone rounded-2xl animate-pulse" />}>
      <FormWithParams />
    </Suspense>
  );
}
