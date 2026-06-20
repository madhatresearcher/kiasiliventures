import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiasili Ventures",
  description: "Kiasili Ventures develops and operates hospitality, dining, and bakery businesses in Uganda.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
