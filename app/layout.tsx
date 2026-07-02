import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Brand | Modern One-Page Website",
  description:
    "A polished, responsive one-page website ready for your custom domain.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
