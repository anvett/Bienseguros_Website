"use client";

import ContactForm from "@/components/contactForm/ContactForm";
import ContactInfo from "@/components/contactInfo/ContactInfo";
import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";

import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/benefits/hero_back.png"
        mainText="Contáctanos"
        secondaryText="Estamos aquí para ayudarte. Ponte en contacto con nosotros para más información."
        buttonText="Enviar Mensaje"
      />
      <div>
        <div className="py-spacing-4 bg-gradient-primary flex flex-col-reverse lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="w-full lg:w-1/2 p-spacing-1 lg:p-0">
            <ContactForm />
          </div>
          <div className="w-full lg:w-1/2   p-spacing-1 lg:p-0 ">
            <ContactInfo />
          </div>
        </div>
      </div>
      <div
        className="bg-light  lg:w-full w-full"
        
      >
      
        <a
          href="https://www.google.com/maps/place/De+los+Madro%C3%B1os,+170138+Quito/@-0.1554,-78.4713,1096m/data=!3m1!1e3!4m6!3m5!1s0x91d5900f5218a885:0x1380a11fe1d2fab5!8m2!3d-0.1555832!4d-78.4704658!16s%2Fg%2F1tkrmw63?hl=es&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center" >
            <Image
              src="/assets/images/ubicacion.png"
              alt="Mapa"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
        </a>
      </div>
    </>
  );
}
