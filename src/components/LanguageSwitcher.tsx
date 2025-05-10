
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        size="sm"
        className="flex items-center gap-2 text-navy hover:text-gold hover:bg-transparent"
        onClick={toggleDropdown}
      >
        <span className="font-medium">
          {language === 'en' ? 'EN' : 'ES'}
        </span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 animate-fade-in">
          <div className="py-1">
            <button
              onClick={() => changeLanguage('en')}
              className={cn(
                "block px-4 py-2 text-sm w-full text-left hover:bg-muted",
                language === 'en' ? "text-gold font-medium" : "text-gray-700"
              )}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={cn(
                "block px-4 py-2 text-sm w-full text-left hover:bg-muted",
                language === 'es' ? "text-gold font-medium" : "text-gray-700"
              )}
            >
              Español
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
