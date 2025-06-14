
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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AE</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Agency Eagle Eye</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              How It Works
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </Link>
            <button 
              onClick={scrollToROI}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              ROI Calculator
            </button>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <button 
                onClick={scrollToROI}
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 text-left"
              >
                ROI Calculator
              </button>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
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
