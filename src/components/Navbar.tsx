
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToROI = () => {
    const roiSection = document.querySelector('#roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AE</span>
            </div>
            <span className="font-bold text-xl text-white">Agency Eagle Eye</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Pricing
            </Link>
            <button 
              onClick={scrollToROI}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
            >
              ROI Calculator
            </button>
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Contact
            </Link>
            <Button className="cta-primary">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4 bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/services" 
                className="text-gray-300 hover:text-blue-400 font-medium px-4 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/services" 
                className="text-gray-300 hover:text-blue-400 font-medium px-4 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <button 
                onClick={scrollToROI}
                className="text-gray-300 hover:text-blue-400 font-medium px-4 py-2 text-left transition-colors"
              >
                ROI Calculator
              </button>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-blue-400 font-medium px-4 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4">
                <Button className="w-full cta-primary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
