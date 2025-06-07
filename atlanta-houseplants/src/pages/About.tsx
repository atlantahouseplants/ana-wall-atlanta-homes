import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Certified horticulturists dedicated to bringing the benefits of living plants to your space
            </p>
          </div>

          {/* Nick's Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-sage/20 rounded-lg"></div>
                <div className="w-80 h-96 bg-gray-200 rounded-lg relative z-10 flex items-center justify-center">
                  {/* TODO: Replace with Nick's actual photo */}
                  <span className="text-6xl">👨‍🌾</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-forest mb-4">Nick [Last Name]</h2>
              <p className="text-xl text-sage mb-6">Head Plant Doctor & Lead Horticulturist</p>
              
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Nick has studied, breathed, and lived plants his entire life. A proud UGA horticulture graduate, 
                  he spent his early career managing greenhouse production, then pivoted to high-end interiorscapes—designing, 
                  installing, and nursing thousands of plants back to lush health in offices, restaurants, and luxury homes 
                  across Metro Atlanta.
                </p>
                <p>
                  As Atlanta Houseplants' Head Plant Doctor, Nick oversees every design proposal, personally trains our 
                  technicians, and handles the most challenging plant rescues. His mission: make sure every leaf under 
                  our care looks photo-ready year-round.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-forest mb-3">Credentials & Experience</h3>
                <ul className="space-y-2 text-sm">
                  <li>• B.S. Horticulture, University of Georgia</li>
                  <li>• State of Georgia Certified Plant Professional (CPP)</li>
                  <li>• 18+ years professional interiorscape & nursery experience</li>
                </ul>
              </div>

              <div className="bg-forest/10 p-6 rounded-lg">
                <p className="italic text-forest font-medium mb-2">
                  "Great plant care is 80% observation, 20% action—listen to what the foliage is telling you."
                </p>
                <p className="text-sm text-gray-600">- Nick, Head Plant Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
