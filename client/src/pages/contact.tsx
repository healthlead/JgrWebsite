import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Building, Clock, Shield } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-burgundy to-prussian-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Start Your Project</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your construction needs? Our team is here to provide expert consultation 
              and competitive pricing for your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Headquarters & Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Contact Information & Headquarters */}
            <div className="space-y-8">
              {/* Headquarters */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Headquarters</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-ocean-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Building className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Main Office</h4>
                      <p className="text-gray-600">
                        JGR Construction Inc.<br />
                        8200 NW 52nd Terrace<br />
                        Medley, FL 33166<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-sunset-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="w-6 h-6 text-sunset-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone & Fax</h4>
                      <p className="text-gray-600">
                        Main: (305) 555-0100<br />
                        Emergency: (305) 555-0911<br />
                        Fax: (305) 555-0101
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-construction-green/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="w-6 h-6 text-construction-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">
                        General: info@jgrconstruction.com<br />
                        Quotes: quotes@jgrconstruction.com<br />
                        Careers: careers@jgrconstruction.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-deep-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Clock className="w-6 h-6 text-deep-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 2:00 PM<br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interactive Headquarters Map */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Our Office</h3>
                <div className="relative bg-blue-50 rounded-xl overflow-hidden border-2 border-blue-100 h-64">
                  <svg width="100%" height="100%" viewBox="0 0 400 250" className="w-full h-full">
                    {/* Background */}
                    <rect width="100%" height="100%" fill="#eff6ff" />
                    
                    {/* Roads */}
                    <line x1="0" y1="125" x2="400" y2="125" stroke="#94a3b8" strokeWidth="4" />
                    <line x1="200" y1="0" x2="200" y2="250" stroke="#94a3b8" strokeWidth="4" />
                    
                    {/* Miami area outline */}
                    <circle cx="300" cy="180" r="60" fill="#bfdbfe" opacity="0.5" />
                    
                    {/* JGR Headquarters marker */}
                    <circle cx="160" cy="100" r="12" fill="#dc2626" stroke="white" strokeWidth="3" />
                    <foreignObject x="152" y="92" width="16" height="16">
                      <div className="w-4 h-4 text-white flex items-center justify-center">
                        <Building className="w-3 h-3" />
                      </div>
                    </foreignObject>
                    
                    {/* Labels */}
                    <text x="160" y="130" textAnchor="middle" className="text-xs font-bold fill-red-600">
                      JGR Headquarters
                    </text>
                    <text x="160" y="145" textAnchor="middle" className="text-xs fill-gray-600">
                      Medley, FL
                    </text>
                    
                    <text x="300" y="210" textAnchor="middle" className="text-xs fill-blue-600">
                      Miami Metropolitan Area
                    </text>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Conveniently located in Medley with easy access to all major highways serving Miami-Dade County.
                </p>
              </div>
              
              {/* Service Areas */}
              <div className="bg-gradient-to-r from-ocean-blue to-deep-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Service Coverage</h3>
                <p className="text-blue-100 mb-4">Serving South Florida's construction industry</p>
                <div className="grid grid-cols-2 gap-4 text-blue-100">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Markets</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Miami-Dade County</li>
                      <li>• Broward County</li>
                      <li>• Monroe County</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Extended Service</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Palm Beach County</li>
                      <li>• Collier County</li>
                      <li>• Custom Projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose JGR Construction?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that expertise, reliability, and dedication make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-ocean-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ocean-blue">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Years of Excellence</h3>
              <p className="text-gray-600">Over a decade of proven expertise in structural construction across South Florida</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sunset-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sunset-orange">200+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skilled Professionals</h3>
              <p className="text-gray-600">Highly trained workforce with full-time safety management and OSHA certification</p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-construction-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">Comprehensive safety protocols with zero tolerance policy and continuous training</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
