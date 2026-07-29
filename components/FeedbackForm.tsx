"use client";

import { FormEvent, useState } from "react";

export function FeedbackForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      context: String(form.get("context") || ""),
      message: String(form.get("message") || ""),
      anonymous: form.get("anonymous") === "on",
      website: String(form.get("website") || ""),
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Could not save feedback");
      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="feedback-form" onSubmit={submit}>
      <div className="feedback-heading">
        <span className="eyebrow">Ongoing feedback</span>
        <h2>TELL ME THE USEFUL THING.</h2>
        <p>
          Positive or difficult, both are welcome. I check this inbox weekly.
          Choose anonymous if that helps you be more direct.
        </p>
      </div>
      <label>
        Your name <span>(optional)</span>
        <input name="name" type="text" placeholder="Name or leave blank" />
      </label>
      <label>
        Context
        <input name="context" type="text" placeholder="Project, team, or moment" maxLength={180} />
      </label>
      <label className="full-field">
        Feedback
        <textarea name="message" placeholder="The useful thing is…" minLength={6} maxLength={3000} required />
      </label>
      <label className="check-field">
        <input name="anonymous" type="checkbox" />
        <span>Send this anonymously</span>
      </label>
      <label className="honey-field" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-dark" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send feedback →"}
      </button>
      <p className="form-status" role="status">
        {status === "sent" && "Received. Thank you for being direct."}
        {status === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}
