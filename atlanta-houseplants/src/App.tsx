import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

// Pages
import Home from "./pages/Home";
import OfficeDesign from "./pages/OfficeDesign";
import OfficeCare from "./pages/OfficeCare";
import PlantDoctor from "./pages/PlantDoctor";
import CorporateGifting from "./pages/CorporateGifting";
import SmilesForSucculents from "./pages/SmilesForSucculents";
import Workshops from "./pages/Workshops";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            
            {/* Service Pages */}
            <Route path="/office-plant-design" element={<OfficeDesign />} />
            <Route path="/office-plant-care" element={<OfficeCare />} />
            <Route path="/plant-doctor" element={<PlantDoctor />} />
            <Route path="/corporate-gifting" element={<CorporateGifting />} />
            <Route path="/smiles-for-succulents" element={<SmilesForSucculents />} />
            <Route path="/workshops" element={<Workshops />} />
            
            {/* Info Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        {/* Global Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#2D5016',
              color: '#ffffff',
              border: 'none',
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
