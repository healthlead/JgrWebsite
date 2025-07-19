export interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  type: string;
  size: string | null;
  status: string;
  imageUrl: string | null;
  featured: boolean;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  completionDate: string | null;
  createdAt: Date;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Wynwood Station",
    description: "340,000 sq ft multifamily mixed-use building in Miami's vibrant Wynwood district",
    location: "Wynwood, Miami, FL",
    type: "Mixed-Use",
    size: "340,000 sq ft",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true,
    latitude: "25.8014",
    longitude: "-80.1995",
    address: "2700 N Miami Ave, Miami, FL 33127",
    completionDate: "2023",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "NoMad Residences Wynwood",
    description: "9-story luxury condominium tower with 329 units serving as shell contractor",
    location: "Wynwood, Miami, FL",
    type: "Residential",
    size: "329 Units",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true,
    latitude: "25.8010",
    longitude: "-80.1990",
    address: "400 NW 26th St, Miami, FL 33127",
    completionDate: "2024",
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Moxy Wynwood",
    description: "12-story boutique hotel with 120 rooms - Structural contractor",
    location: "Wynwood, Miami, FL",
    type: "Hospitality",
    size: "120 Rooms",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    featured: false,
    latitude: "25.8020",
    longitude: "-80.1985",
    address: "2727 NW 2nd Ave, Miami, FL 33127",
    completionDate: "2023",
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "501 First Residences",
    description: "40-story residential tower in Downtown Miami - Shell contractor",
    location: "Downtown Miami, FL",
    type: "Residential",
    size: "40 Stories",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    featured: false,
    latitude: "25.7742",
    longitude: "-80.1936",
    address: "501 1st St, Miami, FL 33131",
    completionDate: "2022",
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "The Kavista",
    description: "8-story apartment complex with 282 units, 401,800 sq ft concrete/masonry",
    location: "El Portal, Miami, FL",
    type: "Residential",
    size: "282 Units",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    featured: false,
    latitude: "25.8520",
    longitude: "-80.1940",
    address: "700 NE 90th St, El Portal, FL 33138",
    completionDate: "2023",
    createdAt: new Date(),
  },
  {
    id: 6,
    name: "Wynwood Haus",
    description: "20-story residential tower with 224 units, 322,530 sq ft concrete/masonry",
    location: "Wynwood, Miami, FL",
    type: "Residential",
    size: "224 Units",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    featured: false,
    latitude: "25.8005",
    longitude: "-80.2000",
    address: "2103 NW 1st Ct, Miami, FL 33127",
    completionDate: "2022",
    createdAt: new Date(),
  },
  {
    id: 7,
    name: "Brickell Heights East",
    description: "Modern residential tower with luxury amenities - Concrete construction",
    location: "Brickell, Miami, FL",
    type: "Residential",
    size: "300 Units",
    status: "In Progress",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: false,
    latitude: "25.7617",
    longitude: "-80.1918",
    address: "825 Brickell Bay Dr, Miami, FL 33131",
    completionDate: "2025",
    createdAt: new Date(),
  },
  {
    id: 8,
    name: "Design District Plaza",
    description: "Mixed-use development with retail and residential components",
    location: "Design District, Miami, FL",
    type: "Mixed-Use",
    size: "450,000 sq ft",
    status: "Planning",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: false,
    latitude: "25.8020",
    longitude: "-80.1950",
    address: "140 NE 39th St, Miami, FL 33137",
    completionDate: "2026",
    createdAt: new Date(),
  },
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getCompletedProjects = () => projects.filter(project => project.status === "Completed");
export const getUpcomingProjects = () => projects.filter(project => project.status === "In Progress" || project.status === "Planning");

// Legacy exports for compatibility
export const featuredProjects = getFeaturedProjects();
export const additionalProjects = getCompletedProjects().filter(project => !project.featured);