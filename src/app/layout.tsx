import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Divyansh Prakash Sharma | Senior Front end Developer",
  description:
    "Explore the portfolio of Divyansh Prakash, a Professional Front end Developer specializing in Angular, React, and modern web solutions. Built for performance and user experience.",
  keywords: [
    "Divyansh Prakash",
    "Front end Developer",
    "Angular Portfolio",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Divyansh Prakash" }],
  openGraph: {
    title: "Divyansh Prakash | Personal Portfolio",
    description:
      "Front end Developer — Building the future of the web.",
    url: "",
    siteName: "Divyansh Prakash Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Divyansh Prakash Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Prakash | Front end Developer",
    description: "Building modern web applications and AI automations.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
