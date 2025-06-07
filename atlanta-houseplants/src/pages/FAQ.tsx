import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What plants work best in low-light offices?",
      answer: "Our go-to low-light champions are ZZ Plant, Aglaonema, and Snake Plant. These hardy varieties thrive in typical office lighting conditions and require minimal maintenance."
    },
    {
      question: "Do you guarantee your plants?",
      answer: "Yes! We replace any plant that fails within 30 days of installation at no cost. Our guarantee covers proper care and environmental factors within normal office conditions."
    },
    {
      question: "How long does a typical installation take?",
      answer: "Typical project timelines are 2-4 weeks from walkthrough to install. This includes design consultation, plant sourcing, and professional installation."
    },
    {
      question: "How often do you visit for plant care?",
      answer: "Most offices choose bi-weekly service, but high-traffic areas may need weekly visits. We customize the schedule based on your plants' needs and office environment."
    },
    {
      question: "What if you can't access our building?",
      answer: "A building key/fob or escort is required for our service visits. There's a $15 trip fee if we cannot access the site during scheduled visits."
    },
    {
      question: "Are your plants safe around pets and children?",
      answer: "We flag—and offer alternatives for—any species toxic to pets or children. Safety is our priority, and we'll help you choose pet-friendly options."
    },
    {
      question: "How should I prepare for a Plant Doctor visit?",
      answer: "Group problem plants in one spot and clear a workspace for our tools. We'll handle the rest during our 90-minute diagnostic session."
    },
    {
      question: "What's included in the Plant Doctor service?",
      answer: "Our $129 flat rate covers up to 10 plants and includes diagnosis, repotting, pruning, treatments, and a personalized care guide. Additional plants are $10 each."
    },
    {
      question: "What's the minimum order for corporate gifts?",
      answer: "Corporate gifting orders start at 100 units. We offer volume pricing and can customize with your branding, pot colors, or laser-engraved logos."
    },
    {
      question: "How far do you deliver?",
      answer: "We deliver within 25 miles of downtown Atlanta. Larger orders may extend the radius, and we're happy to discuss extended projects on request."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes—your Smiles for Succulents donation is made in your company's name to the recipient facility and is tax-deductible."
    },
    {
      question: "How much notice do you need for workshops?",
      answer: "Workshops start at 10 participants with no upper limit. Please allow 3 weeks notice for scheduling, and we can accommodate both on-site and virtual sessions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about our plant care services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-forest mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold text-forest mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our plant experts are here to help with any specific questions about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact-us" className="btn-primary">
                  Contact Us
                </a>
                <a href="tel:404-977-4539" className="btn-secondary">
                  Call (404) 977-4539
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
