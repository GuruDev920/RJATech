import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RJA Tech LLC | Technology Services",
  description:
    "Modern technology support and digital services from RJA Tech LLC.",
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
