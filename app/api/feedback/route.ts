import { env } from "cloudflare:workers";

interface FeedbackEnv {
  DB: D1Database;
}

const createTable = `
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    context TEXT NOT NULL DEFAULT '',
    message TEXT NOT NULL,
    anonymous INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      context?: string;
      message?: string;
      anonymous?: boolean;
      website?: string;
    };

    if (body.website) return Response.json({ ok: true });

    const message = body.message?.trim() || "";
    if (message.length < 6 || message.length > 3000) {
      return Response.json({ error: "Feedback must be between 6 and 3000 characters." }, { status: 400 });
    }

    const feedbackEnv = env as unknown as FeedbackEnv;
    if (!feedbackEnv.DB) {
      return Response.json({ error: "Feedback storage is unavailable." }, { status: 503 });
    }

    await feedbackEnv.DB.prepare(createTable).run();
    await feedbackEnv.DB.prepare(
      "INSERT INTO feedback (name, context, message, anonymous) VALUES (?, ?, ?, ?)",
    )
      .bind(
        body.anonymous ? "" : (body.name?.trim() || "").slice(0, 120),
        (body.context?.trim() || "").slice(0, 180),
        message,
        body.anonymous ? 1 : 0,
      )
      .run();

    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to save feedback." }, { status: 500 });
  }
}
