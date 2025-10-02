"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers"; // Assuming Providers is what you're using

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Define routes where you DO NOT want the Header/Footer
  const isDashboardRoute = pathname.startsWith('/dashboard');

  return (
    <Providers>
      {!isDashboardRoute && <Header />} {/* Render Header only if not on a dashboard route */}
      
      {children}
      
      {!isDashboardRoute && <Footer />} {/* Render Footer only if not on a dashboard route */}
      
      <ScrollToTop />
    </Providers>
  );
}