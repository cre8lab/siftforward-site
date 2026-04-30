const tools = [
  { name: "Slack", color: "#E2E8F0" },
  { name: "Google Drive", color: "#E2E8F0" },
  { name: "Notion", color: "#E2E8F0" },
  { name: "Microsoft Teams", color: "#E2E8F0" },
  { name: "API", color: "#F0FDFA" },
  { name: "Database", color: "#E2E8F0" },
  { name: "Docs", color: "#E2E8F0" },
  { name: "Email", color: "#E2E8F0" },
];

export default function Integrations() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
          Works with the tools you already use
        </h2>
        <p className="text-lg text-[#64748B] mb-10">
          Connect your people, your tools, and your workflows.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] text-[#1E293B] text-sm font-medium px-4 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-[#14B8A6]/50 transition-all"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    tool.name === "API" ? "#14B8A6" : "#94a3b8",
                }}
              />
              {tool.name}
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#94a3b8]">
          And more — via open APIs and custom integrations.
        </p>
      </div>
    </section>
  );
}
