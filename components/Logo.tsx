"use client";

import Link from "next/link";

export type LogoProps = {
  variant?: "light" | "dark";
  mode?: "full" | "mark";
  className?: string;
  linked?: boolean;
};

function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="12 12 104 104"
      role="img"
      aria-label="CartesianSchool logo mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="cs-mark-gradient"
          x1="12"
          y1="12"
          x2="116"
          y2="116"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="52%" stopColor="#5B3DF5" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      <rect x="12" y="12" width="104" height="104" rx="28" fill="url(#cs-mark-gradient)" />

      <path
        d="M86 39H63C48.7 39 38 49.8 38 64C38 78.2 48.7 89 63 89H85"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M58 56L50 64L58 72"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M70 56L78 64L70 72"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect x="88" y="27" width="11" height="11" rx="3" fill="#FFFFFF" opacity="0.96" />
      <rect x="100" y="39" width="8" height="8" rx="2" fill="#FFFFFF" opacity="0.88" />
      <rect x="84" y="43" width="7" height="7" rx="2" fill="#FFFFFF" opacity="0.82" />
    </svg>
  );
}

function LogoContent({
  variant,
  mode,
  className,
}: {
  variant: "light" | "dark";
  mode: "full" | "mark";
  className?: string;
}) {
  const textColor = variant === "dark" ? "text-white" : "text-slate-950";

  if (mode === "mark") {
    return <LogoMark className={className ?? "h-9 w-9"} />;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-11 w-11 shrink-0 drop-shadow-lg" />

      <span
        className={`inline-flex items-baseline whitespace-nowrap text-xl font-bold tracking-tight leading-none ${textColor}`}
      >
        <span>Cartesian</span>
        <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          School
        </span>
      </span>
    </span>
  );
}

export function Logo({
  variant = "light",
  mode = "full",
  className,
  linked = true,
}: LogoProps) {
  const logo = <LogoContent variant={variant} mode={mode} className={className} />;

  if (!linked) {
    return logo;
  }

  return (
    <Link href="/" aria-label="CartesianSchool home" className="inline-flex items-center">
      {logo}
    </Link>
  );
}
