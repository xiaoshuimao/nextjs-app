const withLess = require("next-with-less");
const { PORT } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  // reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://cgapi.daqingmei.com/:path*`,
        },
      ],
    }
  },
  publicRuntimeConfig: {
    PORT,
  }
})

module.exports = nextConfig
