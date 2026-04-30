const cards = [
  {
    icon: "✦",
    title: "Prompt & Intent Cleanup",
    description:
      "Turn rough questions, notes, and ideas into clear prompts and structured requests.",
    accent: "#14B8A6",
  },
  {
    icon: "⟳",
    title: "Workflow Automation",
    description:
      "Reduce repetitive steps and move information through practical AI-assisted workflows.",
    accent: "#06B6D4",
  },
  {
    icon: "⟷",
    title: "API Integration",
    description:
      "Connect tools, data, and people across the systems you already use.",
    accent: "#14B8A6",
  },
  {
    icon: "◈",
    title: "Applied Software",
    description:
      "Build simple tools that make useful ideas easier to use in everyday work.",
    accent: "#06B6D4",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#F8FAFC] py-20">
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
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
              >
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">
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
