
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqSection() {
  const { t } = useLanguage();

  // FAQ items
  const faqItems = [
    {
      question: 'faq.questions.q1',
      answer: 'faq.answers.a1'
    },
    {
      question: 'faq.questions.q2',
      answer: 'faq.answers.a2'
    },
    {
      question: 'faq.questions.q3',
      answer: 'faq.answers.a3'
    },
    {
      question: 'faq.questions.q4',
      answer: 'faq.answers.a4'
    },
    {
      question: 'faq.questions.q5',
      answer: 'faq.answers.a5'
    },
    {
      question: 'faq.questions.q6',
      answer: 'faq.answers.a6'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-custom">
        <h2 className="section-title text-center">{t('faq.title')}</h2>
        <p className="section-subtitle text-center mb-12">{t('faq.subtitle')}</p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-navy font-medium">
                  {t(item.question)}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {t(item.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
