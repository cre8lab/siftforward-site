import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    message: "SiftForward showcase API placeholder",
    workflow: "Problem → Prompt → Outcome → API",
  });
}
