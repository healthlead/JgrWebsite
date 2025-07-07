import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Building, Clock, Shield, Users, Award } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const companyLocation = {
  lat: 25.8479,
  lng: -80.3267,
  address: "8200 NW 52nd Terrace, Medley, FL 33166"
};

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

      {/* Contact Form & Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information & Map */}
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
                      <h4 className="font-semibold text-gray-900 mb-1">Phone & Contact</h4>
                      <p className="text-gray-600">
                        <a href="tel:+13052627306" className="text-primary-burgundy hover:text-rich-black font-medium">
                          Main: (305) 262-7306
                        </a><br />
                        <a href="tel:+13052627306" className="text-primary-burgundy hover:text-rich-black">
                          Emergency: (305) 262-7306
                        </a><br />
                        <a href="mailto:info@jgrconstruction.com" className="text-primary-burgundy hover:text-rich-black">
                          Email: info@jgrconstruction.com
                        </a>
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
                <div className="h-64 rounded-xl overflow-hidden">
                  <MapContainer
                    center={[companyLocation.lat, companyLocation.lng]}
                    zoom={15}
                    className="h-full w-full"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[companyLocation.lat, companyLocation.lng]}>
                      <Popup>
                        <div className="text-center">
                          <strong>JGR Construction Inc.</strong><br />
                          {companyLocation.address}<br />
                          <a href="tel:+13052627306" className="text-primary-burgundy">
                            (305) 262-7306
                          </a>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${companyLocation.lat},${companyLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-primary-burgundy hover:text-rich-black font-medium text-sm"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                  <span className="text-gray-400 hidden sm:block">|</span>
                  <p className="text-sm text-gray-600">
                    Conveniently located in Medley with easy highway access
                  </p>
                </div>
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

              {/* Headquarters Map */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Our Office</h3>
                <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <MapContainer 
                    center={[25.8447, -80.3205]}
                    zoom={15}
                    className="w-full h-full"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[25.8447, -80.3205]}>
                      <Popup>
                        JGR Construction Inc.<br />
                        8200 NW 52nd Terrace<br />
                        Medley, FL 33166
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Conveniently located in Medley with easy highway access
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
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
