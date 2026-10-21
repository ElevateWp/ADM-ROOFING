/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/general-plumbing', destination: '/plumbing-maintenance-repairs', permanent: true },
      { source: '/plumbing-repairs', destination: '/plumbing-maintenance-repairs', permanent: true },
      { source: '/hot-water-systems', destination: '/hot-water-service-maintenance-installations', permanent: true },
      { source: '/blocked-drains', destination: '/plumbing-maintenance-repairs', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
