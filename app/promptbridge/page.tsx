import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PromptBridge — SiftForward",
  description:
    "PromptBridge turns rough questions, notes, screenshots, and half-formed thoughts into clean, structured AI prompts. No login required.",
};

const outputs = [
  {
    label: "Cleaned intent",
    desc: "What you actually want the AI to do — restated clearly.",
  },
  {
    label: "Assumptions",
    desc: "What PromptBridge inferred from your input, so you can correct anything that's off.",
  },
  {
    label: "Full prompt",
    desc: "A complete, copy-ready prompt you can paste straight into any AI tool.",
  },
  {
    label: "Short version",
    desc: "A condensed version for quick use or when context space is tight.",
  },
  {
    label: "Suggested adjustments",
    desc: "Optional tweaks to make the prompt more specific, more open, or better scoped.",
  },
  {
    label: "Public / social reply",
    desc: "When relevant — a version suitable for public replies, posts, or sharing.",
  },
];

const inputs = [
  "A rough question you haven't finished writing",
  "Scattered notes from a meeting or conversation",
  "A screenshot with text you want to act on",
  "A social post you want to respond to thoughtfully",
  "A half-formed idea that needs structure",
  "An email thread that needs a clear reply",
];

export default function PromptBridgePage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#F0F9FF] border border-[#bae6fd] text-[#0369a1] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                In development
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4 leading-tight">
                You know what you mean.
                <br />
                <span className="text-[#06B6D4]">AI may not.</span>
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                PromptBridge takes rough questions, scattered notes, screenshots, social posts, and half-formed thoughts and turns them into clean, structured prompts — ready to use with any AI tool.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1E293B] transition-colors text-sm"
                >
                  Join the waitlist
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-1.5 text-[#0F172A] font-semibold text-sm hover:text-[#06B6D4] transition-colors"
                >
                  See AI in Action
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What it accepts */}
        <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-3">
                  Start with whatever you have
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-6">
                  PromptBridge is designed for the messy middle — the moment before a thought becomes a good question.
                </p>
                <div className="space-y-2.5">
                  {inputs.map((input) => (
                    <div key={input} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-[#1E293B]">{input}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[#0F172A] rounded-2xl border border-[#1E293B] p-6 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] opacity-70" />
                    <span className="ml-auto text-[10px] font-semibold text-[#475569] uppercase tracking-wider">PromptBridge Input</span>
                  </div>
                  <div className="bg-[#1E293B] rounded-xl p-4">
                    <p className="text-sm text-[#94a3b8] font-mono leading-relaxed">
                      i want to ask the ai about my neighbor situation but idk how to phrase it — basically they keep parking in my spot and i've tried talking to them but it's weird now and i have a hoa meeting thursday
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex-1 h-px bg-[#1E293B]" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2v10M4 9l4 4 4-4" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex-1 h-px bg-[#1E293B]" />
                  </div>
                  <div className="bg-[#1E293B] rounded-xl p-4 space-y-3">
                    <div>
                      <div className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-wider mb-1">Cleaned intent</div>
                      <p className="text-xs text-[#e2e8f0]">Get practical advice for addressing a recurring parking conflict with a neighbor before an HOA meeting.</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-wider mb-1">Full prompt</div>
                      <p className="text-xs text-[#94a3b8] font-mono leading-relaxed">My neighbor has been parking in my assigned spot repeatedly. I've spoken to them once but it's now awkward. I have an HOA meeting on Thursday. Help me think through my options and how to approach this calmly and effectively.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What it outputs */}
        <section className="bg-white py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-3">
              What PromptBridge returns
            </h2>
            <p className="text-[#64748B] mb-8 max-w-lg">
              Every run surfaces the same set of structured outputs — you decide which ones you use.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {outputs.map((output, i) => (
                <div
                  key={output.label}
                  className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#F0F9FF] border border-[#bae6fd] text-[#06B6D4] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-[#0F172A]">{output.label}</h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{output.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy / guardrails */}
        <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                Built with privacy in mind
              </h2>
              <div className="space-y-3">
                {[
                  "No login required to use PromptBridge.",
                  "Your input is not stored in the MVP — it's processed and returned, not saved.",
                  "Assumptions are always surfaced, so you can see what was inferred from your input.",
                  "Nothing is published or shared without your action.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#F0FDFA] border border-[#99f6e4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#14B8A6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#1E293B]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                Follow the build
              </h2>
              <p className="text-[#64748B] mb-6">
                PromptBridge is in active development. If you want to be notified when it launches or have a use case you want us to consider, get in touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#14B8A6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0d9488] transition-colors text-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
