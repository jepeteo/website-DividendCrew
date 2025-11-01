/**
 * ReviewCard Component
 * Display review with pros, cons, and TL;DR
 */

"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export interface ReviewCardProps {
  title: string;
  excerpt: string;
  rating: number;
  pros: string[];
  cons: string[];
  image?: {
    src: string;
    alt: string;
  };
  affiliateLink?: string;
  reviewLink: string;
}

export function ReviewCard({
  title,
  excerpt,
  rating,
  pros,
  cons,
  image,
  affiliateLink,
  reviewLink,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {image && (
        <div className="relative w-full h-48 bg-[#F5F7F9]">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[#0E2A3B]">{title}</h3>
          <div className="flex items-center">
            <span className="text-[#2ECC71] font-bold text-lg mr-1">
              {rating.toFixed(1)}
            </span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>

        <p className="text-[#34495E] mb-4 line-clamp-2">{excerpt}</p>

        {/* Pros */}
        <div className="mb-3">
          <h4 className="font-semibold text-sm text-[#2ECC71] mb-2">✓ Pros</h4>
          <ul className="text-sm text-[#34495E] space-y-1">
            {pros.slice(0, 2).map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#2ECC71] mr-2">•</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-red-600 mb-2">✕ Cons</h4>
          <ul className="text-sm text-[#34495E] space-y-1">
            {cons.slice(0, 2).map((con, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 pt-0 space-y-2">
        <Link href={reviewLink} className="block">
          <Button variant="primary" size="md" className="w-full">
            Read Full Review
          </Button>
        </Link>

        {affiliateLink && (
          <a
            href={affiliateLink}
            target="_blank"
            rel="nofollow sponsored"
            className="block text-center text-[#16A085] hover:text-[#0E2A3B] text-sm font-medium"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  );
}
