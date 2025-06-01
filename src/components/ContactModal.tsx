import { useState } from 'react';
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
import { Mail, User, Phone, MessageSquare } from 'lucide-react';

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please check your information",
        description: "Make sure all required fields are filled out correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send to your Make.com webhook
      const response = await fetch('https://hook.us1.make.com/zqorrph0t7st5lqe4md97wro9oqtnegm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact_form',
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          timestamp: new Date().toISOString(),
          source: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
      
      if (response.ok) {
        // Track form submission
        if (typeof window !== 'undefined' && window.trackFormSubmission) {
          window.trackFormSubmission('contact_form');
        }
        
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. Ana will get back to you within 24 hours.",
        });
        
        // Reset form and close modal
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors({});
        onOpenChange(false);
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Unable to send message",
        description: "Please try again or call Ana directly at (404) 934-8516.",
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
          <DialogTitle className="text-xl md:text-2xl font-playfair text-navy">
            Get In Touch With Ana
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Ready to start your Atlanta real estate journey? Send Ana a message and she'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name *
            </label>
            <div className="relative">
              <User className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(404) 555-0123"
                className="pl-10"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell Ana about your real estate needs, preferred neighborhoods, budget range, or any questions you have..."
                rows={4}
                className={`pl-10 resize-none ${errors.message ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>
          
          <DialogFooter className="gap-2 sm:gap-0 pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="border-gray-300">
                Cancel
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              className="bg-navy hover:bg-navy-light text-white px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </DialogFooter>
        </form>
        
        <div className="mt-4 p-3 bg-blush/20 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Prefer to call?</strong> Reach Ana directly at{' '}
            <a href="tel:404-934-8516" className="text-navy font-semibold hover:underline">
              (404) 934-8516
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
