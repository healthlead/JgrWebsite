export interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  type: string;
  size?: string;
  status: string;
  imageUrl?: string;
  featured: boolean;
  latitude?: string;
  longitude?: string;
  address?: string;
  completionDate?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Miami Beach Luxury Condominiums",
    description: "High-end residential complex featuring 200 luxury condominium units with ocean views",
    location: "Miami Beach, FL",
    type: "concrete-shells",
    size: "450,000 sq ft",
    status: "completed",
    imageUrl: "/images/hero-construction.jpg",
    featured: true,
    latitude: "25.7617",
    longitude: "-80.1918",
    address: "123 Ocean Drive, Miami Beach, FL 33139",
    completionDate: "2023-06-15"
  },
  {
    id: 2,
    name: "Downtown Miami Office Tower",
    description: "Modern 25-story office building with post-tension concrete structure",
    location: "Downtown Miami, FL",
    type: "post-tension",
    size: "350,000 sq ft",
    status: "completed",
    imageUrl: "/images/construction-capabilities.jpg",
    featured: true,
    latitude: "25.7617",
    longitude: "-80.1918",
    address: "456 Brickell Avenue, Miami, FL 33131",
    completionDate: "2023-03-20"
  },
  {
    id: 3,
    name: "Fort Lauderdale Shopping Center",
    description: "Mixed-use development with retail space and parking structure",
    location: "Fort Lauderdale, FL",
    type: "precast",
    size: "280,000 sq ft",
    status: "in-progress",
    imageUrl: "/images/about-construction.jpg",
    featured: true,
    latitude: "26.1224",
    longitude: "-80.1373",
    address: "789 Commercial Blvd, Fort Lauderdale, FL 33308"
  },
  {
    id: 4,
    name: "West Palm Beach Medical Center",
    description: "State-of-the-art medical facility with specialized concrete requirements",
    location: "West Palm Beach, FL",
    type: "concrete-shells",
    size: "180,000 sq ft",
    status: "completed",
    imageUrl: "/images/company-history.jpg",
    featured: false,
    latitude: "26.7153",
    longitude: "-80.0534",
    address: "321 Medical Center Drive, West Palm Beach, FL 33401",
    completionDate: "2022-11-10"
  },
  {
    id: 5,
    name: "Key West Hotel Renovation",
    description: "Historic hotel renovation with modern concrete reinforcements",
    location: "Key West, FL",
    type: "masonry",
    size: "85,000 sq ft",
    status: "completed",
    imageUrl: "/images/team-member-1.jpg",
    featured: false,
    latitude: "24.5551",
    longitude: "-81.7800",
    address: "654 Duval Street, Key West, FL 33040",
    completionDate: "2022-08-05"
  },
  {
    id: 6,
    name: "Boca Raton University Campus",
    description: "Educational facility expansion with sustainable concrete design",
    location: "Boca Raton, FL",
    type: "architectural",
    size: "220,000 sq ft",
    status: "in-progress",
    imageUrl: "/images/team-member-2.jpg",
    featured: false,
    latitude: "26.3683",
    longitude: "-80.1289",
    address: "987 University Boulevard, Boca Raton, FL 33431"
  },
  {
    id: 7,
    name: "Hollywood Beach Resort",
    description: "Luxury beachfront resort with post-tension concrete foundation",
    location: "Hollywood, FL",
    type: "post-tension",
    size: "320,000 sq ft",
    status: "completed",
    imageUrl: "/images/team-member-3.jpg",
    featured: false,
    latitude: "26.0112",
    longitude: "-80.1495",
    address: "147 Beach Boulevard, Hollywood, FL 33019",
    completionDate: "2023-01-15"
  },
  {
    id: 8,
    name: "Coral Gables Office Complex",
    description: "Multi-building office complex with precast concrete elements",
    location: "Coral Gables, FL",
    type: "precast",
    size: "410,000 sq ft",
    status: "in-progress",
    imageUrl: "/images/placeholder.svg",
    featured: false,
    latitude: "25.7215",
    longitude: "-80.2684",
    address: "258 Miracle Mile, Coral Gables, FL 33134"
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const completedProjects = projects.filter(project => project.status === "completed");
export const inProgressProjects = projects.filter(project => project.status === "in-progress"); 