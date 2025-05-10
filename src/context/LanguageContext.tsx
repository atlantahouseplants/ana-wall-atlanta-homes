
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations = getTranslations();
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation dictionary
function getTranslations() {
  return {
    'nav.home': {
      en: 'Home',
      es: 'Inicio'
    },
    'nav.properties': {
      en: 'Properties',
      es: 'Propiedades'
    },
    'nav.about': {
      en: 'About',
      es: 'Acerca de'
    },
    'nav.contact': {
      en: 'Contact',
      es: 'Contacto'
    },
    'hero.title': {
      en: 'Find Your Luxury Home in Atlanta',
      es: 'Encuentra Tu Hogar de Lujo en Atlanta'
    },
    'hero.subtitle': {
      en: 'Exceptional properties and unparalleled service',
      es: 'Propiedades excepcionales y servicio incomparable'
    },
    'hero.cta': {
      en: 'View Properties',
      es: 'Ver Propiedades'
    },
    'about.title': {
      en: 'About Ana Wall',
      es: 'Acerca de Ana Wall'
    },
    'about.subtitle': {
      en: 'Your Luxury Real Estate Expert',
      es: 'Su Experta en Bienes Raíces de Lujo'
    },
    'about.bio': {
      en: 'With over 15 years of experience in Atlanta\'s luxury real estate market, Ana Wall provides unparalleled service and expertise to her discerning clients. Specializing in high-end properties across Atlanta\'s most prestigious neighborhoods, Ana combines market knowledge, negotiation skills, and personalized attention to deliver exceptional results.',
      es: 'Con más de 15 años de experiencia en el mercado inmobiliario de lujo de Atlanta, Ana Wall proporciona un servicio y experiencia incomparables a sus exigentes clientes. Especializada en propiedades de alta gama en los barrios más prestigiosos de Atlanta, Ana combina conocimiento del mercado, habilidades de negociación y atención personalizada para entregar resultados excepcionales.'
    },
    'featured.title': {
      en: 'Featured Properties',
      es: 'Propiedades Destacadas'
    },
    'featured.subtitle': {
      en: 'Explore Atlanta\'s finest luxury homes',
      es: 'Explore las mejores casas de lujo de Atlanta'
    },
    'property.viewDetails': {
      en: 'View Details',
      es: 'Ver Detalles'
    },
    'property.beds': {
      en: 'Beds',
      es: 'Habitaciones'
    },
    'property.baths': {
      en: 'Baths',
      es: 'Baños'
    },
    'property.sqft': {
      en: 'Sq Ft',
      es: 'Pies Cuad.'
    },
    'testimonials.title': {
      en: 'Client Testimonials',
      es: 'Testimonios de Clientes'
    },
    'testimonials.subtitle': {
      en: 'What my clients say about working with me',
      es: 'Lo que mis clientes dicen sobre trabajar conmigo'
    },
    'cta.ready': {
      en: 'Ready to Find Your Dream Home?',
      es: '¿Listo para Encontrar la Casa de tus Sueños?'
    },
    'cta.contact': {
      en: 'Contact Ana Today',
      es: 'Contacte a Ana Hoy'
    },
    'footer.rights': {
      en: 'All Rights Reserved',
      es: 'Todos los Derechos Reservados'
    },
    'footer.privacy': {
      en: 'Privacy Policy',
      es: 'Política de Privacidad'
    },
    'footer.terms': {
      en: 'Terms of Service',
      es: 'Términos de Servicio'
    }
  };
}
