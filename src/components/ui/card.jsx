import React from "react";

export function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-6 ${className}`} {...props} />;
}

