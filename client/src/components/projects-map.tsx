import { useState } from "react";
import type { Project } from "@shared/schema";
import { MapPin, Building, Home, Hotel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectsMapProps {
  projects: Project[];
}

const typeIcons = {
  "Mixed-Use": Building,
  "Residential": Home,
  "Hospitality": Hotel,
  "Commercial": Building,
};

export default function ProjectsMap({ projects }: ProjectsMapProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Filter projects that have location data
  const mappableProjects = projects.filter(p => p.latitude && p.longitude);
  
  // Miami center coordinates
  const centerLat = 25.7617;
  const centerLng = -80.1918;
  
  // Calculate bounds for all projects
  const bounds = mappableProjects.reduce((acc, project) => {
    const lat = parseFloat(project.latitude!);
    const lng = parseFloat(project.longitude!);
    return {
      minLat: Math.min(acc.minLat, lat),
      maxLat: Math.max(acc.maxLat, lat),
      minLng: Math.min(acc.minLng, lng),
      maxLng: Math.max(acc.maxLng, lng),
    };
  }, {
    minLat: centerLat,
    maxLat: centerLat,
    minLng: centerLng,
    maxLng: centerLng,
  });

  const mapWidth = 800;
  const mapHeight = 500;
  
  // Convert lat/lng to SVG coordinates
  const latToY = (lat: number) => {
    const range = bounds.maxLat - bounds.minLat || 0.1;
    const padding = 50;
    return padding + ((bounds.maxLat - lat) / range) * (mapHeight - 2 * padding);
  };
  
  const lngToX = (lng: number) => {
    const range = bounds.maxLng - bounds.minLng || 0.1;
    const padding = 50;
    return padding + ((lng - bounds.minLng) / range) * (mapWidth - 2 * padding);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Locations</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="relative bg-blue-50 rounded-xl overflow-hidden border-2 border-blue-100">
            <svg width={mapWidth} height={mapHeight} className="w-full h-auto">
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e0e7ff" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Miami Bay area simulation */}
              <ellipse 
                cx={mapWidth * 0.7} 
                cy={mapHeight * 0.6} 
                rx={mapWidth * 0.25} 
                ry={mapHeight * 0.2} 
                fill="#bfdbfe" 
                opacity={0.6}
              />
              
              {/* Project markers */}
              {mappableProjects.map((project) => {
                const x = lngToX(parseFloat(project.longitude!));
                const y = latToY(parseFloat(project.latitude!));
                const IconComponent = typeIcons[project.type as keyof typeof typeIcons] || Building;
                const isSelected = selectedProject?.id === project.id;
                
                return (
                  <g key={project.id}>
                    {/* Marker background */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 25 : 20}
                      fill={project.status === "Completed" ? "#10b981" : "#f59e0b"}
                      stroke="white"
                      strokeWidth={3}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelectedProject(project)}
                    />
                    
                    {/* Marker icon */}
                    <foreignObject x={x - 8} y={y - 8} width={16} height={16}>
                      <div className="w-4 h-4 text-white flex items-center justify-center">
                        <IconComponent className="w-3 h-3" />
                      </div>
                    </foreignObject>
                    
                    {/* Project name label */}
                    <text
                      x={x}
                      y={y + 35}
                      textAnchor="middle"
                      className="text-xs font-medium fill-gray-700"
                      style={{ fontSize: '10px' }}
                    >
                      {project.name.split(' ').slice(0, 2).join(' ')}
                    </text>
                  </g>
                );
              })}
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Legend</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">In Progress/Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Details */}
        <div className="space-y-4">
          {selectedProject ? (
            <Card>
              <CardContent className="p-6">
                <img 
                  src={selectedProject.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"} 
                  alt={selectedProject.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2">{selectedProject.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{selectedProject.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedProject.address || selectedProject.location}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={selectedProject.status === "Completed" ? "default" : "secondary"}>
                      {selectedProject.status}
                    </Badge>
                    <Badge variant="outline">{selectedProject.type}</Badge>
                  </div>
                  
                  {selectedProject.completionDate && (
                    <div className="text-sm text-gray-500">
                      Completed: {selectedProject.completionDate}
                    </div>
                  )}
                  
                  {selectedProject.size && (
                    <div className="text-sm text-gray-500">
                      Size: {selectedProject.size}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Click on a project marker to view details</p>
              </CardContent>
            </Card>
          )}
          
          {/* Project List */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">All Projects</h4>
            {mappableProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedProject?.id === project.id 
                    ? 'bg-primary-burgundy text-white' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="font-medium text-sm">{project.name}</div>
                <div className={`text-xs ${
                  selectedProject?.id === project.id ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {project.location}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}