import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function SeguroVehiculos() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Seguro de Vehículos";

  const benefitsList = [
    "Cobertura total en caso de accidente, robo o daños al vehículo",
    "Asistencia en carretera las 24 horas del día",
    "Reparación en talleres autorizados con repuestos originales",
    "Cobertura de daños a terceros y responsabilidad civil",
    "Vehículo de sustitución durante el tiempo de reparación",
    "Asesoría legal y gestión de reclamaciones personalizada",
  ];

  const imageSource = "/assets/images/servicios/seguro-vehiculo/seguro_vehiculo.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Seguro de Vehículos";
  const features = [
    "Cobertura de hasta $50,000 por accidentes de tránsito",
    "Incluye robo total o parcial del vehículo",
    "Cobertura de daños causados por fenómenos naturales",
    "Asistencia en carretera y grúa 24/7 en todo el país",
    "Cobertura de daños a terceros y responsabilidad civil",
    "Reparación en talleres autorizados con garantía de calidad",
    "Reembolso de gastos médicos en caso de accidente del conductor",
  ];

  const requirements = [
    "Formulario de solicitud completado",
    "Documentación del vehículo: matrícula y revisión técnica",
    "Licencia de conducir vigente del propietario",
    "Pago de la prima inicial para activar la póliza",
  ];

  const imageSrc = "/assets/images/servicios/seguro-vehiculo/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Listo para proteger tu vehículo con la mejor cobertura del mercado?";
  const buttonText = "Contrata tu Seguro de Vehículos";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/seguro-vehiculo/hero_back.png"
        mainText="Seguro de Vehículos"
        secondaryText="El Seguro de Vehículos de BienSeguros ofrece la protección más completa para tu automóvil, con coberturas amplias, asistencia en carretera y reparaciones garantizadas. ¡Asegura tu tranquilidad al conducir!"
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
