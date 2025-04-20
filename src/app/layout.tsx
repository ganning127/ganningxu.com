import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Hi! I'm Ganning Xu, a CS student at Georgia Tech. I love building cool things! I also love cycling, aviation, and traveling :)";

export const metadata: Metadata = {
  title: {
    template: "%s | Ganning Xu",
    default: "Ganning Xu",
  },
  description: description,
  openGraph: {
    title: "Ganning Xu",
    description: description,
    url: "https://ganningxu.com",
    siteName: "Ganning Xu",
    images: [
      {
        url: "https://ganningxu.com/images/og-ganning.jpg",
        width: 800,
        height: 600,
        alt: "Ganning Xu during sunset near Atlanta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: "/favicon.png",
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
        <Container>
          <NavBar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
