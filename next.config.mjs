/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't fail build on ESLint warnings
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // For static export if needed
  },
};

export default nextConfig;
