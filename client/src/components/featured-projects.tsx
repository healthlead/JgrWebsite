import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

export default function FeaturedProjects() {
  const { data: featuredProjects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects/featured"],
  });

  const { data: allProjects } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const additionalProjects = allProjects?.filter(project => !project.featured).slice(0, 3);

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Signature Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proud to have contributed to Miami's most iconic developments and luxury residential projects
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Signature Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proud to have contributed to Miami's most iconic developments and luxury residential projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects?.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={project.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"} 
                alt={project.name}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-ocean-blue hover:bg-ocean-blue">{project.type}</Badge>
                  {project.size && (
                    <Badge className="bg-sunset-orange hover:bg-sunset-orange">{project.size}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Projects Grid */}
        {additionalProjects && additionalProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.imageUrl || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"} 
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-lg font-semibold mb-1">{project.name}</h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="bg-sunset-orange text-white hover:bg-orange-600 px-8 py-4 font-semibold">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
