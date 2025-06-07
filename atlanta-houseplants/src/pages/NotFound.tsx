import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookAuditCTA } from "@/components/CTAButton";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl mb-8">🌱</div>
            <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like this page got lost in the garden! Let's get you back to growing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="btn-primary">
                Back to Home
              </a>
              <BookAuditCTA />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
