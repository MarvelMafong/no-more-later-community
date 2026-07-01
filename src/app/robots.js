export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/nml-studio-x7/',
    },
    sitemap: 'https://nomorelater.com/sitemap.xml',
  }
}