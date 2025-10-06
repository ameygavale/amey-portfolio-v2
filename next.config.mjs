/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable Next.js image optimization so exported builds can serve assets directly.
    unoptimized: true,
  },
};

export default nextConfig;
