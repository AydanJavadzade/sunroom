"use client"

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return  ( !isHomePage && <Navbar />) ;
}