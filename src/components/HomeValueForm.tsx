
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Form validation schema
const homeValueFormSchema = z.object({
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  notes: z.string().optional(),
});

type HomeValueFormData = z.infer<typeof homeValueFormSchema>;

const HomeValueForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<HomeValueFormData>({
    resolver: zodResolver(homeValueFormSchema),
    defaultValues: {
      address: "",
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data: HomeValueFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to valuation service
      console.log("Submitting lead data:", data);
      
      // This would be replaced with an actual API call in production
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t('homeValue.success.title'),
        description: t('homeValue.success.message'),
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t('homeValue.error.title'),
        description: t('homeValue.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-gold/30 shadow-lg">
      <CardHeader className="bg-gold/10 rounded-t-lg">
        <CardTitle className="text-2xl text-navy">{t('homeValue.title')}</CardTitle>
        <CardDescription>{t('homeValue.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('homeValue.form.address')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('homeValue.form.addressPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('homeValue.form.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('homeValue.form.namePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('homeValue.form.email')}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t('homeValue.form.emailPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('homeValue.form.phone')}</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder={t('homeValue.form.phonePlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('homeValue.form.notes')}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('homeValue.form.notesPlaceholder')}
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold-light" 
              disabled={isSubmitting}
            >
              {isSubmitting ? t('homeValue.form.submitting') : t('homeValue.form.submit')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default HomeValueForm;
