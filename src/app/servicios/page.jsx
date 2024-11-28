"use client";

import React from "react";
import CategoryLinksIcons from "../../components/categoryLinks/CategoryLinksIcons";
import { motion } from "framer-motion";
import { FaUserShield, FaHeartbeat, FaCar, FaHandHoldingMedical, FaAmbulance, FaShieldAlt } from "react-icons/fa"; // Importa los íconos que necesitas

export default function ServicesPage() {
  //----------------------------------------------
  // This is the data that will be used to render the services page
  //----------------------------------------------

  const serviciosItems = [
    {
      icon: <FaShieldAlt size={50} />, // Seguro de Accidentes
      title: "Seguro de Accidentes",
      description: "Cubre cualquier eventualidad con nuestro Seguro de Accidentes, que ofrece respaldo inmediato en caso de imprevistos.",
      link: "/servicios/seguro-accidentes",
      linkText: "Ver más",
    },
    {
      icon: <FaAmbulance size={50} />, // Seguro de Asistencia
      title: "Seguro de Asistencia",
      description: "Asegura tu tranquilidad con nuestro Seguro de Asistencia, diseñado para brindarte apoyo en situaciones de emergencia.",
      link: "/servicios/seguro-asistencia",
      linkText: "Ver más",
    },
    {
      icon: <FaHandHoldingMedical size={50} />, // Seguro de Enfermedades Catastróficas
      title: "Seguro de Enfermedades Catastróficas",
      description: "Protege tu salud con nuestro Seguro de Enfermedades Catastróficas, que cubre tratamientos costosos y de larga duración.",
      link: "/servicios/seguro-enfermedades",
      linkText: "Ver más",
    },
    {
      icon: <FaHeartbeat size={50} />, // Seguro Médico
      title: "Seguro Médico",
      description: "Obtén la mejor cobertura médica con nuestro Seguro Médico, diseñado para brindarte atención integral en salud.",
      link: "/servicios/seguro-medico",
      linkText: "Ver más",
    },
    {
      icon: <FaCar size={50} />, // Seguro de Vehículo
      title: "Seguro de Vehículo",
      description: "Protege tu vehículo con nuestras completas pólizas de seguro, que cubren desde accidentes hasta robo.",
      link: "/servicios/seguro-vehiculo",
      linkText: "Ver más",
    },
    {
      icon: <FaUserShield size={50} />, // Seguro de Vida
      title: "Seguro de Vida",
      description: "Protege el futuro de tus seres queridos con nuestro Seguro de Vida, adaptado a tus necesidades y presupuesto.",
      link: "/servicios/seguro-vida",
      linkText: "Ver más",
    },
  ];

  return (
    <section className="relative bg-gradient-primary text-center overflow-hidden">
      <motion.div
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <CategoryLinksIcons
          title="Nuestros Servicios"
          subtitle="Somos especialistas con varios años de experiencia"
          items={serviciosItems}
        />
        ;
      </motion.div>
    </section>
  );
}
