import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "CashClaw | Composable Revenue for AI Agents",
  description: "Turn Clanker trading fees into programmable revenue. Tokenize. Automate. Collaborate.",
  openGraph: {
    title: "CashClaw | Composable Revenue for AI Agents",
    description: "Turn Clanker trading fees into programmable revenue.",
    url: "https://cashclaw.org",
    siteName: "CashClaw",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CashClaw | Composable Revenue for AI Agents",
    description: "Turn Clanker trading fees into programmable revenue.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
