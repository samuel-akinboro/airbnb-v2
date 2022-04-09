/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["links.papareact.com"]
  }
}

module.exports = nextConfig
