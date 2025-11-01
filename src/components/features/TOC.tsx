/**
 * TOC (Table of Contents) Component
 * Auto-generated table of contents from headings
 */

"use client";

import React, { useEffect, useState } from "react";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface TOCProps {
  contentSelector?: string;
}

export function TOC({ contentSelector = "article" }: TOCProps) {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const content = document.querySelector(contentSelector);
    if (!content) return;

    const headings = content.querySelectorAll("h2, h3");
    const tocItems: TOCItem[] = [];

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id =
          heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "";
      }

      tocItems.push({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      });
    });

    setItems(tocItems);

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [contentSelector]);

  if (items.length === 0) return null;

  return (
    <nav className="bg-[#F5F7F9] rounded-lg p-6 sticky top-20">
      <h2 className="text-lg font-bold text-[#0E2A3B] mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ marginLeft: `${(item.level - 2) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              className={`
                text-sm hover:text-[#16A085] transition-colors
                ${
                  activeId === item.id
                    ? "text-[#16A085] font-semibold"
                    : "text-[#34495E]"
                }
              `}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
