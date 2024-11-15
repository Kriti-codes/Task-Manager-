import React from "react";

export function Button({ className = "", variant = "default", size = "default", children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
    ghost: "hover:bg-slate-100 hover:text-slate-900"
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
