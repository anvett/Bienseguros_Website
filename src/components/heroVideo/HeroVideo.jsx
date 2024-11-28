"use client";

import React from "react";
import Navbar from "../navbar2/Navbar2";

const HeroVideo = () => {
  return (
    <div className="relative">
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
        <div className="hero-overlay bg-light bg-opacity-40 absolute top-0 left-0 w-full h-full"></div>
        <div className="hero-content text-center text-neutral-content relative z-10 flex flex-col">
          <Navbar />
          <div className="max-w-2x1 mx-auto px-spacing-3 py-8 sm:px-spacing-5 lg:px-spacing-3">
            <h1 className="mb-4 font-extrabold text-primary text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-2 sm:pt-spacing-1">
              ¡Bienvenidos a Bien Seguros!
            </h1>
            <h2 className="mb-4 font-extrabold text-primary text-size-4 sm:text-size-5 lg:text-size-6 font-primary pt-spacing-2 sm:pt-spacing-1">
              Protección, Confianza y Tranquilidad
            </h2>
            <h3 className="mb-4 font-extrabold text-primary text-size-3 sm:text-size-4 lg:text-size-5 font-primary pt-spacing-2 pb-spacing-3 sm:pt-spacing-4">
              Comprometidos con tu Seguridad y Bienestar
            </h3>
            <button className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom hover:bg-accent hover:text-primary">
              <a href="/contacto">Más Información</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
