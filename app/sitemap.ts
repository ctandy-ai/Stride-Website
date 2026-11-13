import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.stridephysiohealth.com.au";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/acl-rehab`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ankle-rehab`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shoulder-rehab`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hamstring-rehab`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hip-groin-rehab`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/achilles-rehab`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/combat-sports-physio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/concussion`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/acute-sports-injury-clinic`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/performance-programs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/score`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
