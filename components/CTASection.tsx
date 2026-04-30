import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#14B8A6] rounded-full blur-[120px] opacity-10 pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Turn messy information
              <br />
              <span className="text-[#14B8A6]">into useful action.</span>
            </h2>
            <p className="text-lg text-[#94a3b8] mb-8 max-w-2xl mx-auto leading-relaxed">
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
