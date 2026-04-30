"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
                {submitted ? (
                  <div className="bg-[#F0FDFA] border border-[#99f6e4] rounded-2xl p-8 text-center">
                    <div className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10 L8 14 L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">Message sent!</h3>
                    <p className="text-sm text-[#64748B] mb-5">
                      Thanks for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <Link
                      href="/"
                      className="text-sm font-semibold text-[#14B8A6] hover:text-[#0d9488]"
                    >
                      Back to home →
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-7 space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-1.5">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/30 focus:border-[#14B8A6] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/30 focus:border-[#14B8A6] transition-colors"
                      />
                    </div>
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
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/30 focus:border-[#14B8A6] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#14B8A6] text-white font-semibold py-3 rounded-xl hover:bg-[#0d9488] transition-colors text-sm"
                    >
                      Send message
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
