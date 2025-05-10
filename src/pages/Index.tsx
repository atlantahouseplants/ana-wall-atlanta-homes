
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { heroBackground, propertyImages, agentProfile } from '@/assets/images';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useLanguage();

  // Sample featured properties
  const featuredProperties = [
    {
      id: 1,
      image: propertyImages[0],
      title: "Elegant Buckhead Estate",
      address: "3245 Peachtree Road NE, Atlanta, GA",
      price: "$3,950,000",
      beds: 5,
      baths: 6,
      sqft: 6500
    },
    {
      id: 2,
      image: propertyImages[1],
      title: "Modern Midtown Penthouse",
      address: "1065 Peachtree St NE, Atlanta, GA",
      price: "$2,750,000",
      beds: 3,
      baths: 3.5,
      sqft: 3200
    },
    {
      id: 3,
      image: propertyImages[2],
      title: "Historic Ansley Park Home",
      address: "210 The Prado NE, Atlanta, GA",
      price: "$1,895,000",
      beds: 4,
      baths: 4,
      sqft: 4100
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      text: "Ana's knowledge of the Atlanta luxury market is unmatched. She found us our dream home in Buckhead when other agents couldn't.",
      author: "Michael & Sarah Johnson",
      role: "Home Buyers"
    },
    {
      id: 2,
      text: "Working with Ana to sell our Midtown penthouse was a seamless experience. Her marketing strategy attracted multiple offers above asking price.",
      author: "David Rodriguez",
      role: "Home Seller"
    },
    {
      id: 3,
      text: "Ana's attention to detail and dedication to her clients is remarkable. She guided us through every step of the buying process with expertise and care.",
      author: "Jennifer & Robert Chen",
      role: "Home Buyers"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/40"></div>
        
        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            {t('hero.subtitle')}
          </p>
          <a href="#properties" className="btn-primary text-lg px-8 py-3 animate-fade-up">
            {t('hero.cta')}
          </a>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('featured.title')}</h2>
          <p className="section-subtitle text-center">{t('featured.subtitle')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {featuredProperties.map(property => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                address={property.address}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">{t('about.title')}</h2>
              <p className="section-subtitle">{t('about.subtitle')}</p>
              <p className="text-gray-700 mb-6">
                {t('about.bio')}
              </p>
              <div className="flex gap-4 mt-8">
                <Button className="btn-primary">{t('nav.contact')}</Button>
                <Button className="btn-secondary">{t('nav.properties')}</Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold"></div>
                <img 
                  src={agentProfile} 
                  alt="Ana Wall" 
                  className="w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container-custom">
          <h2 className="section-title text-white text-center">{t('testimonials.title')}</h2>
          <p className="section-subtitle text-center text-gold">{t('testimonials.subtitle')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-navy-light p-8 rounded-lg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold mb-4">
                  <path d="M10 11L6.5 11C6.10218 11 5.72064 10.842 5.43934 10.5607C5.15804 10.2794 5 9.8978 5 9.5V7C5 6.6022 5.15804 6.2206 5.43934 5.9393C5.72064 5.658 6.10218 5.5 6.5 5.5H8C8.3978 5.5 8.7794 5.658 9.0607 5.9393C9.342 6.2206 9.5 6.6022 9.5 7V13.5C9.5 14.2956 9.184 15.0587 8.6214 15.6213C8.0588 16.184 7.2956 16.5 6.5 16.5H5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 11L15.5 11C15.1022 11 14.7206 10.842 14.4393 10.5607C14.158 10.2794 14 9.8978 14 9.5V7C14 6.6022 14.158 6.2206 14.4393 5.9393C14.7206 5.658 15.1022 5.5 15.5 5.5H17C17.3978 5.5 17.7794 5.658 18.0607 5.9393C18.342 6.2206 18.5 6.6022 18.5 7V13.5C18.5 14.2956 18.184 15.0587 17.6214 15.6213C17.0588 16.184 16.2956 16.5 15.5 16.5H14V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="italic mb-6">{testimonial.text}</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-cream">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">{t('cta.ready')}</h2>
          <Button className="btn-primary text-lg px-8 py-3">
            {t('cta.contact')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
