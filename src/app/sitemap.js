export default function sitemap() {
  const base = 'https://nomorelater.com'
  return [
    { url: base,                         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/about`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/how-it-works`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/wall`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/current-read`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/community`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/testimonials`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${base}/faq`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}