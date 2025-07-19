export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What types of concrete construction does JGR specialize in?",
    answer: "JGR Construction specializes in concrete shells, post-tension systems, precast concrete, masonry, architectural concrete, and preconstruction services. We have extensive experience in commercial, residential, and industrial projects.",
    category: "services"
  },
  {
    id: 2,
    question: "What areas does JGR Construction serve?",
    answer: "We serve Miami-Dade County, Broward County, Palm Beach County, and Monroe County. Our main office is located in Medley, Florida, and we have completed projects throughout South Florida.",
    category: "coverage"
  },
  {
    id: 3,
    question: "How long has JGR Construction been in business?",
    answer: "JGR Construction was founded in 2009 and has been serving South Florida for over 15 years. We have completed over 50 major projects and continue to grow our portfolio.",
    category: "company"
  },
  {
    id: 4,
    question: "What is post-tension concrete and why is it beneficial?",
    answer: "Post-tension concrete uses high-strength steel cables that are tensioned after the concrete has hardened. This creates compressive forces that improve structural performance, allowing for longer spans, thinner slabs, and better crack control.",
    category: "technical"
  },
  {
    id: 5,
    question: "How do I request a quote for my project?",
    answer: "You can request a quote by calling us at (305) 555-0100, emailing quotes@jgrconstruction.com, or filling out the contact form on our website. We'll schedule a consultation to discuss your project requirements.",
    category: "quotes"
  },
  {
    id: 6,
    question: "What is the typical timeline for a concrete construction project?",
    answer: "Project timelines vary depending on size and complexity. A typical commercial project can take 6-18 months from start to finish. We provide detailed project schedules during the preconstruction phase.",
    category: "timeline"
  },
  {
    id: 7,
    question: "Does JGR Construction handle both design and construction?",
    answer: "We primarily focus on construction, but we work closely with architects and engineers during the preconstruction phase to ensure constructability and optimize designs for cost and efficiency.",
    category: "services"
  },
  {
    id: 8,
    question: "What quality control measures does JGR implement?",
    answer: "We have comprehensive quality control programs including regular inspections, material testing, and adherence to industry standards. All our work meets or exceeds building codes and industry specifications.",
    category: "quality"
  },
  {
    id: 9,
    question: "Can JGR Construction work on existing buildings?",
    answer: "Yes, we specialize in both new construction and renovations. Our team has extensive experience in retrofitting existing structures with modern concrete systems and reinforcements.",
    category: "services"
  },
  {
    id: 10,
    question: "What safety measures does JGR implement on job sites?",
    answer: "Safety is our top priority. We maintain strict safety protocols, provide regular training, and ensure all workers follow OSHA guidelines. We have an excellent safety record with zero major incidents.",
    category: "safety"
  }
];

export const faqCategories = [
  { id: "services", name: "Services" },
  { id: "coverage", name: "Coverage Area" },
  { id: "company", name: "Company" },
  { id: "technical", name: "Technical" },
  { id: "quotes", name: "Quotes & Pricing" },
  { id: "timeline", name: "Project Timeline" },
  { id: "quality", name: "Quality Control" },
  { id: "safety", name: "Safety" }
]; 