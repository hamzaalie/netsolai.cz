import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://netsolai.cz';
const DEFAULT_IMAGE = `${SITE_URL}/images/logo/Oroginal.png`;
const SITE_NAME = 'Netsol AI';

export default function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  jsonLd = [],
}) {
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* hreflang — same URL serves EN and CS */}
      <link rel="alternate" hreflang="en" href={fullCanonical} />
      <link rel="alternate" hreflang="cs" href={fullCanonical} />
      <link rel="alternate" hreflang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="cs_CZ" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
