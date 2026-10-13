/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/dental-implants', destination: '/home-extensions', permanent: true },
      { source: '/root-canal', destination: '/loft-garage-conversions', permanent: true },
      { source: '/teeth-whitening', destination: '/kitchens-bathrooms', permanent: true },
      { source: '/dental-cleaning', destination: '/home-refurbishments', permanent: true },
      { source: '/braces', destination: '/interior-finishing', permanent: true },
      { source: '/cosmetic-dentistry', destination: '/roofing-lean-to-improvements', permanent: true },
      { source: '/dentists/our-doctor', destination: '/our-team/nicholas-and-the-a-z-team', permanent: true },
      { source: '/dentists', destination: '/our-team', permanent: true },
      { source: '/dentists/:path*', destination: '/our-team', permanent: true },
      { source: '/book-appointment', destination: '/request-a-quote', permanent: true },
      { source: '/emergency-dentist/:path*', destination: '/contact', permanent: true },
      { source: '/emergency-dentist', destination: '/contact', permanent: true },
      { source: '/blog/understanding-osseointegration-dental-implants', destination: '/blog/planning-a-home-extension', permanent: true },
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
