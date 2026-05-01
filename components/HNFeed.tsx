import FadeIn from "./FadeIn";

const KEYWORDS = [
  "ai", "llm", "gpt", "claude", "gemini", "chatgpt", "openai", "anthropic",
  "workflow", "automation", "automate", "agent", "agentic",
  "prompt", "prompting", "copilot", "productivity",
];

type HNStory = {
  id: number;
  title: string;
  url?: string;
  score: number;
  descendants: number;
  time: number;
  by: string;
};

function isRelevant(title: string): boolean {
  const lower = title.toLowerCase();
  return KEYWORDS.some((kw) => lower.includes(kw));
}

function domain(url?: string): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function timeAgo(unix: number): string {
  const hrs = Math.floor((Date.now() / 1000 - unix) / 3600);
  if (hrs < 1) return "< 1h ago";
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

async function fetchStory(id: number): Promise<HNStory | null> {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      { next: { revalidate: 600 } },
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function HNFeed() {
  let stories: HNStory[] = [];

  try {
    const idsRes = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
      { next: { revalidate: 600 } },
    );
    if (!idsRes.ok) return null;
    const ids: number[] = await idsRes.json();

    // Fetch in batches of 20 until we have 6 relevant stories
    const BATCH = 20;
    for (let i = 0; i < Math.min(ids.length, 100) && stories.length < 6; i += BATCH) {
      const batch = ids.slice(i, i + BATCH);
      const results = await Promise.all(batch.map(fetchStory));
      const relevant = results.filter(
        (s): s is HNStory => !!s && !!s.title && isRelevant(s.title),
      );
      stories = [...stories, ...relevant].slice(0, 6);
    }
  } catch {
    return null;
  }

  if (stories.length === 0) return null;

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
                Signal from the community
              </h2>
              <p className="text-[#64748B] max-w-lg">
                Top Hacker News discussions on AI, automation, and workflow — filtered and surfaced automatically.
              </p>
            </div>
            <a
              href="https://news.ycombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#94a3b8] hover:text-[#64748B] transition-colors shrink-0 mb-1"
            >
              via Hacker News
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map((story, i) => {
            const host = domain(story.url);
            const hnUrl = `https://news.ycombinator.com/item?id=${story.id}`;
            return (
              <FadeIn key={story.id} delay={i * 60}>
                <a
                  href={story.url ?? hnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-white rounded-2xl border border-[#E2E8F0] p-5 hover:shadow-lg hover:border-[#14B8A6]/30 hover:-translate-y-0.5 transition-all duration-200 no-underline"
                >
                  {/* Domain badge */}
                  {host && (
                    <span className="inline-block text-[10px] font-medium text-[#94a3b8] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-2.5 py-0.5 mb-3 self-start">
                      {host}
                    </span>
                  )}

                  {/* Title */}
                  <p className="flex-1 text-sm font-semibold text-[#0F172A] leading-snug group-hover:text-[#0d9488] transition-colors mb-4">
                    {story.title}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-[11px] text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M5.5 1L6.9 4.1H10L7.5 6.2L8.5 9.5L5.5 7.5L2.5 9.5L3.5 6.2L1 4.1H4.1L5.5 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                      </svg>
                      {story.score}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M1.5 2.5h8a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3L1 10.5V3a.5.5 0 0 1 .5-.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                      </svg>
                      {story.descendants ?? 0}
                    </span>
                    <span className="ml-auto">{timeAgo(story.time)}</span>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
