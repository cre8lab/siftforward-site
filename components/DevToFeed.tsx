import FadeIn from "./FadeIn";

type DevToArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
  public_reactions_count: number;
  published_at: string;
  user: {
    name: string;
    profile_image_90: string;
  };
};

function timeAgo(iso: string): string {
  const hrs = Math.floor((Date.now() - new Date(iso).getTime()) / 3_600_000);
  if (hrs < 1) return "< 1h ago";
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default async function DevToFeed() {
  let articles: DevToArticle[] = [];

  try {
    const res = await fetch(
      "https://dev.to/api/articles?tag=ai&per_page=9&top=3",
      { next: { revalidate: 600 } },
    );
    if (!res.ok) return null;
    articles = (await res.json()).slice(0, 6);
  } catch {
    return null;
  }

  if (articles.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
                From the field
              </h2>
              <p className="text-[#64748B] max-w-lg">
                Recent articles from the developer community on AI, tools, and practical automation.
              </p>
            </div>
            <a
              href="https://dev.to/t/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#94a3b8] hover:text-[#64748B] transition-colors shrink-0 mb-1"
            >
              via dev.to
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 60}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                {/* Cover image */}
                {article.cover_image && (
                  <div className="h-32 overflow-hidden bg-[#E2E8F0]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.cover_image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-5 gap-3">
                  {/* Title */}
                  <p className="flex-1 text-sm font-semibold text-[#0F172A] leading-snug group-hover:text-[#0d9488] transition-colors">
                    {article.title}
                  </p>

                  {/* Description */}
                  {article.description && (
                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  )}

                  {/* Tags */}
                  {article.tag_list.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {article.tag_list.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-[#94a3b8] bg-white border border-[#E2E8F0] rounded-full px-2 py-0.5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author + meta */}
                  <div className="flex items-center gap-2 pt-1 border-t border-[#E2E8F0]">
                    {article.user.profile_image_90 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={article.user.profile_image_90}
                        alt={article.user.name}
                        className="w-5 h-5 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <span className="text-[11px] text-[#64748B] font-medium truncate">
                      {article.user.name}
                    </span>
                    <span className="ml-auto text-[11px] text-[#94a3b8] shrink-0">
                      {article.reading_time_minutes} min · {timeAgo(article.published_at)}
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
