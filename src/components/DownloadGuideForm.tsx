
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Download } from 'lucide-react';
import { submitGuideDownload } from '@/lib/db';
import { sendToWebhook, handleWebhookError } from '@/lib/webhook';
import { z } from 'zod';

// Validation schema
const guideSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  guide_type: z.enum(["buying", "selling"], {
    required_error: "Guide type is required",
  }),
});

export default function DownloadGuideForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guideType, setGuideType] = useState('buying');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    try {
      guideSchema.parse({
        name,
        email,
        guide_type: guideType as "buying" | "selling",
      });
      setValidationErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0].toString()] = err.message;
          }
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: t('guide.error.validation'),
        description: t('guide.error.checkFields'),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for Supabase
      const guideData = {
        name,
        email,
        guide_type: guideType as "buying" | "selling",
      };
      
      // Submit to Supabase
      const result = await submitGuideDownload(guideData);
      
      // Also send to webhook
      const webhookSent = await sendToWebhook({
        formType: "guide_download",
        formData: guideData,
        timestamp: new Date().toISOString(),
        source: window.location.href
      });
      
      if (result.error) {
        console.error("Error submitting guide download:", result.error);
        toast({
          title: t('guide.error.title'),
          description: t('guide.error.message'),
          variant: "destructive",
        });
      } else {
        // Show success message
        toast({
          title: t('guide.success.title'),
          description: t('guide.success.message'),
        });
        
        // Only show webhook error if Supabase was successful but webhook failed
        if (!webhookSent) {
          handleWebhookError();
        }
        
        // Reset form
        setName('');
        setEmail('');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t('guide.error.title'),
        description: t('guide.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {validationErrors.guide_type && (
            <p className="text-sm text-red-500 mt-1">{validationErrors.guide_type}</p>
          )}
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
            aria-invalid={!!validationErrors.name}
          />
          {validationErrors.name && (
            <p className="text-sm text-red-500 mt-1">{validationErrors.name}</p>
          )}
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
            aria-invalid={!!validationErrors.email}
          />
          {validationErrors.email && (
            <p className="text-sm text-red-500 mt-1">{validationErrors.email}</p>
          )}
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
