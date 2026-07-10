import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
