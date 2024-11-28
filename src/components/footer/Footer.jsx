import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer pl-spacing-3 p-spacing-8 bg-gradient-primary text-base-content flex flex-col md:flex-row md:justify-center">
        <div className="flex flex-col md:w-1/3">
          <h6 className="footer-title text-size-3 font-bold font-primary text-light">
            Servicios
          </h6>
          <Link
            href="/servicios/seguro-accidentes"
            className="text-light font-semibold link link-hover"
          >
            Seguro de accidentes
          </Link>
          <Link
            href="/servicios/seguro-asistencia"
            className="text-light font-semibold link link-hover"
          >
            Seguro de asistencia
          </Link>
          <Link
            href="/servicios/seguro-enfermedades"
            className="text-light font-semibold link link-hover"
          >
            Seguro de enfermedades catastróficas
          </Link>
          <Link
            href="/servicios/seguro-medico"
            className="text-light font-semibold link link-hover"
          >
            Seguro médico
          </Link>
          <Link
            href="/servicios/seguro-vehiculo"
            className="text-light font-semibold link link-hover"
          >
            Seguro de vehículo
          </Link>
          <Link
            href="/servicios/seguro-vida"
            className="text-light font-semibold link link-hover"
          >
            Seguro de vida
          </Link>
        </div>

        <div className="flex flex-col md:w-1/3">
          <h6 className="footer-title text-size-3 font-primary font-bold text-light">
            BienSeguros 
          </h6>
          <Link href="/" className="text-light font-semibold link link-hover">
            Inicio
          </Link>
          <Link href="/acerca-de" className="text-light font-semibold link link-hover">
            Acerca de nosotros
          </Link>
          <Link href="/contacto" className="text-light font-semibold link link-hover">
            Contacto
          </Link>
          <Link href="/faqs" className="text-light font-semibold link link-hover">
            FAQs
          </Link>
          <Link
            href="/legal/politicas-de-cookies"
            className="text-light font-semibold link link-hover"
          >
            Política de Cookies
          </Link>
          <Link
            href="/legal/politicas-de-privacidad"
            className="text-light font-semibold link link-hover"
          >
            Política de Privacidad
          </Link>
          <Link href="/legal/terminos-de-uso" className="text-light font-semibold link link-hover">
            Términos de Uso
          </Link>
        </div>
      </footer>
      <footer className="footer p-spacing-5 bg-light text-neutral-content">
        <aside>
          <Image
            src="/assets/images/logo.jpeg"
            alt="BienSeguros Logo"
            width={200}
            height={200}
            className="fill-current"
          />
          <p className="text-primary font-extrabold text-size-3 font-primary sm:text-size-4">
            BienSeguros
          </p>
          <p className="text-primary font-semibold text-size-2 font-primary pt-spacing-2 sm:text-size-3">
            Protegiendo lo que más valoras
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-size-3 text-primary font-primary">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://instagram.com">
              <Image
                src="/assets/icons/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="fill-current"
              />
            </Link>
            <Link href="https://facebook.com">
              <Image
                src="/assets/icons/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
                className="fill-current"
              />
            </Link>
           
          </div>
        </nav>
      </footer>
      <footer className="text-center p-spacing-3 bg-gradient-primary text-sm text-base-content">
        <p className="text-size-2 text-light font-semibold">
          &copy; 2024 Anvetcorp SAS. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
