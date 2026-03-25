/* global process */

import fs from "node:fs";
import path from "node:path";
import {
  blogPosts,
  enrichedCitySeoPages,
  enrichedSeoPages,
  enrichedServices
} from "../src/data/siteData.js";

const siteUrl = (process.env.SITE_URL || "https://omerogullarinakliyat.com.tr").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const routes = [
  "/",
  "/hizmetler",
  "/galeri",
  "/blog",
  "/bolgeler",
  "/sehirler",
  ...enrichedServices.map((item) => `/hizmetler/${item.slug}`),
  ...blogPosts.map((item) => `/blog/${item.slug}`),
  ...enrichedSeoPages.map((item) => `/bolgeler/${item.slug}`),
  ...enrichedCitySeoPages.map((item) => `/sehirler/${item.slug}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${encodeURI(`${siteUrl}${route}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const publicDir = path.resolve(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
