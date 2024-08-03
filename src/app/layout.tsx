import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            Home Sweet Home
          </Link>
        </div>
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
