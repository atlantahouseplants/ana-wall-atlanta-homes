import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookAuditCTA, SchedulePlantDoctorCTA, CalculateOrderCTA } from "@/components/CTAButton";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-forest to-sage">
        <div className="hero-overlay"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transform Your Space with Living Plants
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up">
              Professional plant care, office design, and plant doctor services in Metro Atlanta
            </p>
            
            {/* Three Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <BookAuditCTA />
              <SchedulePlantDoctorCTA />
              <CalculateOrderCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Plant Services</h2>
            <p className="section-subtitle">
              From office design to plant rescue, we bring wellness and beauty to your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office Plant Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-forest rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-4">Office Plant Design</h3>
              <p className="text-gray-600 mb-6">
                Transform your office into a living, breathing workspace with professional plant design and installation.
              </p>
              <div className="text-sm text-gray-500 mb-4">Starting at $350 per planter</div>
              <BookAuditCTA size="sm" />
            </div>

            {/* Plant Care Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-sage rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-4">Recurring Plant Care</h3>
              <p className="text-gray-600 mb-6">
                Never worry about watering day again with our professional maintenance services.
              </p>
              <div className="text-sm text-gray-500 mb-4">From $129/month</div>
              <a href="/office-plant-care" className="btn-secondary text-sm px-4 py-2">
                Learn More
              </a>
            </div>

            {/* Plant Doctor */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-earth rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-4">Plant Doctor Service</h3>
              <p className="text-gray-600 mb-6">
                Your plants' ER visit—on-site diagnosis and treatment for struggling plants.
              </p>
              <div className="text-sm text-gray-500 mb-4">$129 flat rate (up to 10 plants)</div>
              <SchedulePlantDoctorCTA size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* About Nick Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Meet Nick, Your Head Plant Doctor</h2>
              <p className="section-subtitle">
                Certified Horticulturist & Lead Plant Professional
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nick has studied, breathed, and lived plants his entire life. A proud UGA horticulture graduate, 
                  he spent his early career managing greenhouse production, then pivoted to high-end interiorscapes.
                </p>
                <p>
                  As Atlanta Houseplants' Head Plant Doctor, Nick oversees every design proposal, personally 
                  trains our technicians, and handles the most challenging plant rescues.
                </p>
                <div className="bg-cream p-4 rounded-lg">
                  <p className="italic text-forest font-medium">
                    "Great plant care is 80% observation, 20% action—listen to what the foliage is telling you."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">- Nick, Head Plant Doctor</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="/about" className="btn-outline">
                  Learn More About Our Team
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-sage/20 rounded-lg"></div>
                <div className="w-80 h-96 bg-gray-200 rounded-lg relative z-10 flex items-center justify-center">
                  {/* TODO: Replace with Nick's actual photo */}
                  <span className="text-6xl">👨‍🌾</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-forest to-sage text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for office design, ongoing care, or plant rescue services, 
            we're here to help bring the benefits of living plants to your Atlanta space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookAuditCTA />
            <a 
              href="tel:404-977-4539"
              className="btn-secondary bg-white text-forest hover:bg-gray-100"
            >
              Call (404) 977-4539
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
