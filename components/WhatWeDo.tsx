const cards = [
  {
    title: "Prompt & Intent Cleanup",
    description:
      "Turn rough questions, notes, and ideas into clear prompts and structured requests.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="18" height="14" rx="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M6 8h10M6 11h7M6 14h5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#14B8A6",
  },
  {
    title: "Workflow Automation",
    description:
      "Reduce repetitive steps and move information through practical AI-assisted workflows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 11a7 7 0 0 1 14 0" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 11a7 7 0 0 1-14 0" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
        <path d="M16 8.5l2 2.5-2.5 1.5" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#06B6D4",
  },
  {
    title: "API Integration",
    description:
      "Connect tools, data, and people across the systems you already use.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="1.5" y="7" width="6" height="8" rx="1.5" stroke="#14B8A6" strokeWidth="1.5" />
        <rect x="14.5" y="7" width="6" height="8" rx="1.5" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M7.5 11h7" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.5 8.5l3 2.5-3 2.5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#14B8A6",
  },
  {
    title: "Applied Software",
    description:
      "Build simple tools that make useful ideas easier to use in everyday work.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 8l-3 3 3 3M17 8l3 3-3 3" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 5l-4 12" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "#06B6D4",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            What SiftForward does
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${card.accent}12`, border: `1px solid ${card.accent}25` }}
              >
                {card.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
