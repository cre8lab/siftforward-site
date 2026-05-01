import Link from "next/link";
import FadeIn from "./FadeIn";

type Direction = {
  id: string;
  status: string;
  statusBg: string;
  statusBorder: string;
  statusText: string;
  statusDot: string;
  title: string;
  hook: string;
  description: string;
  note?: string;
  link: string | null;
  cta: string | null;
  icon: React.ReactNode;
};

const directions: Direction[] = [
  {
    id: "promptbridge",
    status: "In development",
    statusBg: "#F0F9FF",
    statusBorder: "#bae6fd",
    statusText: "#0369a1",
    statusDot: "#06B6D4",
    title: "PromptBridge",
    hook: "You know what you mean. AI may not.",
    description:
      "Turns rough questions, notes, screenshots, and half-formed thoughts into clean, structured prompts. No login required. Privacy-aware by design.",
    link: "/promptbridge",
    cta: "See how it works",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="8" height="12" rx="1.5" stroke="#06B6D4" strokeWidth="1.5" opacity="0.5" />
        <path d="M10 11h4M12 8.5l3 2.5-3 2.5" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="5" width="6" height="12" rx="1.5" stroke="#06B6D4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "daily-ai",
    status: "Coming soon",
    statusBg: "#F8FAFC",
    statusBorder: "#E2E8F0",
    statusText: "#64748B",
    statusDot: "#94a3b8",
    title: "Daily Use of AI",
    hook: "AI that fits the work you already do.",
    description:
      "Approachable, practical examples for everyday people — writing, planning, research, decisions, and local information. No jargon. No hype.",
    link: "/daily-ai",
    cta: "Learn more",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="8" r="3.5" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M4 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "showcase",
    status: "Live",
    statusBg: "#F0FDFA",
    statusBorder: "#99f6e4",
    statusText: "#0d9488",
    statusDot: "#14B8A6",
    title: "AI in Action",
    hook: "Real inputs. Real outputs.",
    description:
      "A growing collection of practical examples: messy input goes in, structured output comes out. Proof that the process works — not a slide deck.",
    link: "/showcase",
    cta: "See examples",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 11h3l2.5-5 3 10 2.5-5H19" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "community",
    status: "Early planning",
    statusBg: "#FFFBEB",
    statusBorder: "#fde68a",
    statusText: "#92400e",
    statusDot: "#f59e0b",
    title: "Community Record",
    hook: "Local facts. Visible sources.",
    description:
      "A civic data project built on public records and source links. Human review required before anything is published. Facts first — no AI auto-publishing.",
    note: "Starting with VillageOfGreenville.com",
    link: null,
    cta: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 18V9l8-5 8 5v9" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="13" width="6" height="5" rx="1" stroke="#f59e0b" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "field",
    status: "Future direction",
    statusBg: "#F8FAFC",
    statusBorder: "#E2E8F0",
    statusText: "#64748B",
    statusDot: "#94a3b8",
    title: "Field Systems",
    hook: "Signal from the ground up.",
    description:
      "Future applied work: drones, RF, telecom site survey, geospatial workflows, and signal processing for agriculture and Great Lakes environments.",
    link: null,
    cta: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3v3M11 16v3M3 11h3M16 11h3" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="11" cy="11" r="4" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="1.5" fill="#94a3b8" opacity="0.6" />
      </svg>
    ),
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
              What we&apos;re building
            </h2>
            <p className="text-[#64748B] max-w-xl">
              SiftForward is an applied software platform with several active and planned directions. Each one focuses on turning messy information into something useful.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {directions.map((dir, i) => (
            <FadeIn key={dir.id} delay={i * 70}>
              <div className="group flex flex-col h-full bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#14B8A6]/20 transition-all duration-200">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: dir.statusBg,
                      border: `1px solid ${dir.statusBorder}`,
                      color: dir.statusText,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: dir.statusDot }}
                    />
                    {dir.status}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${dir.statusDot}12`, border: `1px solid ${dir.statusDot}25` }}
                  >
                    {dir.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2 mb-4">
                  <h3 className="text-base font-bold text-[#0F172A]">{dir.title}</h3>
                  <p className="text-sm font-medium text-[#1E293B]">{dir.hook}</p>
                  <p className="text-sm text-[#64748B] leading-relaxed">{dir.description}</p>
                  {dir.note && (
                    <p className="text-[11px] font-medium text-[#94a3b8] pt-1">{dir.note}</p>
                  )}
                </div>

                {/* CTA */}
                {dir.link && dir.cta && (
                  <div className="pt-2 border-t border-[#F1F5F9]">
                    <a
                      href={dir.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] hover:text-[#14B8A6] transition-colors"
                    >
                      {dir.cta}
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <path d="M2.5 6.5h8M7.5 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                )}
                {!dir.link && (
                  <div className="pt-2 border-t border-[#F1F5F9]">
                    <span className="text-xs text-[#CBD5E1] font-medium">More details coming</span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
