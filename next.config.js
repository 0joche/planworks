// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // allows next/image to work in static export
  },
  trailingSlash: true, // adds / to URLs like /about/
};

module.exports = nextConfig;
