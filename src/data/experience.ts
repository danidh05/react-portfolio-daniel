export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Devzur",
    role: "Backend Developer",
    location: "Saida (Remote)",
    period: "Sept 2024 – Oct 2025",
    bullets: [
      "Architected and developed the backend of NurseCare, a platform transforming how patients request in-home nursing support; delivered multilingual support, real-time chat, loyalty systems, and region-based pricing.",
      "Built a custom POS system for a playhouse, enabling role-based access, shift tracking, and dynamic pricing for cashiers and administrators.",
      "Contributed to backend development for Univibe, a university social platform; designed APIs with clear responsibility boundaries and supported 3 junior interns, all of whom earned dev roles.",
      "Contributed to the full backend delivery lifecycle in Agile sprints, collaborating with stakeholders to translate requirements into scalable backend solutions, and shipping biweekly releases following SOLID principles and service-oriented design.",
    ],
  },
  {
    company: "Ogero",
    role: "Frontend Developer Intern",
    location: "Beirut (Hybrid)",
    period: "May – Aug 2024",
    bullets: [
      "Built interactive dashboards for telecom data analysis using React, TypeScript, and Chart.js, enabling dynamic visualization of key metrics for internal management.",
      "Quickly ramped up on modern frontend frameworks and charting principles to deliver production-ready components independently.",
    ],
  },
  {
    company: "Xpertbot",
    role: "Backend Developer Intern",
    location: "Estonia (Remote)",
    period: "Nov 2023 – May 2024",
    bullets: [
      "Built and tested RESTful APIs for XpertCheck, a geo-fencing workforce tracking system for a construction firm; enabled real-time employee check-ins, project updates, and client project visibility using Laravel and MySQL.",
      "Collaborated with a mobile dev and architect to deliver secure backend services, ensuring smooth integration with the frontend application.",
    ],
  },
];
