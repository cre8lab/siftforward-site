"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-5">
                  Contact SiftForward
                </h1>
                <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                  Have a workflow, prompt, integration, or software idea you want to move forward? Let&apos;s talk.
                </p>
                <div className="space-y-5">
                  <ContactDetail icon="✉" label="Email" value="hello@siftforward.com" href="mailto:hello@siftforward.com" />
                  <ContactDetail icon="◎" label="Based in" value="Wisconsin" />
                  <ContactDetail icon="→" label="Products" value="PromptBridge and more coming soon" href="/promptbridge" />
                </div>
              </div>

              <div>
                {status === "success" ? (
                  <div className="bg-[#F0FDFA] border border-[#99f6e4] rounded-2xl p-8 text-center">
                    <div className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">Message sent!</h3>
                    <p className="text-sm text-[#64748B] mb-5">
                      Thanks for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <Link href="/" className="text-sm font-semibold text-[#14B8A6] hover:text-[#0d9488]">
                      Back to home →
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-7 space-y-5"
                  >
                    <Field
                      id="name"
                      label="Name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      disabled={status === "loading"}
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      disabled={status === "loading"}
                    />
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-1.5">
                        What are you trying to build or improve?
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your idea, workflow, or challenge..."
                        disabled={status === "loading"}
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/30 focus:border-[#14B8A6] transition-colors resize-none disabled:opacity-60"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#14B8A6] text-white font-semibold py-3 rounded-xl hover:bg-[#0d9488] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Spinner />
                          Sending…
                        </>
                      ) : (
                        "Send message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[#0F172A] mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/30 focus:border-[#14B8A6] transition-colors disabled:opacity-60"
      />
    </div>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[#14B8A6] text-base mt-0.5">{icon}</span>
      <div>
        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">{label}</div>
        {href ? (
          <a href={href} className="text-sm text-[#0F172A] hover:text-[#14B8A6] transition-colors">
            {value}
          </a>
        ) : (
          <span className="text-sm text-[#0F172A]">{value}</span>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
