"use client";

import { usePathname } from "next/navigation"; // Hook del cliente

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar2/Navbar2";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // Obtén la ruta actual de la página

  return (
    <>
      {/* Renderiza el Navbar2 solo si no estás en la página inicial */}
      {pathname !== "/" && (
        <header>
          <Navbar />
        </header>
      )}
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}