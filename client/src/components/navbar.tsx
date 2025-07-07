import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Hard Hat Hub", href: "/blog" },
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
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/jgr-logo.png" 
                alt="JGR Construction" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-ocean-blue"
                    : "text-gray-700 hover:text-ocean-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+13052627306" 
              className="flex items-center text-primary-burgundy hover:text-rich-black font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (305) 262-7306
            </a>
            <Link href="/contact">
              <Button className="bg-ocean-blue text-white hover:bg-deep-blue">
                Get Quote
              </Button>
            </Link>
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
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 font-medium ${
                  isActive(item.href)
                    ? "text-ocean-blue"
                    : "text-gray-700 hover:text-ocean-blue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+13052627306" 
              className="flex items-center px-3 py-2 text-primary-burgundy hover:text-rich-black font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              (305) 262-7306
            </a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="mx-3 w-[calc(100%-1.5rem)] bg-ocean-blue text-white hover:bg-deep-blue">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
