import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI in Action — SiftForward",
  description:
    "A growing collection of practical examples showing how messy inputs become clear prompts, useful outcomes, and connected workflows.",
};

export default function ShowcasePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#F0FDFA] border border-[#99f6e4] text-[#0d9488] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                Coming soon
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-5">
                AI in Action
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                A growing collection of practical examples showing how messy inputs become clear prompts, useful outcomes, and connected workflows.
              </p>
              <Link
                href="/contact"
                className="inline-flex bg-[#14B8A6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0d9488] transition-colors text-sm"
              >
                Get notified when this launches
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[#64748B] mb-6">A preview of what&apos;s coming:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Prompt cleanup", "Note summarization", "API workflow builder"].map((title) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] border border-[#99f6e4] mb-3" />
                  <div className="text-sm font-semibold text-[#0F172A] mb-1">{title}</div>
                  <div className="text-xs text-[#94a3b8]">Example coming soon</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
