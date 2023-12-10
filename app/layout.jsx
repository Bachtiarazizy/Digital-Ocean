import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigitalOcean",
  description: "Discovering the best web development",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <main className={inter.className}>{children}</main>
    </html>
  );
};

export default RootLayout;
