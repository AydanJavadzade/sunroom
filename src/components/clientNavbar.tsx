"use client"

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return  ( !isHomePage && <Navbar />) ;
}