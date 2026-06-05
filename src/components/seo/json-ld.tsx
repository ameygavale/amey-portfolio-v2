import { SITE_CONFIG } from '@/lib/constants'

export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.headshotUrl}`,
    jobTitle: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.location,
    },
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
    knowsAbout: SITE_CONFIG.keywords,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
