
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import MortgageCalculator from './MortgageCalculator';
import DownloadGuideForm from './DownloadGuideForm';
import ContactModal from './ContactModal';
import { Button } from '@/components/ui/button';

export default function ToolsSection() {
  const { t } = useLanguage();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
      <div className="container-custom">
        <h2 className="section-title text-center">{t('tools.title')}</h2>
        <p className="section-subtitle text-center mb-12">{t('tools.subtitle')}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MortgageCalculator />
          <DownloadGuideForm />
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-700">{t('tools.needHelp')}</p>
          <Button 
            className="btn-primary"
            onClick={() => setContactModalOpen(true)}
          >
            {t('tools.contactAgent')}
          </Button>
        </div>
      </div>
    </section>
  );
}
