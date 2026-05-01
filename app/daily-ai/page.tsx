import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daily Use of AI — SiftForward",
  description:
    "Approachable, practical examples showing how everyday people use AI for writing, planning, research, decisions, and local information.",
};

const topics = [
  {
    title: "Writing and communication",
    desc: "Drafting emails, improving clarity, adjusting tone, responding to difficult messages.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M5 7h10M5 10h7M5 13h5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Planning and decisions",
    desc: "Thinking through options, weighing tradeoffs, structuring plans before committing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 14l4-4 3 3 5-7" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="#14B8A6" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Research and understanding",
    desc: "Getting clear explanations, summarizing long documents, finding what matters in a big topic.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="5.5" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M13.5 13.5L17 17" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Local and community information",
    desc: "Understanding local government, public records, neighborhood issues, and civic processes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 17V9l7-5 7 5v8" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7.5" y="12" width="5" height="5" rx="0.5" stroke="#14B8A6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Everyday work tasks",
    desc: "Summarizing meetings, organizing notes, turning scattered input into clear next steps.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 5h10M5 8h6M5 11h8M5 14h4" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Learning and curiosity",
    desc: "Asking questions without judgment, exploring topics, building on what you already know.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="9" r="4.5" stroke="#14B8A6" strokeWidth="1.5" />
        <path d="M10 14v3M8 17h4" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 7v2.5" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="11" r="0.5" fill="#14B8A6" />
      </svg>
    ),
  },
];

export default function DailyAIPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#F0FDFA] border border-[#99f6e4] text-[#0d9488] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                Coming soon
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 leading-tight">
                Daily Use of AI
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed mb-5">
                AI tools are getting better fast — but most people still aren&apos;t sure how to use them well in everyday life. This section will show practical, approachable examples of how normal people use AI to get more done.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8">
                Not demos. Not enterprise case studies. Real situations, plain language, and examples you can actually use.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#14B8A6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0d9488] transition-colors text-sm"
              >
                Get notified when this launches
              </Link>
            </div>
          </div>
        </section>

        {/* Topics preview */}
        <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">
              What it will cover
            </h2>
            <p className="text-[#64748B] mb-8 max-w-lg">
              Each section will include concrete examples with real prompts, what the AI returned, and what made it useful.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-5 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#d1fae5] flex items-center justify-center flex-shrink-0">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F172A] mb-1">{topic.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{topic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust language */}
        <section className="bg-white py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-xl font-bold text-[#0F172A]">How this section is built</h2>
              <div className="space-y-3">
                {[
                  "Examples are drawn from real use cases, not invented scenarios.",
                  "Prompts and outputs are shown as-is — including when they needed adjustment.",
                  "Assumptions and limitations are noted where they're relevant.",
                  "Nothing here claims to be a definitive guide. AI tools change fast.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] flex-shrink-0 mt-1.5" />
                    <p className="text-sm text-[#64748B]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
