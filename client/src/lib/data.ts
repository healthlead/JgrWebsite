// This file contains static data that could be used for fallback or static content
// All dynamic data comes from the API endpoints

export const companyInfo = {
  name: "JGR Construction Inc.",
  tagline: "Building Excellence Since 2009",
  founded: 2009,
  location: "Medley, Florida",
  serviceAreas: [
    "Miami-Dade County",
    "Broward County", 
    "Palm Beach County",
    "Monroe County"
  ],
  phone: "(305) 555-0100",
  email: "info@jgrconstruction.com",
  quotesEmail: "quotes@jgrconstruction.com",
  website: "https://jgrconstruction.com",
  linkedin: "https://www.linkedin.com/company/jgr-construction-inc",
  instagram: "https://www.instagram.com/jgrconstruction/",
  
  stats: {
    yearsExperience: 15,
    projectsCompleted: 50,
    employeeCount: 200,
    activeProjects: 7,
  },
  
  values: [
    {
      title: "We Are One",
      description: "United team approach to every project challenge"
    },
    {
      title: "Driven to Excellence", 
      description: "Continuous improvement in quality and performance"
    },
    {
      title: "Relentless",
      description: "Unwavering commitment to project success"
    }
  ]
};

export const projectTypes = [
  "concrete-shells",
  "post-tension", 
  "precast",
  "masonry",
  "architectural",
  "preconstruction",
  "other"
];
