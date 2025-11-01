/**
 * Alert Component
 * Display success, error, warning, or info messages
 */

import React from "react";

export interface AlertProps {
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const variantConfig = {
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    icon: "✓",
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    icon: "✕",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    icon: "⚠",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    icon: "ℹ",
  },
};

export function Alert({
  variant = "info",
  title,
  children,
  onClose,
}: AlertProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={`
        ${config.bg} ${config.border} ${config.text}
        border-l-4 p-4 rounded-lg
        flex items-start
      `}
      role="alert"
    >
      <span className="text-xl mr-3 flex-shrink-0">{config.icon}</span>

      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="ml-3 flex-shrink-0 text-xl hover:opacity-70 transition-opacity"
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
}
