
import { createClient } from '@supabase/supabase-js';

// Check for environment variables and provide fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if the required credentials are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase credentials are missing. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are defined in your environment.'
  );
}

// Create a mock client for development when credentials are missing
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
    // Mock Supabase methods to prevent runtime errors
    from: () => ({
      insert: () => ({ select: () => Promise.resolve({ data: null, error: new Error('Supabase credentials are missing') }) }),
      select: () => Promise.resolve({ data: null, error: new Error('Supabase credentials are missing') }),
    }),
    // Add other commonly used methods as needed
    auth: {
      signUp: () => Promise.resolve({ data: null, error: new Error('Supabase credentials are missing') }),
      signIn: () => Promise.resolve({ data: null, error: new Error('Supabase credentials are missing') }),
    },
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: new Error('Supabase credentials are missing') }),
      }),
    },
  };
