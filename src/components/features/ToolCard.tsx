/**
 * ToolCard Component
 * Client component for interactive tool cards
 */

"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface ToolCardProps {
  title: string;
  description: string;
  downloadLink: string;
  features: string[];
}

export function ToolCard({
  title,
  description,
  downloadLink,
  features,
}: ToolCardProps) {
  return (
    <Card title={title} description={description}>
      <div className="mb-4">
        <h4 className="font-semibold text-sm text-[#0E2A3B] mb-2">Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-[#34495E] flex items-start">
              <span className="text-[#2ECC71] mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <a href={downloadLink} download>
        <Button variant="secondary" size="md" className="w-full">
          Download Free
        </Button>
      </a>
    </Card>
  );
}
