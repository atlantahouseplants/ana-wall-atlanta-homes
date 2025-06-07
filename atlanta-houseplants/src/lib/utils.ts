import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return phoneRegex.test(phone)
}

// Generate slug from string
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Get environment variable with fallback
export function getEnvVar(key: string, fallback: string = ''): string {
  return import.meta.env[key] || fallback
}

// Atlanta Houseplants specific utilities

// Calculate gift order pricing
export function calculateGiftPricing(quantity: number): {
  unitPrice: number
  totalPrice: number
  savings: number
} {
  let unitPrice: number
  
  if (quantity >= 500) {
    unitPrice = 3.99 // $1,999 / 500
  } else if (quantity >= 300) {
    unitPrice = 4.33 // $1,299 / 300
  } else if (quantity >= 100) {
    unitPrice = 4.99 // $499 / 100
  } else {
    unitPrice = 5.99 // Regular price for smaller quantities
  }
  
  const totalPrice = quantity * unitPrice
  const regularPrice = quantity * 5.99
  const savings = regularPrice - totalPrice
  
  return {
    unitPrice,
    totalPrice,
    savings: Math.max(0, savings)
  }
}

// Get service pricing info
export function getServicePricing(serviceType: string): {
  startingPrice: number
  priceRange?: string
  unit?: string
} {
  const pricing: Record<string, any> = {
    'plant-doctor': {
      startingPrice: 129,
      unit: 'visit (up to 10 plants)'
    },
    'office-care-lite': {
      startingPrice: 129,
      unit: 'month'
    },
    'office-care-standard': {
      startingPrice: 199,
      unit: 'month'
    },
    'office-design': {
      startingPrice: 350,
      priceRange: '$350-$750',
      unit: 'planter installation'
    },
    'workshops': {
      startingPrice: 50,
      unit: 'person + $299 facilitation'
    },
    'vacation-watering': {
      startingPrice: 49,
      priceRange: '$49-$99',
      unit: 'visit'
    }
  }
  
  return pricing[serviceType] || { startingPrice: 0 }
}

// Format business hours
export function formatBusinessHours(): string {
  return 'Mon-Fri 9 AM - 5 PM ET'
}

// Check if business is currently open
export function isBusinessOpen(): boolean {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
  const hour = now.getHours()
  
  // Monday (1) through Friday (5), 9 AM to 5 PM
  return day >= 1 && day <= 5 && hour >= 9 && hour < 17
}

// Generate contact methods
export function getContactMethods() {
  return {
    phone: getEnvVar('VITE_CONTACT_PHONE', '404-977-4539'),
    email: getEnvVar('VITE_CONTACT_EMAIL', 'hello@atlantahouseplants.com'),
    businessHours: formatBusinessHours(),
    isOpen: isBusinessOpen()
  }
}
