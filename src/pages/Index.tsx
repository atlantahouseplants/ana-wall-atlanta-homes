import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import HomeValueForm from '@/components/HomeValueForm';
import VirtualTourScheduler from '@/components/VirtualTourScheduler';
import ToolsSection from '@/components/ToolsSection';
import MarketReportsSection from '@/components/MarketReportsSection';
import FaqSection from '@/components/FaqSection';
import ContactModal from '@/components/ContactModal';
import { heroBackground, propertyImages } from '@/assets/images';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useLanguage();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Ana's professional photos
  const anaPhotos = {
    aboutPhoto: "/lovable-uploads/a424100c-6f6f-4b29-876e-59201565a0d5.png", // Clean headshot with white jacket
    contactPhoto: "/lovable-uploads/631faac4-a98b-4710-b5f3-2596258723fa.png", // Friendly portrait
    ctaPhoto: "/lovable-uploads/1ade2f13-f281-45e5-a3e2-503845556107.png" // Professional standing pose
  };

  // Testimonial photos from uploaded images
  const testimonialPhotos = {
    woman1: "/lovable-uploads/72620f36-010d-43fb-ab97-60f5ef33b3f9.png", // Now for Sarah Johnson
    man: "/lovable-uploads/e4764e71-9c1d-4b7c-bad1-cff478955c68.png",
    woman2: "/lovable-uploads/53f41a8c-bd2d-4151-ba81-2cbf165425c8.png" // Now for Jennifer Chen
  };

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

  // Updated testimonials with swapped photos
  const testimonials = [
    {
      id: 1,
      text: "Ana's knowledge of the Atlanta luxury market is unmatched. She found us our dream home in Buckhead when other agents couldn't.",
      author: "Sarah Johnson",
      role: "Home Buyer",
      photo: testimonialPhotos.woman1 // Now using the photo that was for Jennifer
    },
    {
      id: 2,
      text: "Working with Ana to sell our Midtown penthouse was a seamless experience. Her marketing strategy attracted multiple offers above asking price.",
      author: "David Rodriguez",
      role: "Home Seller", 
      photo: testimonialPhotos.man
    },
    {
      id: 3,
      text: "Ana's attention to detail and dedication to her clients is remarkable. She guided us through every step of the buying process with expertise and care.",
      author: "Jennifer Chen",
      role: "Home Buyer",
      photo: testimonialPhotos.woman2 // Now using the photo that was for Sarah
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />

      {/* Hero Section - Clean Layout */}
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/60"></div>
        
        {/* Hero Content - Centered and Clean */}
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-fade-in">
              Find Your Atlanta Dream Home with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fade-in">
              Fortuna Homes, led by top Atlanta Realtor Ana Wall, specializes in luxury real estate for buyers and sellers in the city's most sought-after neighborhoods.
            </p>
            <p className="text-lg mb-8 text-gray-200 animate-fade-in">
              With deep local expertise and unwavering client dedication, Ana delivers exceptional results in Atlanta's premium property market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <a href="#properties" className="btn-primary text-lg px-8 py-3">
                View Featured Properties
              </a>
              <a href="#home-value" className="btn-secondary text-lg px-8 py-3 bg-white/90 text-navy border-white hover:bg-white">
                Get Free Home Valuation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Home Value Section with Enhanced Visibility */}
      <section id="home-value" className="py-16 md:py-24 bg-gradient-to-r from-blush to-blush-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">What's Your Atlanta Home Worth?</h2>
              <p className="section-subtitle">Get an instant, accurate valuation from Atlanta's luxury market expert</p>
              <div className="text-gray-700 mb-6 space-y-4">
                <p>Discover your property's true market value with Fortuna Homes' comprehensive analysis tool. Ana Wall's deep knowledge of Atlanta's luxury neighborhoods ensures you get the most accurate assessment.</p>
                <div className="flex items-center gap-4 text-navy">
                  <div className="bg-rose/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Instant market analysis based on recent comparable sales</span>
                </div>
                <div className="flex items-center gap-4 text-navy">
                  <div className="bg-rose/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Personalized insights for your specific neighborhood</span>
                </div>
                <div className="flex items-center gap-4 text-navy">
                  <div className="bg-rose/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>No obligation consultation with luxury market specialist</span>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <HomeValueForm />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Atlanta Properties</h2>
          <p className="section-subtitle text-center">Discover exceptional homes in Atlanta's most prestigious neighborhoods</p>
          
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
          
          <div className="text-center mt-8">
            <Button className="btn-primary" onClick={() => setContactModalOpen(true)}>
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour Scheduler Section */}
      <section id="virtual-tour" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <VirtualTourScheduler />
            </div>
            <div className="order-first lg:order-last">
              <img 
                src={propertyImages[1]} 
                alt="Virtual Tour" 
                className="rounded-xl shadow-lg object-cover h-96 w-full"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img 
                  src={propertyImages[0]} 
                  alt="Property Interior" 
                  className="rounded-xl shadow-lg object-cover h-48"
                />
                <img 
                  src={propertyImages[2]} 
                  alt="Property Exterior" 
                  className="rounded-xl shadow-lg object-cover h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reports Section */}
      <MarketReportsSection />

      {/* About Section with Ana's Professional Photo */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">Meet Ana Wall</h2>
              <p className="section-subtitle">Founder & Principal Realtor, Fortuna Homes</p>
              <p className="text-gray-700 mb-6">
                Ana Wall founded Fortuna Homes with a simple mission: to provide unparalleled real estate service in Atlanta's luxury market. With years of experience in the city's most exclusive neighborhoods, Ana has built a reputation for integrity, expertise, and exceptional client care. Her deep understanding of Atlanta's unique market dynamics and commitment to personalized service make her the trusted choice for discerning buyers and sellers.
              </p>
              <div className="flex gap-4 mt-8">
                <Button 
                  className="btn-primary"
                  onClick={() => setContactModalOpen(true)}
                >
                  Work With Ana
                </Button>
                <Button className="btn-secondary">{t('nav.properties')}</Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold"></div>
                <img 
                  src={anaPhotos.aboutPhoto} 
                  alt="Ana Wall - Founder of Fortuna Homes" 
                  className="w-full relative z-10 rounded-lg shadow-lg object-cover max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
      
      {/* Tools Section - Mortgage Calculator & Guide Downloads */}
      <ToolsSection />
      
      {/* Testimonials Section with Real Client Photos */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="section-title text-white">Client Success Stories</h2>
              <p className="section-subtitle text-rose">Why Atlanta clients choose Fortuna Homes</p>
              <p className="text-gray-300 mb-6">
                "My clients' success is my success. At Fortuna Homes, I'm dedicated to providing exceptional service and expertise to help you achieve your real estate goals in Atlanta's luxury market. Every transaction is personal, and every client deserves nothing less than excellence."
              </p>
              <p className="text-rose font-semibold">- Ana Wall, Founder of Fortuna Homes</p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-rose opacity-30"></div>
                <img 
                  src={anaPhotos.contactPhoto} 
                  alt="Ana Wall - Fortuna Homes Founder" 
                  className="w-80 h-auto relative z-10 rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-navy-light p-8 rounded-lg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rose mb-4">
                  <path d="M10 11L6.5 11C6.10218 11 5.72064 10.842 5.43934 10.5607C5.15804 10.2794 5 9.8978 5 9.5V7C5 6.6022 5.15804 6.2206 5.43934 5.9393C5.72064 5.658 6.10218 5.5 6.5 5.5H8C8.3978 5.5 8.7794 5.658 9.0607 5.9393C9.342 6.2206 9.5 6.6022 9.5 7V13.5C9.5 14.2956 9.184 15.0587 8.6214 15.6213C8.0588 16.184 7.2956 16.5 6.5 16.5H5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 11L15.5 11C15.1022 11 14.7206 10.842 14.4393 10.5607C14.158 10.2794 14 9.8978 14 9.5V7C14 6.6022 14.158 6.2206 14.4393 5.9393C14.7206 5.658 15.1022 5.5 15.5 5.5H17C17.3978 5.5 17.7794 5.658 18.0607 5.9393C18.342 6.2206 18.5 6.6022 18.5 7V13.5C18.5 14.2956 18.184 15.0587 17.6214 15.6213C17.0588 16.184 16.2956 16.5 15.5 16.5H14V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="italic mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4 mt-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-rose text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blush to-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="section-title mb-6">Ready to Experience the Fortuna Homes Difference?</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Whether you're buying or selling in Atlanta's luxury market, Fortuna Homes delivers exceptional results through personalized service, market expertise, and unwavering dedication to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="btn-primary text-lg px-8 py-3"
                  onClick={() => setContactModalOpen(true)}
                >
                  Start Your Journey
                </Button>
                <a 
                  href="tel:404-934-8516"
                  className="btn-secondary text-lg px-8 py-3 text-center"
                >
                  Call (404) 934-8516
                </a>
              </div>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-rose/20 rounded-lg"></div>
                <img 
                  src={anaPhotos.ctaPhoto} 
                  alt="Ana Wall - Ready to Help You" 
                  className="w-80 h-auto relative z-10 rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
