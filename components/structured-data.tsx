

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Exioraa Digital Innovation Studio",
    "legalName": "Exioraa",
    "url": "https://exioraa.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://exioraa.vercel.app/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://exioraa.vercel.app/og-image.jpg",
    "description": "Digital innovation studio specializing in web development, mobile applications, UI/UX design, and digital transformation solutions that drive business growth.",
    "foundingDate": "2023",
    "slogan": "Transform Your Business With Digital Excellence",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greater Noida",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-77xxxxxx02",
        "contactType": "customer service",
        "email": "hello@exioraa.com",
        "availableLanguage": ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        "email": "hello@exioraa.com",
        "contactType": "customer support",
        "availableLanguage": ["en"]
      }
    ],
    "sameAs": [
      "https://twitter.com/exioraa",
      "https://linkedin.com/company/exioraa",
      "https://github.com/exioraa",
      "https://instagram.com/exioraa"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Digital Transformation",
      "React.js",
      "Next.js",
      "SEO Optimization",
      "Digital Marketing"
    ]
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Innovation Solutions",
    "description": "Comprehensive digital solutions including web development, mobile apps, UI/UX design, and SEO optimization for businesses of all sizes.",
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
      "UI/UX Design",
      "SEO Optimization",
      "Digital Branding",
      "E-commerce Development",
      "API Development",
      "Digital Transformation Consulting"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Exioraa Digital Innovation Studio",
      "url": "https://exioraa.vercel.app"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web applications using modern frameworks like React and Next.js"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Exioraa Digital Innovation Studio",
    "alternateName": "Exioraa",
    "url": "https://exioraa.vercel.app",
    "description": "Digital innovation studio transforming businesses with cutting-edge technology solutions and modern web development practices.",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Exioraa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://exioraa.vercel.app/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://exioraa.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://exioraa.vercel.app"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://exioraa.vercel.app#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio",
        "item": "https://exioraa.vercel.app#work"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://exioraa.vercel.app#contact"
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

