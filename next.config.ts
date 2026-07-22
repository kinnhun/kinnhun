import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["img.shields.io", "api.iconify.design", "readme-typing-svg.demolab.com"],
  },
};

export default nextConfig;
