"use client";

import { useState } from "react";
import { showcaseExamples } from "@/lib/examples";

const example = showcaseExamples[0];

const FULL_PROMPT = `You are a practical AI assistant.

Turn the messy input below into:
1. A cleaned-up intent
2. Assumptions
3. A copy-ready prompt
4. A shorter version
5. Suggested next steps

Keep the output clear, useful, and action-oriented.`;

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
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            See AI in action
          </h2>
        </div>
        <p className="text-center text-[#64748B] mb-3">Real examples from daily AI use.</p>
        <div className="flex items-center justify-center gap-2 mb-10">
          {["Problem", "Prompt", "Outcome", "API"].map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full">
                {step}
              </span>
              {i < 3 && (
                <span className="text-[#64748B] text-sm">→</span>
              )}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProblemCard />
          <PromptCard copied={copied} onCopy={handleCopy} />
          <OutcomeCard />
          <APICard />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#94a3b8]">
            Based on: &ldquo;{example.problem}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function ProblemCard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#f97316]" />
        <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Problem</span>
      </div>
      <p className="text-sm text-[#1E293B] leading-relaxed">
        I have scattered notes, screenshots, and links about an idea. I need to turn them into something useful.
      </p>
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-3 space-y-1.5">
        {[
          "Rough notes",
          "Screenshot idea",
          "Slack thread",
          "Article link",
          "Half-formed question",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] flex-shrink-0" />
            <span className="text-xs text-[#64748B]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptCard({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return (
    <div className="rounded-2xl border border-[#1E293B] bg-[#0F172A] p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
          <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Prompt</span>
        </div>
        <button
          onClick={onCopy}
          className="text-[10px] font-semibold text-[#14B8A6] border border-[#14B8A6]/30 px-2 py-1 rounded-md hover:bg-[#14B8A6]/10 transition-colors"
        >
          {copied ? "Copied!" : "Copy prompt"}
        </button>
      </div>
      <pre className="text-[11px] text-[#94a3b8] font-mono leading-relaxed whitespace-pre-wrap overflow-hidden">
        {FULL_PROMPT}
      </pre>
    </div>
  );
}

function OutcomeCard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
        <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Outcome</span>
      </div>
      <div>
        <div className="text-sm font-semibold text-[#0F172A] mb-1.5">Cleaned Intent</div>
        <p className="text-xs text-[#64748B] leading-relaxed">
          Turn a rough idea into a clear, structured request that can be used with AI or shared with another person.
        </p>
      </div>
      <div>
        <div className="text-xs font-semibold text-[#0F172A] mb-2">Useful Output</div>
        <div className="space-y-1.5">
          {[
            "Clear summary",
            "Copy-ready prompt",
            "Next-step options",
            "Public/social reply version",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
              <span className="text-xs text-[#64748B]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function APICard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
        <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">API / Workflow</span>
      </div>
      <div className="bg-[#0F172A] rounded-xl px-3 py-2 inline-block">
        <span className="text-xs font-mono font-semibold text-[#14B8A6]">
          POST /api/v1/sift
        </span>
      </div>
      <div className="space-y-2">
        {["Input", "AI Process", "Structured Output", "Tools"].map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-full bg-white rounded-lg border border-[#E2E8F0] px-3 py-2 text-xs font-medium text-[#1E293B] text-center">
              {step}
            </div>
            {i < 3 && (
              <div className="w-px h-3 bg-[#E2E8F0] my-0.5" />
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-[#64748B] leading-relaxed">
        Connect prompts, workflows, and outcomes to the tools people already use.
      </p>
    </div>
  );
}
