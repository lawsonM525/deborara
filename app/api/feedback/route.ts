interface D1StatementLike {
  bind: (...values: unknown[]) => D1StatementLike;
  run: () => Promise<unknown>;
}

interface D1DatabaseLike {
  prepare: (query: string) => D1StatementLike;
}

async function getFeedbackDatabase(): Promise<D1DatabaseLike | null> {
  if (process.env.VERCEL) return null;

  try {
    const runtimeModule = "cloudflare:workers";
    const { env } = (await import(runtimeModule)) as {
      env?: { DB?: D1DatabaseLike };
    };
    return env?.DB ?? null;
  } catch {
    return null;
  }
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

    const database = await getFeedbackDatabase();
    if (!database) {
      return Response.json({ error: "Feedback storage is unavailable." }, { status: 503 });
    }

    await database.prepare(createTable).run();
    await database.prepare(
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
