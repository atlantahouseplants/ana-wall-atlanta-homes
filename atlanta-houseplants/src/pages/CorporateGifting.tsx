import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalculateOrderCTA } from "@/components/CTAButton";

const CorporateGifting = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
            Corporate Gifting
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Eco-friendly gifts that live on every desk. Bulk orders with volume pricing.
          </p>
          <CalculateOrderCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateGifting;
