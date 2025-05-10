
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Download } from 'lucide-react';

export default function DownloadGuideForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guideType, setGuideType] = useState('buying');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setName('');
      setEmail('');
      
      // Show success message
      toast({
        title: t('guide.success.title'),
        description: t('guide.success.message'),
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-4">
        <Download className="text-gold mr-2" />
        <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy">
          {t('guide.title')}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        {t('guide.subtitle')}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">{t('guide.form.guideType')}</p>
          <RadioGroup
            value={guideType}
            onValueChange={setGuideType}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buying" id="buying" />
              <Label htmlFor="buying">{t('guide.form.buying')}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="selling" id="selling" />
              <Label htmlFor="selling">{t('guide.form.selling')}</Label>
            </div>
          </RadioGroup>
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
        
        <Button 
          type="submit" 
          className="btn-primary w-full flex items-center justify-center gap-2" 
          disabled={isSubmitting}
        >
          <Download className="w-4 h-4" /> 
          {isSubmitting ? t('guide.form.submitting') : t('guide.form.submit')}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          {t('guide.privacy')}
        </p>
      </form>
    </div>
  );
}
