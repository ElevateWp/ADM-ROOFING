import { MetadataRoute } from 'next';
import { SERVICES, DENTISTS, BLOG_POSTS } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    '',
    '/about',
    '/testimonials',
    '/our-team',
    '/home-extensions',
    '/loft-garage-conversions',
    '/kitchens-bathrooms',
    '/home-refurbishments',
    '/interior-finishing',
    '/roofing-lean-to-improvements',
    '/request-a-quote',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('request-a-quote') ? 0.9 : 0.8,
  }));

  const dentistRoutes = DENTISTS.map((d) => ({
    url: `${BASE_URL}/our-team/${d.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.lastUpdated).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...dentistRoutes, ...blogRoutes];
}
