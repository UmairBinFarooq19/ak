/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ak',
  images: {
    unoptimized: true,
  },
  // Suppress 404 warnings for missing static pages in export
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
