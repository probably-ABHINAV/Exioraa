import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiUsers, 
  FiAward, 
  FiTrendingUp, 
  FiTarget,
  FiHeart,
  FiStar
} from 'react-icons/fi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Team members data with SVG avatars
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years of experience in digital innovation and product strategy.',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzY0NzQ4QiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iI0U1RTdFQiIvPjxwYXRoIGQ9Ik01MCwxOTAgQzUwLDEzMCA3MCwxMTAgMTAwLDExMCBDMTMwLDExMCAxNTAsMTMwIDE1MCwxOTAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Jordan Taylor',
      role: 'Creative Director',
      bio: 'Award-winning designer with a passion for creating memorable brand experiences.',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzk5MzNFQSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iI0U1RTdFQiIvPjxwYXRoIGQ9Ik01MCwxOTAgQzUwLDEzMCA3MCwxMTAgMTAwLDExMCBDMTMwLDExMCAxNTAsMTMwIDE1MCwxOTAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Taylor Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in building scalable web applications and digital platforms.',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM4QkRGOCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iI0U1RTdFQiIvPjxwYXRoIGQ9Ik01MCwxOTAgQzUwLDEzMCA3MCwxMTAgMTAwLDExMCBDMTMwLDExMCAxNTAsMTMwIDE1MCwxOTAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Riley Johnson',
      role: 'Marketing Strategist',
      bio: 'Data-driven marketer specializing in growth strategies and digital campaign optimization.',
      image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzEwQjk4MSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iI0U1RTdFQiIvPjxwYXRoIGQ9Ik01MCwxOTAgQzUwLDEzMCA3MCwxMTAgMTAwLDExMCBDMTMwLDExMCAxNTAsMTMwIDE1MCwxOTAiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to deliver forward-thinking solutions.',
      icon: <FiTrendingUp className="h-8 w-8" />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to development to client service.',
      icon: <FiAward className="h-8 w-8" />
    },
    {
      title: 'Client Focus',
      description: "We prioritize our clients' needs and goals, working collaboratively to exceed expectations.",
      icon: <FiTarget className="h-8 w-8" />
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our business dealings.',
      icon: <FiHeart className="h-8 w-8" />
    },
    {
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and diverse perspectives to create exceptional results.',
      icon: <FiUsers className="h-8 w-8" />
    },
    {
      title: 'Quality',
      description: 'We deliver high-quality work that stands the test of time and provides lasting value.',
      icon: <FiStar className="h-8 w-8" />
    }
  ];

  // Setup animations
  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelector('h1'), { 
        opacity: 0, 
        y: 50, 
        duration: 1,
        ease: 'power3.out' 
      });
      
      gsap.from(heroRef.current.querySelector('p'), { 
        opacity: 0, 
        y: 30, 
        duration: 1,
        delay: 0.3,
        ease: 'power3.out' 
      });
    }

    // Story section animation
    if (storyRef.current) {
      gsap.from(storyRef.current.querySelector('.story-image'), { 
        opacity: 0, 
        x: -50, 
        duration: 0.8,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from(storyRef.current.querySelector('.story-content'), { 
        opacity: 0, 
        x: 50, 
        duration: 0.8,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Values section animation
    if (valuesRef.current) {
      gsap.from(valuesRef.current.querySelectorAll('.value-card'), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Team section animation
    if (teamRef.current) {
      gsap.from(teamRef.current.querySelectorAll('.team-member'), {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Stats section animation
    if (statsRef.current) {
      gsap.from(statsRef.current.querySelectorAll('.stat-item'), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }

    // CTA section animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero section */}
      <section 
        ref={heroRef}
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-black"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-10">
            {/* Abstract SVG background */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#heroGradient)" />
              <path d="M0,50 Q30,30 50,50 T100,50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
              <path d="M0,60 Q40,80 70,50 T100,60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
              <path d="M0,40 Q20,20 50,40 T100,40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
              <path d="M0,70 Q40,90 70,60 T100,70" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
              <path d="M0,30 Q30,10 50,30 T100,30" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1E293B" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            About Exioraa
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            We're a team of passionate creators, designers, and digital strategists dedicated to delivering exceptional experiences.
          </p>
        </div>
      </section>

      {/* Our Story section */}
      <section ref={storyRef} className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 story-image">
              <div className="relative">
                <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
                  {/* Real image with overlay for Our Story */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://wallpapers.com/images/hd/creative-team-in-modern-office-space-qzbc6158k2bpp928.jpg" 
                      alt="Our team collaborating in a modern office" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/50"></div>
                  </div>

                  {/* Modern overlay elements */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 max-w-md text-center">
                      <div className="text-7xl font-bold mb-2">2015</div>
                      <div className="text-xl uppercase tracking-widest mb-6">Founded</div>
                      <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
                      <p className="mb-4">From a small team of dreamers to an award-winning digital agency</p>
                      
                      {/* Growth indicators */}
                      <div className="flex justify-between gap-4 mt-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold">40+</div>
                          <div className="text-sm">Team Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">350+</div>
                          <div className="text-sm">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">15+</div>
                          <div className="text-sm">Awards</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative shapes */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/60 rounded-lg transform rotate-12"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-highlight/70 rounded-full"></div>
              </div>
            </div>
            <div className="lg:w-1/2 story-content">
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2015, Exioraa Digital began with a simple mission: to help businesses thrive in the digital world. What started as a small team of passionate designers and developers has grown into a full-service digital agency with a global client base.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Over the years, we've evolved and adapted to the ever-changing digital landscape, staying at the forefront of technology and design trends to deliver cutting-edge solutions for our clients.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Today, we're proud to have worked with over 350 clients across various industries, from startups to established enterprises, helping them build their digital presence, connect with their audience, and achieve their business goals.
              </p>
              
              {/* Timeline */}
              <div className="relative pl-10 mt-12 border-l-2 border-accent">
                <div className="mb-8 relative">
                  <div className="absolute -left-[41px] top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">2015: The Beginning</h3>
                  <p className="text-gray-600 dark:text-gray-300">Started as a small web design studio with three team members.</p>
                </div>
                
                <div className="mb-8 relative">
                  <div className="absolute -left-[41px] top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">2017: Expansion</h3>
                  <p className="text-gray-600 dark:text-gray-300">Grew our team to 15 members and expanded our service offerings.</p>
                </div>
                
                <div className="mb-8 relative">
                  <div className="absolute -left-[41px] top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">2020: Digital Transformation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pivoted to focus on comprehensive digital transformation solutions.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">2023: Present Day</h3>
                  <p className="text-gray-600 dark:text-gray-300">A team of 40+ digital experts serving clients globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values section */}
      <section ref={valuesRef} className="py-20 bg-gray-50 dark:bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver exceptional experiences for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card bg-white dark:bg-primary-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 mb-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section ref={teamRef} className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a diverse team of talented individuals who are passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member bg-white dark:bg-primary-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={member.social.linkedin} 
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:bg-accent/10 dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-accent transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:bg-accent/10 dark:text-accent hover:bg-primary hover:text-white dark:hover:bg-accent transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logo Grid - Inspired by yourcreative.com.au */}
      <section className="py-16 bg-gray-50 dark:bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">Trusted By</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're proud to work with amazing clients from startups to established enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {/* Using SVG for client logos to maintain visual consistency */}
            <div className="flex justify-center">
              <svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-500">
                <rect x="10" y="20" width="100" height="20" rx="4" fill="currentColor" />
                <text x="60" y="35" fontSize="12" fill="white" textAnchor="middle">CLIENT 1</text>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-500">
                <circle cx="60" cy="30" r="25" fill="currentColor" />
                <text x="60" y="35" fontSize="12" fill="white" textAnchor="middle">CLIENT 2</text>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-500">
                <path d="M20,20 L100,20 L80,40 L40,40 Z" fill="currentColor" />
                <text x="60" y="35" fontSize="12" fill="white" textAnchor="middle">CLIENT 3</text>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-500">
                <rect x="20" y="15" width="80" height="30" rx="15" fill="currentColor" />
                <text x="60" y="35" fontSize="12" fill="white" textAnchor="middle">CLIENT 4</text>
              </svg>
            </div>
            <div className="flex justify-center md:col-span-4 lg:col-span-1">
              <svg width="120" height="60" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-500">
                <polygon points="60,10 85,30 70,50 50,50 35,30" fill="currentColor" />
                <text x="60" y="35" fontSize="12" fill="white" textAnchor="middle">CLIENT 5</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-accent to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">350+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Awards Won</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-xl">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive SVG Infographic - Design Process */}
      <section className="py-20 bg-white dark:bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">Our Design Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project
            </p>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px]">
            <svg width="100%" height="100%" viewBox="0 0 1000 400" className="process-svg">
              {/* Process Connection Lines */}
              <path 
                d="M100,200 C150,100 250,100 300,200 S450,300 500,200 S650,100 700,200 S850,300 900,200" 
                fill="none" 
                stroke="#38BDF8" 
                strokeWidth="4" 
                strokeDasharray="8 8"
                className="process-path"
              />
              
              {/* Process Nodes */}
              <g className="process-node">
                <circle cx="100" cy="200" r="40" fill="#0F172A" />
                <text x="100" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Discovery</text>
              </g>
              
              <g className="process-node">
                <circle cx="300" cy="200" r="40" fill="#0F172A" />
                <text x="300" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Strategy</text>
              </g>
              
              <g className="process-node">
                <circle cx="500" cy="200" r="40" fill="#0F172A" />
                <text x="500" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Design</text>
              </g>
              
              <g className="process-node">
                <circle cx="700" cy="200" r="40" fill="#0F172A" />
                <text x="700" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Develop</text>
              </g>
              
              <g className="process-node">
                <circle cx="900" cy="200" r="40" fill="#0F172A" />
                <text x="900" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Launch</text>
              </g>
              
              {/* Process Details */}
              <g className="process-detail" transform="translate(40, 280)">
                <rect width="120" height="80" rx="4" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1" />
                <text x="60" y="30" textAnchor="middle" fill="#0F172A" className="dark:fill-white" fontSize="12" fontWeight="bold">Discovery</text>
                <text x="60" y="50" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Research</text>
                <text x="60" y="65" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Stakeholder Interviews</text>
              </g>
              
              <g className="process-detail" transform="translate(240, 280)">
                <rect width="120" height="80" rx="4" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1" />
                <text x="60" y="30" textAnchor="middle" fill="#0F172A" className="dark:fill-white" fontSize="12" fontWeight="bold">Strategy</text>
                <text x="60" y="50" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Define Goals</text>
                <text x="60" y="65" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Project Planning</text>
              </g>
              
              <g className="process-detail" transform="translate(440, 280)">
                <rect width="120" height="80" rx="4" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1" />
                <text x="60" y="30" textAnchor="middle" fill="#0F172A" className="dark:fill-white" fontSize="12" fontWeight="bold">Design</text>
                <text x="60" y="50" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">UI/UX Design</text>
                <text x="60" y="65" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Prototyping</text>
              </g>
              
              <g className="process-detail" transform="translate(640, 280)">
                <rect width="120" height="80" rx="4" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1" />
                <text x="60" y="30" textAnchor="middle" fill="#0F172A" className="dark:fill-white" fontSize="12" fontWeight="bold">Develop</text>
                <text x="60" y="50" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Frontend & Backend</text>
                <text x="60" y="65" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Quality Assurance</text>
              </g>
              
              <g className="process-detail" transform="translate(840, 280)">
                <rect width="120" height="80" rx="4" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1" />
                <text x="60" y="30" textAnchor="middle" fill="#0F172A" className="dark:fill-white" fontSize="12" fontWeight="bold">Launch</text>
                <text x="60" y="50" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Deployment</text>
                <text x="60" y="65" textAnchor="middle" fill="#334155" className="dark:fill-gray-300" fontSize="10">Ongoing Support</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-accent to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white hover:bg-gray-100 text-accent font-medium rounded-md transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style>
        {`
          .process-node {
            transition: transform 0.3s ease;
          }
          .process-node:hover {
            transform: scale(1.1);
          }
          .process-path {
            animation: dash 30s linear infinite;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: 1000;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;