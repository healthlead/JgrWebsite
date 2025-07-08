import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const faqs = [
  {
    question: "What types of construction projects does JGR specialize in?",
    answer: "JGR Construction specializes in structural concrete and masonry work for residential high-rises, mixed-use developments, luxury hotels, and commercial buildings. We handle everything from conventional concrete shells to complex post-tension systems and architectural concrete features."
  },
  {
    question: "How long has JGR Construction been in business?",
    answer: "JGR Construction has been proudly serving South Florida since 2009, with over 15 years of experience delivering excellence in structural contracting. We've completed more than 50 major projects in the Miami area."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve South Florida, with a focus on Miami-Dade, Broward, and Palm Beach counties. Our headquarters is located in Medley, FL, and we've worked on projects throughout the greater Miami metropolitan area."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide detailed project estimates at no cost. Our experienced estimators will review your plans, visit the site if needed, and provide a comprehensive proposal outlining scope, timeline, and pricing."
  },
  {
    question: "What safety standards do you follow?",
    answer: "Safety is our top priority. We maintain OSHA certification and follow all federal, state, and local safety regulations. Our team receives regular safety training, and we maintain comprehensive insurance coverage for all projects."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on size and complexity. A typical residential tower concrete structure might take 12-18 months, while smaller commercial projects could be completed in 3-6 months. We provide detailed schedules during the proposal phase."
  },
  {
    question: "What licenses and certifications do you hold?",
    answer: "JGR Construction holds a Florida General Contractor's license (CGC), OSHA safety certifications, and is a member of the Associated General Contractors (AGC). We maintain all required local permits and licensing for our service areas."
  },
  {
    question: "Do you work with architects and engineers?",
    answer: "Absolutely. We collaborate closely with architects, structural engineers, and design teams throughout the project lifecycle. Our experience allows us to provide valuable input during the design phase to optimize constructability and cost-effectiveness."
  },
  {
    question: "What is your payment schedule?",
    answer: "We typically work on a progress payment schedule tied to project milestones. Payment terms are clearly outlined in our contracts, usually with an initial mobilization payment followed by monthly progress payments based on completed work."
  },
  {
    question: "Do you handle permits and approvals?",
    answer: "Yes, we assist with obtaining all necessary building permits and coordinating inspections with local authorities. Our team is familiar with the permitting process across all municipalities we serve and can expedite approvals."
  },
  {
    question: "What happens if there are delays due to weather?",
    answer: "Weather delays are addressed in our contracts with fair and reasonable provisions. Florida's weather patterns are factored into our scheduling, and we maintain flexibility to adjust timelines when necessary while keeping projects on track."
  },
  {
    question: "Can you work on occupied buildings?",
    answer: "Yes, we have extensive experience working in occupied buildings and active developments. We coordinate closely with building management and residents to minimize disruption while maintaining the highest safety standards."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our construction services, 
            processes, and company policies.
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:ring-inset"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary-burgundy flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help. Contact us directly for personalized answers 
            and project consultations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13052627306" 
              className="flex items-center bg-sunflower-yellow text-rich-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (305) 262-7306
            </a>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-burgundy"
              >
                Contact Form
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex justify-center items-center text-blue-100">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">
              Monday - Friday: 7:00 AM - 6:00 PM | Saturday: 8:00 AM - 2:00 PM
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}