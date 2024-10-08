import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
 
import ClientNavbar from "@/components/ClientNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OUTDORR+1",
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
        <ClientNavbar/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}