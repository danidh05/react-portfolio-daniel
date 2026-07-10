export interface Degree {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const degrees: Degree[] = [
  {
    degree: "BS, Business Computer",
    institution: "Lebanese University, Faculty of Technology, Saida, Lebanon",
    period: "2022 – 2025",
    detail: "GPA 3.77",
  },
  {
    degree: "MS, Information Systems",
    institution: "Lebanese University, Faculty of Technology, Saida, Lebanon",
    period: "2025 – 2027 (Expected)",
  },
];

export const growth: string[] = [
  "Deepened backend architecture understanding through a Spring Boot course progressing from IoC/dependency injection fundamentals through REST service design, JWT/OAuth2-based security with role protection, and PostgreSQL persistence — moving from XML-based to annotation-driven configuration over the term.",
  "Strengthened frontend fundamentals through a React course progressing from modern JavaScript (promises, async/await, modules) into React hooks (useState, useEffect), client-side routing, protected routes, and REST API integration, culminating in a Student Course Management System.",
  "Additional coursework broadened this further: ASP.NET MVC/Entity Framework, design patterns (GoF, UML), Java RMI/distributed systems, POSIX systems programming, AI/neural networks (CNN-based document classification, MLP-based audio classification), and Agile/Scrum with Jira.",
];
