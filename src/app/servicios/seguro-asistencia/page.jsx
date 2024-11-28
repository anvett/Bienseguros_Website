import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function SeguroAsistencia() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Seguro de Asistencia";

  const benefitsList = [
    "Cobertura completa para emergencias en cualquier momento",
    "Asistencia en carretera, hogar, y viaje",
    "Servicio de grúa y remolque 24/7",
    "Asistencia legal y médica en situaciones de emergencia",
    "Acceso a red de proveedores y talleres afiliados",
    "Atención personalizada para coordinar servicios de asistencia",
  ];

  const imageSource = "/assets/images/servicios/seguro-asistencia/seguro_asistencia.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Seguro de Asistencia";
  const features = [
    "Cobertura de asistencia vehicular y en carretera a nivel nacional",
    "Servicio de cerrajería, ambulancia y asistencia médica telefónica",
    "Asistencia en viajes internacionales y nacionales",
    "Asistencia en el hogar por emergencias, como plomería y electricidad",
    "Reembolso de gastos de hotel y transporte en caso de siniestro durante un viaje",
    "Cobertura de asesoría legal y médica",
    "Atención de emergencias 24/7 con respuesta rápida",
  ];

  const requirements = [
    "Formulario de solicitud completado",
    "Ser mayor de 18 años",
    "Documentación del vehículo o propiedad según sea necesario",
    "Pago de la prima inicial para activar la cobertura de asistencia",
  ];

  const imageSrc = "/assets/images/servicios/seguro-asistencia/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Necesitas ayuda inmediata en cualquier situación de emergencia?";
  const buttonText = "Contrata tu Seguro de Asistencia";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/seguro-asistencia/hero_back.png"
        mainText="Seguro de Asistencia"
        secondaryText="El Seguro de Asistencia de BienSeguros ofrece protección integral en situaciones de emergencia, ya sea en carretera, hogar o viajes. ¡Prepárate para lo inesperado!"
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
