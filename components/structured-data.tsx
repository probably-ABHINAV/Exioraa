
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Exioraa Digital Innovation Studio",
    "url": "https://exioraa.com",
    "logo": "https://exioraa.com/logo.png",
    "description": "Digital innovation studio specializing in web development, mobile applications, UI/UX design, and digital transformation solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greater Noida",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-77xxxxxx02",
      "contactType": "customer service",
      "email": "hello@exioraa.com"
    },
    "sameAs": [
      "https://twitter.com/exioraa",
      "https://linkedin.com/company/exioraa",
      "https://github.com/exioraa",
      "https://instagram.com/exioraa"
    ]
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Exioraa Digital Innovation Studio",
    "description": "Comprehensive digital solutions including web development, mobile apps, UI/UX design, and SEO optimization.",
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "SEO Optimization",
      "Digital Branding",
      "E-commerce Development"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Exioraa"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Exioraa",
    "url": "https://exioraa.com",
    "description": "Digital innovation studio transforming businesses with cutting-edge technology solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Exioraa"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://exioraa.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
