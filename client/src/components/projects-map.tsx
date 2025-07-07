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
          <div className="relative bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200">
            <svg width={mapWidth} height={mapHeight} className="w-full h-auto">
              {/* Map background */}
              <rect width="100%" height="100%" fill="#f8fafc" />
              
              {/* Ocean/Atlantic Ocean */}
              <rect x="650" y="0" width="150" height="500" fill="#3b82f6" opacity="0.6" />
              
              {/* Biscayne Bay */}
              <path
                d="M 500 50 Q 550 100 580 150 Q 600 200 590 250 Q 580 300 550 350 Q 520 400 480 450 L 450 420 Q 480 350 490 250 Q 480 150 500 50 Z"
                fill="#60a5fa"
                opacity="0.7"
              />
              
              {/* Miami Beach (barrier island) */}
              <rect x="600" y="100" width="35" height="280" fill="#fbbf24" opacity="0.4" rx="6" />
              
              {/* Downtown Miami */}
              <rect x="420" y="200" width="60" height="50" fill="#6b7280" opacity="0.4" rx="3" />
              
              {/* Wynwood/Design District */}
              <rect x="380" y="150" width="50" height="40" fill="#8b5cf6" opacity="0.4" rx="3" />
              
              {/* Brickell */}
              <rect x="440" y="250" width="50" height="60" fill="#374151" opacity="0.4" rx="3" />
              
              {/* Coral Gables */}
              <rect x="280" y="280" width="80" height="60" fill="#10b981" opacity="0.4" rx="3" />
              
              {/* Major highways - I-95 */}
              <path d="M 250 0 L 230 500" stroke="#1f2937" strokeWidth="4" opacity="0.7" />
              
              {/* US-1 */}
              <path d="M 350 0 L 330 500" stroke="#4b5563" strokeWidth="3" opacity="0.6" />
              
              {/* State Road 826 (Palmetto) */}
              <path d="M 150 100 Q 200 150 250 200 Q 300 250 350 300 Q 400 350 450 400" stroke="#4b5563" strokeWidth="3" opacity="0.6" fill="none" />
              
              {/* Street grid */}
              {Array.from({ length: 16 }, (_, i) => (
                <line
                  key={`v-${i}`}
                  x1={50 + i * 45}
                  y1="50"
                  x2={50 + i * 45}
                  y2="450"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
              {Array.from({ length: 10 }, (_, i) => (
                <line
                  key={`h-${i}`}
                  x1="50"
                  y1={50 + i * 40}
                  x2="750"
                  y2={50 + i * 40}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
              
              {/* Area labels */}
              <text x="405" y="175" className="text-xs font-medium fill-purple-700">Wynwood</text>
              <text x="450" y="225" className="text-xs font-medium fill-gray-700">Downtown</text>
              <text x="465" y="280" className="text-xs font-medium fill-gray-700">Brickell</text>
              <text x="610" y="240" className="text-xs font-medium fill-blue-700">Miami Beach</text>
              <text x="310" y="315" className="text-xs font-medium fill-green-700">Coral Gables</text>
              <text x="520" y="180" className="text-xs font-medium fill-blue-600">Biscayne Bay</text>
              <text x="670" y="80" className="text-xs font-medium fill-blue-500">Atlantic Ocean</text>
              
              {/* Roads labels */}
              <text x="235" y="100" className="text-xs font-medium fill-gray-600" transform="rotate(-85 235 100)">I-95</text>
              <text x="335" y="100" className="text-xs font-medium fill-gray-600" transform="rotate(-85 335 100)">US-1</text>
              
              {/* Project markers */}
              {mappableProjects.map((project) => {
                // Map real coordinates to our SVG map more accurately
                const lng = parseFloat(project.longitude!);
                const lat = parseFloat(project.latitude!);
                
                // Better coordinate mapping for Miami area
                // Miami roughly spans -80.35 to -80.1 lng, 25.7 to 25.85 lat
                const x = ((lng + 80.35) / 0.25) * 500 + 150;
                const y = 450 - ((lat - 25.7) / 0.15) * 350;
                
                const IconComponent = typeIcons[project.type as keyof typeof typeIcons] || Building;
                const isSelected = selectedProject?.id === project.id;
                
                return (
                  <g key={project.id}>
                    {/* Selection ring */}
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r="28"
                        fill="none"
                        stroke={project.status === "Completed" ? "#059669" : "#d97706"}
                        strokeWidth="3"
                        className="animate-pulse"
                      />
                    )}
                    
                    {/* Marker shadow */}
                    <circle
                      cx={x + 2}
                      cy={y + 2}
                      r="18"
                      fill="rgba(0,0,0,0.2)"
                    />
                    
                    {/* Marker background */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 22 : 18}
                      fill={project.status === "Completed" ? "#059669" : "#d97706"}
                      stroke="white"
                      strokeWidth="3"
                      className="cursor-pointer transition-all duration-200 hover:scale-110"
                      onClick={() => setSelectedProject(project)}
                    />
                    
                    {/* Marker icon */}
                    <foreignObject x={x - 8} y={y - 8} width={16} height={16} className="pointer-events-none">
                      <div className="w-4 h-4 text-white flex items-center justify-center">
                        <IconComponent className="w-3 h-3" />
                      </div>
                    </foreignObject>
                    
                    {/* Project name label */}
                    <text
                      x={x}
                      y={y - 28}
                      textAnchor="middle"
                      className="text-xs font-semibold fill-gray-800 drop-shadow-sm pointer-events-none"
                      style={{ fontSize: '11px' }}
                    >
                      {project.name.split(' ').slice(0, 2).join(' ')}
                    </text>
                  </g>
                );
              })}
              
              {/* Compass */}
              <g transform="translate(720, 60)">
                <circle cx="0" cy="0" r="25" fill="white" stroke="#374151" strokeWidth="2" opacity="0.9" />
                <path d="M 0 -18 L 6 0 L 0 18 L -6 0 Z" fill="#ef4444" />
                <path d="M 0 -18 L -6 0 L 0 18 L 6 0 Z" fill="#6b7280" />
                <text x="0" y="-32" textAnchor="middle" className="text-xs font-bold fill-gray-700">N</text>
                <text x="32" y="5" textAnchor="middle" className="text-xs font-medium fill-gray-600">E</text>
                <text x="0" y="45" textAnchor="middle" className="text-xs font-medium fill-gray-600">S</text>
                <text x="-32" y="5" textAnchor="middle" className="text-xs font-medium fill-gray-600">W</text>
              </g>
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