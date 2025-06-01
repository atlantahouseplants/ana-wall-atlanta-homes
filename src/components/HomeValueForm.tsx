import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, User, Mail, Phone, MessageSquare } from "lucide-react";

const HomeValueForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required';
    } else if (formData.address.trim().length < 5) {
      newErrors.address = 'Please enter a complete address';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
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
          formType: 'home_value_request',
          address: formData.address.trim(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          notes: formData.notes.trim(),
          timestamp: new Date().toISOString(),
          source: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
      
      if (response.ok) {
        // Track form submission
        if (typeof window !== 'undefined' && window.trackFormSubmission) {
          window.trackFormSubmission('home_value_request');
        }
        
        toast({
          title: "Home value request submitted!",
          description: "Ana will prepare your personalized market analysis and contact you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          address: "",
          name: "",
          email: "",
          phone: "",
          notes: "",
        });
        setErrors({});
      } else {
        throw new Error('Failed to submit request');
      }
      
    } catch (error) {
      console.error("Error submitting home value request:", error);
      toast({
        title: "Unable to submit request",
        description: "Please try again or call Ana directly at (404) 934-8516.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-gold/30 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-gold/10 to-rose/10 rounded-t-lg">
        <CardTitle className="text-2xl text-navy font-playfair flex items-center gap-2">
          <Home className="h-6 w-6 text-gold" />
          Get Your Free Home Value Analysis
        </CardTitle>
        <CardDescription className="text-gray-600">
          Discover what your Atlanta property is worth in today's market. Ana will provide a comprehensive analysis based on recent sales and current market conditions.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1 block">
              Property Address *
            </label>
            <div className="relative">
              <Home className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="123 Peachtree St NE, Atlanta, GA 30309"
                className={`pl-10 ${errors.address ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">{errors.address}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name *
            </label>
            <div className="relative">
              <User className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(404) 555-0123"
                  className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-1 block">
              Additional Information
            </label>
            <div className="relative">
              <MessageSquare className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Tell Ana about recent renovations, unique features, or specific questions about your property value..."
                className="pl-10 resize-none"
                rows={3}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-3 text-lg" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-navy mr-2"></div>
                Preparing Your Analysis...
              </>
            ) : (
              'Get My Free Home Value Analysis'
            )}
          </Button>
          
          <div className="text-center text-sm text-gray-500 mt-3">
            <p>✓ No obligation • ✓ Confidential • ✓ Expert analysis by Ana Wall</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default HomeValueForm;
