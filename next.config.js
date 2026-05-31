/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['shorturl.at'],
  },
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
