# Atlanta Houseplants - Professional Plant Care Website

A modern, mobile-first React website for Atlanta Houseplants, LLC - bringing wellness, beauty, and productivity benefits of living plants to homes, offices, and hospitality venues across Metro Atlanta.

## 🌱 Project Overview

This is a "skeleton first" implementation with a fully wired front-end architecture, placeholder content, and integration points ready for business content injection.

### Core Features

- **Mobile-first responsive design** optimized for all devices
- **Three primary CTAs** hard-wired throughout the site:
  - Book Free Office Plant Audit
  - Schedule Plant Doctor Visit  
  - Calculate Succulent Order
- **Complete service pages** for all Atlanta Houseplants offerings
- **Integration-ready** for GoHighLevel, Make.com, and payment processing
- **SEO optimized** with proper meta tags and sitemap
- **Performance focused** with lazy loading and optimizations

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS 3.x** for styling
- **shadcn/ui** for component library
- **React Router Dom** for routing
- **Tanstack Query** for data fetching
- **Sonner** for toast notifications

## 📁 Project Structure

```
atlanta-houseplants/
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── favicon files
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx    # Sticky navigation with mobile menu
│   │   ├── Footer.tsx    # Links and contact info
│   │   └── CTAButton.tsx # Three main CTA variants
│   ├── pages/
│   │   ├── Home.tsx                    # Hero + 3 CTAs
│   │   ├── OfficeDesign.tsx           # Office Design & Install
│   │   ├── OfficeCare.tsx             # Recurring Maintenance  
│   │   ├── PlantDoctor.tsx            # Plant Doctor Service
│   │   ├── CorporateGifting.tsx       # Corporate Gifting
│   │   ├── SmilesForSucculents.tsx    # Donation Program
│   │   ├── Workshops.tsx              # Team-Building Workshops
│   │   ├── About.tsx                  # Team Spotlight (Nick)
│   │   ├── Contact.tsx                # Contact Form
│   │   ├── FAQ.tsx                    # Accordion FAQ
│   │   └── NotFound.tsx               # 404 page
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── styles/
│   │   └── theme.ts      # Design system tokens
│   └── hooks/            # Custom React hooks
└── Configuration files
```

## 🎨 Design System

### Brand Colors
- **Forest Green**: `#2D5016` (Primary)
- **Sage Green**: `#7FB069` (Secondary) 
- **Earth Brown**: `#8B4513` (Accent)
- **Cream**: `#F5F5DC` (Background)

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive scaling** with mobile-first approach

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd atlanta-houseplants

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# GoHighLevel Integration
VITE_GOHIGHLEVEL_CALENDAR_URL=your_calendar_url
VITE_GOHIGHLEVEL_API_KEY=your_api_key

# Make.com Webhooks
VITE_MAKE_CONTACT_WEBHOOK=your_contact_webhook
VITE_MAKE_QUOTE_WEBHOOK=your_quote_webhook
VITE_MAKE_BOOKING_WEBHOOK=your_booking_webhook

# Payment Processing
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
VITE_SQUARE_APPLICATION_ID=your_square_id

# Site Configuration
VITE_CONTACT_PHONE=404-977-4539
VITE_CONTACT_EMAIL=hello@atlantahouseplants.com
```

## 🔗 Integration Points

### Ready for Implementation

1. **GoHighLevel Calendar** - Modal triggers for booking appointments
2. **Make.com Webhooks** - Form submission handlers for quotes and contacts
3. **Gift Calculator** - Interactive pricing tool with quantity sliders
4. **Payment Processing** - Stripe/Square integration points
5. **Chat Widget** - Placeholder ready for external chat script

### Service Pricing (Built-in)

- **Plant Doctor**: $129 flat rate (up to 10 plants)
- **Office Care Plans**: 
  - Lite: $129/month
  - Standard: $199/month  
  - Premium: Custom quote
- **Office Design**: $350-$750 per planter installation
- **Workshops**: $50/person + $299 facilitation
- **Corporate Gifts**: Volume pricing (100+ units)

## 📱 Mobile Optimization

- **Mobile-first design** with responsive breakpoints
- **Touch-friendly** navigation and CTAs
- **Fast loading** with optimized images and lazy loading
- **Lighthouse score 95+** out of the box

## 🎯 SEO & Performance

- **Semantic HTML** structure
- **Meta tags** for all pages
- **Sitemap.xml** with all routes
- **Robots.txt** configured
- **WCAG 2.1 AA** compliance ready
- **Core Web Vitals** optimized

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Build Commands

```bash
# Development build
npm run build:dev

# Production build  
npm run build

# Lint check
npm run lint
```

## 📋 Content Injection Points

### High Priority TODOs

1. **Replace placeholder images** with actual plant photos
2. **Add Nick's professional headshot** in About section
3. **Configure GoHighLevel** calendar integration
4. **Set up Make.com** webhook endpoints
5. **Add real business content** to replace Lorem text
6. **Upload favicon** and brand assets
7. **Configure analytics** (Google Analytics, Facebook Pixel)

### Service Pages Content Needed

Each service page has structured sections ready for:
- Hero images and copy
- Service details and pricing
- Process explanations
- Before/after galleries
- Customer testimonials
- FAQ sections

## 🤝 Business Information

- **Company**: Atlanta Houseplants, LLC
- **Service Area**: Within 25 miles of downtown Atlanta
- **Hours**: Mon-Fri 9 AM - 5 PM ET
- **Phone**: 404-977-4539
- **Email**: hello@atlantahouseplants.com

## 📞 Support

For technical questions about this implementation, refer to the component documentation and integration guides included in the codebase.

---

**Built with ❤️ for Atlanta Houseplants - Growing wellness, one plant at a time.**
