import Link from "next/link";
import Logo from "@/components/Logo";
import { footerLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="space-y-4">
            <Logo variant="white" showTagline />
            <a
              href="mailto:hello@siftforward.com"
              className="block text-sm text-[#64748B] hover:text-[#14B8A6] transition-colors"
            >
              hello@siftforward.com
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#475569] uppercase tracking-wider">Navigation</div>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#475569] uppercase tracking-wider">What we build</div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Practical software, AI workflows, and API integrations that turn messy information into clear, useful action.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#475569]">© SiftForward. Wisconsin-rooted. Practically built.</p>
          <p className="text-xs text-[#475569]">Finding meaning inside noise.</p>
        </div>
      </div>
    </footer>
  );
}
