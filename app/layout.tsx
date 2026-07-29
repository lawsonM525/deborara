import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deborah-documentary.sites.openai.com"),
  title: {
    default: "Deborah — Life, Work & Everything In Between",
    template: "%s — Deborah",
  },
  description:
    "An interactive documentary of Deborah's work, story, ideas, and way of working.",
  openGraph: {
    title: "Deborah — Life, Work & Everything In Between",
    description:
      "Meet Deborah beyond the résumé: curious, direct, collaborative, and always learning.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Deborah — Life, Work & Everything In Between",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deborah — Life, Work & Everything In Between",
    description:
      "Meet Deborah beyond the résumé: curious, direct, collaborative, and always learning.",
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
