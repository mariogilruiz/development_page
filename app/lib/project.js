const resolvedApiBaseUrl = (
  process.env.NEXT_PUBLIC_API_URL || "https://api.websnomadas.com"
).trim();

export const API_BASE_URL = resolvedApiBaseUrl.replace(/\/+$/, "");
export const API_CONTENT_BASE = `${API_BASE_URL}/websnomadas`;
export const API_ASSETS_BASE = `${API_BASE_URL}/content-assets/websnomadas`;

export function buildAssetProxyUrl(assetPath) {
  const cleanAssetPath = String(assetPath || "").replace(/^\/+/, "");

  return cleanAssetPath ? `/api/assets/${cleanAssetPath}` : "";
}

export const CONTENT_SLUGS = {
  home: "home",
  servicios: "servicios",
  proyectos: "proyectos",
  contacto: "contacto",
  legal: "legal",
};

export function buildContentUrl(slug) {
  const cleanSlug = String(slug || "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");

  return cleanSlug ? `${API_CONTENT_BASE}/${cleanSlug}` : API_CONTENT_BASE;
}

export function buildAssetsUrl() {
  return API_ASSETS_BASE;
}
