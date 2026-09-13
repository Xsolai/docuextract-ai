import type { MetadataRoute } from 'next';

const site = 'https://docuextract-ai.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/pricing'],
        disallow: ['/login', '/signup', '/forgot-password', '/checkout', '/onboarding', '/app/'],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
