/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/roofing-services', destination: '/plumbing-services/', permanent: true },
      { source: '/roof-repairs', destination: '/plumbing-repairs/', permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: '/toilet-flushing-repair/', permanent: true },
      { source: '/roof-leak-repairs', destination: '/pipe-leak-repair/', permanent: true },
      { source: '/roof-maintenance', destination: '/plumbing-maintenance/', permanent: true },
      { source: '/flat-roofing', destination: '/hot-water-pipe-repair/', permanent: true },
      { source: '/slate-and-tile-roofing', destination: '/toilet-bowl-repair/', permanent: true },
      { source: '/roof-replacements', destination: '/kitchen-sink-repair/', permanent: true },
      { source: '/gutter-repairs', destination: '/bidet-repair/', permanent: true },
      { source: '/chimney-repairs', destination: '/plumbing-services/', permanent: true },
      { source: '/general-plumbing', destination: '/plumbing-services/', permanent: true },
      { source: '/hot-water-systems', destination: '/hot-water-pipe-repair/', permanent: true },
      { source: '/blocked-drains', destination: '/plumbing-services/', permanent: true },
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
