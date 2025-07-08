import { useState, useEffect } from "react";
import type { Project } from "@shared/schema";
import { MapPin, Building, Home, Hotel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const completedIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
      <path fill="#059669" stroke="#fff" stroke-width="2" d="M12.5 0C5.596 0 0 5.596 0 12.5c0 12.5 12.5 28.5 12.5 28.5S25 25 25 12.5C25 5.596 19.404 0 12.5 0z"/>
      <circle fill="#fff" cx="12.5" cy="12.5" r="6"/>
      <path fill="#059669" d="M12.5 8l2 4h-4z"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const inProgressIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
      <path fill="#d97706" stroke="#fff" stroke-width="2" d="M12.5 0C5.596 0 0 5.596 0 12.5c0 12.5 12.5 28.5 12.5 28.5S25 25 25 12.5C25 5.596 19.404 0 12.5 0z"/>
      <circle fill="#fff" cx="12.5" cy="12.5" r="6"/>
      <path fill="#d97706" d="M12.5 8l2 4h-4z"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface ProjectsMapProps {
  projects: Project[];
}

export default function ProjectsMap({ projects }: ProjectsMapProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects that have coordinates
  const mappableProjects = projects.filter(
    (project) => project.latitude && project.longitude
  );

  const typeIcons = {
    "Residential Complex": Home,
    "Mixed-Use Development": Building,
    "Luxury Hotel": Hotel,
    "Office Building": Building,
    "Infrastructure": Building,
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Locations</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 h-[500px]">
            <MapContainer
              center={[25.7617, -80.1918]} // Miami center
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              className="rounded-xl"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Project markers */}
              {mappableProjects.map((project) => {
                const lat = parseFloat(project.latitude!);
                const lng = parseFloat(project.longitude!);
                const isCompleted = project.status === "Completed";
                
                return (
                  <Marker
                    key={project.id}
                    position={[lat, lng]}
                    icon={isCompleted ? completedIcon : inProgressIcon}
                    eventHandlers={{
                      click: () => setSelectedProject(project)
                    }}
                  >
                    <Popup>
                      <div className="p-2 min-w-[200px]">
                        <h4 className="font-semibold text-gray-900 mb-1">{project.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant={isCompleted ? "default" : "secondary"}
                            className={isCompleted ? "bg-green-500" : "bg-orange-500"}
                          >
                            {project.status}
                          </Badge>
                          <span className="text-xs text-gray-500">{project.type}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Value: ${project.value?.toLocaleString() || 'N/A'}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
            
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
                <div className="text-xs opacity-75">{project.location}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}