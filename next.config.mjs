/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.websnomadas.com",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
