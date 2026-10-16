import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { API_BASE_URL } from "./lib/project";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.websnomadas.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: "websnomadas",
    locale: "es_ES",
    images: [
      {
        url: `${API_BASE_URL}/images/slider-hero-01.jpeg`,
        width: 1200,
        height: 630,
        alt: "websnomadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${API_BASE_URL}/images/slider-hero-01.jpeg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
