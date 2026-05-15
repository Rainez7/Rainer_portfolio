import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rainer Glusman — Frontend Engineer",
  description:
    "Software Engineer specialized in Frontend development with 6+ years of experience building modern web applications.",
  keywords: [
    "Frontend Engineer",
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Rainer Glusman" }],
  openGraph: {
    title: "Rainer Glusman — Frontend Engineer",
    description: "Software Engineer specialized in Frontend with 6+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050510] text-[#f1f5f9] antialiased overflow-x-hidden">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
