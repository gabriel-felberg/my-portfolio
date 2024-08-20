/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['github.com', 'drive.google.com'],
  },
  staticPageGenerationTimeout: 300,
}
