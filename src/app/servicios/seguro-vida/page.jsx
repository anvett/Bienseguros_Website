import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function SeguroVida() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Seguro de Vida";

  const benefitsList = [
    "Protección financiera para tu familia en caso de fallecimiento",
    "Cobertura para enfermedades terminales y accidentes",
    "Flexibilidad en la elección de beneficiarios",
    "Planificación financiera a largo plazo con acumulación de valor",
    "Cobertura adicional para gastos funerarios y de hospitalización",
    "Asesoría personalizada para elegir la mejor cobertura de acuerdo a tus necesidades",
  ];

  const imageSource = "/assets/images/servicios/seguro-vida/seguro_vida.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Seguro de Vida";
  const features = [
    "Cobertura de hasta $100,000 en caso de fallecimiento por cualquier causa",
    "Opciones de pólizas a término, vida entera o universal",
    "Cobertura adicional por muerte accidental o enfermedades críticas",
    "Acumulación de valor en pólizas de vida entera o universal",
    "Flexibilidad para aumentar la cobertura según las necesidades del asegurado",
    "Cobertura para gastos funerarios, médicos y de hospitalización",
    "Beneficios fiscales según la legislación vigente",
  ];

  const requirements = [
    "Formulario de solicitud completado",
    "Evaluación médica y declaración de salud",
    "Ser mayor de 18 años o menor de edad con un representante legal",
    "Pago de la prima inicial para activar la póliza",
  ];

  const imageSrc = "/assets/images/servicios/seguro-vida/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Listo para proteger el futuro de tu familia con un seguro de vida?";
  const buttonText = "Contrata tu Seguro de Vida";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/seguro-vida/hero_back.png"
        mainText="Seguro de Vida"
        secondaryText="El Seguro de Vida de BienSeguros te brinda la tranquilidad de proteger a tus seres queridos y asegurar su estabilidad financiera en caso de imprevistos. Elige la cobertura que mejor se adapte a tus necesidades."
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
