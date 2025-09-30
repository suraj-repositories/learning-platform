/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "dist",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "",
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // workspace root fix
  outputFileTracingRoot: path.join(__dirname),

  // cross origin dev request fix: move here
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.19:3000",
  ],
};

module.exports = nextConfig;
