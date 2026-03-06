/**
 * Site configuration for SEO and metadata.
 * Set NEXT_PUBLIC_SITE_URL when deploying to production.
 */
export const siteConfig = {
  name: 'Gihan Saranga Siriwardhana',
  title: 'Gihan Saranga Siriwardhana | Senior Full-Stack Software Engineer',
  description:
    'Senior Full-Stack Software Engineer at Onramper. Problem solver, tech enthusiast, and public speaker. Experience in React, Node.js, AWS, and microservices.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gihanrcg.github.io/portfolio/',
  ogImage: '/og-image.jpg', // Add 1200x630 image to public/ for social sharing
  locale: 'en_US',
  twitterHandle: '@gihan_saranga',
};
