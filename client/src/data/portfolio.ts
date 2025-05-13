export interface Project {
  title: string;
  image: string;
  categories: string[];
  tag: string;
  tagBg: string;
  tagColor: string;
  description: string;
  accentColor: string;
  client?: string;
  year?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: string[];
}

export const projects: Project[] = [
  {
    title: "Luxe Apparel",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Branding", "Web Design", "Development"],
    tag: "E-Commerce",
    tagBg: "bg-primary/20",
    tagColor: "text-primary",
    description: "A premium fashion brand's digital transformation with immersive shopping experiences.",
    accentColor: "text-primary",
    client: "Luxe Apparel Inc.",
    year: "2023",
    services: ["Brand Strategy", "E-commerce Development", "UI/UX Design", "SEO Optimization"],
    challenge: "Luxe Apparel needed to transition from a traditional retail model to a digital-first approach while maintaining their luxury brand identity and elevating the online shopping experience for their high-end clientele.",
    solution: "We created a custom e-commerce platform with immersive product visualizations, personalized shopping journeys, and seamless checkout flows. The design emphasized luxury through subtle animations, premium typography, and sophisticated color schemes.",
    results: [
      "43% increase in average order value",
      "28% improvement in conversion rate",
      "67% increase in time spent on product pages",
      "Featured in Webby Awards for e-commerce excellence"
    ],
    testimonial: {
      quote: "Exioraa transformed our online presence with a website that truly captures our brand essence. The attention to detail and focus on user experience has directly translated to increased sales and customer satisfaction.",
      author: "Jessica Chen",
      position: "Marketing Director, Luxe Apparel"
    },
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "FinTech Pro",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["UX/UI", "Development", "Marketing"],
    tag: "Finance",
    tagBg: "bg-accent/20",
    tagColor: "text-accent",
    description: "A revolutionary financial management app with intuitive interfaces and secure transactions.",
    accentColor: "text-accent",
    client: "FinTech Innovations Ltd.",
    year: "2024",
    services: ["UI/UX Design", "Mobile App Development", "Front-end Animation", "Security Implementation"],
    challenge: "FinTech Pro needed to simplify complex financial operations for everyday users while maintaining enterprise-grade security and compliance with financial regulations.",
    solution: "We developed an intuitive mobile application featuring data visualization, personalized financial insights, and seamless integration with banking APIs. The interface uses micro-interactions and progressive disclosure to make complex financial data accessible.",
    results: [
      "250,000+ downloads in first quarter",
      "96% user satisfaction rating",
      "Featured as 'App of the Day' on App Store",
      "Average session time increased by 4.7 minutes"
    ],
    testimonial: {
      quote: "The team at Exioraa delivered an exceptional financial application that transformed our business. Their design approach simplified complex financial processes while ensuring security and compliance.",
      author: "Michael Wei",
      position: "CEO, FinTech Innovations"
    },
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "Novus Startup",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Branding", "Print Design", "Marketing"],
    tag: "Technology",
    tagBg: "bg-primary/20",
    tagColor: "text-primary",
    description: "Complete brand identity for an innovative tech startup breaking into the market.",
    accentColor: "text-primary",
    client: "Novus Technologies",
    year: "2023",
    services: ["Brand Strategy", "Visual Identity", "Marketing Collateral", "Launch Campaign"],
    challenge: "As a new player in a crowded tech market, Novus needed a distinctive brand identity that would communicate their innovative approach and help them stand out against established competitors.",
    solution: "We developed a comprehensive brand strategy and visual identity system featuring a dynamic logo, vibrant color palette, and custom iconography. The design language emphasizes forward-thinking technology with a human touch.",
    results: [
      "Secured $4.2M in Series A funding",
      "Brand recognition increased by 67% in target market",
      "Featured in TechCrunch and Forbes",
      "Successfully launched with 10K+ early adopters"
    ],
    testimonial: {
      quote: "Exioraa didn't just create a logo; they built a brand story that resonates with our audience and communicates our values. The identity system has been crucial in establishing our market presence.",
      author: "Samantha Park",
      position: "Founder, Novus Technologies"
    },
    gallery: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "EcoHaven",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Web Design", "UX/UI", "SEO"],
    tag: "Sustainability",
    tagBg: "bg-accent/20",
    tagColor: "text-accent",
    description: "A sustainable product marketplace with eco-conscious design and carbon-neutral hosting.",
    accentColor: "text-accent",
    client: "EcoHaven Marketplace",
    year: "2023",
    services: ["Digital Strategy", "Website Design", "E-commerce Development", "Content Strategy"],
    challenge: "EcoHaven needed a digital platform that would reflect their commitment to sustainability while providing a seamless shopping experience for eco-conscious consumers.",
    solution: "We designed a carbon-neutral e-commerce platform that uses minimal resources while delivering maximum impact. The site features sustainability metrics for each product, transparent supply chain information, and impact tracking for purchases.",
    results: [
      "Marketplace growth from 10 to 75 vendors in 6 months",
      "Carbon footprint reduced by 42% compared to industry average",
      "Organic traffic increased by 186%",
      "Average customer return rate of 68%"
    ],
    testimonial: {
      quote: "Working with Exioraa was truly collaborative. They understood our mission and created a digital platform that not only looks beautiful but also embodies our environmental values in every aspect of the design.",
      author: "Noah Johnson",
      position: "CEO, EcoHaven"
    },
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "ArtVista Gallery",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Web Design", "Development", "Virtual Tour"],
    tag: "Arts & Culture",
    tagBg: "bg-primary/20",
    tagColor: "text-primary",
    description: "An immersive online art gallery featuring interactive 3D exhibits and artist spotlights.",
    accentColor: "text-primary",
    client: "ArtVista International",
    year: "2024",
    services: ["Web Design", "3D Modeling", "Virtual Exhibition", "Interactive Storytelling"],
    challenge: "ArtVista needed to translate the physical gallery experience into a compelling digital format during the pandemic, reaching global art enthusiasts while maintaining the intimate connection with artworks.",
    solution: "We created an immersive virtual gallery with 3D exhibition spaces, high-resolution artwork views, artist interview content, and interactive guided tours. The platform includes VR compatibility and social sharing features.",
    results: [
      "400% increase in global audience reach",
      "Virtual attendance exceeding physical gallery capacity by 1,200%",
      "Average engagement time of 14 minutes per session",
      "Featured in Communication Arts Annual"
    ],
    testimonial: {
      quote: "Exioraa's virtual gallery solution transformed how we connect with art lovers worldwide. The immersive experience they created not only preserved but enhanced the emotional impact of experiencing art.",
      author: "Isabella Moretti",
      position: "Curator, ArtVista Gallery"
    },
    gallery: [
      "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1594784237741-755afef66e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "TravelPlus",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Mobile App", "UI/UX", "Development"],
    tag: "Travel",
    tagBg: "bg-accent/20",
    tagColor: "text-accent",
    description: "A personalized travel companion app that curates experiences based on user preferences.",
    accentColor: "text-accent",
    client: "TravelPlus Corp.",
    year: "2023",
    services: ["Mobile App Design", "Personalization Algorithm", "Integration with Travel APIs", "Offline Functionality"],
    challenge: "TravelPlus wanted to create a travel companion app that would cut through the noise of generic travel recommendations and provide truly personalized experiences for travelers.",
    solution: "We developed an AI-powered mobile app that learns user preferences through interaction and creates custom travel itineraries. The app features offline maps, immersive destination previews, and seamless booking integration.",
    results: [
      "Over 1.2 million active users within first year",
      "92% positive reviews on app stores",
      "Average of 8.4 bookings per user annually",
      "Partnerships with 140+ local experience providers"
    ],
    testimonial: {
      quote: "The TravelPlus app Exioraa designed for us has revolutionized how travelers discover and experience destinations. The intuitive UI and personalization features have driven exceptional user retention.",
      author: "Alex Rodriguez",
      position: "Product Director, TravelPlus"
    },
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "Harmonia",
    image: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Web Design", "Development", "3D Animation"],
    tag: "Music",
    tagBg: "bg-primary/20",
    tagColor: "text-primary",
    description: "Interactive digital platform for a symphony orchestra featuring immersive audio experiences.",
    accentColor: "text-primary",
    client: "Harmonia Symphony Orchestra",
    year: "2024",
    services: ["Interactive Design", "Audio Visualization", "Virtual Concert Hall", "Web Development"],
    challenge: "The renowned Harmonia Symphony Orchestra needed a digital platform to engage younger audiences and provide interactive musical experiences during periods when live performances weren't possible.",
    solution: "We created an immersive web experience featuring interactive 3D visualizations of classical compositions, behind-the-scenes content with orchestra members, and a virtual concert hall with customizable acoustic settings.",
    results: [
      "68% increase in engagement from 18-35 demographic",
      "Virtual ticket sales exceeding $1.2M in first season",
      "Educational program adoption by 240+ schools",
      "11 industry awards for digital innovation in arts"
    ],
    testimonial: {
      quote: "Exioraa has reimagined how classical music can be experienced in the digital age. Their platform maintains the emotional depth of our performances while adding exciting new dimensions for audience engagement.",
      author: "Maestro Daniel Kwan",
      position: "Artistic Director, Harmonia"
    },
    gallery: [
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  },
  {
    title: "Nebula AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
    categories: ["Branding", "Web Design", "Motion Graphics"],
    tag: "Technology",
    tagBg: "bg-accent/20",
    tagColor: "text-accent",
    description: "Complete brand identity and digital presence for an AI research startup.",
    accentColor: "text-accent",
    client: "Nebula AI Research",
    year: "2023",
    services: ["Brand Strategy", "Visual Identity", "Web Design", "Interaction Design"],
    challenge: "Nebula AI needed to establish a brand identity that would convey their advanced technical capabilities while making complex AI concepts accessible to potential partners and investors.",
    solution: "We developed a comprehensive brand system featuring animated data visualizations, an interactive website explaining AI concepts through visual metaphors, and a dynamic identity system that evolves based on real-time data inputs.",
    results: [
      "Successful Series B funding round of $28M",
      "Partnership inquiries from 5 Fortune 500 companies",
      "40% increase in qualified job applicants",
      "Website engagement metrics 3x industry average"
    ],
    testimonial: {
      quote: "Exioraa translated our complex technology into a compelling visual narrative that resonates with both technical and non-technical audiences. Their strategic approach to our brand has been instrumental in our growth.",
      author: "Dr. Eliza Sutton",
      position: "Founder & CEO, Nebula AI"
    },
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
      "https://images.unsplash.com/photo-1502810190503-8303352d1c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80"
    ]
  }
];
