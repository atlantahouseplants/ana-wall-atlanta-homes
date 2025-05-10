
import { useLanguage } from '@/context/LanguageContext';

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
}

export default function PropertyCard({ 
  image, 
  title, 
  address, 
  price, 
  beds, 
  baths, 
  sqft 
}: PropertyCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-gold text-white py-1 px-3 rounded text-sm font-medium">
          {price}
        </div>
      </div>
      
      {/* Property Details */}
      <div className="p-4">
        <h3 className="font-playfair text-xl font-semibold text-navy truncate">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{address}</p>
        
        {/* Property Features */}
        <div className="flex justify-between text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{beds} {t('property.beds')}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 12V18H20V12M4 12V6H20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{baths} {t('property.baths')}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{sqft} {t('property.sqft')}</span>
          </div>
        </div>
        
        {/* View Details Button */}
        <button className="w-full mt-4 btn-primary">
          {t('property.viewDetails')}
        </button>
      </div>
    </div>
  );
}
