import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Long Nguyen — Senior Data Engineer",
  description:
    "Independent senior data engineer building production-grade pipelines, lakehouses, and ML infrastructure for teams that need it to just work.",
  metadataBase: new URL("https://longnguyen.dev"),
  openGraph: {
    title: "Long Nguyen — Senior Data Engineer",
    description:
      "Independent senior data engineer building production-grade pipelines, lakehouses, and ML infrastructure.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${grotesk.variable}`}>
      <body className="noise bg-ink-950 text-ink-50">{children}</body>
    </html>
  );
}
