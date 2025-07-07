import { Calendar, User, ArrowRight, HardHat, Wrench, Building2, Shield, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "Safety First: New OSHA Guidelines for 2025 Construction Sites",
    excerpt: "Learn about the latest OSHA safety requirements and how they impact your construction project timeline and costs.",
    author: "Maria Rodriguez",
    date: "January 15, 2025",
    category: "Safety",
    readTime: "5 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1572484669299-b64c9b9bb7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 2,
    title: "Post-Tension vs. Conventional Concrete: Making the Right Choice",
    excerpt: "A comprehensive comparison of post-tension and conventional concrete systems for your next high-rise project.",
    author: "Carlos Mendez",
    date: "January 10, 2025",
    category: "Technical",
    readTime: "8 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 3,
    title: "Miami's Construction Boom: Trends and Opportunities in 2025",
    excerpt: "Exploring the current state of Miami's construction market and what it means for developers and contractors.",
    author: "Jennifer Garcia",
    date: "January 5, 2025",
    category: "Industry News",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 4,
    title: "Quality Control in Concrete Construction: Best Practices",
    excerpt: "Essential quality control measures that ensure structural integrity and long-term durability in concrete construction.",
    author: "Roberto Silva",
    date: "December 28, 2024",
    category: "Technical",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 5,
    title: "Sustainable Construction: Green Building Materials and Methods",
    excerpt: "How modern construction practices are evolving to meet environmental sustainability goals without compromising quality.",
    author: "Ana Gutierrez",
    date: "December 20, 2024",
    category: "Sustainability",
    readTime: "9 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 6,
    title: "Winter Construction Challenges in South Florida",
    excerpt: "Managing construction schedules and quality during Florida's winter months and dry season considerations.",
    author: "Luis Hernandez",
    date: "December 15, 2024",
    category: "Project Management",
    readTime: "4 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

const categories = [
  { name: "All", icon: BookOpen, count: 6 },
  { name: "Safety", icon: Shield, count: 1 },
  { name: "Technical", icon: Wrench, count: 2 },
  { name: "Industry News", icon: Building2, count: 1 },
  { name: "Sustainability", icon: Target, count: 1 },
  { name: "Project Management", icon: HardHat, count: 1 }
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Safety": "bg-red-100 text-red-800",
      "Technical": "bg-blue-100 text-blue-800",
      "Industry News": "bg-green-100 text-green-800",
      "Sustainability": "bg-purple-100 text-purple-800",
      "Project Management": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-primary-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <HardHat className="w-16 h-16 text-sunflower-yellow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hard Hat Hub
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Industry insights, construction expertise, and professional knowledge from 
              JGR Construction's team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-primary-burgundy hover:text-white rounded-full transition-colors"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-burgundy cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary-burgundy hover:text-white hover:border-primary-burgundy"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getCategoryColor(post.category)} variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-burgundy cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full hover:bg-primary-burgundy hover:text-white"
                  >
                    Read Article
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-rich-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to our Hard Hat Hub newsletter for the latest construction industry 
            news, technical guides, and expert insights delivered monthly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sunflower-yellow"
            />
            <Button 
              className="bg-sunflower-yellow text-rich-black hover:bg-yellow-500 font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}