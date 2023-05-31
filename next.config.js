/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "avatars.yandex.net" },
      { protocol: "https", hostname: "imgmk.lotteautoauction.net" },
    ],
  },
};

module.exports = nextConfig;
