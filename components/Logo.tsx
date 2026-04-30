import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
  showTagline?: boolean;
}

export default function Logo({ variant = "default", showTagline = true }: LogoProps) {
  const wordmarkColor = variant === "white" ? "text-white" : "text-[#0F172A]";
  const taglineColor = variant === "white" ? "text-[#94a3b8]" : "text-[#64748B]";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <LogoMark />
      <div className="leading-tight">
        <div className={`text-xl font-bold tracking-tight ${wordmarkColor}`}>
          Sift<span className="text-[#14B8A6]">Forward</span>
        </div>
        {showTagline && (
          <div className={`text-[11px] ${taglineColor} mt-0.5`}>
            Finding meaning inside noise.
          </div>
        )}
      </div>
    </Link>
  );
}

export function LogoMark({ width = 42, height = 28 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Scattered dot cloud — noise */}
      <circle cx="3" cy="8" r="1.9" fill="#94a3b8" opacity="0.65" />
      <circle cx="2.5" cy="14" r="2.3" fill="#94a3b8" opacity="0.82" />
      <circle cx="3" cy="20" r="1.9" fill="#94a3b8" opacity="0.65" />
      <circle cx="6.5" cy="4.5" r="1.5" fill="#94a3b8" opacity="0.48" />
      <circle cx="6.5" cy="23.5" r="1.5" fill="#94a3b8" opacity="0.48" />
      <circle cx="10.5" cy="3" r="1.2" fill="#94a3b8" opacity="0.34" />
      <circle cx="10.5" cy="25" r="1.2" fill="#94a3b8" opacity="0.34" />
      <circle cx="11" cy="11" r="1" fill="#94a3b8" opacity="0.38" />
      <circle cx="11" cy="17" r="1" fill="#94a3b8" opacity="0.38" />
      {/* Convergence lines */}
      <path d="M4.8 8.5 Q12 11 14 14" stroke="#94a3b8" strokeWidth="0.85" opacity="0.5" fill="none" strokeLinecap="round" />
      <path d="M4.5 14 L14 14" stroke="#94a3b8" strokeWidth="0.85" opacity="0.6" fill="none" strokeLinecap="round" />
      <path d="M4.8 19.5 Q12 17 14 14" stroke="#94a3b8" strokeWidth="0.85" opacity="0.5" fill="none" strokeLinecap="round" />
      {/* Double-chevron forward arrows — signal */}
      <path d="M14.5 8 L22 14 L14.5 20" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 8 L29.5 14 L22 20" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
