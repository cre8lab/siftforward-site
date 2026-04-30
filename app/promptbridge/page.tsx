import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PromptBridge — SiftForward",
  description:
    "PromptBridge helps turn rough questions, notes, screenshots, and half-formed ideas into clean, copy-ready AI prompts.",
};

export default function PromptBridgePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#F0FDFA] border border-[#99f6e4] text-[#0d9488] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                In development
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-5">
                PromptBridge
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                PromptBridge helps turn rough questions, notes, screenshots, and half-formed ideas into clean, copy-ready AI prompts.
              </p>
              <Link
                href="/contact"
                className="inline-flex bg-[#14B8A6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0d9488] transition-colors text-sm"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-16 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0F172A] mb-6">What PromptBridge does</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Cleans up messy input", desc: "Turn scattered notes into focused prompts." },
                { title: "Surfaces your intent", desc: "Identify what you actually want the AI to do." },
                { title: "Ready to copy and use", desc: "Output that works immediately, no editing needed." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-[#14B8A6] mb-1">{feature.title}</div>
                  <div className="text-sm text-[#64748B]">{feature.desc}</div>
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
