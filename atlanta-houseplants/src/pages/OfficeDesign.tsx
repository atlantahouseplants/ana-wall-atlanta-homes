import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookAuditCTA } from "@/components/CTAButton";

const OfficeDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-forest to-sage">
        <div className="hero-overlay"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transform Your Office Into a Living, Breathing Workspace
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up">
              End-to-end interiorscape design—walk-through, plant/planter sourcing, delivery, and professional staging
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <BookAuditCTA />
              <a href="/contact-us" className="btn-secondary bg-white text-forest hover:bg-gray-100">
                See Project Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">What's Included</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-2">Free On-Site Assessment</h3>
                    <p className="text-gray-600">Professional walkthrough to assess lighting, space, and design goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-2">Custom Plant Selection</h3>
                    <p className="text-gray-600">Curated plant choices based on your office's specific lighting and care requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-2">Professional Installation</h3>
                    <p className="text-gray-600">White-glove delivery, placement, and styling by our certified team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-2">30-Day Health Guarantee</h3>
                    <p className="text-gray-600">We replace any plant that fails within 30 days at no cost</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-forest mb-6">Pricing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Small Desk Plants</span>
                  <span className="font-semibold">$75-$150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Medium Floor Plants</span>
                  <span className="font-semibold">$200-$400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Large Statement Planters</span>
                  <span className="font-semibold">$350-$750</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-gray-600">
                    Pricing includes plant, premium planter, soil, and professional installation
                  </p>
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
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your free on-site assessment and discover how living plants can enhance your workspace
          </p>
          <BookAuditCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeDesign;
