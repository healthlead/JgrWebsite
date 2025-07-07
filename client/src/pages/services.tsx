import { useQuery } from "@tanstack/react-query";
import { Building, ShieldCheck, Layers, BrickWall, Eye, ClipboardList } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap = {
  building: Building,
  "shield-check": ShieldCheck,
  layers: Layers,
  brick: BrickWall,
  eye: Eye,
  "clipboard-list": ClipboardList,
};

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-ocean-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive structural construction services delivered with unmatched expertise and precision. 
              From concept to completion, we build the foundation of Miami's future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services?.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building;
              
              return (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className="bg-ocean-blue/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-ocean-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert team to discuss your construction needs and get a competitive quote.
          </p>
          <a 
            href="/contact" 
            className="bg-sunset-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
          >
            Get Your Quote Today
          </a>
        </div>
      </section>
    </div>
  );
}
