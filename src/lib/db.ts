
import { supabase } from './supabase';

// Table names
export const TABLES = {
  MARKET_REPORT_SUBSCRIBERS: 'market_report_subscribers',
  HOME_VALUE_REQUESTS: 'home_value_requests',
  VIRTUAL_TOUR_REQUESTS: 'virtual_tour_requests',
  GUIDE_DOWNLOADS: 'guide_downloads',
};

// Market Report Subscribers
export interface MarketReportSubscriber {
  id?: string;
  email: string;
  created_at?: string;
}

export const addMarketReportSubscriber = async (email: string) => {
  try {
    // For development when Supabase isn't configured, return mock data
    if (!import.meta.env.VITE_SUPABASE_URL) {
      console.log('Development mode: Mock addMarketReportSubscriber', { email });
      return { data: [{ id: 'mock-id', email, created_at: new Date().toISOString() }], error: null };
    }
    
    const { data, error } = await supabase
      .from(TABLES.MARKET_REPORT_SUBSCRIBERS)
      .insert([{ email }])
      .select();
      
    if (error) throw error;
    
    return { data, error: null };
  } catch (error) {
    console.error('Error adding market report subscriber:', error);
    return { data: null, error };
  }
};

// Home Value Requests
export interface HomeValueRequest {
  id?: string;
  address: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  created_at?: string;
}

export const submitHomeValueRequest = async (request: Omit<HomeValueRequest, 'id' | 'created_at'>) => {
  try {
    // For development when Supabase isn't configured, return mock data
    if (!import.meta.env.VITE_SUPABASE_URL) {
      console.log('Development mode: Mock submitHomeValueRequest', request);
      return { 
        data: [{
          id: 'mock-id',
          ...request,
          created_at: new Date().toISOString()
        }], 
        error: null 
      };
    }
    
    const { data, error } = await supabase
      .from(TABLES.HOME_VALUE_REQUESTS)
      .insert([request])
      .select();
      
    if (error) throw error;
    
    return { data, error: null };
  } catch (error) {
    console.error('Error submitting home value request:', error);
    return { data: null, error };
  }
};

// Virtual Tour Requests
export interface VirtualTourRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  property_address: string;
  date: string;
  time: string;
  message?: string;
  created_at?: string;
}

export const scheduleVirtualTour = async (request: Omit<VirtualTourRequest, 'id' | 'created_at'>) => {
  try {
    // For development when Supabase isn't configured, return mock data
    if (!import.meta.env.VITE_SUPABASE_URL) {
      console.log('Development mode: Mock scheduleVirtualTour', request);
      return { 
        data: [{
          id: 'mock-id',
          ...request,
          created_at: new Date().toISOString()
        }], 
        error: null 
      };
    }
    
    const { data, error } = await supabase
      .from(TABLES.VIRTUAL_TOUR_REQUESTS)
      .insert([request])
      .select();
      
    if (error) throw error;
    
    return { data, error: null };
  } catch (error) {
    console.error('Error scheduling virtual tour:', error);
    return { data: null, error };
  }
};

// Guide Downloads
export interface GuideDownload {
  id?: string;
  name: string;
  email: string;
  guide_type: 'buying' | 'selling';
  created_at?: string;
}

export const submitGuideDownload = async (request: Omit<GuideDownload, 'id' | 'created_at'>) => {
  try {
    // For development when Supabase isn't configured, return mock data
    if (!import.meta.env.VITE_SUPABASE_URL) {
      console.log('Development mode: Mock submitGuideDownload', request);
      return { 
        data: [{
          id: 'mock-id',
          ...request,
          created_at: new Date().toISOString()
        }], 
        error: null 
      };
    }
    
    const { data, error } = await supabase
      .from(TABLES.GUIDE_DOWNLOADS)
      .insert([request])
      .select();
      
    if (error) throw error;
    
    return { data, error: null };
  } catch (error) {
    console.error('Error submitting guide download:', error);
    return { data: null, error };
  }
};
