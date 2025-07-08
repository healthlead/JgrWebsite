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

export default function ServicesGrid() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive structural construction services for commercial and residential projects across South Florida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 animate-pulse">
                <div className="bg-gray-200 w-16 h-16 rounded-lg mb-6" />
                <div className="bg-gray-200 h-6 rounded mb-4" />
                <div className="bg-gray-200 h-20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive structural construction services for commercial and residential projects across South Florida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building;
            
            return (
              <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                <div className="bg-ocean-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-ocean-blue/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-ocean-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
