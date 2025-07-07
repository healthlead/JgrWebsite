import { useQuery } from "@tanstack/react-query";
import { Building, ShieldCheck, Layers, BrickWall, Eye, ClipboardList, CheckCircle, Users, Award } from "lucide-react";
import type { Service } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

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

  const processSteps = [
    {
      icon: ClipboardList,
      title: "Project Planning",
      description: "Detailed consultation and project assessment with value engineering recommendations"
    },
    {
      icon: Building,
      title: "Design & Engineering",
      description: "Structural design optimization using advanced CAD software and engineering principles"
    },
    {
      icon: Users,
      title: "Construction Execution",
      description: "Expert construction teams with full-time safety management and quality control"
    },
    {
      icon: CheckCircle,
      title: "Project Completion",
      description: "Final inspections, documentation, and ongoing support for your completed project"
    }
  ];

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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert structural construction services tailored to meet the unique demands of South Florida's dynamic construction environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services?.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building;
              
              return (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-6">
                    <div className="bg-ocean-blue/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ocean-blue/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-ocean-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">{service.description}</p>
                      {service.featured && (
                        <Badge className="bg-sunset-orange hover:bg-sunset-orange">
                          Core Service
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures project success from initial consultation to final completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-ocean-blue/20 transition-colors">
                    <step.icon className="w-10 h-10 text-ocean-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-sunset-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Advanced Capabilities</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-construction-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">State-of-the-Art Equipment</h3>
                    <p className="text-gray-600">Modern fleet including pumps, excavators, and specialized concrete equipment with telemetric monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-construction-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced Software Solutions</h3>
                    <p className="text-gray-600">AutoCAD fabrication, aSa software management, and Trimble Total Station surveying technology</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-construction-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Control Systems</h3>
                    <p className="text-gray-600">Comprehensive testing protocols and real-time project monitoring with drone photography</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-construction-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Partnerships</h3>
                    <p className="text-gray-600">Collaborations with crane operators and specialized equipment providers for large-scale projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Construction equipment and technology" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-sunset-orange mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">OSHA Certified</div>
                    <div className="text-sm text-gray-600">Excellence in Safety</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert team to discuss your construction needs and receive a comprehensive project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-sunset-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
            >
              Get Your Quote Today
            </a>
            <a 
              href="/projects" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-block"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
