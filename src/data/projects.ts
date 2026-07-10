export interface Project {
  name: string;
  description: string;
  stack: string[];
  repo: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "GenTrack",
    description:
      "End-to-end Android app automating billing for generator subscription businesses, replacing manual tracking with tiered and metered pricing, automated invoicing, and payment reconciliation. Designed and built the full stack solo: PHP/MySQL REST API, Firebase-authenticated Android client, and offline-first SQLite sync. ~6,600 lines of Java across 48 files.",
    stack: ["Android (Java)", "PHP", "MySQL", "Firebase", "SQLite"],
    repo: "https://github.com/danidh05/GenTrack",
    image: "/image1.png",
  },
  {
    name: "StudySuite",
    description:
      "AI-powered SaaS platform for students: document upload, PDF extraction, and AI-driven Q&A, summarization, quizzes, and translation. Distributed across three independently deployable services (Next.js frontend, Laravel backend, FastAPI AI/extraction worker), coordinated via Redis job queues and authenticated service-to-service callbacks (HMAC-signed and bearer-token schemes across services).",
    stack: [
      "Next.js",
      "Laravel",
      "FastAPI",
      "AWS",
      "MySQL",
      "Redis",
      "Docker",
      "OpenAI API",
    ],
    repo: "https://github.com/danidh05/StudySuite",
    image: "/image.png",
  },
];
