/**
 * Breadcrumbs Component
 * Navigation breadcrumbs for better UX and SEO
 */

import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-[#16A085] hover:text-[#0E2A3B]">
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast || !item.href ? (
                <span
                  className="text-[#34495E] font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#16A085] hover:text-[#0E2A3B]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
