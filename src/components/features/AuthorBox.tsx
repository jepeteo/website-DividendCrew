/**
 * AuthorBox Component
 * Display author information with avatar and bio
 */

import React from "react";

export interface AuthorBoxProps {
  name: string;
  bio?: string;
  avatar?: string;
}

export function AuthorBox({ name, bio, avatar }: AuthorBoxProps) {
  return (
    <div className="bg-[#F5F7F9] rounded-lg p-6 flex items-start space-x-4">
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover shrink-0"
        />
      )}

      <div className="flex-1">
        <h3 className="text-lg font-bold text-[#0E2A3B] mb-1">
          Written by {name}
        </h3>
        {bio && <p className="text-sm text-[#34495E]">{bio}</p>}
      </div>
    </div>
  );
}
