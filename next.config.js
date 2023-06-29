/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
