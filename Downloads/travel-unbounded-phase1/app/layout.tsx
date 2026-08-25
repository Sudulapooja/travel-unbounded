import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description: "Curated India and international journeys built around you."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Navbar />{children}<Footer /></body>
    </html>
  );
}