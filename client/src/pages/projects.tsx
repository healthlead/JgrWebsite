import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project-card";
import ProjectsMap from "@/components/projects-map";
import type { Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const completedProjects = projects?.filter(project => project.status === "Completed") || [];
  const upcomingProjects = projects?.filter(project => project.status === "In Progress" || project.status === "Planning") || [];
  const featuredProjects = projects?.filter(project => project.featured) || [];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-burgundy to-prussian-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover the landmarks we've helped create across Miami. From luxury residences to 
              mixed-use developments, our portfolio showcases excellence in structural construction.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our projects across Miami-Dade County and see the impact we've made on the skyline
            </p>
          </div>
          <ProjectsMap projects={projects || []} />
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"} 
                    alt={project.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Badge className="bg-ocean-blue hover:bg-ocean-blue">{project.type}</Badge>
                      {project.size && (
                        <Badge className="bg-sunset-orange hover:bg-sunset-orange">{project.size}</Badge>
                      )}
                      {project.completionDate && (
                        <Badge variant="outline" className="border-white text-white">
                          Completed {project.completionDate}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Completed Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Projects */}
      {upcomingProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Upcoming Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Project Could Be Next</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of satisfied clients who have chosen JGR Construction for their most important projects.
          </p>
          <a 
            href="/contact" 
            className="bg-sunset-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
