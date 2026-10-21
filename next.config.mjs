/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/general-plumbing', destination: '/roof-repair', permanent: true },
      { source: '/plumbing-repairs', destination: '/roof-repair', permanent: true },
      { source: '/hot-water-systems', destination: '/flat-roof', permanent: true },
      { source: '/blocked-drains', destination: '/gutter-repair', permanent: true },
      { source: '/plumbing-maintenance-repairs', destination: '/roof-repair', permanent: true },
      { source: '/toilet-installations', destination: '/house-renovations', permanent: true },
      { source: '/hot-water-service-maintenance-installations', destination: '/flat-roof', permanent: true },
      { source: '/metal-roofing', destination: '/slate-and-tiles-roofing', permanent: true },
      { source: '/gutters-downpipes', destination: '/gutter-repair', permanent: true },
      { source: '/gas-appliance-installations', destination: '/roofing-services', permanent: true },
      { source: '/roofing-maintenance-repairs', destination: '/roof-repair', permanent: true },
      { source: '/roofing', destination: '/roofing-services', permanent: true },
      { source: '/roof-leak-repair', destination: '/roof-repair', permanent: true },
      { source: '/roofing-contractors', destination: '/roofing-services', permanent: true },
      { source: '/local-roofers', destination: '/roofing-services', permanent: true },
      { source: '/roofing-cost', destination: '/roofing-services', permanent: true },
      { source: '/single-ply-roofing', destination: '/flat-roof', permanent: true },
      { source: '/fibreglass-roofing', destination: '/flat-roof', permanent: true },
      { source: '/epdm-roofing', destination: '/flat-roof', permanent: true },
      { source: '/chimney-removal', destination: '/chimney-repair', permanent: true },
      { source: '/chimney-rebuilding', destination: '/chimney-repair', permanent: true },
      { source: '/soffits-and-fascias', destination: '/roof-repair', permanent: true },
      { source: '/dormers', destination: '/house-renovations', permanent: true },
      { source: '/pointing', destination: '/house-renovations', permanent: true },
      { source: '/slate-and-tiles', destination: '/slate-and-tiles-roofing', permanent: true },
      { source: '/loft-conversions', destination: '/house-renovations', permanent: true },
      { source: '/garage-conversions', destination: '/house-renovations', permanent: true },
      { source: '/house-extensions', destination: '/house-renovations', permanent: true },
      { source: '/conservatories', destination: '/house-renovations', permanent: true },
      { source: '/brickwork', destination: '/house-renovations', permanent: true },
      { source: '/plastering', destination: '/house-renovations', permanent: true },
      { source: '/painting-and-decorating', destination: '/house-renovations', permanent: true },
      { source: '/commercial-roofing', destination: '/roofing-services', permanent: true },
      { source: '/domestic-roofing', destination: '/roofing-services', permanent: true },
      { source: '/industrial-roofing', destination: '/roofing-services', permanent: true },
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
