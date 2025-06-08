import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BookAuditCTA, SchedulePlantDoctorCTA, CalculateOrderCTA } from "../components/CTAButton";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="hero-section bg-gradient-to-br from-green-800 to-green-600 relative overflow-hidden">
        <div className="hero-overlay"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🌿</div>
          <div className="absolute top-32 right-20 text-4xl">🌱</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">🍃</div>
          <div className="absolute bottom-32 right-10 text-3xl">🌿</div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-yellow-300 mr-2">⭐⭐⭐⭐⭐</span>
              <span className="text-sm font-medium">Trusted by 500+ Atlanta Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Atlanta's #1 Plant Care Experts
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fade-up opacity-90">
              Transform your office into a thriving, productive workspace with professional plant design & care
            </p>
            <p className="text-lg mb-8 animate-fade-up opacity-80">
              🌱 UGA Certified Horticulturists • 🏢 500+ Happy Clients • 📞 Same-Day Service Available
            </p>
            
            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up mb-8">
              <BookAuditCTA />
              <SchedulePlantDoctorCTA />
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Plant Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="bg-green-50 py-4">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-green-800 font-medium">
              🗺️ Proudly serving Metro Atlanta: Buckhead, Midtown, Downtown, Sandy Springs, Roswell & surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Atlanta Businesses Choose Us</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              From Fortune 500 companies to local startups, we've helped transform workspaces across Atlanta with our comprehensive plant services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Office Plant Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 bg-green-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-green-800">Office Plant Design</h3>
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Most Popular</span>
              </div>
              <p className="text-gray-600 mb-6">
                Custom plant installations that boost productivity, improve air quality, and create a welcoming atmosphere for employees and clients.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Free design consultation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional installation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  30-day plant guarantee
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">Starting at $350 per planter</div>
              <BookAuditCTA size="sm" />
            </div>

            {/* Plant Care Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Recurring Plant Care</h3>
              <p className="text-gray-600 mb-6">
                Professional maintenance that keeps your plants thriving year-round. Our certified technicians handle everything.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Weekly/bi-weekly visits
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Watering & fertilizing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Plant health monitoring
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">From $129/month</div>
              <a href="/office-plant-care" className="btn-secondary text-sm px-4 py-2 inline-block">
                Learn More
              </a>
            </div>

            {/* Plant Doctor */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🩺</span>
              </div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-green-800">Plant Doctor Service</h3>
                <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Emergency</span>
              </div>
              <p className="text-gray-600 mb-6">
                Same-day plant rescue service. Our expert diagnostics and treatment can save even the most struggling plants.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Same-day availability
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Expert diagnosis
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Treatment plan included
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">$129 flat rate (up to 10 plants)</div>
              <SchedulePlantDoctorCTA size="sm" />
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎁</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Corporate Gifts</h4>
              <p className="text-sm text-gray-600">Custom plant gifts for clients</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🌵</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Succulent Programs</h4>
              <p className="text-sm text-gray-600">Low-maintenance options</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📚</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Workshops</h4>
              <p className="text-sm text-gray-600">Team building events</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏠</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Home Service</h4>
              <p className="text-sm text-gray-600">Residential plant care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from Atlanta businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Atlanta Houseplants transformed our office! Our employees love the greenery, and clients always comment on how welcoming our space feels. Nick's expertise is unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩‍💼</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, TechStart Atlanta</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The plant doctor service saved our lobby plants! Quick response, professional service, and now our plants are thriving. Highly recommend for any business."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Michael Chen</div>
                  <div className="text-sm text-gray-600">Facilities Manager, Buckhead Law</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, reliable, and knowledgeable. Our monthly plant care service has been fantastic. The team is always on time and our plants look amazing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩‍⚕️</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Dr. Lisa Rodriguez</div>
                  <div className="text-sm text-gray-600">Practice Owner, Midtown Medical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Nick Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                🎓 UGA Certified Horticulturist
              </div>
              <h2 className="section-title">Meet Nick, Your Head Plant Doctor</h2>
              <p className="section-subtitle">
                15+ Years of Plant Expertise • 500+ Successful Installations
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nick has dedicated his entire career to understanding plants and their needs. As a proud UGA horticulture graduate, 
                  he spent his early years managing large-scale greenhouse operations before specializing in commercial interiorscapes.
                </p>
                <p>
                  As Atlanta Houseplants' Head Plant Doctor, Nick personally oversees every design proposal, 
                  trains our certified technicians, and handles the most challenging plant rescue cases across Metro Atlanta.
                </p>
                
                {/* Credentials */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Professional Credentials:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      University of Georgia - Horticulture Degree
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Certified Plant Care Specialist
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      15+ Years Commercial Experience
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Licensed & Insured Business
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="italic text-green-800 font-medium">
                    "Great plant care is 80% observation, 20% action—listen to what the foliage is telling you."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">- Nick, Head Plant Doctor</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/about" className="btn-outline">
                  Learn More About Our Team
                </a>
                <SchedulePlantDoctorCTA size="sm" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-green-600/20 rounded-lg"></div>
                <div className="w-80 h-96 bg-gray-200 rounded-lg relative z-10 flex items-center justify-center">
                  {/* TODO: Replace with Nick's actual photo */}
                  <div className="text-center">
                    <span className="text-6xl">👨‍🌾</span>
                    <p className="text-gray-600 mt-4">Nick's Photo Coming Soon</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  15+ Years
                </div>
                <div className="absolute -bottom-2 -left-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  UGA Grad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our plant services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">How often do you visit for plant care?</h3>
              <p className="text-gray-600">We typically visit weekly or bi-weekly depending on your plants' needs and your preference. Our certified technicians will assess your specific situation during the initial consultation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">What's included in the plant care service?</h3>
              <p className="text-gray-600">Our comprehensive care includes watering, fertilizing, pruning, pest monitoring, plant health assessments, and replacement of any plants that don't thrive (within our guarantee period).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Do you service all of Metro Atlanta?</h3>
              <p className="text-gray-600">Yes! We proudly serve Buckhead, Midtown, Downtown, Sandy Springs, Roswell, Alpharetta, and surrounding Metro Atlanta areas. Contact us to confirm service in your specific location.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">What if my plants die?</h3>
              <p className="text-gray-600">We offer a 30-day guarantee on all new installations and will replace any plants that don't thrive under our care. Our goal is 100% client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-800 to-green-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl">🌿</div>
          <div className="absolute bottom-10 right-10 text-4xl">🌱</div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Atlanta Workspace?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join 500+ satisfied Atlanta businesses who trust us with their plant care. 
            Get your free consultation today and see the difference professional plant care makes.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <BookAuditCTA />
            <a 
              href="tel:404-977-4539"
              className="btn-secondary bg-white text-green-800 hover:bg-gray-100 flex items-center justify-center"
            >
              📞 Call (404) 977-4539
            </a>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold">Call Us</div>
              <div className="text-sm opacity-80">(404) 977-4539</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <div className="font-semibold">Email Us</div>
              <div className="text-sm opacity-80">info@atlantahouseplants.com</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🕒</div>
              <div className="font-semibold">Same Day Service</div>
              <div className="text-sm opacity-80">Emergency plant care available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
