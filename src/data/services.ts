export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  featured: boolean;
  details?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Concrete Shells",
    description: "Complete concrete shell construction for commercial and residential buildings",
    icon: "🏗️",
    featured: true,
    details: [
      "Structural concrete framework",
      "Foundation systems",
      "Load-bearing walls",
      "Quality control and testing"
    ]
  },
  {
    id: 2,
    name: "Post-Tension",
    description: "Advanced post-tension concrete systems for enhanced structural integrity",
    icon: "🔗",
    featured: true,
    details: [
      "Post-tension cable installation",
      "Stress analysis and design",
      "Quality assurance testing",
      "Maintenance and monitoring"
    ]
  },
  {
    id: 3,
    name: "Precast",
    description: "Precast concrete components for efficient and quality construction",
    icon: "🏢",
    featured: true,
    details: [
      "Precast wall panels",
      "Structural beams and columns",
      "Custom precast elements",
      "Installation and finishing"
    ]
  },
  {
    id: 4,
    name: "Masonry",
    description: "Traditional and modern masonry construction services",
    icon: "🧱",
    featured: false,
    details: [
      "Brick and block construction",
      "Stone masonry",
      "CMU walls",
      "Masonry restoration"
    ]
  },
  {
    id: 5,
    name: "Architectural",
    description: "Architectural concrete and finishing services",
    icon: "🎨",
    featured: false,
    details: [
      "Decorative concrete",
      "Stamped concrete",
      "Polished concrete floors",
      "Custom architectural elements"
    ]
  },
  {
    id: 6,
    name: "Preconstruction",
    description: "Comprehensive preconstruction planning and consulting",
    icon: "📋",
    featured: false,
    details: [
      "Project planning and scheduling",
      "Cost estimation",
      "Value engineering",
      "Constructability reviews"
    ]
  }
];

export const featuredServices = services.filter(service => service.featured); 