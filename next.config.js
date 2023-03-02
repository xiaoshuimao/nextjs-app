/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
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
}

module.exports = nextConfig
