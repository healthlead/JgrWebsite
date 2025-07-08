import { 
  projects, services, contactInquiries,
  type Project, type InsertProject,
  type Service, type InsertService,
  type ContactInquiry, type InsertContactInquiry
} from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Contact Inquiries
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private services: Map<number, Service>;
  private contactInquiries: Map<number, ContactInquiry>;
  private currentProjectId: number;
  private currentServiceId: number;
  private currentInquiryId: number;

  constructor() {
    this.projects = new Map();
    this.services = new Map();
    this.contactInquiries = new Map();
    this.currentProjectId = 1;
    this.currentServiceId = 1;
    this.currentInquiryId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed projects with real data from research
    const projectsData: InsertProject[] = [
      {
        name: "Wynwood Station",
        description: "340,000 sq ft multifamily mixed-use building in Miami's vibrant Wynwood district",
        location: "Wynwood, Miami, FL",
        type: "Mixed-Use",
        size: "340,000 sq ft",
        status: "Completed",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        latitude: "25.8014",
        longitude: "-80.1995",
        address: "2700 N Miami Ave, Miami, FL 33127",
        completionDate: "2023",
      },
      {
        name: "NoMad Residences Wynwood",
        description: "9-story luxury condominium tower with 329 units serving as shell contractor",
        location: "Wynwood, Miami, FL",
        type: "Residential",
        size: "329 Units",
        status: "Completed",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        latitude: "25.8010",
        longitude: "-80.1990",
        address: "400 NW 26th St, Miami, FL 33127",
        completionDate: "2024",
      },
      {
        name: "Moxy Wynwood",
        description: "12-story boutique hotel with 120 rooms - Structural contractor",
        location: "Wynwood, Miami, FL",
        type: "Hospitality",
        size: "120 Rooms",
        status: "Completed",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        featured: false,
        latitude: "25.8020",
        longitude: "-80.1985",
        address: "2727 NW 2nd Ave, Miami, FL 33127",
        completionDate: "2023",
      },
      {
        name: "501 First Residences",
        description: "40-story residential tower in Downtown Miami - Shell contractor",
        location: "Downtown Miami, FL",
        type: "Residential",
        size: "40 Stories",
        status: "Completed",
        imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        featured: false,
        latitude: "25.7742",
        longitude: "-80.1936",
        address: "501 1st St, Miami, FL 33131",
        completionDate: "2022",
      },
      {
        name: "The Kavista",
        description: "8-story apartment complex with 282 units, 401,800 sq ft concrete/masonry",
        location: "El Portal, Miami, FL",
        type: "Residential",
        size: "282 Units",
        status: "Completed",
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        featured: false,
        latitude: "25.8520",
        longitude: "-80.1940",
        address: "700 NE 90th St, El Portal, FL 33138",
        completionDate: "2023",
      },
      {
        name: "Wynwood Haus",
        description: "20-story residential tower with 224 units, 322,530 sq ft concrete/masonry",
        location: "Wynwood, Miami, FL",
        type: "Residential",
        size: "224 Units",
        status: "Completed",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        featured: false,
        latitude: "25.8005",
        longitude: "-80.2000",
        address: "2103 NW 1st Ct, Miami, FL 33127",
        completionDate: "2022",
      },
      {
        name: "Brickell Heights East",
        description: "Modern residential tower with luxury amenities - Concrete construction",
        location: "Brickell, Miami, FL",
        type: "Residential",
        size: "300 Units",
        status: "In Progress",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        latitude: "25.7617",
        longitude: "-80.1918",
        address: "825 Brickell Bay Dr, Miami, FL 33131",
        completionDate: "2025",
      },
      {
        name: "Design District Plaza",
        description: "Mixed-use development with retail and residential components",
        location: "Design District, Miami, FL",
        type: "Mixed-Use",
        size: "450,000 sq ft",
        status: "Planning",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        latitude: "25.8020",
        longitude: "-80.1950",
        address: "140 NE 39th St, Miami, FL 33137",
        completionDate: "2026",
      },
    ];

    projectsData.forEach(project => {
      const id = this.currentProjectId++;
      const projectWithDefaults: Project = { 
        ...project, 
        id, 
        createdAt: new Date(),
        size: project.size || null,
        imageUrl: project.imageUrl || null,
        featured: project.featured || false,
        latitude: project.latitude || null,
        longitude: project.longitude || null,
        address: project.address || null,
        completionDate: project.completionDate || null
      };
      this.projects.set(id, projectWithDefaults);
    });

    // Seed services
    const servicesData: InsertService[] = [
      {
        name: "Conventional Concrete Shells",
        description: "Expert concrete shell construction for high-rise residential and commercial buildings using advanced techniques and quality materials.",
        icon: "building",
        featured: true,
      },
      {
        name: "Post-Tension Concrete",
        description: "Specialized post-tensioned concrete systems for enhanced structural integrity and longer spans in complex building designs.",
        icon: "shield-check",
        featured: true,
      },
      {
        name: "Pre-cast Concrete",
        description: "Precision-manufactured precast concrete elements for faster construction timelines and superior quality control.",
        icon: "layers",
        featured: true,
      },
      {
        name: "Masonry Construction",
        description: "Traditional and architectural masonry work including block, brick, and stone construction for aesthetic and structural applications.",
        icon: "brick",
        featured: true,
      },
      {
        name: "Architectural Concrete",
        description: "Decorative and exposed architectural concrete finishes that combine structural integrity with aesthetic appeal.",
        icon: "eye",
        featured: true,
      },
      {
        name: "Pre-Construction Services",
        description: "Comprehensive planning, value engineering, and project coordination to optimize construction efficiency and cost-effectiveness.",
        icon: "clipboard-list",
        featured: true,
      },
    ];

    servicesData.forEach(service => {
      const id = this.currentServiceId++;
      const serviceWithDefaults: Service = { 
        ...service, 
        id,
        featured: service.featured || false
      };
      this.services.set(id, serviceWithDefaults);
    });
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.featured);
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id, 
      createdAt: new Date(),
      size: insertProject.size || null,
      imageUrl: insertProject.imageUrl || null,
      featured: insertProject.featured || false,
      latitude: insertProject.latitude || null,
      longitude: insertProject.longitude || null,
      address: insertProject.address || null,
      completionDate: insertProject.completionDate || null
    };
    this.projects.set(id, project);
    return project;
  }

  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { 
      ...insertService, 
      id,
      featured: insertService.featured || false
    };
    this.services.set(id, service);
    return service;
  }

  // Contact Inquiries
  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date(),
      phone: insertInquiry.phone || null,
      company: insertInquiry.company || null,
      projectType: insertInquiry.projectType || null
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
