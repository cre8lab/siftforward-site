import Link from "next/link";
import HeroPortalBackground from "./HeroPortalBackground";

const outputCards = [
  { title: "AI Workflows", desc: "Extract. Enrich. Understand.", color: "#14B8A6" },
  { title: "API Integrations", desc: "Connect and automate.", color: "#06B6D4" },
  { title: "Structured Insights", desc: "Clear. Accurate. Actionable.", color: "#22C55E" },
];

const tools = ["Slack", "Drive", "Notion", "Teams", "API", "Email"];

export default function Hero() {
  return (
    <section className="bg-white pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-[#F0FDFA] border border-[#99f6e4] text-[#0d9488] text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
              Wisconsin-rooted applied software
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0F172A] leading-[1.1] tracking-tight">
              Finding meaning
              <br />
              <span className="text-[#14B8A6]">inside noise.</span>
            </h1>

            <p className="text-lg text-[#64748B] leading-relaxed max-w-lg">
              SiftForward builds practical software, AI workflows, and API integrations that turn messy information into clear, useful action.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/showcase"
                className="inline-flex items-center gap-2 bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1E293B] transition-colors text-sm"
              >
                See what we&apos;re building
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-1.5 text-[#0F172A] font-semibold text-sm hover:text-[#14B8A6] transition-colors"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#F8FAFC] to-[#EFF6FF] border border-[#d1fae5] shadow-2xl">
      {/* Canvas animation layer — noise field drifting toward the sift core */}
      <HeroPortalBackground />

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0F172A 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.025,
        }}
      />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Particle cloud SVG */}
          <div className="flex-shrink-0">
            <ParticleCloud />
          </div>

          {/* Output cards */}
          <div className="flex-1 space-y-3">
            {outputCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-3 bg-white rounded-2xl border border-[#E2E8F0] px-4 py-3.5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${card.color}18` }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2.5 6.5L5.5 9.5L10.5 3.5" stroke={card.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#0F172A] truncate">{card.title}</div>
                  <div className="text-xs text-[#64748B] truncate">{card.desc}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-[#CBD5E1]" aria-hidden="true">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Tool chips row */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0]/70">
          <p className="text-[10px] font-semibold text-[#94a3b8] uppercase tracking-wider text-center mb-2.5">
            Your tools. Your people. Real results.
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-medium text-[#64748B] bg-white border border-[#E2E8F0] px-3 py-1 rounded-full shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ParticleCloud() {
  return (
    <svg
      width="120"
      height="200"
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer column — large dots */}
      <circle cx="10" cy="45" r="5" fill="#94a3b8" opacity="0.65" />
      <circle cx="9" cy="100" r="6" fill="#94a3b8" opacity="0.80" />
      <circle cx="10" cy="155" r="5" fill="#94a3b8" opacity="0.65" />

      {/* Second column */}
      <circle cx="28" cy="22" r="4" fill="#94a3b8" opacity="0.50" />
      <circle cx="27" cy="68" r="3.5" fill="#94a3b8" opacity="0.58" />
      <circle cx="28" cy="100" r="3" fill="#94a3b8" opacity="0.42" />
      <circle cx="27" cy="132" r="3.5" fill="#94a3b8" opacity="0.58" />
      <circle cx="28" cy="178" r="4" fill="#94a3b8" opacity="0.50" />

      {/* Third column */}
      <circle cx="46" cy="10" r="3" fill="#94a3b8" opacity="0.38" />
      <circle cx="45" cy="50" r="2.8" fill="#94a3b8" opacity="0.44" />
      <circle cx="46" cy="82" r="2.5" fill="#94a3b8" opacity="0.38" />
      <circle cx="46" cy="100" r="2" fill="#94a3b8" opacity="0.32" />
      <circle cx="46" cy="118" r="2.5" fill="#94a3b8" opacity="0.38" />
      <circle cx="45" cy="150" r="2.8" fill="#94a3b8" opacity="0.44" />
      <circle cx="46" cy="190" r="3" fill="#94a3b8" opacity="0.38" />

      {/* Fourth column — near convergence */}
      <circle cx="63" cy="30" r="2" fill="#94a3b8" opacity="0.28" />
      <circle cx="62" cy="65" r="2" fill="#94a3b8" opacity="0.32" />
      <circle cx="63" cy="100" r="1.8" fill="#94a3b8" opacity="0.28" />
      <circle cx="62" cy="135" r="2" fill="#94a3b8" opacity="0.32" />
      <circle cx="63" cy="170" r="2" fill="#94a3b8" opacity="0.28" />

      {/* Convergence lines — fanning inward to center point (78, 100) */}
      <path d="M14 45 Q46 70 78 100" stroke="#94a3b8" strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round" />
      <path d="M12 100 L78 100" stroke="#94a3b8" strokeWidth="1.1" opacity="0.45" fill="none" strokeLinecap="round" />
      <path d="M14 155 Q46 130 78 100" stroke="#94a3b8" strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round" />
      <path d="M30 22 Q54 60 78 100" stroke="#94a3b8" strokeWidth="0.8" opacity="0.28" fill="none" strokeLinecap="round" />
      <path d="M30 178 Q54 140 78 100" stroke="#94a3b8" strokeWidth="0.8" opacity="0.28" fill="none" strokeLinecap="round" />

      {/* Double-chevron forward arrows — teal */}
      <path d="M80 80 L100 100 L80 120" stroke="#14B8A6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M97 80 L117 100 L97 120" stroke="#14B8A6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
