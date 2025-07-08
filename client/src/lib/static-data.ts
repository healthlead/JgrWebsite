// Static data for GitHub Pages deployment
export const staticProjects = [
  {
    id: 1,
    name: "Wynwood Station",
    description: "340,000 sq ft mixed-use development featuring retail, dining, and entertainment spaces with innovative concrete design.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Miami, FL",
    type: "Commercial",
    status: "Completed",
    year: 2023,
    featured: true,
    latitude: 25.8010,
    longitude: -80.1994,
    size: "340,000 sq ft"
  },
  {
    id: 2,
    name: "Brickell Heights Tower",
    description: "Luxury residential tower with advanced post-tension concrete construction and architectural excellence.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Miami, FL",
    type: "Residential",
    status: "Completed",
    year: 2023,
    featured: true,
    latitude: 25.7617,
    longitude: -80.1918,
    size: "45 floors"
  },
  {
    id: 3,
    name: "Miami Beach Resort",
    description: "Oceanfront resort featuring decorative concrete elements and sustainable construction practices.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Miami Beach, FL",
    type: "Hospitality",
    status: "Completed",
    year: 2022,
    featured: true,
    latitude: 25.7907,
    longitude: -80.1300,
    size: "25 acres"
  },
  {
    id: 4,
    name: "Aventura Mall Expansion",
    description: "Major retail expansion project with complex concrete shell construction and modern design elements.",
    imageUrl: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Aventura, FL",
    type: "Commercial",
    status: "Upcoming",
    year: 2024,
    featured: false,
    latitude: 25.9564,
    longitude: -80.1426,
    size: "2.4M sq ft"
  },
  {
    id: 5,
    name: "Coral Gables Office Complex",
    description: "Corporate headquarters with sustainable concrete design and LEED certification standards.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Coral Gables, FL",
    type: "Commercial",
    status: "Upcoming",
    year: 2024,
    featured: false,
    latitude: 25.7214,
    longitude: -80.2683,
    size: "1.2M sq ft"
  }
];

export const staticServices = [
  {
    id: 1,
    name: "Conventional Concrete Shells",
    description: "Structural concrete construction for buildings, bridges, and infrastructure projects.",
    icon: "Building2",
    features: [
      "High-rise construction",
      "Commercial buildings", 
      "Infrastructure projects",
      "Seismic-resistant design"
    ]
  },
  {
    id: 2,
    name: "Post-Tension Concrete",
    description: "Advanced concrete systems for long-span structures and complex architectural designs.",
    icon: "Zap",
    features: [
      "Long-span construction",
      "Reduced material usage",
      "Enhanced structural performance", 
      "Architectural flexibility"
    ]
  },
  {
    id: 3,
    name: "Pre-cast Concrete",
    description: "Precision-manufactured concrete elements for efficient and high-quality construction.",
    icon: "Package",
    features: [
      "Quality control",
      "Faster construction",
      "Weather independence",
      "Consistent finishes"
    ]
  },
  {
    id: 4,
    name: "Masonry Construction", 
    description: "Traditional and modern masonry techniques for durable and aesthetic structures.",
    icon: "Layers",
    features: [
      "Brick and stone work",
      "Decorative elements",
      "Restoration projects",
      "Custom designs"
    ]
  },
  {
    id: 5,
    name: "Architectural Concrete",
    description: "Specialized concrete finishes and decorative elements for unique architectural visions.",
    icon: "Palette",
    features: [
      "Custom finishes",
      "Decorative elements", 
      "Texture application",
      "Color integration"
    ]
  }
];

// Helper functions
export const getFeaturedProjects = () => {
  return staticProjects.filter(project => project.featured);
};

export const getProjects = () => {
  return staticProjects;
};

export const getServices = () => {
  return staticServices;
};

// Check if we're in static mode (GitHub Pages)
export const isStaticMode = () => {
  return !window.location.hostname.includes('localhost') && 
         !window.location.hostname.includes('replit');
};