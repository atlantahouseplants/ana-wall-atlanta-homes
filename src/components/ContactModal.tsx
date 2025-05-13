
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { sendToWebhook, handleWebhookError } from '@/lib/webhook';
import { z } from 'zod';
import { Mail, User } from 'lucide-react';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide a message (min 10 characters)"),
});

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      contactSchema.parse({
        name,
        email,
        phone,
        message,
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
        title: t('contact.error.validation'),
        description: t('contact.error.checkFields'),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare contact data
      const contactData = {
        name,
        email,
        phone,
        message,
      };
      
      // Send to webhook
      const webhookSent = await sendToWebhook({
        formType: "contact_form",
        formData: contactData,
        timestamp: new Date().toISOString(),
        source: window.location.href
      });
      
      if (!webhookSent) {
        handleWebhookError();
        return;
      }
      
      // Show success message
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.message'),
      });
      
      // Reset form and close modal
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      onOpenChange(false);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-playfair">
            {t('contact.title')}
          </DialogTitle>
          <DialogDescription>
            {t('contact.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label htmlFor="name" className="text-sm text-gray-600">
              {t('contact.form.name')} *
            </label>
            <div className="flex items-center mt-1">
              <User className="h-4 w-4 text-gray-400 absolute ml-3" />
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('contact.form.namePlaceholder')}
                className="pl-10"
                aria-invalid={!!validationErrors.name}
              />
            </div>
            {validationErrors.name && (
              <p className="text-sm text-red-500 mt-1">{validationErrors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="text-sm text-gray-600">
              {t('contact.form.email')} *
            </label>
            <div className="flex items-center mt-1">
              <Mail className="h-4 w-4 text-gray-400 absolute ml-3" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('contact.form.emailPlaceholder')}
                className="pl-10"
                aria-invalid={!!validationErrors.email}
              />
            </div>
            {validationErrors.email && (
              <p className="text-sm text-red-500 mt-1">{validationErrors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="text-sm text-gray-600">
              {t('contact.form.phone')}
            </label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('contact.form.phonePlaceholder')}
              aria-invalid={!!validationErrors.phone}
            />
            {validationErrors.phone && (
              <p className="text-sm text-red-500 mt-1">{validationErrors.phone}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="text-sm text-gray-600">
              {t('contact.form.message')} *
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('contact.form.messagePlaceholder')}
              rows={4}
              aria-invalid={!!validationErrors.message}
            />
            {validationErrors.message && (
              <p className="text-sm text-red-500 mt-1">{validationErrors.message}</p>
            )}
          </div>
          
          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                {t('contact.form.cancel')}
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
