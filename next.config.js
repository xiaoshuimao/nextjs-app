const withLess = require("next-with-less");


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
})

module.exports = nextConfig
