/**
 * NewsletterForm Component
 * Email subscription form with validation and tracking
 */

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { useFormSubmit } from "@/lib/hooks";

export interface NewsletterFormProps {
  variant?: "inline" | "hero" | "sidebar";
  title?: string;
  description?: string;
}

export function NewsletterForm({
  variant = "inline",
  title = "Get the Dividend Starter Pack",
  description = "Join 1000+ UK investors getting weekly dividend insights straight to their inbox.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { isSubmitting, isSuccess, isError, message, submitForm, resetForm } =
    useFormSubmit({
      onSuccess: () => {
        setEmail("");
        setName("");
      },
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    await submitForm({ email, name });
  };

  const variantClasses = {
    inline: "bg-[#F5F7F9] p-8 rounded-lg",
    hero: "bg-white p-8 rounded-lg shadow-lg max-w-md",
    sidebar: "bg-[#0E2A3B] text-white p-6 rounded-lg",
  };

  return (
    <div className={variantClasses[variant]}>
      <h3
        className={`text-2xl font-bold mb-2 ${
          variant === "sidebar" ? "text-white" : "text-[#0E2A3B]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-6 ${
          variant === "sidebar" ? "text-gray-200" : "text-[#34495E]"
        }`}
      >
        {description}
      </p>

      {isSuccess && (
        <Alert variant="success" title="Success!" onClose={resetForm}>
          {message}
        </Alert>
      )}

      {isError && (
        <Alert variant="error" title="Error" onClose={resetForm}>
          {message}
        </Alert>
      )}

      {!isSuccess && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className={variant === "sidebar" ? "bg-white" : ""}
          />

          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className={variant === "sidebar" ? "bg-white" : ""}
          />

          <Button
            type="submit"
            variant={variant === "sidebar" ? "secondary" : "primary"}
            size="lg"
            isLoading={isSubmitting}
            className="w-full"
          >
            Get Free Access
          </Button>

          <p
            className={`text-xs ${
              variant === "sidebar" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  );
}
