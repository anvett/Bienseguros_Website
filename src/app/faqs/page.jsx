"use client";

import React from "react";


const faqData = [
  {
    question: "¿Qué tipos de seguros ofrecen?",
    answer: "En Bien Seguros ofrecemos una amplia gama de seguros, incluyendo seguros de vida, seguros de salud, seguros de vehículos, seguros de accidentes y seguros de hogar. Nuestro objetivo es proteger lo que más valoras en cada etapa de tu vida.",
  },
  {
    question: "¿Cómo puedo contratar un seguro?",
    answer: "Puedes contratar un seguro con Bien Seguros contactando a uno de nuestros asesores a través de nuestro sitio web, llamándonos directamente o visitando nuestras oficinas. Te guiaremos en el proceso y te ayudaremos a elegir la mejor cobertura para tus necesidades.",
  },
  {
    question: "¿Qué documentos necesito para contratar un seguro?",
    answer: "Para contratar un seguro, generalmente necesitas una identificación válida, comprobantes de ingresos, y otros documentos específicos dependiendo del tipo de seguro. Nuestro equipo te proporcionará una lista detallada de los requisitos según el seguro que elijas.",
  },
  {
    question: "¿Cómo puedo hacer un reclamo?",
    answer: "Para hacer un reclamo, puedes contactarnos directamente a través de nuestro sitio web, teléfono o correo electrónico. Te guiaremos en cada paso del proceso para asegurar que tu reclamo sea gestionado de manera rápida y eficiente.",
  },
  {
    question: "¿Qué tipos de pago aceptan?",
    answer: "Aceptamos varios métodos de pago, incluyendo transferencias bancarias, pagos con tarjeta de crédito y débito, y pagos en efectivo en nuestras oficinas. Nuestro objetivo es facilitar el proceso de pago para todos nuestros clientes.",
  },
  {
    question: "¿Puedo modificar mi póliza de seguro?",
    answer: "Sí, puedes modificar tu póliza de seguro en cualquier momento contactando a uno de nuestros asesores. Te ayudaremos a ajustar la cobertura según tus necesidades cambiantes.",
  },
  {
    question: "¿Ofrecen seguros para empresas?",
    answer: "Sí, en Bien Seguros ofrecemos una variedad de seguros diseñados específicamente para empresas, incluyendo seguros de responsabilidad civil, seguros de propiedad, y seguros de salud para empleados. Contáctanos para obtener más información y personalizar un plan que se adapte a tu negocio.",
  },
];


const FAQPage = () => {
  return (
    <section className="relative bg-gradient-primary text-center overflow-hidden">
      <div className="bg-gradient-primary pt-spacing-3 py-spacing-1 sm:py-spacing-5 ">
        <h1 className="section-title text-light">Preguntas Frecuentes</h1>
        
      
      </div>
      
      <div className="py-spacing-5 bg-light">
        <div className="container mx-auto px-spacing-3 lg:px-spacing-8">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-start font-semibold text-primary">{item.question}</h3>
              <p className="text-dark text-start leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
