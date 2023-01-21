/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['@luxmarket/ui'],
  },
}

export default nextConfig
