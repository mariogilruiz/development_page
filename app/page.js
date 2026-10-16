import Successful_page from "./components/successful/Successful_page";
import { API_BASE_URL } from "./lib/project";

export const metadata = {
  title: "Web en desarrollo | websnomadas",
  description:
    "Estamos trabajando en este sitio web. Muy pronto estara disponible.",
  robots: { index: false, follow: false },
};

const successPageBrand = {
  href: "https://www.websnomadas.com",
  logoSrc: `${API_BASE_URL}/assets/websnomadas/logos/logo_primary_WN.png`,
  logoAlt: "Logo de WebsNomadas",
  prefix: "Desarrollado por",
  name: "WebsNomadas",
  descriptor: "Digital Studio",
};

const pageActions = [
  {
    href: "https://www.websnomadas.com/contacto",
    label: "Contactar con WebsNomadas",
    variant: "primary",
  },
  {
    href: "https://www.websnomadas.com",
    label: "Conocer WebsNomadas",
    variant: "secondary",
  },
];

export default function DevelopmentPage() {
  return (
    <Successful_page
      eyebrow="En desarrollo"
      title="Estamos trabajando en tu web"
      description="Este sitio esta en proceso de desarrollo y mantenimiento. Estamos afinando los ultimos detalles para ofrecerte la mejor experiencia. Vuelve pronto."
      note="Rumbo fijado. Tu presencia digital esta en construccion."
      actions={pageActions}
      brand={successPageBrand}
      projectLabel="Proyecto"
      projectName="en construccion"
    />
  );
}
