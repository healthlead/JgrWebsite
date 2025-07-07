import { Link } from "wouter";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/jgr-logo.png" 
                alt="JGR Construction" 
                className="h-16 w-auto filter brightness-0 invert"
              />
              <div className="ml-4">
                <div className="text-xs text-gray-500">Building Excellence Since 2009</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premier structural contractors specializing in concrete and masonry construction 
              for Miami's most prestigious residential and commercial developments.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/jgr-construction-inc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-ocean-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/jgrconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-sunset-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Concrete Shells</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Post-Tension Concrete</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Pre-cast Concrete</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Masonry Construction</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Architectural Concrete</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Certifications & Associations */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Certifications & Associations</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Safety Certification */}
            <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
              <div className="text-2xl font-bold text-sunflower-yellow mb-1">OSHA</div>
              <div className="text-xs text-gray-400">Safety Certified</div>
            </div>
            
            {/* Florida State License */}
            <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
              <div className="text-2xl font-bold text-sunflower-yellow mb-1">CGC</div>
              <div className="text-xs text-gray-400">FL Licensed</div>
            </div>
            
            {/* Associated General Contractors */}
            <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
              <div className="text-2xl font-bold text-sunflower-yellow mb-1">AGC</div>
              <div className="text-xs text-gray-400">Member</div>
            </div>
            
            {/* Better Business Bureau */}
            <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
              <div className="text-2xl font-bold text-sunflower-yellow mb-1">BBB</div>
              <div className="text-xs text-gray-400">A+ Rating</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 JGR Construction Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
