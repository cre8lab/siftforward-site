import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-[#F0FDFA] border border-[#99f6e4] text-[#0d9488] text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
              Wisconsin-rooted applied software
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
              Finding meaning
              <br />
              <span className="text-[#14B8A6]">inside noise.</span>
            </h1>

            <p className="text-lg text-[#64748B] leading-relaxed max-w-lg">
              SiftForward builds practical software, AI workflows, and API integrations that turn messy information into clear, useful action.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/showcase"
                className="bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1E293B] transition-colors text-sm"
              >
                See what we&apos;re building
              </Link>
              <Link
                href="/#how-it-works"
                className="border border-[#E2E8F0] text-[#0F172A] font-semibold px-6 py-3 rounded-full hover:bg-[#F8FAFC] transition-colors text-sm"
              >
                Learn more
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <Stat value="Practical" label="No hype, just tools" />
              <div className="w-px h-8 bg-[#E2E8F0]" />
              <Stat value="Connected" label="Works with your stack" />
              <div className="w-px h-8 bg-[#E2E8F0]" />
              <Stat value="Clear" label="Signal over noise" />
            </div>
          </div>

          <div className="relative">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-sm font-bold text-[#0F172A]">{value}</div>
      <div className="text-xs text-[#64748B]">{label}</div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#f0f9ff] border border-[#E2E8F0] p-6 shadow-xl overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0F172A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative">
        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-5 text-center">
          Noise → Signal
        </div>

        <div className="grid grid-cols-[1fr,48px,1fr] items-center gap-3">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm">
            <div className="text-[10px] font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">
              Messy input
            </div>
            <div className="space-y-2">
              {[
                { text: "Rough notes", op: 1.0 },
                { text: "Screenshot idea", op: 0.65 },
                { text: "Slack thread", op: 0.85 },
                { text: "Article link", op: 0.55 },
                { text: "Half-formed question", op: 0.75 },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-2"
                  style={{ opacity: item.op }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#94a3b8] flex-shrink-0" />
                  <span className="text-xs text-[#1E293B] leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <FilterArrow />
          </div>

          <div className="space-y-2.5">
            {[
              { title: "AI Workflows", desc: "Extract. Enrich. Understand.", accent: "#14B8A6" },
              { title: "API Integrations", desc: "Connect and automate.", accent: "#06B6D4" },
              { title: "Structured Insights", desc: "Clear. Accurate. Actionable.", accent: "#22C55E" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-[#E2E8F0] px-3 py-2.5 shadow-sm"
                style={{ borderLeftWidth: "3px", borderLeftColor: card.accent }}
              >
                <div className="text-xs font-semibold" style={{ color: card.accent }}>
                  {card.title}
                </div>
                <div className="text-[11px] text-[#64748B] mt-0.5">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterArrow() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="20" fill="#F0FDFA" stroke="#99f6e4" strokeWidth="1.5" />
      <path d="M13 22 H31" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 15 L31 22 L24 29" stroke="#14B8A6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
