export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Rodriguez",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in construction management, John leads JGR Construction with a vision for excellence and innovation in concrete construction.",
    imageUrl: "/images/team-member-1.jpg",
    email: "john.rodriguez@jgrconstruction.com",
    phone: "(305) 555-0101",
    linkedin: "https://www.linkedin.com/in/john-rodriguez-jgr"
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    position: "Chief Operations Officer",
    bio: "Maria oversees all operational aspects of JGR Construction, ensuring projects are delivered on time, within budget, and to the highest quality standards.",
    imageUrl: "/images/team-member-2.jpg",
    email: "maria.gonzalez@jgrconstruction.com",
    phone: "(305) 555-0102",
    linkedin: "https://www.linkedin.com/in/maria-gonzalez-jgr"
  },
  {
    id: 3,
    name: "Carlos Martinez",
    position: "Chief Technical Officer",
    bio: "Carlos brings 15 years of technical expertise in concrete engineering, specializing in post-tension systems and advanced construction methodologies.",
    imageUrl: "/images/team-member-3.jpg",
    email: "carlos.martinez@jgrconstruction.com",
    phone: "(305) 555-0103",
    linkedin: "https://www.linkedin.com/in/carlos-martinez-jgr"
  }
]; 