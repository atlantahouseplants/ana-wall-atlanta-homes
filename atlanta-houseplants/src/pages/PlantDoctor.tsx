import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchedulePlantDoctorCTA } from "@/components/CTAButton";

const PlantDoctor = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
            Plant Doctor Service
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your plants' ER visit—on-site diagnosis and treatment for struggling plants.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            $129 flat rate (up to 10 plants)
          </p>
          <SchedulePlantDoctorCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlantDoctor;
