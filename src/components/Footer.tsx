
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <h2 className="font-playfair text-xl mb-4">
              <span className="text-gold">Ana</span> Wall
            </h2>
            <p className="text-gray-300 mb-4">
              Luxury real estate services in Atlanta, Georgia. Specializing in high-end properties and exceptional client experiences.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C22 6 21.3 8.1 20 9.4C21.6 17.4 15.3 22 9 22C5.9 22 3.1 20.9 1 19C4.2 19.4 7.4 18 9 16C6.7 15.9 4.8 14.3 4 12C4.8 12.1 5.5 12 6 11.8C3.5 11.1 2 9.1 2 6.7C2.8 7.1 3.7 7.3 4.6 7.3C1.6 5.2 2.3 1.7 4.1 0C7.1 3.6 11.4 5.8 16 6C15.9 5.5 15.9 5 15.9 4.5C15.9 2 17.9 0 20.4 0C21.7 0 22.9 0.6 23.7 1.5C24.7 1.3 25.7 0.9 26.5 0.4C26.1 1.5 25.3 2.3 24.2 2.9C25.2 2.8 26.2 2.5 27 2.1C26.5 3 25.8 3.8 25 4.4C25 4.5 25 4.6 25 4.8C25 13 19.2 22 9 22H8.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16 12.7991 15.4205 14.1692 14.3891 15.2006C13.3577 16.232 11.9876 16.8115 10.5585 16.8115C9.12937 16.8115 7.7593 16.232 6.72792 15.2006C5.69655 14.1692 5.117 12.7991 5.117 11.37C5.117 11.1941 5.12871 11.0187 5.1521 10.8455H7.10778C7.08214 11.0191 7.06907 11.1946 7.06907 11.37C7.06907 12.376 7.46727 13.3407 8.17552 14.0489C8.88376 14.7572 9.84845 15.1554 10.8544 15.1554C11.8604 15.1554 12.8251 14.7572 13.5334 14.0489C14.2416 13.3407 14.6398 12.376 14.6398 11.37C14.6398 11.1946 14.6268 11.0191 14.6011 10.8455H16.5568C16.5802 11.0187 16.5919 11.1941 16.5919 11.37V11.37Z" fill="currentColor"/>
                  <path d="M18.8047 7.19548H16.851V5.24182H18.8047V7.19548Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-playfair mb-4 text-gold">{t('nav.contact')}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-gray-300">
                  3630 Peachtree Road NE<br />
                  Suite 1500<br />
                  Atlanta, GA 30326
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6L12 13L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:ana@anawall.com" className="text-gray-300 hover:text-gold transition-colors">
                  ana@anawall.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9987 21.4142 21.3738C21.0391 21.7489 20.5109 21.96 19.96 21.96C18.4326 21.8442 16.9501 21.4356 15.5922 20.76C14.3316 20.1318 13.1973 19.293 12.24 18.28C11.2112 17.3388 10.37 16.2164 9.73222 14.97C9.04512 13.6097 8.63183 12.1199 8.52 10.58C8.51955 10.034 8.73002 9.51035 9.10293 9.13744C9.47584 8.76453 9.9995 8.55406 10.545 8.55351H13.545C14.6114 8.54472 15.5352 9.34479 15.67 10.4C15.7373 11.025 15.8671 11.6401 16.0569 12.235C16.2236 12.7517 16.105 13.3143 15.74 13.72L14.865 14.595C15.4424 15.9093 16.2838 17.0825 17.33 18.07C18.3175 19.1162 19.4907 19.9576 20.805 20.535L21.68 19.66C22.0857 19.295 22.6483 19.1764 23.165 19.343C23.7599 19.5328 24.375 19.6626 25 19.73C26.0785 19.8698 26.8836 20.8339 26.85 21.92L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:+14045551234" className="text-gray-300 hover:text-gold transition-colors">
                  (404) 555-1234
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair mb-4 text-gold">Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-300 hover:text-gold transition-colors">
                  {t('nav.properties')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Ana Wall {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
