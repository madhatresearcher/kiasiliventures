import type { Metadata } from "next";
import "./globals.css";

const logoSrc = encodeURI("/images/Kiasili Ventures Logo.png");

export const metadata: Metadata = {
  title: "Kiasili Ventures",
  description: "Kiasili Ventures develops and operates hospitality, dining, and bakery businesses in Uganda.",
  icons: {
    icon: logoSrc,
    shortcut: logoSrc,
    apple: logoSrc,
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
