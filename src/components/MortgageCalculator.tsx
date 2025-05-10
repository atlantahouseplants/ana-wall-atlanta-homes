
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Label } from './ui/label';

export default function MortgageCalculator() {
  const { t } = useLanguage();
  const [homeValue, setHomeValue] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Calculate mortgage payment
  useEffect(() => {
    const principal = homeValue - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyInterest === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment = principal * 
        (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [homeValue, downPayment, loanTerm, interestRate]);

  // Handle down payment changes
  const handleHomeValueChange = (value: number) => {
    setHomeValue(value);
    setDownPayment(value * (downPaymentPercent / 100));
  };

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homeValue) * 100);
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment(homeValue * (value / 100));
  };

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy mb-4">
        {t('mortgage.title')}
      </h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="home-value">{t('mortgage.homeValue')}</Label>
            <span className="text-navy font-medium">{formatCurrency(homeValue)}</span>
          </div>
          <Input
            id="home-value"
            type="number"
            min="50000"
            max="10000000"
            value={homeValue}
            onChange={(e) => handleHomeValueChange(Number(e.target.value))}
          />
          <Slider
            value={[homeValue]}
            min={50000}
            max={2000000}
            step={10000}
            onValueChange={(values) => handleHomeValueChange(values[0])}
            className="my-2"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="down-payment">{t('mortgage.downPayment')}</Label>
            <span className="text-navy font-medium">{formatCurrency(downPayment)} ({downPaymentPercent.toFixed(0)}%)</span>
          </div>
          <Input
            id="down-payment"
            type="number"
            min="0"
            max={homeValue}
            value={downPayment}
            onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
          />
          <Slider
            value={[downPaymentPercent]}
            min={0}
            max={50}
            step={1}
            onValueChange={(values) => handleDownPaymentPercentChange(values[0])}
            className="my-2"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="loan-term">{t('mortgage.loanTerm')}</Label>
              <span className="text-navy font-medium">{loanTerm} {t('mortgage.years')}</span>
            </div>
            <Slider
              value={[loanTerm]}
              min={5}
              max={30}
              step={5}
              onValueChange={(values) => setLoanTerm(values[0])}
              className="my-2"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="interest-rate">{t('mortgage.interestRate')}</Label>
              <span className="text-navy font-medium">{interestRate.toFixed(2)}%</span>
            </div>
            <Slider
              value={[interestRate]}
              min={1}
              max={10}
              step={0.125}
              onValueChange={(values) => setInterestRate(values[0])}
              className="my-2"
            />
          </div>
        </div>
        
        <div className="mt-8 bg-cream p-6 rounded-lg text-center">
          <h4 className="text-navy font-medium">{t('mortgage.monthlyPayment')}</h4>
          <p className="text-3xl font-playfair font-bold text-navy mt-2">
            {formatCurrency(monthlyPayment)}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('mortgage.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
}
