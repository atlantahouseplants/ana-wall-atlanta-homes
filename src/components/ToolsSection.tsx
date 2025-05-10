
import { useLanguage } from '@/context/LanguageContext';
import MortgageCalculator from './MortgageCalculator';
import DownloadGuideForm from './DownloadGuideForm';

export default function ToolsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">{t('tools.title')}</h2>
        <p className="section-subtitle text-center mb-12">{t('tools.subtitle')}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MortgageCalculator />
          <DownloadGuideForm />
        </div>
      </div>
    </section>
  );
}
