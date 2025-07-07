import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
              <img 
                src="/jgr-logo.png" 
                alt="JGR Construction - Go to Homepage" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-200 hover:text-primary-burgundy ${
                  isActive(item.href)
                    ? "text-primary-burgundy"
                    : "text-gray-700"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-burgundy after:transition-all after:duration-200 hover:after:w-full ${
                  isActive(item.href) ? "after:w-full" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Actions */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+13052627306" 
                className="flex items-center text-gray-600 hover:text-primary-burgundy transition-colors p-2 rounded-lg hover:bg-gray-50"
                title="Call us: (305) 262-7306"
              >
                <Phone className="w-5 h-5" />
              </a>
              
              <Link href="/contact">
                <Button className="bg-primary-burgundy text-white hover:bg-rich-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 px-6 py-2">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a 
              href="tel:+13052627306" 
              className="flex items-center text-gray-600 hover:text-primary-burgundy transition-colors p-2"
              title="Call us: (305) 262-7306"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-burgundy transition-colors p-2 rounded-lg hover:bg-gray-50"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-ocean-blue"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modern Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-primary-burgundy bg-red-50 border-l-4 border-primary-burgundy"
                    : "text-gray-700 hover:text-primary-burgundy hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Secondary Links */}
            <div className="border-t border-gray-100 pt-3 mt-4">
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-burgundy hover:bg-gray-50 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-burgundy hover:bg-gray-50 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary-burgundy text-white hover:bg-rich-black transition-all duration-200 py-3 text-base font-semibold rounded-xl shadow-lg">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
