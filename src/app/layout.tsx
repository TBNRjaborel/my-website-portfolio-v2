import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gabriel Magdugo - Software Developer",
  description: "Full-stack software developer specializing in modern web technologies. Explore my portfolio showcasing innovative projects and professional experience.",
  keywords: ["software developer", "web developer", "full-stack", "portfolio", "Gabriel Magdugo"],
  authors: [{ name: "Gabriel Magdugo" }],
  openGraph: {
    title: "Gabriel Magdugo - Software Developer",
    description: "Full-stack software developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {children}
        </div>
      </body>
    </html>
  );
}
