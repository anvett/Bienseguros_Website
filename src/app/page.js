"use client";

import React from "react";
import Introduction from "@/components/Introduction/Introduction";
import BenefitsGrid from "@/components/benefitsGrid/BenefitsGrid";
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Testimonials from "@/components/testimonials/Testimonials";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";
import { motion } from "framer-motion";
import BenefitsVideo from "@/components/BenefitsVideo/BenefitsVideo";
import NavbarHeroVideo from "@/components/navbarHeroVideo/NavbarHeroVideo";

export default function Home() {
  //----------------------------------------------
  // Texto de introducción
  //----------------------------------------------

  const introductionText = `
  En Bien Seguros, nos dedicamos a proteger lo que más valoras a través de seguros innovadores y personalizados que brindan tranquilidad y seguridad en cada etapa de tu vida. Somos una empresa de referencia en el sector asegurador, comprometidos con el bienestar de nuestros clientes y con la responsabilidad social, promoviendo soluciones que se adaptan a tus necesidades y te acompañan en cada momento importante.
`;

  //----------------------------------------------
  // Servicios destacados
  //----------------------------------------------

  const services = [
    {
      icon: "assets/images/servicios/seguro_accidentes.png",
      title: "Seguro de Accidentes",
      description:
        "Protege tu bienestar con nuestro Seguro de Accidentes, que te brinda cobertura en caso de imprevistos y situaciones inesperadas.",
      link: "/servicios/seguro-accidentes",
    },
    {
      icon: "assets/images/servicios/seguro_asistencia.png",
      title: "Seguro de Asistencia",
      description:
        "Obtén apoyo inmediato en situaciones de emergencia con nuestro Seguro de Asistencia, diseñado para ofrecerte tranquilidad.",
      link: "/servicios/seguro-asistencia",
    },
    {
      icon: "assets/images/servicios/seguro_enfermedades.png",
      title: "Seguro de Enfermedades Catastróficas",
      description:
        "Asegura tu salud frente a enfermedades graves con nuestra cobertura para enfermedades catastróficas.",
      link: "/servicios/seguro-enfermedades",
    },
    {
      icon: "assets/images/servicios/seguro_vehiculo.png",
      title: "Seguro de Vehículo",
      description:
        "Protege tu vehículo contra accidentes, robos y daños con nuestras pólizas completas de seguro de vehículo.",
      link: "/servicios/seguro-vehiculo",
    },
  ];

  //----------------------------------------------
  // Beneficios array y src img
  //----------------------------------------------

  const benefitsTitle = "Sé parte de Bien Seguros";

  const benefits = [
    "Protección integral para ti y tu familia",
    "Coberturas personalizadas que se adaptan a tus necesidades",
    "Compromiso con la transparencia y la responsabilidad en todos nuestros servicios",
    "Acceso a seguros innovadores y confiables",
    "Atención cercana y personalizada para cada cliente",
    "Tarifas competitivas y coberturas flexibles",
  ];

  const imageSrc = "assets/images/benefits/seguro_familiar.jpg";

  const videoSrc = "/assets/videos/cascada1.mp4";

  //----------------------------------------------
  // Testimonios array
  //----------------------------------------------

  const testimonials = [
    {
      name: "Ana Martínez",
      photo: "assets/images/testimonials/test1.jpg",
      text: "Ser parte de COAC SUP LTDA. ha sido una de las mejores decisiones financieras que he tomado. Sus servicios son excelentes y el trato es siempre personalizado.",
    },
    {
      name: "Luis Herrera",
      photo: "assets/images/testimonials/test2.jpg",
      text: "Gracias a los créditos de COAC SUP LTDA., pude emprender mi negocio y seguir adelante con mi proyecto. Estoy muy agradecido por su apoyo constante.",
    },
    {
      name: "Sofía Morales",
      photo: "assets/images/testimonials/test3.jpg",
      text: "La confianza y seguridad que me brinda COAC SUP LTDA. no tienen comparación. Siempre están disponibles para ayudarme a manejar mis finanzas de la mejor manera.",
    },
  ];

  const videoUrl = "/assets/videos/flowers1.mp4";

  //----------------------------------------------
  // Beneficios y valores de la cooperativa
  //----------------------------------------------

  const benefitsData = {
    title: "Beneficios y Valores de Bien Seguros",
    items: [
      {
        src: "FaUserShield", // FontAwesome icon
        detail: "Protección integral para ti y tu familia.",
      },
      {
        src: "FaHandshake", // FontAwesome icon
        detail: "Confianza y seguridad en todos nuestros servicios.",
      },
      {
        src: "FaHandsHelping", // FontAwesome icon
        detail: "Compromiso con la comunidad y responsabilidad social.",
      },
      {
        src: "FaLightbulb", // FontAwesome icon
        detail: "Innovación constante para mejorar nuestras coberturas.",
      },
      {
        src: "FaCommentsDollar", // FontAwesome icon
        detail: "Atención personalizada para cada cliente.",
      },
      {
        src: "FaHeart", // FontAwesome icon
        detail: "Empatía y solidaridad en todas nuestras relaciones.",
      },
    ],
  };

  //----------------------------------------------

  return (
    <main className="">
      <NavbarHeroVideo />
      <Introduction text={introductionText} />
      <BenefitsGrid title={benefitsData.title} items={benefitsData.items} />
      <FeaturedServices services={services} />
      <BenefitsVideo benefitsTitle={benefitsTitle} benefits={benefits} videoSrc={videoSrc} />
      <div className=" pt-spacing-1 pb-spacing-1 sm:pt-spacing-3 sm:pb-spacing-4 bg-gradient-primary">
        <h2 className="section-title text-light"></h2>
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>
    </main>
  );
}
