
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-navy">
            <h1 className="font-playfair text-xl md:text-2xl font-bold">
              <span className="text-rose">Fortuna</span> Homes
            </h1>
            <p className="text-xs tracking-wider">BY ANA WALL</p>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="nav-link">{t('nav.home')}</a>
          <a href="#properties" className="nav-link">{t('nav.properties')}</a>
          <a href="#about" className="nav-link">{t('nav.about')}</a>
          <a href="#contact" className="nav-link">{t('nav.contact')}</a>
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            className="text-navy hover:text-rose transition-colors" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t w-full py-4 px-6 shadow-md animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#" 
              className="py-2 text-navy hover:text-rose transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </a>
            <a 
              href="#properties" 
              className="py-2 text-navy hover:text-rose transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.properties')}
            </a>
            <a 
              href="#about" 
              className="py-2 text-navy hover:text-rose transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#contact" 
              className="py-2 text-navy hover:text-rose transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
