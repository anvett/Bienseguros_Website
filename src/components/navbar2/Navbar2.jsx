"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light border-gray dark:bg-dark dark:border-dark-hover">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/images/logo.jpeg" className="h-8" alt="BienSeguros Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary dark:text-light">BienSeguros</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray dark:text-gray dark:hover:bg-dark-hover dark:focus:ring-dark-hover"
          aria-controls="navbar-multi-level"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray rounded-lg bg-light md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-light dark:bg-dark md:dark:bg-dark dark:border-dark-hover">
            <li>
              <Link href="/" className="block py-2 px-3 text-primary bg-light rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-primary dark:bg-primary-hover md:dark:bg-transparent" aria-current="page">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="block py-2 px-3 text-primary rounded hover:text-accent md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-light md:dark:hover:text-primary dark:hover:bg-dark-hover dark:hover:text-light md:dark:hover:bg-transparent">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/acerca-de" className="block py-2 px-3 text-primary rounded hover:text-accent md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-light md:dark:hover:text-primary dark:hover:bg-dark-hover dark:hover:text-light md:dark:hover:bg-transparent">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="block py-2 px-3 text-primary rounded hover:text-accent md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-light md:dark:hover:text-primary dark:hover:bg-dark-hover dark:hover:text-light md:dark:hover:bg-transparent">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="block py-2 px-3 text-primary rounded hover:text-accent md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-light md:dark:hover:text-primary dark:hover:bg-dark-hover dark:hover:text-light md:dark:hover:bg-transparent">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
