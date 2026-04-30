# CLAUDE.md — SiftForward Project Instructions

## Project

Build the first working website for **SiftForward**.

Repository:

```txt
https://github.com/cre8lab/siftforward-site
```

Project folder:

```txt
siftforward-site
```

Domain:

```txt
https://siftforward.com
```

## Brand

**SiftForward** is a Wisconsin-rooted applied software brand focused on practical SaaS tools, AI workflows, API integrations, and turning messy information into clear, useful action.

Tagline:

```txt
Finding meaning inside noise.
```

Core positioning:

```txt
SiftForward builds practical software, AI workflows, and API integrations that help people turn messy information into clear, useful action.
```

Short brand idea:

```txt
Find the useful signal. Sift out the noise. Move good ideas forward.
```

## Brand Meaning

- **Sift** = finding meaning inside noise, sorting useful signal from messy input.
- **Forward** = progress, action, movement, and a subtle Wisconsin connection.
- The brand should feel practical, useful, intelligent, and human-centered.
- Avoid AI hype, data-center language, telecom-carrier language, crypto/Web3 aesthetics, and generic cheap SaaS visuals.

## Tech Stack

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- ESLint
- Responsive design
- Vercel-ready deployment
- Clean reusable components

Do **not** integrate real AI APIs yet.

## Setup Commands

If the app does not exist yet:

```bash
npx create-next-app@latest siftforward-site
cd siftforward-site
```

Choose:

```txt
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ directory: Yes
App Router: Yes
Turbopack: Yes
Import alias: Yes
```

Run locally:

```bash
npm run dev
```

## Git Setup

Run these commands from inside the local `siftforward-site` folder:

```bash
git init
git add .
git commit -m "Initial SiftForward landing page project"
git branch -M main
git remote add origin git@github.com:cre8lab/siftforward-site.git
git push -u origin main
```

If the repo was cloned first, check the remote before adding it:

```bash
git remote -v
```

## Site Routes

Create or prepare these routes:

```txt
/              Main SiftForward landing page
/showcase      AI in Action examples
/promptbridge  Future PromptBridge product page
/contact       Contact / waitlist page
/api/showcase  Future API endpoint placeholder
```

The homepage must be polished in the first build. The other pages can be clean placeholders.

## Folder Structure

Use a clean structure similar to:

```txt
siftforward-site/
  src/
    app/
      page.tsx
      layout.tsx
      globals.css
      showcase/
        page.tsx
      promptbridge/
        page.tsx
      contact/
        page.tsx
      api/
        showcase/
          route.ts
    components/
      Header.tsx
      Footer.tsx
      Hero.tsx
      WhatWeDo.tsx
      AIInAction.tsx
      HowItWorks.tsx
      PracticalWork.tsx
      Integrations.tsx
      CTASection.tsx
    lib/
      site-data.ts
      examples.ts
  public/
    logo/
    images/
  .env.local
  .env.example
  README.md
```

## Environment Files

Create:

```bash
touch .env.local
touch .env.example
```

Put this in `.env.example`:

```env
# Future AI/API keys
OPENAI_API_KEY=
ANTHROPIC_API_KEY=

# Future contact/waitlist service
RESEND_API_KEY=
CONTACT_EMAIL=hello@siftforward.com

# Site
NEXT_PUBLIC_SITE_URL=https://siftforward.com
```

Do not commit `.env.local`.

## Visual Direction

Create a modern SaaS landing page with:

- clean white/light background
- deep navy / charcoal text
- teal/cyan/blue-green accent color
- rounded cards
- subtle gradients
- gentle shadows
- dot-to-arrow / noise-to-signal motif
- scattered inputs becoming structured outputs
- polished, practical, trustworthy feel

Suggested colors:

```txt
Deep Navy:     #0F172A
Charcoal:      #1E293B
Muted Text:    #64748B
Light Surface: #F8FAFC
Soft Border:   #E2E8F0
Teal Accent:   #14B8A6
Cyan Accent:   #06B6D4
Soft Green:    #22C55E
White:         #FFFFFF
```

Avoid:

- server racks
- data center imagery
- telecom towers
- heavy robot imagery
- crypto/Web3 visuals
- dark cyberpunk style
- cluttered dashboards

## Homepage Sections

Build the homepage with these sections.

---

## 1. Header / Navigation

Logo text:

```txt
SiftForward
```

If no logo asset exists, create a simple text/logo treatment:

- “Sift” in deep navy
- “Forward” in teal
- a small dot-to-arrow icon made with SVG or CSS

Navigation:

```txt
Products
Solutions
How It Works
About
Contact
```

Top-right button:

```txt
Get Started
```

---

## 2. Hero Section

Headline:

```txt
Finding meaning inside noise.
```

Subheadline:

```txt
SiftForward builds practical software, AI workflows, and API integrations that turn messy information into clear, useful action.
```

Primary CTA:

```txt
See what we’re building
```

Secondary CTA:

```txt
Learn more
```

Right-side visual:

Create an abstract “noise to signal” illustration:

- scattered dots and small shapes on the left
- flowing lines into a central filter/arrow mark
- three structured output cards on the right

Output cards:

```txt
AI Workflows
Extract. Enrich. Understand.
```

```txt
API Integrations
Connect and automate.
```

```txt
Structured Insights
Clear. Accurate. Actionable.
```

---

## 3. What SiftForward Does

Section title:

```txt
What SiftForward does
```

Cards:

### Prompt & Intent Cleanup

```txt
Turn rough questions, notes, and ideas into clear prompts and structured requests.
```

### Workflow Automation

```txt
Reduce repetitive steps and move information through practical AI-assisted workflows.
```

### API Integration

```txt
Connect tools, data, and people across the systems you already use.
```

### Applied Software

```txt
Build simple tools that make useful ideas easier to use in everyday work.
```

---

## 4. See AI in Action

This is the signature section.

Section title:

```txt
See AI in action
```

Supporting line:

```txt
Real examples from daily AI use.
```

Process label:

```txt
Problem → Prompt → Outcome → API
```

Build this as a clean product-demo frame or showcase panel. It should make the page feel useful, not just informational.

Use four columns/cards.

### Column 1 — Problem

```txt
I have scattered notes, screenshots, and links about an idea. I need to turn them into something useful.
```

Messy input bullets:

```txt
• Rough notes
• Screenshot idea
• Slack thread
• Article link
• Half-formed question
```

### Column 2 — Prompt

Use a code/editor-style box:

```txt
You are a practical AI assistant.

Turn the messy input below into:
1. A cleaned-up intent
2. Assumptions
3. A copy-ready prompt
4. A shorter version
5. Suggested next steps

Keep the output clear, useful, and action-oriented.
```

Add a small “Copy prompt” visual button. It does not need real clipboard behavior unless simple.

### Column 3 — Outcome

Show a polished result card:

```txt
Cleaned Intent
Turn a rough idea into a clear, structured request that can be used with AI or shared with another person.

Useful Output
• Clear summary
• Copy-ready prompt
• Next-step options
• Public/social reply version
```

### Column 4 — API / Workflow

Show endpoint chip:

```txt
POST /api/v1/sift
```

Simple flow:

```txt
Input → AI Process → Structured Output → Tools
```

Supporting copy:

```txt
Connect prompts, workflows, and outcomes to the tools people already use.
```

## Static Showcase Data

Create `src/lib/examples.ts` with a data structure that can later support rotating examples:

```ts
export const showcaseExamples = [
  {
    title: "Prompt cleanup",
    problem:
      "Scattered notes, screenshots, and links need to become something useful.",
    prompt:
      "Turn the messy input into a cleaned-up intent, assumptions, copy-ready prompt, shorter version, and suggested next steps.",
    outcome:
      "A clear summary, structured prompt, next-step options, and public/social reply version.",
    workflow: "POST /api/v1/sift",
  },
];
```

Render the first example for now.

---

## 5. How It Works

Section title:

```txt
How it works
```

Steps:

### Step 1 — Capture the noise

```txt
Start with messy notes, prompts, screenshots, conversations, links, or scattered data.
```

### Step 2 — Sift for meaning

```txt
Identify what matters, remove friction, and clarify the actual intent.
```

### Step 3 — Connect the system

```txt
Use AI workflows and integrations to structure the work and move information between tools.
```

### Step 4 — Move forward

```txt
Deliver clear outputs, usable tools, and better next steps.
```

---

## 6. Built for Practical Work

Section title:

```txt
Built for practical work.
```

Intro:

```txt
SiftForward is designed to help people and businesses turn complexity into clarity without getting lost in hype.
```

Benefit cards:

```txt
Clearer decisions
Cut through the noise and focus on what actually matters.
```

```txt
Useful automation
Automate repetitive work without losing the human intent behind it.
```

```txt
Connected tools
Bring people, data, and platforms together in systems that work.
```

```txt
Less friction
Simplify handoffs, reduce manual cleanup, and move faster.
```

---

## 7. Integrations

Section title:

```txt
Works with the tools you already use
```

Supporting copy:

```txt
Connect your people, your tools, and your workflows.
```

Use clean text chips or generic badges:

```txt
Slack
Google Drive
Notion
Microsoft Teams
API
Database
Docs
Email
```

Do not spend time on perfect logo licensing. Text chips are acceptable.

---

## 8. Final CTA

Headline:

```txt
Turn messy information into useful action.
```

Supporting copy:

```txt
Whether you need a clearer prompt, a smarter workflow, or a better-connected system, SiftForward helps move good ideas forward.
```

Primary button:

```txt
Talk with us
```

Secondary button:

```txt
Explore products
```

---

## 9. Footer

Include:

```txt
SiftForward
Finding meaning inside noise.
```

Footer links:

```txt
Products
Solutions
How It Works
About
Contact
```

Copyright:

```txt
© SiftForward
```

Optional email:

```txt
hello@siftforward.com
```

---

## Placeholder Pages

Create clean branded placeholders.

### `/showcase`

Title:

```txt
AI in Action
```

Copy:

```txt
A growing collection of practical examples showing how messy inputs become clear prompts, useful outcomes, and connected workflows.
```

### `/promptbridge`

Title:

```txt
PromptBridge
```

Copy:

```txt
PromptBridge helps turn rough questions, notes, screenshots, and half-formed ideas into clean, copy-ready AI prompts.
```

### `/contact`

Title:

```txt
Contact SiftForward
```

Copy:

```txt
Have a workflow, prompt, integration, or software idea you want to move forward? Let’s talk.
```

Create a simple contact form UI:

```txt
Name
Email
What are you trying to build or improve?
```

Button:

```txt
Send message
```

No backend submission required yet.

---

## API Placeholder

Create:

```txt
src/app/api/showcase/route.ts
```

Return static JSON:

```json
{
  "status": "ok",
  "message": "SiftForward showcase API placeholder",
  "workflow": "Problem → Prompt → Outcome → API"
}
```

Do not integrate real AI APIs yet.

---

## Metadata

In `layout.tsx`, set metadata similar to:

```ts
export const metadata = {
  title: "SiftForward — Finding meaning inside noise",
  description:
    "SiftForward builds practical software, AI workflows, and API integrations that turn messy information into clear, useful action.",
};
```

---

## README

Update `README.md`:

```md
# SiftForward Site

SiftForward builds practical software, AI workflows, and API integrations that turn messy information into clear, useful action.

## Local Development

npm install
npm run dev

## Main Routes

- `/` — Landing page
- `/showcase` — AI in Action showcase
- `/promptbridge` — PromptBridge product placeholder
- `/contact` — Contact page
- `/api/showcase` — Placeholder API route

## Brand Line

Finding meaning inside noise.
```

---

## Acceptance Criteria

The first version is complete when:

1. The app runs locally with `npm run dev`.
2. The homepage includes:
   - Header
   - Hero
   - What SiftForward does
   - See AI in Action
   - How it works
   - Built for practical work
   - Integrations
   - Final CTA
   - Footer
3. The page is responsive across desktop, tablet, and mobile.
4. The design feels polished, modern, practical, and brand-consistent.
5. The “See AI in action” section clearly shows:
   - Problem
   - Prompt
   - Outcome
   - API / Workflow
6. Placeholder pages exist for:
   - `/showcase`
   - `/promptbridge`
   - `/contact`
7. Placeholder API route exists at:
   - `/api/showcase`
8. No real API keys are committed.
9. The project is ready to push to:
   - `https://github.com/cre8lab/siftforward-site`
10. The project is ready to import into Vercel.

---

## First Task

Build the first version of the SiftForward website using this instruction file.

Prioritize:

- polished responsive design
- clean component structure
- clear copy
- future Vercel readiness
- a strong “See AI in action” showcase

Do not integrate real AI APIs yet. Do not add unnecessary dependencies. Keep the project simple, polished, and production-friendly.
