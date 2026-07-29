import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deborah-documentary.michellescomputer.chatgpt.site"),
  title: {
    default: "Debora Ruban Arumairaj — Business Engineering Student",
    template: "%s — Debora",
  },
  description:
    "Meet Debora Ruban Arumairaj, a Business Engineering student at KU Leuven with experience in operations, finance, strategy, and cross-cultural teamwork.",
  openGraph: {
    title: "Debora Ruban Arumairaj — Curious thinker, practical problem solver",
    description:
      "Business Engineering student at KU Leuven with experience in operations, finance, strategy, and cross-cultural teamwork.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Meet Debora Ruban Arumairaj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debora Ruban Arumairaj — Curious thinker, practical problem solver",
    description:
      "Business Engineering student at KU Leuven with experience in operations, finance, strategy, and cross-cultural teamwork.",
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
