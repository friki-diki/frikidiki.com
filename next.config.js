/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
