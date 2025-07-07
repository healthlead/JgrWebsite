import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"} 
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
            {project.status}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">{project.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 font-body">{project.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-body">
          <span>{project.location}</span>
          {project.size && <span>{project.size}</span>}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-jgr-accent-blue border-jgr-accent-blue">
            {project.type}
          </Badge>
        </div>
      </div>
    </div>
  );
}
