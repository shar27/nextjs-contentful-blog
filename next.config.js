/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images:{
      domains: ['images.ctfassets.net', 'assets.ctfassets.net'],
  }
}
