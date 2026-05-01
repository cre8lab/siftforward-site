// Content feed — edit status to control what appears on the site.
//
// "approved" → visible on the site
// "pending"  → ready to review, hidden on site
// "draft"    → work in progress, hidden on site
//
// To publish: change status to "approved" and redeploy.
// Future: this data will move to Notion / CMS with the same shape.

export type FeedStatus   = "approved" | "pending" | "draft";
export type FeedCategory = "prompt" | "workflow" | "integration" | "insight";

export type FeedItem = {
  id:          string;
  status:      FeedStatus;
  category:    FeedCategory;
  title:       string;
  description: string;
  tags:        string[];
  link?:       string;
};

export const feedItems: FeedItem[] = [
  {
    id:          "prompt-cleanup-001",
    status:      "approved",
    category:    "prompt",
    title:       "Turn rough meeting notes into a structured brief",
    description: "Paste in raw notes from a meeting. Get back a clean summary, open questions, and a copy-ready action list.",
    tags:        ["prompt", "notes", "summary"],
  },
  {
    id:          "workflow-slack-001",
    status:      "approved",
    category:    "workflow",
    title:       "Weekly report from scattered Slack threads",
    description: "Collect messages from multiple channels, extract what actually happened, and generate a clear weekly summary.",
    tags:        ["workflow", "Slack", "reporting"],
  },
  {
    id:          "integration-notion-001",
    status:      "approved",
    category:    "integration",
    title:       "Notion brief → cleaned prompt → output written back",
    description: "Pull a rough brief from a Notion page, run it through a cleanup prompt, and write the structured result back automatically.",
    tags:        ["integration", "Notion", "automation"],
  },
  {
    id:          "insight-email-001",
    status:      "approved",
    category:    "insight",
    title:       "Extract decisions from a long email thread",
    description: "Feed in a long email thread and get back only the decisions made, the open questions, and the agreed next step.",
    tags:        ["insight", "email", "decisions"],
  },
  {
    id:          "prompt-hiring-001",
    status:      "approved",
    category:    "prompt",
    title:       "Job description → focused interview guide",
    description: "Paste a job description and get back structured interview questions organized by skill area and seniority level.",
    tags:        ["prompt", "hiring", "interview"],
  },
  {
    id:          "workflow-support-001",
    status:      "approved",
    category:    "workflow",
    title:       "Auto-tag and route support requests by topic",
    description: "Route incoming support emails through a classification prompt and drop them into the right folder automatically.",
    tags:        ["workflow", "support", "routing"],
  },
];

// Only approved items are rendered on the site.
export const approvedFeedItems = feedItems.filter((item) => item.status === "approved");
