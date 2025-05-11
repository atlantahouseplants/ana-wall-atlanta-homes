
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { ChartBarIcon } from 'lucide-react';

export default function MarketReportsSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      toast({
        title: t('marketReports.success.title'),
        description: t('marketReports.success.message'),
      });
    }, 1000);
  };

  // Sample market data
  const marketStats = [
    { label: t('marketReports.stats.avgPrice'), value: '$1.2M', change: '+5.2%', isPositive: true },
    { label: t('marketReports.stats.daysOnMarket'), value: '14', change: '-12.5%', isPositive: true },
    { label: t('marketReports.stats.inventory'), value: '210', change: '+8.1%', isPositive: false },
  ];

  return (
    <div className="py-16 md:py-24 bg-navy text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-white flex items-center">
              <ChartBarIcon className="mr-3 text-gold" />
              {t('marketReports.title')}
            </h2>
            <p className="text-gold mb-6">{t('marketReports.subtitle')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {marketStats.map((stat, index) => (
                <div key={index} className="bg-navy-light p-6 rounded-lg">
                  <p className="text-lg font-medium">{stat.label}</p>
                  <p className="text-3xl font-playfair font-bold text-white mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="mb-6">{t('marketReports.description')}</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2">
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={t('marketReports.emailPlaceholder')} 
                required 
                className="flex-1 bg-navy-light border-navy-light text-white" 
              />
              <Button 
                type="submit" 
                className="bg-gold hover:bg-gold/90 text-navy font-semibold" 
                disabled={isSubscribing}
              >
                {isSubscribing ? t('marketReports.subscribing') : t('marketReports.subscribe')}
              </Button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-navy-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{t('marketReports.report1.title')}</h3>
              <p className="text-sm text-gray-300 mb-4">{t('marketReports.report1.description')}</p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/20">
                {t('marketReports.view')}
              </Button>
            </div>
            <div className="bg-navy-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{t('marketReports.report2.title')}</h3>
              <p className="text-sm text-gray-300 mb-4">{t('marketReports.report2.description')}</p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/20">
                {t('marketReports.view')}
              </Button>
            </div>
            <div className="bg-navy-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{t('marketReports.report3.title')}</h3>
              <p className="text-sm text-gray-300 mb-4">{t('marketReports.report3.description')}</p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/20">
                {t('marketReports.view')}
              </Button>
            </div>
            <div className="bg-navy-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{t('marketReports.report4.title')}</h3>
              <p className="text-sm text-gray-300 mb-4">{t('marketReports.report4.description')}</p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/20">
                {t('marketReports.view')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
