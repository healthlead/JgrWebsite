import { Users, Zap, CheckCircle, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "We Are One",
      description: "United team approach to every project challenge",
    },
    {
      icon: Zap,
      title: "Driven to Excellence",
      description: "Continuous improvement in quality and performance",
    },
    {
      icon: CheckCircle,
      title: "Relentless",
      description: "Unwavering commitment to project success",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-ocean-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About JGR Construction</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building Excellence Since 2009. From a small team to Miami's premier 
              structural contractors, our journey is one of growth, dedication, and unwavering quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Building Excellence Since 2009</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, JGR Construction Inc. has grown from a small team of 17-18 employees 
                to a premier structural contractor with hundreds of skilled workers and an extensive 
                equipment portfolio serving South Florida's construction industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialization in concrete and masonry construction has made us the trusted partner 
                for Miami's most prestigious residential and commercial developments, from luxury 
                condominiums to mixed-use complexes.
              </p>
              
              {/* Company Values */}
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-ocean-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <value.icon className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="JGR Construction team of skilled professionals" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              
              {/* Safety & Quality Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center">
                  <Shield className="w-8 h-8 text-construction-green mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">OSHA Certified</div>
                    <div className="text-sm text-gray-600">Safety Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Growth Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and continuous growth in the industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ocean-blue mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
              <div className="text-sm text-gray-500 mt-1">Since 2009</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sunset-orange mb-2">200+</div>
              <div className="text-gray-600 font-medium">Skilled Workers</div>
              <div className="text-sm text-gray-500 mt-1">Highly trained professionals</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-construction-green mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-1">Across South Florida</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-deep-blue mb-2">7</div>
              <div className="text-gray-600 font-medium">Active Projects</div>
              <div className="text-sm text-gray-500 mt-1">Currently in progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Training */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Safety & Training Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to safety and continuous training ensures the highest standards on every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-construction-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-construction-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Time Safety Manager</h3>
              <p className="text-gray-600">Dedicated safety professionals plus project-specific coordinators on every site</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-ocean-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-ocean-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">OSHA 30-Hour Training</h3>
              <p className="text-gray-600">In-house training programs including forklift certification and defensive driving</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-sunset-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-sunset-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Tolerance Policy</h3>
              <p className="text-gray-600">Comprehensive drug policy with pre-hire and random testing protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Experience</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the many satisfied clients who trust JGR Construction with their most important projects.
          </p>
          <a 
            href="/contact" 
            className="bg-sunset-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
          >
            Let's Build Together
          </a>
        </div>
      </section>
    </div>
  );
}
