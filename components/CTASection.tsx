import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1E293B] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#14B8A6] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />

          <div className="relative">
            {/* Logo mark centered */}
            <div className="flex justify-center mb-6">
              <LogoMark width={56} height={38} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Turn messy information
              <br />
              <span className="text-[#14B8A6]">into useful action.</span>
            </h2>
            <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you need a clearer prompt, a smarter workflow, or a better-connected system, SiftForward helps move good ideas forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#14B8A6] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0d9488] transition-colors text-sm"
              >
                Talk with us
              </Link>
              <Link
                href="/showcase"
                className="border border-[#334155] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1E293B] hover:border-[#475569] transition-colors text-sm"
              >
                Explore products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
