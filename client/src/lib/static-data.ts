// Static data for the website when deployed without backend
export const staticProjects = [
  {
    id: 1,
    name: "Wynwood Station",
    description: "340,000 sq ft mixed-use development featuring retail, dining, and entertainment spaces with innovative concrete design.",
    image: "/api/placeholder/600/400",
    location: "Miami, FL",
    type: "Commercial",
    status: "Completed",
    year: 2023,
    featured: true,
    latitude: 25.8010,
    longitude: -80.1994
  },
  {
    id: 2,
    name: "Brickell Heights Tower",
    description: "Luxury residential tower with advanced post-tension concrete construction and architectural excellence.",
    image: "/api/placeholder/600/400",
    location: "Miami, FL",
    type: "Residential",
    status: "Completed",
    year: 2023,
    featured: true,
    latitude: 25.7617,
    longitude: -80.1918
  },
  {
    id: 3,
    name: "Miami Beach Resort",
    description: "Oceanfront resort featuring decorative concrete elements and sustainable construction practices.",
    image: "/api/placeholder/600/400",
    location: "Miami Beach, FL",
    type: "Hospitality",
    status: "Completed",
    year: 2022,
    featured: true,
    latitude: 25.7907,
    longitude: -80.1300
  },
  {
    id: 4,
    name: "Aventura Mall Expansion",
    description: "Major retail expansion project with complex concrete shell construction and modern design elements.",
    image: "/api/placeholder/600/400",
    location: "Aventura, FL",
    type: "Commercial",
    status: "Upcoming",
    year: 2024,
    featured: false,
    latitude: 25.9564,
    longitude: -80.1426
  },
  {
    id: 5,
    name: "Coral Gables Office Complex",
    description: "Corporate headquarters with sustainable concrete design and LEED certification standards.",
    image: "/api/placeholder/600/400",
    location: "Coral Gables, FL",
    type: "Commercial",
    status: "Upcoming",
    year: 2024,
    featured: false,
    latitude: 25.7214,
    longitude: -80.2683
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

export const getFeaturedProjects = () => {
  return staticProjects.filter(project => project.featured);
};

export const getProjects = () => {
  return staticProjects;
};

export const getServices = () => {
  return staticServices;
};