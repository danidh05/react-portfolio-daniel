import project1 from "../assets/projects/WhatsAppClone.jpg";
import project2 from "../assets/projects/Yoom.png";
import project3 from "../assets/projects/Streamify.png";
import project4 from "../assets/projects/StudySuite.png";
import project5 from "../assets/projects/XpertCheck.png";

export const HERO_CONTENT = `I’m Daniel Dhaini — a Full Stack Developer and AI enthusiast passionate about building scalable systems that bridge business needs with intelligent technology. With hands-on experience across Laravel, Next.js, and FastAPI, I’ve delivered production-grade projects ranging from social platforms and eCommerce systems to AI-powered SaaS solutions. My focus is on creating performant, maintainable, and elegant software that drives real impact.`;

export const ABOUT_TEXT = `I’m a results-driven Full Stack Developer with a Bachelor’s in Business Computer from the Lebanese University (GPA 3.77/4.0) and a current Master’s candidate in Information Systems Engineering. My technical expertise spans backend engineering with Laravel, MySQL, and REST APIs; and modern frontends using React, Next.js, and TypeScript — styled with Tailwind CSS and powered by clean architecture.`;

export const ABOUT_TEXT2 = `At Devzur, I lead backend development for real-world applications including NurseCare, Univibe, and the Playhouse POS system, applying SOLID principles, Redis queues, and AWS infrastructure. Beyond web development, I build .NET desktop applications using SQL Server, and have a strong foundation in QA, both manual and automated. I’m currently expanding into AI and data-driven architectures through the IBM AI Engineering Professional Certificate, combining backend precision with machine learning insight.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 – Present",
    role: "Backend Developer",
    company: "Devzur",
    description: `Architected and developed the backend of **NurseCare**, a multilingual healthcare platform with real-time chat, role-based access, and location-based pricing.  
Built a **Playhouse POS system** featuring role management, shift tracking, and expense monitoring for administrators.  
Led backend development for **Univibe**, a social platform for universities, mentoring three Laravel interns and overseeing API design and scalability.  
Delivered features in Agile sprints with SOLID principles, service-based architecture, and continuous integration.`,
    technologies: [
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "REST APIs",
      "Docker",
      "Git",
    ],
  },
  {
    year: "May 2024 – Aug 2024",
    role: "Frontend Developer Intern",
    company: "Ogero",
    description: `Developed interactive dashboards for telecom data visualization using React, TypeScript, and Chart.js.  
Optimized component performance through lazy loading and state management improvements.  
Delivered production-ready charts and analytics tools praised by internal teams for usability and speed.`,
    technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
  },
  {
    year: "Nov 2023 – May 2024",
    role: "Backend Developer Intern",
    company: "Xpertbot",
    description: `Built and tested RESTful APIs for **XpertCheck**, a Laravel-based employee management platform supporting attendance tracking, client management, and project visibility.  
Enhanced API throughput and data integrity while collaborating with cross-functional teams in Agile sprints.`,
    technologies: ["Laravel", "MySQL", "Bootstrap", "Git", "REST APIs"],
  },
];

export const PROJECTS = [
  {
    title: "StudySuite",
    image: project4,
    description:
      "An AI-powered SaaS platform revolutionizing student productivity. Built with Laravel, FastAPI, and Next.js, StudySuite enables PDF uploads, AI-driven Q&A, summarization, and translation. Features secure inter-service communication via HMAC-authenticated callbacks, Redis queues for async processing, and AWS S3 for file storage. Designed for scalability and seamless UX.",
    technologies: [
      "Laravel",
      "FastAPI",
      "Next.js",
      "TailwindCSS",
      "MySQL",
      "Redis",
      "AWS S3",
      "Docker",
    ],
  },
  {
    title: "XpertCheck",
    image: project5,
    description:
      "A comprehensive workforce management system built with Laravel and MySQL. Enables admins to manage employees, track attendance, and organize clients and projects with real-time monitoring and intuitive UI. Enhanced efficiency and productivity across multiple organizations through automation and detailed reporting.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "REST APIs", "Git"],
  },
  {
    title: "Streamify",
    image: project3,
    description:
      "A Netflix-style streaming platform using the MERN stack and WebTorrent. Fetches TMDB content dynamically, streams torrent-based media in-browser, and supports organized playback for movies and TV shows with multiple resolutions and magnet link handling. Focused on decentralized streaming performance and clean UI.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "TailwindCSS",
      "WebTorrent",
    ],
  },
  {
    title: "Yoom",
    image: project2,
    description:
      "A full-featured video conferencing platform with real-time meetings, recording, screen sharing, and personal room management. Built with Next.js and Stream.io, integrating Clerk for authentication and ShadCN for UI components. Fully responsive and optimized for modern collaboration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Stream.io",
      "Clerk",
      "Shadcn",
    ],
  },
  {
    title: "WhatsApp Clone",
    image: project1,
    description:
      "A real-time messaging app supporting text, emoji, image, and video chat for individuals and groups. Includes custom themes, video calling, and OpenAI-powered features — ChatGPT for contextual Q&A and DALL·E for on-demand image generation. Built with Convex for real-time data sync.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "ConvexDB",
      "OpenAI API",
    ],
  },
];

export const CONTACT = {
  address: "Saida – Beirut, Lebanon",
  phoneNo: "+961 78 919 829",
  email: "danidh20052005@gmail.com",
  website: "https://daniel-dhaini.vercel.app/",
};
