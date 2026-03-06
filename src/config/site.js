/**
 * Site configuration for SEO and metadata.
 * Set NEXT_PUBLIC_SITE_URL when deploying to production.
 */
export const siteConfig = {
  name: 'Gihan Saranga Siriwardhana',
  title: 'Gihan Saranga Siriwardhana | Lead Engineer',
  description:
    'Lead Engineer at Maash. Building financial platforms for emerging markets. Experience in Web3, Solana, React, Node.js, and distributed systems.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gihanrcg.github.io/portfolio/',
  ogImage: '/og-image.jpg', // Add 1200x630 image to public/ for social sharing
  locale: 'en_US',
  twitterHandle: '@gihan_saranga',
};
