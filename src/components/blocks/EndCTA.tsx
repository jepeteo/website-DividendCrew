/**
 * EndCTA Component
 * End-of-content call-to-action with newsletter signup
 */

import React from "react";
import { NewsletterForm } from "@/components/features/NewsletterForm";

export interface EndCTAProps {
  title?: string;
  description?: string;
}

export function EndCTA({
  title = "Want More Dividend Insights?",
  description = "Join our newsletter to get weekly updates, portfolio insights, and exclusive UK dividend investing tips.",
}: EndCTAProps) {
  return (
    <div className="bg-gradient-to-r from-[#0E2A3B] to-[#16A085] rounded-lg p-8 md:p-12 my-12 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">{description}</p>

        <div className="max-w-md mx-auto">
          <NewsletterForm
            variant="hero"
            title="Get Started Today"
            description="Free Dividend Starter Pack included with your subscription."
          />
        </div>
      </div>
    </div>
  );
}
