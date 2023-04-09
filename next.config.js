/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
};

module.exports = nextConfig;
