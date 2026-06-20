import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kiasili-ventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kiasili Ventures",
  description: "Kiasili Ventures develops and operates hospitality, dining, and bakery businesses in Uganda.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-v3.ico", type: "image/x-icon" },
      { url: "/icon-v3.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon-v3.ico",
    apple: "/apple-icon-v3.png",
  },
  openGraph: {
    title: "Kiasili Ventures",
    description: "Kiasili Ventures develops and operates hospitality, dining, and bakery businesses in Uganda.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiasili Ventures",
    description: "Kiasili Ventures develops and operates hospitality, dining, and bakery businesses in Uganda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
