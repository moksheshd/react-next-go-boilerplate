import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  // Configure SPA mode
  output: "export", // Static HTML export for SPA
  trailingSlash: true,
};

export default nextConfig;
