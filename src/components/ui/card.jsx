import React from "react";

export function Card({ className = "", children }) {
  return <div className={`rounded-2xl p-4 bg-[#1c1f26] ${className}`}>{children}</div>;
}

export function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
