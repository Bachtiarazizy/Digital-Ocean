import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigitalOcean",
  description: "Discovering the best web development",
};

const RootLayout = ({ children, hasHeader }) => {
  return (
    <html lang="en">
      {hasHeader ? null : <Navbar />}
      <main className={inter.className}>{children}</main>
      <Footer />
    </html>
  );
};

export default RootLayout;
