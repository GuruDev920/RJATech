import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RJA Tech LLC | Mobile & Smart TV Apps",
  description:
    "Mobile and Smart TV app development for Android, Apple, Samsung, LG, Roku, and Windows.",
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
