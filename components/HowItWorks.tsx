const steps = [
  {
    number: "01",
    title: "Capture the noise",
    description:
      "Start with messy notes, prompts, screenshots, conversations, links, or scattered data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#14B8A6" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#14B8A6" strokeWidth="1.5" opacity="0.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#14B8A6" strokeWidth="1.5" opacity="0.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#14B8A6" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sift for meaning",
    description:
      "Identify what matters, remove friction, and clarify the actual intent.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 6h18L14 13v6l-4-2v-4L3 6z" stroke="#14B8A6" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Connect the system",
    description:
      "Use AI workflows and integrations to structure the work and move information between tools.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="5" cy="12" r="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <circle cx="19" cy="6" r="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <circle cx="19" cy="18" r="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M7.5 12L16.5 7M7.5 12L16.5 17" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Move forward",
    description:
      "Deliver clear outputs, usable tools, and better next steps.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M14 7l5 5-5 5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8FAFC] py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            How it works
          </h2>
        </div>

        {/* Steps with connectors */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-[#E2E8F0] via-[#14B8A6]/30 to-[#E2E8F0]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center">
                {/* Step badge + icon */}
                <div className="relative flex items-center justify-center mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#E2E8F0] shadow-sm flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#14B8A6] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
