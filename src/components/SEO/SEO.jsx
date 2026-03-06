import Head from 'next/head';
import { siteConfig } from '../../config/site';

export default function SEO({ title, description, image, noIndex }) {
  const metaTitle = title || siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image
    ? image.startsWith('http')
      ? image
      : `${siteConfig.url}${image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;
  const canonicalUrl = siteConfig.url;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Senior Full-Stack Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Onramper',
    },
    url: canonicalUrl,
    sameAs: [
      'https://www.linkedin.com/in/gihan-saranga-siriwardhana',
      'https://github.com/gihanrcg',
      'https://stackoverflow.com/users/10086033/gihan-saranga-siriwardhana',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'Sri Lanka',
    },
  };

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {siteConfig.twitterHandle && (
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
