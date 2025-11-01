/**
 * InlineCTA Component
 * Inline call-to-action block for content
 */

"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export interface InlineCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "secondary";
}

export function InlineCTA({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
}: InlineCTAProps) {
  const bgColor = variant === "primary" ? "bg-[#16A085]" : "bg-[#0E2A3B]";

  return (
    <div className={`${bgColor} text-white rounded-lg p-8 my-8 text-center`}>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-lg mb-6 opacity-90">{description}</p>
      <Link href={buttonHref}>
        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-[#0E2A3B] hover:bg-gray-100"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}
