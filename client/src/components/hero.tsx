import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      {/* Miami skyline background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-burgundy/90 via-rich-black/70 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Miami's
            <span className="text-sunflower-yellow"> Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Premier structural contractors specializing in concrete and masonry construction. 
            Over 15 years of excellence in South Florida's most prestigious projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-sunset-orange text-white hover:bg-orange-600 px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white hover:bg-white hover:text-deep-blue px-8 py-4 text-lg font-semibold text-[#111827]"
              >
                View Our Work
              </Button>
            </Link>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sunset-orange">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sunset-orange">50+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sunset-orange">200+</div>
              <div className="text-sm text-gray-300">Skilled Workers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sunset-orange">24/7</div>
              <div className="text-sm text-gray-300">Project Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
