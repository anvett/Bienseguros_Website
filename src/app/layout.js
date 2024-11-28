import "./globals.css";
import ClientLayout from "./ClientLayout";

// Definir la metadata utilizando la Metadata API para SEO
export const metadata = {
  title: "BienSeguros Pro - Tu Corredor de Seguros Confiable",
  description: "BienSeguros Pro ofrece soluciones de seguros personalizadas y de alta calidad para proteger lo que más valoras.",
  icons: {
    icon: "/images/icons/favicon.ico",
  },
  metadataBase: new URL("https://biensegurospro.com"),  // Añadir la propiedad metadataBase
  openGraph: {
    title: "BienSeguros Pro - Tu Corredor de Seguros Confiable",
    description: "Soluciones de seguros personalizadas para proteger lo que más valoras.",
    url: "https://biensegurospro.com",
    siteName: "BienSeguros Pro",
    images: [
      {
        url: "/images/social-preview.png", // URL de la imagen para la vista previa social
        width: 800,
        height: 600,
        alt: "BienSeguros Pro - Soluciones de Seguros",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BienSeguros Pro - Tu Corredor de Seguros Confiable",
    description: "Soluciones de seguros personalizadas para proteger lo que más valoras.",
    images: ["/images/social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "seguros personalizados",
    "corredor de seguros",
    "protección financiera",
    "BienSeguros Pro",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-lato">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
