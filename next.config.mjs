import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "**.yandex.net" },
      { protocol: "https", hostname: "**.lotteautoauction.net" },
    ],
  },
};

export default withPlaiceholder(nextConfig);
