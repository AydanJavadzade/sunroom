"use client"

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export default function ClientFooter() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return  ( !isHomePage && <Footer />) ;
}