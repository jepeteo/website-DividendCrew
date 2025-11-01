/**
 * Card Component
 * Reusable card container with optional image and actions
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CardProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  href?: string;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  image,
  href,
  footer,
  className = "",
  children,
}: CardProps) {
  const CardContent = () => (
    <div
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        hover:shadow-lg transition-shadow duration-300
        ${className}
      `}
    >
      {image && (
        <div className="relative w-full h-48 bg-[#F5F7F9]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0E2A3B] mb-2">{title}</h3>

        {description && (
          <p className="text-[#34495E] mb-4 line-clamp-3">{description}</p>
        )}

        {children}
      </div>

      {footer && (
        <div className="px-6 py-4 bg-[#F5F7F9] border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
