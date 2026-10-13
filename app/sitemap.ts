import { MetadataRoute } from 'next';
import { SERVICES, DENTISTS, BLOG_POSTS } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    '',
    '/about',
    '/testimonials',
    '/dentists',
    '/dental-implants',
    '/root-canal',
    '/teeth-whitening',
    '/dental-cleaning',
    '/braces',
    '/cosmetic-dentistry',
    '/book-appointment',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('Urgência') || route.includes('book') ? 0.9 : 0.8,
  }));

  const dentistRoutes = DENTISTS.map((d) => ({
    url: `${BASE_URL}/dentists/${d.slug}/`,
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
