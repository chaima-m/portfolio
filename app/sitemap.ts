import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://chaima-mekhloufi.vercel.app";
  return [{ url: base, priority: 1 }];
}
