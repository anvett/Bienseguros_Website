import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function SeguroMedico() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Seguro Médico";

  const benefitsList = [
    "Cobertura integral para consultas, hospitalización y cirugías",
    "Acceso a una red amplia de médicos y especialistas",
    "Exámenes médicos y diagnósticos cubiertos",
    "Asistencia médica las 24 horas del día, los 7 días de la semana",
    "Cobertura de gastos de medicamentos prescritos",
    "Atención personalizada y asesoría en la gestión de reclamaciones",
  ];

  const imageSource = "/assets/images/servicios/seguro-medico/seguro_medico.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Seguro Médico";
  const features = [
    "Cobertura de hasta $100,000 para tratamientos médicos anuales",
    "Incluye consultas médicas generales y con especialistas",
    "Cobertura de emergencias, hospitalización y cirugías",
    "Cobertura de maternidad y cuidados prenatales",
    "Acceso a red de clínicas y hospitales a nivel nacional",
    "Atención médica domiciliaria en casos de emergencia",
    "Reembolso de gastos médicos según la póliza contratada",
  ];

  const requirements = [
    "Formulario de solicitud completado",
    "Evaluación médica y declaración de salud",
    "Ser mayor de 18 años o menor de edad con un representante legal",
    "Pago de la prima inicial para activar la póliza",
  ];

  const imageSrc = "/assets/images/servicios/seguro-medico/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Listo para asegurar tu bienestar con una cobertura médica completa?";
  const buttonText = "Contrata tu Seguro Médico";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/seguro-medico/hero_back.png"
        mainText="Seguro Médico"
        secondaryText="El Seguro Médico de BienSeguros ofrece protección completa para tu salud y la de tu familia. Accede a una amplia red de médicos, especialistas y hospitales con las mejores coberturas del mercado."
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
