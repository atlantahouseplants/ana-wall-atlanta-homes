
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function DownloadGuideForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [guideType, setGuideType] = useState('buying');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setName('');
      toast({
        title: t('guide.success.title'),
        description: t('guide.success.message'),
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy mb-2">
        {t('guide.title')}
      </h3>
      <p className="text-gray-600 mb-4">
        {t('guide.subtitle')}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="guide-type" className="text-sm text-gray-600">
            {t('guide.form.guideType')}
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="guideType" 
                value="buying" 
                checked={guideType === 'buying'} 
                onChange={() => setGuideType('buying')}
                className="mr-2"
              />
              {t('guide.form.buying')}
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="guideType" 
                value="selling" 
                checked={guideType === 'selling'} 
                onChange={() => setGuideType('selling')}
                className="mr-2"
              />
              {t('guide.form.selling')}
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="guide-name" className="text-sm text-gray-600">
            {t('guide.form.name')}
          </label>
          <Input
            id="guide-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('guide.form.namePlaceholder')}
            required
            className="mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="guide-email" className="text-sm text-gray-600">
            {t('guide.form.email')}
          </label>
          <Input
            id="guide-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('guide.form.emailPlaceholder')}
            required
            className="mt-1"
          />
        </div>
        
        <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? t('guide.form.submitting') : t('guide.form.submit')}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          {t('guide.privacy')}
        </p>
      </form>
    </div>
  );
}
