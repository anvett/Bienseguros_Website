"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";

const NavbarHeroVideo = () => {
  // Navbar dentro del mismo componente
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar integrado aquí */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/assets/images/logo.jpeg" className="h-8" alt="BienSeguros Logo" />
            <span className="self-center text-size-3 sm:text-size-5 font-semibold whitespace-nowrap text-light">BienSeguros</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-light"
            aria-controls="navbar-multi-level"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-transparent md:space-x-8 md:flex-row md:mt-0">
              <li>
                <Link href="/" className="block py-2 px-3 text-light text-size-4 hover:text-accent">Inicio</Link>
              </li>
              <li>
                <Link href="/servicios" className="block py-2 px-3 text-light text-size-4 hover:text-accent">Servicios</Link>
              </li>
              <li>
                <Link href="/acerca-de" className="block py-2 px-3 text-light text-size-4 hover:text-accent">Quiénes Somos</Link>
              </li>
              <li>
                <Link href="/faqs" className="block py-2 px-3 text-light text-size-4 hover:text-accent">FAQs</Link>
              </li>
              <li>
                <Link href="/contacto" className="block py-2 px-3 text-light text-size-4 hover:text-accent">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero video section */}
      <div className="hero min-h-screen bg-light relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-dark bg-opacity-40 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative z-10 flex flex-col">
          <div className="hero-content text-center text-neutral-content mt-20">
            <div className="max-w-2x1 mx-auto px-spacing-3 py-8 sm:px-spacing-5 lg:px-spacing-3">
              <h1 className="mb-4 font-extrabold text-light text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-2 sm:pt-spacing-1">
                ¡Bienvenidos a Bien Seguros!
              </h1>
              <h2 className="mb-4 font-extrabold text-lightlightize-4 sm:text-size-5 lg:text-size-6 font-primary pt-spacing-2 sm:pt-spacing-1">
                Protección, Confianza y Tranquilidad
              </h2>
              <h3 className="mb-4 font-extrabold text-lightlightize-3 sm:text-size-4 lg:text-size-5 font-primary pt-spacing-2 pb-spacing-3 sm:pt-spacing-4">
                Comprometidos con tu Seguridad y Bienestar
              </h3>
              <button className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom hover:bg-accent hover:text-primary">
                <a href="/contacto">Más Información</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHeroVideo;
