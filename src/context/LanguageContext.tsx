
import React, { createContext, useContext, useState } from 'react';

// Define available languages
type LanguageOption = 'en' | 'es';

// Define the context type
type LanguageContextType = {
  language: LanguageOption;
  setLanguage: (lang: LanguageOption) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translations
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'hero.title': 'Luxury Real Estate in Atlanta',
    'hero.subtitle': 'Discover Exclusive Properties in the City\'s Most Desirable Neighborhoods',
    'hero.cta': 'View Featured Properties',
    'featured.title': 'Featured Properties',
    'featured.subtitle': 'Exquisite Homes Handpicked for Discerning Buyers',
    'about.title': 'Ana Wall',
    'about.subtitle': 'Your Luxury Real Estate Specialist',
    'about.bio': "With over 15 years of experience in the Atlanta luxury real estate market, Ana Wall has established herself as one of the city's premier real estate professionals. Specializing in high-end properties in Buckhead, Midtown, and Ansley Park, Ana combines her deep market knowledge with personalized service to ensure each client finds their perfect home or achieves maximum value when selling. Ana's network of international investors and high-net-worth individuals provides unmatched exposure for luxury listings.",
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What My Clients Say',
    'cta.ready': 'Ready to Find Your Dream Home?',
    'cta.contact': 'Contact Ana Today',
    'footer.rights': 'All Rights Reserved',
    'footer.design': 'Designed with',
    'property.beds': 'Beds',
    'property.baths': 'Baths',
    'property.sqft': 'Sq Ft',
    'property.viewDetails': 'View Details',
    // Home Value Lead Magnet
    'homeValue.sectionTitle': 'Find Out What Your Home Is Worth',
    'homeValue.sectionSubtitle': 'Get a Professional Market Analysis',
    'homeValue.description': "Thinking of selling your home? Get a complimentary, no-obligation home valuation from a local market expert. Our detailed analysis takes into account recent sales, market trends, and your home's unique features.",
    'homeValue.benefit1': 'Accurate market valuation based on recent comparable sales',
    'homeValue.benefit2': "Professional analysis of your home's unique features",
    'homeValue.benefit3': "Actionable insights to maximize your home's value",
    'homeValue.title': 'Free Home Valuation',
    'homeValue.subtitle': 'Complete the form below to receive your complimentary home value estimate',
    'homeValue.form.address': 'Property Address',
    'homeValue.form.addressPlaceholder': 'Enter your full property address',
    'homeValue.form.name': 'Full Name',
    'homeValue.form.namePlaceholder': 'Enter your full name',
    'homeValue.form.email': 'Email Address',
    'homeValue.form.emailPlaceholder': 'Enter your email address',
    'homeValue.form.phone': 'Phone Number',
    'homeValue.form.phonePlaceholder': 'Enter your phone number',
    'homeValue.form.notes': 'Additional Information (Optional)',
    'homeValue.form.notesPlaceholder': 'Tell us more about your property (size, features, renovations, etc.)',
    'homeValue.form.submit': 'Get My Home Valuation',
    'homeValue.form.submitting': 'Submitting...',
    'homeValue.success.title': 'Request Received!',
    'homeValue.success.message': 'Thank you for your submission. Ana will be in touch with your home valuation within 24 hours.',
    'homeValue.error.title': 'Something went wrong',
    'homeValue.error.message': 'We couldn\'t process your request. Please try again or contact us directly.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.properties': 'Propiedades',
    'nav.about': 'Acerca De',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'hero.title': 'Bienes Raíces de Lujo en Atlanta',
    'hero.subtitle': 'Descubra Propiedades Exclusivas en los Vecindarios Más Deseables de la Ciudad',
    'hero.cta': 'Ver Propiedades Destacadas',
    'featured.title': 'Propiedades Destacadas',
    'featured.subtitle': 'Hogares Exquisitos Seleccionados para Compradores Exigentes',
    'about.title': 'Ana Wall',
    'about.subtitle': 'Su Especialista en Bienes Raíces de Lujo',
    'about.bio': "Con más de 15 años de experiencia en el mercado inmobiliario de lujo de Atlanta, Ana Wall se ha establecido como una de las principales profesionales inmobiliarias de la ciudad. Especializada en propiedades de alta gama en Buckhead, Midtown y Ansley Park, Ana combina su profundo conocimiento del mercado con un servicio personalizado para garantizar que cada cliente encuentre su hogar perfecto o logre el máximo valor al vender. La red de Ana de inversionistas internacionales y personas de alto patrimonio proporciona una exposición inigualable para listados de lujo.",
    'testimonials.title': 'Testimonios de Clientes',
    'testimonials.subtitle': 'Lo que Dicen Mis Clientes',
    'cta.ready': '¿Listo para Encontrar la Casa de Sus Sueños?',
    'cta.contact': 'Contacte a Ana Hoy',
    'footer.rights': 'Todos los Derechos Reservados',
    'footer.design': 'Diseñado con',
    'property.beds': 'Habitaciones',
    'property.baths': 'Baños',
    'property.sqft': 'Pies Cuad.',
    'property.viewDetails': 'Ver Detalles',
    // Home Value Lead Magnet - Spanish translations
    'homeValue.sectionTitle': 'Descubra el Valor de Su Casa',
    'homeValue.sectionSubtitle': 'Obtenga un Análisis de Mercado Profesional',
    'homeValue.description': "¿Está pensando en vender su casa? Obtenga una valoración inmobiliaria gratuita y sin compromiso de un experto en el mercado local. Nuestro análisis detallado tiene en cuenta ventas recientes, tendencias del mercado y las características únicas de su hogar.",
    'homeValue.benefit1': 'Valoración precisa basada en ventas comparables recientes',
    'homeValue.benefit2': 'Análisis profesional de las características únicas de su hogar',
    'homeValue.benefit3': 'Información práctica para maximizar el valor de su casa',
    'homeValue.title': 'Valoración Gratuita de su Hogar',
    'homeValue.subtitle': 'Complete el formulario para recibir su estimación gratuita del valor de su casa',
    'homeValue.form.address': 'Dirección de la Propiedad',
    'homeValue.form.addressPlaceholder': 'Ingrese la dirección completa de su propiedad',
    'homeValue.form.name': 'Nombre Completo',
    'homeValue.form.namePlaceholder': 'Ingrese su nombre completo',
    'homeValue.form.email': 'Correo Electrónico',
    'homeValue.form.emailPlaceholder': 'Ingrese su correo electrónico',
    'homeValue.form.phone': 'Número de Teléfono',
    'homeValue.form.phonePlaceholder': 'Ingrese su número de teléfono',
    'homeValue.form.notes': 'Información Adicional (Opcional)',
    'homeValue.form.notesPlaceholder': 'Cuéntenos más sobre su propiedad (tamaño, características, renovaciones, etc.)',
    'homeValue.form.submit': 'Obtener la Valoración de Mi Casa',
    'homeValue.form.submitting': 'Enviando...',
    'homeValue.success.title': '¡Solicitud Recibida!',
    'homeValue.success.message': 'Gracias por su solicitud. Ana se pondrá en contacto con la valoración de su hogar dentro de 24 horas.',
    'homeValue.error.title': 'Algo salió mal',
    'homeValue.error.message': 'No pudimos procesar su solicitud. Por favor, inténtelo de nuevo o contáctenos directamente.',
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageOption>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
