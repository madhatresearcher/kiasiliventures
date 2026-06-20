import type { MetadataRoute } from "next";

const siteUrl = "https://kiasili.jurugofelix123.workers.dev";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
