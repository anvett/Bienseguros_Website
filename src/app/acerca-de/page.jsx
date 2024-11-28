import React from "react";
import Image from "next/image";

export default function AcercaDe() {
  return (
    <section className="relative bg-light text-center overflow-hidden">
      {/* Sección de presentación */}
      <div className="hero bg-gradient-primary min-h-[75vh] flex items-center justify-center">
        <div className="hero-content flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="w-full lg:w-3/4 lg:ml-6">
            <h1 className="section-title text-light mb-4">Acerca de BienSeguros</h1>
            <p className="p-custom text-center">
              En BienSeguros, nos especializamos en brindar soluciones de seguros personalizadas que
              protegen lo que más valoras. Nuestro compromiso es ofrecerte tranquilidad y seguridad,
              a través de pólizas diseñadas a la medida de tus necesidades, garantizando siempre un
              servicio de alta calidad y atención cercana.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Historia */}
      <div className="pt-spacing-2 sm:pt-spacing-3">
        <h2 className="section-subtitle pb-spacing-2 sm:pb-spacing-3 text-primary">Nuestra Historia</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-spacing-3 sm:px-spacing-14">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <p className="p-custom text-justify">
              Desde nuestros inicios, BienSeguros ha trabajado con un propósito claro: proteger a
              nuestros clientes y sus familias con coberturas de seguros fiables y accesibles. A lo
              largo de los años, hemos crecido junto a nuestros asegurados, adaptándonos a los
              cambios y siempre innovando para ofrecer los mejores productos del mercado. Nuestra
              experiencia nos ha posicionado como un referente en el sector, gracias a la confianza
              depositada por miles de clientes satisfechos.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <div className="w-[90%]">
              <Image
                src="/assets/images/bosque1.jpeg"
                alt="Historia de BienSeguros"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Valores */}
      <div className="hero min-h-[75vh] pt-spacing-1">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/assets/images/benefits/valores.jpg"
            className="rounded-lg shadow-lg"
            width={500}
            height={300}
            alt="Valores de BienSeguros"
          />
          <div className="px-spacing-3 pb-spacing-2 sm:pb-spacing-3 text-primary">
            <h1 className="section-subtitle pb-spacing-2 sm:pb-spacing-3">Nuestros Valores</h1>
            <ul className="list-none list-inside space-y-4 sm:list-disc">
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Transparencia y Honestidad
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Compromiso con el Cliente
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Innovación en Servicios
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Solidaridad y Empatía
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Responsabilidad Social
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Excelencia en Atención
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección del Equipo */}
      <div className="py-spacing-3 bg-gradient-primary flex flex-col items-center justify-center">
        <h2 className="section-subtitle text-light text-center">Nuestro Equipo</h2>
        <div className="flex flex-col lg:flex-col items-center w-full lg:w-3/4 gap-5">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <p className="p-custom text-center lg:text-center">
              Nuestro equipo está formado por expertos en seguros que se dedican a proporcionar un
              servicio excepcional y asesoramiento personalizado. Cada uno de nosotros comparte la
              misión de cuidar lo que es importante para ti, ofreciendo las mejores opciones para
              proteger tu bienestar y tranquilidad.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/team/work_team.jpg"
              alt="Equipo de BienSeguros"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
