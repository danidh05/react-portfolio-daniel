import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../data/projects";
import Reveal from "./Reveal";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay}>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="group grid gap-8 rounded-2xl border border-ink-200 p-6 transition-colors duration-300 hover:border-accent-500/60 sm:p-8 md:grid-cols-[minmax(0,0.85fr)_1fr] dark:border-ink-800 dark:hover:border-accent-400/50"
      >
        <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-ink-200 bg-ink-100/60 dark:border-ink-800 dark:bg-ink-900/60">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-medium text-ink-900 dark:text-ink-50">
              {project.name}
            </h3>
            <FiArrowUpRight
              className="shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-500 dark:group-hover:text-accent-400"
              size={20}
            />
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-ink-100 px-3 py-1 font-mono text-xs text-ink-600 dark:bg-ink-800 dark:text-ink-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </Reveal>
  );
}
