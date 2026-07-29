import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deborah-documentary.michellescomputer.chatgpt.site"),
  title: {
    default: "Debora — Life, Work & Everything In Between",
    template: "%s — Debora",
  },
  description:
    "An interactive documentary of Debora Ruban Arumairaj's work, story, ideas, and way of working.",
  openGraph: {
    title: "Debora — Life, Work & Everything In Between",
    description:
      "Meet Debora beyond the résumé: a full-time learner, part-time side-quester, and Business Engineering student.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Debora — Life, Work & Everything In Between",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debora — Life, Work & Everything In Between",
    description:
      "Meet Debora beyond the résumé: a full-time learner, part-time side-quester, and Business Engineering student.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
