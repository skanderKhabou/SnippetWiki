import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Reminder",
  description: "Put the last code you discover it and it will be saved forever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex items-center">
          <Link className="font-bold mx-auto text-2xl" href="/">
            Snippet Wiki | Home
          </Link>
        </div>
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
