import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
            Team-Building Workshops
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Hands-on greenery, happiness guaranteed. Interactive sessions where teams build terrariums, herb gardens, or succulent bowls.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            $50/person + $299 facilitation fee
          </p>
          <a href="/contact-us" className="btn-primary">
            Get Workshop Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
