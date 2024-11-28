import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function SeguroAccidentes() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Seguro de Accidentes";

  const benefitsList = [
    "Cobertura integral en caso de accidentes",
    "Asistencia médica y hospitalaria inmediata",
    "Compensación económica por incapacidad temporal o permanente",
    "Cobertura de gastos de rehabilitación y terapias",
    "Flexibilidad en la elección de proveedores médicos",
    "Asesoría personalizada en la gestión de reclamaciones",
  ];

  const imageSource = "/assets/images/servicios/seguro-accidentes/seguro_accidentes.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Seguro de Accidentes";
  const features = [
    "Cobertura de hasta $50,000 en caso de accidentes",
    "Atención médica 24/7 en centros afiliados",
    "Incluye coberturas de hospitalización, cirugías y medicamentos",
    "Compensación por muerte accidental o invalidez",
    "Reembolso de gastos médicos por accidentes",
    "Cobertura mundial sin restricciones geográficas",
    "Beneficios adicionales por cuidados preventivos",
  ];

  const requirements = [
    "Ser mayor de 18 años",
    "Formulario de solicitud completo y firmado",
    "Evaluación médica si es necesario",
    "Pago de la prima inicial para activar la póliza",
  ];

  const imageSrc = "/assets/images/servicios/seguro-accidentes/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Listo para protegerte ante cualquier eventualidad?";
  const buttonText = "Contrata tu Seguro de Accidentes";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/seguro-accidentes/hero_back.png"
        mainText="Seguro de Accidentes"
        secondaryText="El Seguro de Accidentes de BienSeguros te ofrece protección completa ante cualquier imprevisto. Conoce nuestras coberturas y asegura tu bienestar."
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
