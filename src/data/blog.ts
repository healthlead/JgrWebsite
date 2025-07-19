export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug?: string;
  content?: string;
}

export interface InstagramPost {
  id: number;
  image: string;
  description: string;
  hashtags: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Post-Tension Concrete in High-Rise Construction",
    excerpt: "Exploring how advanced post-tensioning techniques are revolutionizing structural design and enabling longer spans with reduced material usage.",
    category: "Technical Insights",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "John Rodriguez",
    image: "/images/construction-capabilities.jpg",
    slug: "future-post-tension-concrete-high-rise-construction"
  },
  {
    id: 2,
    title: "Safety Innovations That Are Changing Construction Sites",
    excerpt: "A deep dive into the latest safety technologies and protocols that are making construction sites safer than ever before.",
    category: "Safety",
    date: "2025-01-10",
    readTime: "6 min read",
    author: "Carlos Martinez",
    image: "/images/hero-construction.jpg",
    slug: "safety-innovations-changing-construction-sites"
  },
  {
    id: 3,
    title: "Sustainable Concrete: Building for Tomorrow",
    excerpt: "How eco-friendly concrete solutions and sustainable construction practices are shaping the future of the industry.",
    category: "Sustainability",
    date: "2025-01-05",
    readTime: "7 min read",
    author: "Maria Garcia",
    image: "/images/about-construction.jpg",
    slug: "sustainable-concrete-building-tomorrow"
  },
  {
    id: 4,
    title: "Miami's Architectural Concrete Renaissance",
    excerpt: "Examining the growing trend of decorative and architectural concrete in Miami's most prestigious developments.",
    category: "Industry Trends",
    date: "2024-12-28",
    readTime: "5 min read",
    author: "John Rodriguez",
    image: "/images/company-history.jpg",
    slug: "miami-architectural-concrete-renaissance"
  },
  {
    id: 5,
    title: "Quality Control in Large-Scale Construction Projects",
    excerpt: "Best practices for maintaining consistent quality standards across complex, multi-phase construction projects.",
    category: "Project Management",
    date: "2024-12-20",
    readTime: "9 min read",
    author: "Maria Garcia",
    image: "/images/construction-capabilities.jpg",
    slug: "quality-control-large-scale-construction-projects"
  },
  {
    id: 6,
    title: "Understanding Seismic Design in South Florida",
    excerpt: "While not in a high seismic zone, South Florida construction still benefits from advanced structural engineering principles.",
    category: "Technical Insights",
    date: "2024-12-15",
    readTime: "6 min read",
    author: "John Rodriguez",
    image: "/images/hero-construction.jpg",
    slug: "understanding-seismic-design-south-florida"
  }
];

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: "/images/construction-capabilities.jpg",
    description: "Precision concrete work at Wynwood Station - every detail matters in structural excellence.",
    hashtags: "#JGRConstruction #WynwoodStation #ConcreteWork #MiamiConstruction #QualityCraftsmanship"
  },
  {
    id: 2,
    image: "/images/hero-construction.jpg", 
    description: "Our skilled team executing complex post-tension concrete installation with precision and safety.",
    hashtags: "#PostTension #ConcreteConstruction #TeamWork #MiamiBuilders #StructuralEngineering"
  },
  {
    id: 3,
    image: "/images/about-construction.jpg",
    description: "Beautiful architectural concrete finish taking shape at our latest Brickell project.",
    hashtags: "#ArchitecturalConcrete #BrickellConstruction #ConcreteFinishing #MiamiDevelopment #CraftedExcellence"
  },
  {
    id: 4,
    image: "/images/company-history.jpg",
    description: "Safety first - our team conducting morning safety briefing before starting work.",
    hashtags: "#SafetyFirst #ConstructionSafety #TeamMeeting #OSHACompliant #MiamiConstruction"
  },
  {
    id: 5,
    image: "/images/construction-capabilities.jpg",
    description: "Massive concrete pour in progress - coordination and timing are everything in large-scale projects.",
    hashtags: "#ConcretePour #LargeScale #TeamCoordination #ConstructionProgress #MiamiBuilding"
  },
  {
    id: 6,
    image: "/images/hero-construction.jpg",
    description: "Quality control inspection ensuring every element meets our exacting standards.",
    hashtags: "#QualityControl #ConstructionStandards #PrecisionWork #BuildingExcellence #JGRQuality"
  }
];

export const blogCategories = [
  "All",
  "Technical Insights", 
  "Safety",
  "Sustainability",
  "Industry Trends",
  "Project Management"
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") {
    return blogPosts;
  }
  return blogPosts.filter(post => post.category === category);
};

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0];
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
}; 