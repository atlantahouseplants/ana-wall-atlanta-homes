
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock } from 'lucide-react';
import { scheduleVirtualTour } from '@/lib/db';
import { sendToWebhook, handleWebhookError } from '@/lib/webhook';
import { z } from "zod";

// Validation schema
const tourSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  property_address: z.string().min(5, "Property address is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  message: z.string().optional(),
});

export default function VirtualTourScheduler() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const validateForm = () => {
    try {
      tourSchema.parse({
        name,
        email,
        phone,
        property_address: propertyAddress,
        date,
        time,
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
        title: t('virtualTour.error.validation'),
        description: t('virtualTour.error.checkFields'),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for Supabase
      const tourData = {
        name,
        email,
        phone,
        property_address: propertyAddress,
        date,
        time,
        message: message || "",
      };
      
      // Submit to Supabase
      const result = await scheduleVirtualTour(tourData);
      
      // Also send to webhook
      const webhookSent = await sendToWebhook({
        formType: "virtual_tour_request",
        formData: tourData,
        timestamp: new Date().toISOString(),
        source: window.location.href
      });
      
      if (result.error) {
        console.error("Error scheduling tour:", result.error);
        toast({
          title: t('virtualTour.error.title'),
          description: t('virtualTour.error.message'),
          variant: "destructive",
        });
      } else {
        // Show success message
        toast({
          title: t('virtualTour.success.title'),
          description: t('virtualTour.success.message'),
        });
        
        // Only show webhook error if Supabase was successful but webhook failed
        if (!webhookSent) {
          handleWebhookError();
        }
        
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setPropertyAddress('');
        setMessage('');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t('virtualTour.error.title'),
        description: t('virtualTour.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-4">
        <Calendar className="text-gold mr-2" />
        <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy">
          {t('virtualTour.title')}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        {t('virtualTour.subtitle')}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tour-name" className="text-sm text-gray-600">
            {t('virtualTour.form.name')}
          </label>
          <Input
            id="tour-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('virtualTour.form.namePlaceholder')}
            required
            className="mt-1"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tour-email" className="text-sm text-gray-600">
              {t('virtualTour.form.email')}
            </label>
            <Input
              id="tour-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('virtualTour.form.emailPlaceholder')}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="tour-phone" className="text-sm text-gray-600">
              {t('virtualTour.form.phone')}
            </label>
            <Input
              id="tour-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('virtualTour.form.phonePlaceholder')}
              required
              className="mt-1"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="tour-property" className="text-sm text-gray-600">
            {t('virtualTour.form.property')}
          </label>
          <Input
            id="tour-property"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            placeholder={t('virtualTour.form.propertyPlaceholder')}
            required
            className="mt-1"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tour-date" className="text-sm text-gray-600">
              {t('virtualTour.form.date')}
            </label>
            <Input
              id="tour-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="tour-time" className="text-sm text-gray-600">
              {t('virtualTour.form.time')}
            </label>
            <select
              id="tour-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm mt-1"
            >
              <option value="">{t('virtualTour.form.selectTime')}</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="tour-message" className="text-sm text-gray-600">
            {t('virtualTour.form.message')}
          </label>
          <Textarea
            id="tour-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('virtualTour.form.messagePlaceholder')}
            className="mt-1"
            rows={3}
          />
        </div>
        
        <Button 
          type="submit" 
          className="btn-primary w-full flex items-center justify-center gap-2" 
          disabled={isSubmitting}
        >
          <Clock className="w-4 h-4" /> 
          {isSubmitting ? t('virtualTour.form.submitting') : t('virtualTour.form.submit')}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          {t('virtualTour.privacy')}
        </p>
      </form>
    </div>
  );
}
