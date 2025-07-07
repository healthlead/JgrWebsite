import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-ocean-blue text-white">
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-ocean-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <MapPin className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                      <p className="text-gray-600">Medley, Florida<br />Serving Miami-Dade & South Florida</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-sunset-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="w-6 h-6 text-sunset-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">(305) 555-0100<br />24/7 Emergency Support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-construction-green/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="w-6 h-6 text-construction-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@jgrconstruction.com<br />quotes@jgrconstruction.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="bg-gradient-to-r from-ocean-blue to-deep-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                <p className="text-blue-100 mb-4">Proudly serving South Florida's construction industry</p>
                <ul className="text-blue-100 space-y-2">
                  <li>• Miami-Dade County</li>
                  <li>• Broward County</li>
                  <li>• Palm Beach County</li>
                  <li>• Monroe County</li>
                </ul>
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
                <span className="text-2xl font-bold text-construction-green">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Support</h3>
              <p className="text-gray-600">Round-the-clock support and emergency services to keep your project on track</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
