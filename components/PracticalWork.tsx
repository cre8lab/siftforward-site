const benefits = [
  {
    title: "Clearer decisions",
    description: "Cut through the noise and focus on what actually matters.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M6.5 10.5L9 13L13.5 7.5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Useful automation",
    description: "Automate repetitive work without losing the human intent behind it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10a6 6 0 0 1 12 0" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10a6 6 0 0 1-12 0" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 2" />
        <path d="M14.5 7.5l1.5 2.5-2.5 1" stroke="#14B8A6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Connected tools",
    description: "Bring people, data, and platforms together in systems that work.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="4.5" cy="10" r="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <circle cx="15.5" cy="5" r="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <circle cx="15.5" cy="15" r="2.5" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M7 10L13 6M7 10L13 14" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Less friction",
    description: "Simplify handoffs, reduce manual cleanup, and move faster.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h12" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 6.5l3.5 3.5-3.5 3.5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function PracticalWork() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">

          {/* Left: intro */}
          <div className="space-y-4 lg:pt-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Built for practical work.
            </h2>
            <p className="text-[#64748B] leading-relaxed">
              SiftForward is designed to help people and businesses turn complexity into clarity — without getting lost in hype.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
              <span className="text-sm font-medium text-[#14B8A6]">No data center imagery. No buzzwords.</span>
            </div>
          </div>

          {/* Right: 2x2 benefit grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 space-y-3 hover:shadow-md hover:border-[#14B8A6]/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F0FDFA] border border-[#99f6e4] flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0F172A]">{benefit.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
