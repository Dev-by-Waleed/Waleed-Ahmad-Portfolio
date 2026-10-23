import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  authors: [{ name: profile.name }],
  keywords: [
    "portfolio",
    "computer science student",
    "cybersecurity student",
    "frontend developer",
    "React",
    "Next.js",
  ],
};

export const viewport = {
  themeColor: "#07070c",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Keep content readable if JavaScript never runs. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}.skill-bar-fill{width:var(--level)}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
