import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/80 pt-24 pb-12 px-8 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link 
              href="/"
              className="text-3xl font-bold font-clash tracking-tight text-white hoverable"
            >
              EXIORAA
            </Link>
            <p className="text-white/70 mt-6 mb-6">
              A creative agency focused on transforming brands through innovative design and strategic digital solutions.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'twitter-x', 'linkedin', 'behance'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  aria-label={`Visit our ${social} page`}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors hoverable"
                >
                  <i className={`ri-${social}-line`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link === 'Home' ? '' : link.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-primary transition-colors hoverable"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-white/70">
              {['Web Design', 'Development', 'Branding', 'UI/UX Design', 'Digital Marketing'].map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services#${service.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-primary transition-colors hoverable"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start">
                <i className="ri-map-pin-line mt-1 mr-3 text-primary"></i>
                <span>Online, Greater Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-3 text-primary"></i>
                <a 
                  href="mailto:xoxogroovy@gmail.com" 
                  className="hover:text-primary transition-colors hoverable"
                >
                  xoxogroovy@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-3 text-primary"></i>
                <a 
                  href="tel:+917765999702" 
                  className="hover:text-primary transition-colors hoverable"
                >
                  +91 77659 99702
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Exioraa. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
              <Link 
                key={index}
                href="#" 
                className="hover:text-primary transition-colors hoverable"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
