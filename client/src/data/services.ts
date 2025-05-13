export interface Service {
  title: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  technologies?: string[];
}

export const services: Service[] = [
  {
    title: "Web Design",
    icon: "ri-layout-4-line",
    bgColor: "bg-primary/20",
    iconColor: "text-primary",
    textColor: "text-primary",
    description: "Crafting visually stunning, user-centered websites that engage audiences and drive conversions.",
    detailedDescription: "Our web design services blend aesthetic excellence with strategic functionality to create websites that not only look impressive but also deliver measurable results. We focus on creating memorable digital experiences that align with your brand values while meeting your business objectives.",
    features: [
      "Custom responsive design for all devices and screen sizes",
      "Strategic information architecture and user flow optimization",
      "Engaging micro-interactions and animations",
      "Accessibility compliance (WCAG standards)",
      "SEO-friendly structure and performance optimization"
    ],
    technologies: [
      "Figma", "Adobe XD", "HTML5", "CSS3/SASS", "JavaScript", "WebGL"
    ]
  },
  {
    title: "Development",
    icon: "ri-code-s-slash-line",
    bgColor: "bg-accent/20",
    iconColor: "text-accent",
    textColor: "text-accent",
    description: "Building robust, scalable digital platforms with cutting-edge technologies and best practices.",
    detailedDescription: "Our development team transforms designs into fully-functional digital experiences with clean, efficient code. We build scalable solutions that can grow with your business, from custom websites to complex web applications and e-commerce platforms.",
    features: [
      "Front-end and back-end development",
      "Headless CMS implementation",
      "E-commerce solutions with secure payment integration",
      "API development and third-party integrations",
      "Progressive Web Apps (PWAs) for enhanced mobile experience"
    ],
    technologies: [
      "React.js", "Next.js", "Node.js", "TypeScript", "Python", "PHP", "MongoDB", "PostgreSQL", "AWS"
    ]
  },
  {
    title: "Branding",
    icon: "ri-palette-line",
    bgColor: "bg-primary/20",
    iconColor: "text-primary",
    textColor: "text-primary",
    description: "Creating distinctive brand identities that resonate with audiences and stand out in the market.",
    detailedDescription: "Our branding services help businesses establish meaningful connections with their audience through cohesive visual and verbal identity systems. We create brands that tell compelling stories, embody your values, and leave lasting impressions.",
    features: [
      "Brand strategy and positioning",
      "Logo design and visual identity systems",
      "Brand guidelines and asset creation",
      "Typography and color palette development",
      "Brand voice and messaging frameworks"
    ],
    technologies: [
      "Adobe Creative Suite", "Figma", "Procreate", "Affinity Designer", "Brand identity workshops"
    ]
  },
  {
    title: "UI/UX Design",
    icon: "ri-image-line",
    bgColor: "bg-accent/20",
    iconColor: "text-accent",
    textColor: "text-accent",
    description: "Designing intuitive interfaces and seamless user experiences that delight and convert.",
    detailedDescription: "Our UI/UX design services focus on creating digital experiences that are both visually appealing and functionally intuitive. We combine user research, strategic thinking, and creative design to build interfaces that users love to interact with.",
    features: [
      "User research and persona development",
      "Wireframing and interactive prototyping",
      "Usability testing and iteration",
      "Design systems for scalable product development",
      "Motion design and micro-interactions"
    ],
    technologies: [
      "Figma", "Sketch", "Adobe XD", "Framer", "Maze", "ProtoPie", "Principle"
    ]
  },
  {
    title: "Digital Marketing",
    icon: "ri-megaphone-line",
    bgColor: "bg-primary/20",
    iconColor: "text-primary",
    textColor: "text-primary",
    description: "Implementing strategic campaigns that increase visibility, engagement, and business growth.",
    detailedDescription: "Our digital marketing services help businesses connect with their audience across digital channels through data-driven strategies and compelling content. We focus on creating measurable results that drive growth and ROI.",
    features: [
      "SEO optimization and content strategy",
      "Social media marketing and management",
      "Email marketing campaigns",
      "PPC and display advertising",
      "Analytics and performance reporting"
    ],
    technologies: [
      "Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Meta Business Suite", "Google Ads"
    ]
  },
  {
    title: "Motion Design",
    icon: "ri-movie-line",
    bgColor: "bg-accent/20",
    iconColor: "text-accent",
    textColor: "text-accent",
    description: "Creating captivating animations and video content that tell compelling brand stories.",
    detailedDescription: "Our motion design services bring brands to life through dynamic visual storytelling. We create animated content that captures attention, explains complex concepts, and creates emotional connections with your audience.",
    features: [
      "Brand animation and motion identities",
      "Explainer videos and product demonstrations",
      "UI motion design for digital products",
      "Social media animations and ad content",
      "3D visualization and animation"
    ],
    technologies: [
      "After Effects", "Cinema 4D", "Blender", "Premiere Pro", "GSAP", "Lottie", "Three.js"
    ]
  }
];
