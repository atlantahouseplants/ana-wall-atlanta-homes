/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOHIGHLEVEL_CALENDAR_URL: string
  readonly VITE_GOHIGHLEVEL_API_KEY: string
  readonly VITE_MAKE_CONTACT_WEBHOOK: string
  readonly VITE_MAKE_QUOTE_WEBHOOK: string
  readonly VITE_MAKE_BOOKING_WEBHOOK: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_SQUARE_APPLICATION_ID: string
  readonly VITE_SITE_URL: string
  readonly VITE_CONTACT_PHONE: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_FACEBOOK_PIXEL_ID: string
  [key: string]: any
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
