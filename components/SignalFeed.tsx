import { approvedFeedItems, FeedCategory } from "@/lib/feed";
import FadeIn from "./FadeIn";

const categoryStyles: Record<FeedCategory, { label: string; bg: string; text: string; dot: string }> = {
  prompt:      { label: "Prompt",      bg: "#F0FDFA", text: "#0d9488", dot: "#14B8A6" },
  workflow:    { label: "Workflow",    bg: "#F0F9FF", text: "#0369a1", dot: "#06B6D4" },
  integration: { label: "Integration", bg: "#F8FAFC", text: "#475569", dot: "#94a3b8" },
  insight:     { label: "Insight",     bg: "#F0FDF4", text: "#15803d", dot: "#22C55E" },
};

export default function SignalFeed() {
  if (approvedFeedItems.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
              In practice
            </h2>
            <p className="text-[#64748B] max-w-lg">
              Practical prompts, workflows, and integrations from real AI use — updated as we build.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {approvedFeedItems.map((item, i) => {
            const cat = categoryStyles[item.category];
            return (
              <FadeIn key={item.id} delay={i * 80}>
                <div className="group h-full bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 flex flex-col gap-4 hover:shadow-lg hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-200">
                  {/* Category badge */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: cat.bg, color: cat.text }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.dot }} />
                      {cat.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-[15px] font-semibold text-[#0F172A] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-[#94a3b8] bg-white border border-[#E2E8F0] rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
