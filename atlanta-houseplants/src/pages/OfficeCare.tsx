import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OfficeCare = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
            Office Plant Care Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Never worry about watering day again with our professional maintenance services.
          </p>
          <div className="text-lg text-gray-500">
            Page content coming soon...
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeCare;
