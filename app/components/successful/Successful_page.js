import { API_BASE_URL } from "@/app/lib/project";
import StatusMapPage from "../status/StatusMapPage";

const defaultBrand = {
  href: "https://www.websnomadas.com",
  logoSrc: `${API_BASE_URL}/assets/websnomadas/logos/logo_primary_WN.png`,
  logoAlt:
    "este es el logo de WebsNomadas para la pagina de confirmacion de envio de mensaje",
  prefix: "Desarrollado por",
  name: "WebsNomadas",
  descriptor: "Digital Studio",
};

const defaultActions = [
  { href: "/", label: "Volver al inicio", variant: "primary" },
  { href: "/contacto", label: "Enviar otro mensaje", variant: "secondary" },
];

export default function Successful_page({
  eyebrow = "Confirmacion",
  title = "Mensaje enviado con exito",
  description = "Gracias por escribirnos. Revisaremos tu mensaje y te responderemos lo antes posible para avanzar con tu proyecto.",
  note = "Coordenadas recibidas. Presencia digital en marcha.",
  actions = defaultActions,
  brand = defaultBrand,
  theme,
  projectLabel = "Web actual",
  projectName = "websnomadas",
  mascot,
}) {
  return (
    <StatusMapPage
      eyebrow={eyebrow}
      title={title}
      description={description}
      note={note}
      actions={actions}
      brand={brand}
      theme={theme}
      projectLabel={projectLabel}
      projectName={projectName}
      mascot={mascot}
    />
  );
}
