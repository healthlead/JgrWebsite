import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import FeaturedProjects from "@/components/featured-projects";
import { Link } from "wouter";
import { Building2, Users, Shield, Award, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const achievements = [
    {
      icon: Building2,
      number: "50+",
      label: "Projects Completed",
      description: "Across Miami-Dade County"
    },
    {
      icon: Users,
      number: "200+",
      label: "Skilled Workers",
      description: "OSHA certified professionals"
    },
    {
      icon: Shield,
      number: "15+",
      label: "Years Experience",
      description: "Building excellence since 2009"
    },
    {
      icon: Award,
      number: "100%",
      label: "Safety Record",
      description: "Zero tolerance policy"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-ocean-blue hover:bg-ocean-blue mb-6">
                Premier Structural Contractors
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Building Miami's Future, One Project at a Time
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2009, JGR Construction has been Miami's trusted partner for complex structural 
                concrete and masonry projects. From luxury residential towers to mixed-use developments, 
                we deliver excellence with uncompromising safety standards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-ocean-blue text-white hover:bg-deep-blue">
                    Learn Our Story
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="JGR Construction team working on Miami construction project" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ocean-blue">2009</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-sunset-orange rounded-xl p-6 shadow-lg text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-xs">Active Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and continuous growth in South Florida's construction industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className="bg-ocean-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-ocean-blue/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-ocean-blue" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-500">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ServicesGrid />
      <FeaturedProjects />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-ocean-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the many satisfied clients who trust JGR Construction with their most important projects. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-sunset-orange text-white hover:bg-orange-600 px-8 py-4 text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue px-8 py-4 text-lg font-semibold"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
