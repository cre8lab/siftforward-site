"use client";

import { useState } from "react";
import SignalFlowMini from "./SignalFlowMini";

const FULL_PROMPT = `You are a practical AI assistant.

Turn the messy input below into:
1. A cleaned-up intent
2. Assumptions
3. A copy-ready prompt
4. A shorter version
5. Suggested next steps

Keep the output clear, useful,
and action-oriented.`;

const messy = [
  "Rough notes",
  "Screenshot idea",
  "Slack thread",
  "Article link",
  "Half-formed question",
];

const outcomes = [
  "Clear summary",
  "Copy-ready prompt",
  "Next-step options",
  "Public / social reply",
];

const flow = ["Input", "AI Process", "Structured Output", "Tools"];

export default function AIInAction() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(FULL_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section className="bg-white py-20" id="ai-in-action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            See AI in action
          </h2>
          <p className="mt-3 text-[#64748B]">Real examples from daily AI use.</p>
        </div>

        {/* Process label */}
        <div className="flex items-center justify-center gap-1.5 mb-10 flex-wrap">
          {["Problem", "Prompt", "Outcome", "API / Workflow"].map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full">
                {step}
              </span>
              {i < 3 && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          ))}
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-0 items-stretch">

          {/* Column 1: Problem */}
          <div className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
            <ColumnHeader dot="#f97316" label="Problem" />
            <div className="flex-1 p-5 space-y-4">
              <p className="text-sm text-[#1E293B] leading-relaxed">
                I have scattered notes, screenshots, and links about an idea. I need to turn them into something useful.
              </p>
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-3.5 space-y-2">
                {messy.map((item, i) => (
                  <div key={item} className="flex items-center gap-2.5" style={{ opacity: 1 - i * 0.12 }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] flex-shrink-0" />
                    <span className="text-xs text-[#64748B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SignalFlowMini delay={0} />

          {/* Column 2: Prompt */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0F172A]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E293B]">
              <div className="flex items-center gap-2">
                {/* macOS-style dots */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] opacity-80" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#475569] uppercase tracking-wider">Prompt</span>
                <button
                  onClick={handleCopy}
                  className="text-[10px] font-semibold text-[#14B8A6] border border-[#14B8A6]/30 px-2 py-0.5 rounded-md hover:bg-[#14B8A6]/10 transition-colors"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <pre className="text-[11.5px] text-[#94a3b8] font-mono leading-relaxed whitespace-pre-wrap break-words">
                {FULL_PROMPT}
              </pre>
            </div>
          </div>

          <SignalFlowMini delay={0.6} />

          {/* Column 3: Outcome */}
          <div className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden">
            <ColumnHeader dot="#22c55e" label="Outcome" />
            <div className="flex-1 p-5 space-y-4">
              <div>
                <div className="text-sm font-semibold text-[#0F172A] mb-1">Cleaned Intent</div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Turn a rough idea into a clear, structured request that can be used with AI or shared with another person.
                </p>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#0F172A] mb-2.5">Useful Output</div>
                <div className="space-y-2">
                  {outcomes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-xs text-[#64748B]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <SignalFlowMini delay={1.2} />

          {/* Column 4: API / Workflow */}
          <div className="flex flex-col rounded-2xl border border-[#1E293B] bg-[#0F172A] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B]">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
              <span className="text-[10px] font-semibold text-[#475569] uppercase tracking-wider">API / Workflow</span>
            </div>
            <div className="flex-1 p-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#1E293B] rounded-lg px-3 py-2">
                <span className="text-[10px] font-bold text-[#06B6D4] uppercase">POST</span>
                <span className="text-xs font-mono text-[#e2e8f0]">/api/v1/sift</span>
              </div>

              <div className="space-y-1">
                {flow.map((step, i) => (
                  <div key={step} className="flex flex-col items-stretch">
                    <div className="bg-[#1E293B] rounded-lg px-3 py-2 text-xs font-medium text-[#e2e8f0] text-center">
                      {step}
                    </div>
                    {i < flow.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                          <path d="M6 0v7M3 5l3 4 3-4" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Connect prompts, workflows, and outcomes to the tools people already use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnHeader({ dot, label }: { dot: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2E8F0]">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dot }} />
      <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider">{label}</span>
    </div>
  );
}

