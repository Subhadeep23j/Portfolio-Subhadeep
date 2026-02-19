import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = (
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  process.env.SITE_URL ||
  'https://subhadeepmaity.netlify.app'
).replace(/\/$/, '');

const routes = ['/', '/#about', '/#projects', '/#contact'];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const publicDir = resolve(process.cwd(), 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
writeFileSync(resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8');

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
