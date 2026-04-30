const steps = [
  {
    number: "01",
    title: "Capture the noise",
    description:
      "Start with messy notes, prompts, screenshots, conversations, links, or scattered data.",
    accent: "#14B8A6",
  },
  {
    number: "02",
    title: "Sift for meaning",
    description:
      "Identify what matters, remove friction, and clarify the actual intent.",
    accent: "#06B6D4",
  },
  {
    number: "03",
    title: "Connect the system",
    description:
      "Use AI workflows and integrations to structure the work and move information between tools.",
    accent: "#14B8A6",
  },
  {
    number: "04",
    title: "Move forward",
    description:
      "Deliver clear outputs, usable tools, and better next steps.",
    accent: "#06B6D4",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0F172A] py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full z-0">
                  <div className="h-px bg-gradient-to-r from-[#1E293B] to-transparent w-4/5 mx-auto" />
                </div>
              )}
              <div className="relative z-10 bg-[#1E293B] rounded-2xl p-6 border border-[#334155] h-full">
                <div
                  className="text-3xl font-black mb-4"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
