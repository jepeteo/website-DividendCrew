/**
 * TOC (Table of Contents) Component
 * Auto-generated table of contents from headings
 */

"use client";

import React, { useEffect, useState, useRef, useCallback, useSyncExternalStore } from "react";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface TOCProps {
  contentSelector?: string;
}

// Custom hook to extract TOC items from DOM
function useTOCItems(contentSelector: string): TOCItem[] {
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return "[]";
    const content = document.querySelector(contentSelector);
    if (!content) return "[]";

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

    return JSON.stringify(tocItems);
  }, [contentSelector]);

  const subscribe = useCallback((callback: () => void) => {
    // Subscribe to DOM mutations
    const observer = new MutationObserver(callback);
    const content = document.querySelector(contentSelector);
    if (content) {
      observer.observe(content, { childList: true, subtree: true });
    }
    return () => observer.disconnect();
  }, [contentSelector]);

  const getServerSnapshot = useCallback(() => "[]", []);

  const itemsJson = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return JSON.parse(itemsJson) as TOCItem[];
}

export function TOC({ contentSelector = "article" }: TOCProps) {
  const items = useTOCItems(contentSelector);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const content = document.querySelector(contentSelector);
    if (!content) return;

    const headings = content.querySelectorAll("h2, h3");

    // Intersection Observer for active section
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-100px 0px -80% 0px",
    });

    headings.forEach((heading) => observerRef.current?.observe(heading));

    return () => observerRef.current?.disconnect();
  }, [contentSelector, handleIntersection]);

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
