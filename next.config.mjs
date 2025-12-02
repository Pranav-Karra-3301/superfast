import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Image optimization for maximum performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [56, 112, 400, 640, 750, 828, 1080],
    minimumCacheTTL: 31536000, // 1 year cache
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
