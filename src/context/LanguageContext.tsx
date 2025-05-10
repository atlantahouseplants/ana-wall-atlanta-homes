
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
    'hero.subtitle': "Discover Exclusive Properties in the City's Most Desirable Neighborhoods",
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
    'homeValue.error.message': "We couldn't process your request. Please try again or contact us directly.",

    // Guide Downloads
    'guide.title': 'Free Real Estate Guide',
    'guide.subtitle': 'Expert tips for navigating the Atlanta luxury real estate market',
    'guide.form.guideType': 'Guide Type',
    'guide.form.buying': 'Home Buying Guide',
    'guide.form.selling': 'Home Selling Guide',
    'guide.form.name': 'Your Name',
    'guide.form.namePlaceholder': 'Enter your name',
    'guide.form.email': 'Your Email',
    'guide.form.emailPlaceholder': 'Enter your email',
    'guide.form.submit': 'Download Free Guide',
    'guide.form.submitting': 'Processing...',
    'guide.privacy': 'We respect your privacy and will never share your information.',
    'guide.success.title': 'Success!',
    'guide.success.message': 'Your guide has been emailed to you. Check your inbox!',

    // Market Reports
    'marketReports.title': 'Atlanta Market Reports',
    'marketReports.subtitle': 'Stay informed with the latest luxury real estate trends',
    'marketReports.description': "Subscribe to receive Ana's monthly market reports with insights on pricing trends, inventory levels, and emerging opportunities in Atlanta's luxury real estate market.",
    'marketReports.emailPlaceholder': 'Your email address',
    'marketReports.subscribe': 'Subscribe',
    'marketReports.subscribing': 'Subscribing...',
    'marketReports.stats.avgPrice': 'Avg. Sale Price',
    'marketReports.stats.daysOnMarket': 'Days on Market',
    'marketReports.stats.inventory': 'Active Listings',
    'marketReports.view': 'View Report',
    'marketReports.report1.title': 'Buckhead Q2 Report',
    'marketReports.report1.description': "Luxury market analysis of Buckhead's most prestigious neighborhoods",
    'marketReports.report2.title': 'Midtown Market Trends',
    'marketReports.report2.description': "Urban living and investment opportunities in Atlanta's vibrant center",
    'marketReports.report3.title': 'Ansley Park Insights',
    'marketReports.report3.description': 'Historical data and current trends in this sought-after neighborhood',
    'marketReports.report4.title': '2024 Market Forecast',
    'marketReports.report4.description': "Predictions and opportunities for Atlanta's luxury market in 2024",
    'marketReports.success.title': 'Subscribed!',
    'marketReports.success.message': 'Thank you for subscribing to our market reports.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Get answers to your most common luxury real estate questions',
    'faq.questions.q1': 'What areas of Atlanta do you specialize in?',
    'faq.answers.a1': "I specialize in luxury properties throughout Atlanta's most prestigious neighborhoods, including Buckhead, Midtown, Ansley Park, Morningside, Druid Hills, and Sandy Springs. My expertise extends to historic homes, modern penthouses, and exclusive gated communities.",
    'faq.questions.q2': 'How is the luxury market different from the standard real estate market?',
    'faq.answers.a2': 'The luxury market requires specialized marketing strategies, a network of qualified buyers, discretion, and extensive knowledge of high-end finishes and amenities. Properties in this segment are often marketed differently, with professional photography, virtual tours, and selective showings to qualified buyers.',
    'faq.questions.q3': 'What is the process for selling my luxury home?',
    'faq.answers.a3': "The process begins with a personalized consultation to understand your goals and timeline. I'll provide a detailed market analysis and develop a customized marketing plan for your property. From professional staging and photography to targeted marketing and private showings, I handle every detail to ensure maximum exposure to qualified buyers.",
    'faq.questions.q4': 'How long does it typically take to sell a luxury property?',
    'faq.answers.a4': 'While each property is unique, luxury homes in Atlanta typically sell within 30-90 days when priced appropriately. Market conditions, location, property condition, and pricing strategy all influence the timeline. My goal is to achieve the best possible price in a timeframe that aligns with your needs.',
    'faq.questions.q5': 'What should I look for when buying a luxury home?',
    'faq.answers.a5': 'Beyond location and amenities, consider the quality of construction, architectural significance, views, privacy, security features, and potential for appreciation. I help my clients evaluate these factors while also considering lifestyle needs and long-term investment potential.',
    'faq.questions.q6': 'How do you determine the value of a luxury property?',
    'faq.answers.a6': "Valuing luxury properties involves analyzing comparable sales, unique features, architectural significance, and market trends. I combine traditional valuation methods with my deep understanding of luxury buyer preferences and premium features that command top dollar in Atlanta's market.",

    // Tools section
    'tools.title': 'Real Estate Tools & Resources',
    'tools.subtitle': 'Helpful resources to assist with your real estate decisions',

    // Mortgage Calculator
    'mortgage.title': 'Mortgage Calculator',
    'mortgage.homeValue': 'Home Value',
    'mortgage.downPayment': 'Down Payment',
    'mortgage.loanTerm': 'Loan Term',
    'mortgage.interestRate': 'Interest Rate',
    'mortgage.years': 'years',
    'mortgage.monthlyPayment': 'Estimated Monthly Payment',
    'mortgage.disclaimer': 'This calculator is for estimation purposes only. Contact a lender for precise figures.',

    // Virtual Tour
    'virtualTour.title': 'Schedule a Virtual Property Tour',
    'virtualTour.subtitle': 'Explore properties from anywhere with a personalized virtual tour guided by Ana',
    'virtualTour.form.name': 'Your Name',
    'virtualTour.form.namePlaceholder': 'Enter your full name',
    'virtualTour.form.email': 'Email Address',
    'virtualTour.form.emailPlaceholder': 'Enter your email address',
    'virtualTour.form.phone': 'Phone Number',
    'virtualTour.form.phonePlaceholder': 'Enter your phone number',
    'virtualTour.form.property': 'Property of Interest',
    'virtualTour.form.propertyPlaceholder': 'Enter property address or description',
    'virtualTour.form.date': 'Preferred Date',
    'virtualTour.form.time': 'Preferred Time',
    'virtualTour.form.selectTime': 'Select a time',
    'virtualTour.form.message': 'Additional Information (Optional)',
    'virtualTour.form.messagePlaceholder': "Tell us more about what you're looking for",
    'virtualTour.form.submit': 'Schedule Virtual Tour',
    'virtualTour.form.submitting': 'Scheduling...',
    'virtualTour.privacy': 'Your information is secure and will not be shared with third parties.',
    'virtualTour.success.title': 'Tour Scheduled!',
    'virtualTour.success.message': 'Thank you for scheduling a virtual tour. Ana will confirm your appointment shortly.',
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
    'about.bio': 'Con más de 15 años de experiencia en el mercado inmobiliario de lujo de Atlanta, Ana Wall se ha establecido como una de las principales profesionales inmobiliarias de la ciudad. Especializada en propiedades de alta gama en Buckhead, Midtown y Ansley Park, Ana combina su profundo conocimiento del mercado con un servicio personalizado para garantizar que cada cliente encuentre su hogar perfecto o logre el máximo valor al vender. La red de Ana de inversionistas internacionales y personas de alto patrimonio proporciona una exposición inigualable para listados de lujo.',
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
    'homeValue.description': '¿Está pensando en vender su casa? Obtenga una valoración inmobiliaria gratuita y sin compromiso de un experto en el mercado local. Nuestro análisis detallado tiene en cuenta ventas recientes, tendencias del mercado y las características únicas de su hogar.',
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

    // Guide Downloads
    'guide.title': 'Guía Gratuita de Bienes Raíces',
    'guide.subtitle': 'Consejos de expertos para navegar el mercado inmobiliario de lujo de Atlanta',
    'guide.form.guideType': 'Tipo de Guía',
    'guide.form.buying': 'Guía para Comprar',
    'guide.form.selling': 'Guía para Vender',
    'guide.form.name': 'Su Nombre',
    'guide.form.namePlaceholder': 'Ingrese su nombre',
    'guide.form.email': 'Su Correo Electrónico',
    'guide.form.emailPlaceholder': 'Ingrese su correo electrónico',
    'guide.form.submit': 'Descargar Guía Gratuita',
    'guide.form.submitting': 'Procesando...',
    'guide.privacy': 'Respetamos su privacidad y nunca compartiremos su información.',
    'guide.success.title': '¡Éxito!',
    'guide.success.message': 'Su guía ha sido enviada a su correo electrónico. ¡Revise su bandeja de entrada!',

    // Market Reports
    'marketReports.title': 'Informes del Mercado de Atlanta',
    'marketReports.subtitle': 'Manténgase informado con las últimas tendencias inmobiliarias de lujo',
    'marketReports.description': 'Suscríbase para recibir los informes mensuales de Ana con información sobre tendencias de precios, niveles de inventario y oportunidades emergentes en el mercado inmobiliario de lujo de Atlanta.',
    'marketReports.emailPlaceholder': 'Su dirección de correo electrónico',
    'marketReports.subscribe': 'Suscribirse',
    'marketReports.subscribing': 'Suscribiendo...',
    'marketReports.stats.avgPrice': 'Precio Promedio',
    'marketReports.stats.daysOnMarket': 'Días en Mercado',
    'marketReports.stats.inventory': 'Listados Activos',
    'marketReports.view': 'Ver Informe',
    'marketReports.report1.title': 'Informe Q2 de Buckhead',
    'marketReports.report1.description': 'Análisis del mercado de lujo de los vecindarios más prestigiosos de Buckhead',
    'marketReports.report2.title': 'Tendencias de Midtown',
    'marketReports.report2.description': 'Vida urbana y oportunidades de inversión en el vibrante centro de Atlanta',
    'marketReports.report3.title': 'Perspectivas de Ansley Park',
    'marketReports.report3.description': 'Datos históricos y tendencias actuales en este codiciado vecindario',
    'marketReports.report4.title': 'Pronóstico del Mercado 2024',
    'marketReports.report4.description': 'Predicciones y oportunidades para el mercado de lujo de Atlanta en 2024',
    'marketReports.success.title': '¡Suscrito!',
    'marketReports.success.message': 'Gracias por suscribirse a nuestros informes de mercado.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Obtenga respuestas a sus preguntas más comunes sobre bienes raíces de lujo',
    'faq.questions.q1': '¿En qué áreas de Atlanta se especializa?',
    'faq.answers.a1': 'Me especializo en propiedades de lujo en los vecindarios más prestigiosos de Atlanta, incluyendo Buckhead, Midtown, Ansley Park, Morningside, Druid Hills y Sandy Springs. Mi experiencia se extiende a casas históricas, áticos modernos y comunidades exclusivas con acceso restringido.',
    'faq.questions.q2': '¿En qué se diferencia el mercado de lujo del mercado inmobiliario estándar?',
    'faq.answers.a2': 'El mercado de lujo requiere estrategias de marketing especializadas, una red de compradores calificados, discreción y un amplio conocimiento de acabados y comodidades de alta gama. Las propiedades en este segmento a menudo se comercializan de manera diferente, con fotografía profesional, recorridos virtuales y visitas selectivas para compradores calificados.',
    'faq.questions.q3': '¿Cuál es el proceso para vender mi casa de lujo?',
    'faq.answers.a3': 'El proceso comienza con una consulta personalizada para comprender sus objetivos y cronograma. Le proporcionaré un análisis detallado del mercado y desarrollaré un plan de marketing personalizado para su propiedad. Desde la presentación profesional y fotografía hasta marketing dirigido y visitas privadas, manejo cada detalle para garantizar la máxima exposición a compradores calificados.',
    'faq.questions.q4': '¿Cuánto tiempo suele tardar en venderse una propiedad de lujo?',
    'faq.answers.a4': 'Aunque cada propiedad es única, las casas de lujo en Atlanta generalmente se venden en un plazo de 30 a 90 días cuando tienen un precio adecuado. Las condiciones del mercado, la ubicación, el estado de la propiedad y la estrategia de precios influyen en el cronograma. Mi objetivo es lograr el mejor precio posible en un plazo que se ajuste a sus necesidades.',
    'faq.questions.q5': '¿Qué debo buscar al comprar una casa de lujo?',
    'faq.answers.a5': 'Más allá de la ubicación y las comodidades, considere la calidad de construcción, la importancia arquitectónica, las vistas, la privacidad, las características de seguridad y el potencial de apreciación. Ayudo a mis clientes a evaluar estos factores considerando también las necesidades de estilo de vida y el potencial de inversión a largo plazo.',
    'faq.questions.q6': '¿Cómo determina el valor de una propiedad de lujo?',
    'faq.answers.a6': 'Valorar propiedades de lujo implica analizar ventas comparables, características únicas, importancia arquitectónica y tendencias del mercado. Combino métodos de valoración tradicionales con mi profundo conocimiento de las preferencias de los compradores de lujo y las características premium que exigen el máximo precio en el mercado de Atlanta.',

    // Tools section
    'tools.title': 'Herramientas y Recursos Inmobiliarios',
    'tools.subtitle': 'Recursos útiles para ayudar con sus decisiones inmobiliarias',

    // Mortgage Calculator
    'mortgage.title': 'Calculadora de Hipoteca',
    'mortgage.homeValue': 'Valor de la Propiedad',
    'mortgage.downPayment': 'Pago Inicial',
    'mortgage.loanTerm': 'Plazo del Préstamo',
    'mortgage.interestRate': 'Tasa de Interés',
    'mortgage.years': 'años',
    'mortgage.monthlyPayment': 'Pago Mensual Estimado',
    'mortgage.disclaimer': 'Esta calculadora es solo para fines de estimación. Contacte a un prestamista para cifras precisas.',

    // Virtual Tour
    'virtualTour.title': 'Programar un Recorrido Virtual',
    'virtualTour.subtitle': 'Explore propiedades desde cualquier lugar con un recorrido virtual personalizado guiado por Ana',
    'virtualTour.form.name': 'Su Nombre',
    'virtualTour.form.namePlaceholder': 'Ingrese su nombre completo',
    'virtualTour.form.email': 'Correo Electrónico',
    'virtualTour.form.emailPlaceholder': 'Ingrese su correo electrónico',
    'virtualTour.form.phone': 'Número de Teléfono',
    'virtualTour.form.phonePlaceholder': 'Ingrese su número de teléfono',
    'virtualTour.form.property': 'Propiedad de Interés',
    'virtualTour.form.propertyPlaceholder': 'Ingrese la dirección o descripción de la propiedad',
    'virtualTour.form.date': 'Fecha Preferida',
    'virtualTour.form.time': 'Hora Preferida',
    'virtualTour.form.selectTime': 'Seleccione una hora',
    'virtualTour.form.message': 'Información Adicional (Opcional)',
    'virtualTour.form.messagePlaceholder': 'Cuéntenos más sobre lo que está buscando',
    'virtualTour.form.submit': 'Programar Recorrido Virtual',
    'virtualTour.form.submitting': 'Programando...',
    'virtualTour.privacy': 'Su información es segura y no se compartirá con terceros.',
    'virtualTour.success.title': '¡Recorrido Programado!',
    'virtualTour.success.message': 'Gracias por programar un recorrido virtual. Ana confirmará su cita en breve.',
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
