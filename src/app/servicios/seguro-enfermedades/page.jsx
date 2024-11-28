import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function SeguroEnfermedadesCatastroficas() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Seguro de Enfermedades Catastróficas";

  const benefitsList = [
    "Cobertura amplia para enfermedades graves y costosas",
    "Acceso a tratamientos médicos avanzados y especializados",
    "Cobertura de hospitalización, cirugías y terapias prolongadas",
    "Asistencia económica para medicamentos de alto costo",
    "Atención en una red de hospitales y clínicas de primer nivel",
    "Soporte emocional y asesoría médica para el asegurado y su familia",
  ];

  const imageSource = "/assets/images/servicios/seguro-enfermedades/seguro_enfermedades.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Seguro de Enfermedades Catastróficas";
  const features = [
    "Cobertura de hasta $200,000 para tratamientos de enfermedades críticas",
    "Incluye cáncer, enfermedades cardíacas, insuficiencia renal, entre otras",
    "Cobertura de gastos médicos, hospitalarios y farmacéuticos",
    "Atención en clínicas y hospitales afiliados con tecnología de punta",
    "Compensación por tratamientos fuera del país si es necesario",
    "Acceso a consultas con especialistas y segunda opinión médica",
    "Apoyo psicológico para el paciente y familiares",
  ];

  const requirements = [
    "Formulario de solicitud completado",
    "Evaluación médica previa y declaración de salud",
    "Ser mayor de 18 años",
    "Pago de la prima inicial para activar la póliza",
  ];

  const imageSrc = "/assets/images/servicios/seguro-enfermedades/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Estás preparado para enfrentar cualquier eventualidad de salud?";
  const buttonText = "Contrata tu Seguro de Enfermedades Catastróficas";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/seguro-enfermedades/hero_back.png"
        mainText="Seguro de Enfermedades Catastróficas"
        secondaryText="El Seguro de Enfermedades Catastróficas de BienSeguros ofrece protección integral para enfrentar el alto costo de tratamientos de enfermedades graves. Asegura tu salud y tranquilidad."
        buttonText="Cotiza tu Seguro"
      />
      <Benefits benefitsTitle={benefitsTitle} benefits={benefitsList} imageSrc={imageSource} />
      <ServiceDetails
        title={title}
        features={features}
        requirements={requirements}
        imageSrc={imageSrc}
      />
      <CallToAction ctaText={ctaText} buttonText={buttonText} buttonLink={buttonLink} />
    </>
  );
}
