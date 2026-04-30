const tools = [
  { name: "Slack", highlight: false },
  { name: "Google Drive", highlight: false },
  { name: "Notion", highlight: false },
  { name: "Microsoft Teams", highlight: false },
  { name: "API", highlight: true },
  { name: "Database", highlight: false },
  { name: "Docs", highlight: false },
  { name: "Email", highlight: false },
];

export default function Integrations() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
          Works with the tools you already use
        </h2>
        <p className="text-[#64748B] mb-10 max-w-lg mx-auto">
          Connect your people, your tools, and your workflows.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full border shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 duration-200 ${
                tool.highlight
                  ? "bg-[#F0FDFA] border-[#99f6e4] text-[#0d9488]"
                  : "bg-white border-[#E2E8F0] text-[#1E293B] hover:border-[#14B8A6]/40"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: tool.highlight ? "#14B8A6" : "#CBD5E1" }}
              />
              {tool.name}
            </div>
          ))}
        </div>

        <p className="text-sm text-[#94a3b8]">
          And more — via open APIs and custom integrations.
        </p>
      </div>
    </section>
  );
}
