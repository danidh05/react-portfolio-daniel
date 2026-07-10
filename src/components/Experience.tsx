import { experience } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-ink-200/70 py-24 md:py-32 dark:border-ink-800/70"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="flex flex-col">
          {experience.map((entry, index) => (
            <Reveal
              key={entry.company}
              delay={index * 0.06}
              className="grid gap-2 border-b border-ink-200/70 py-10 first:pt-0 last:border-b-0 md:grid-cols-[14rem_1fr] md:gap-8 dark:border-ink-800/70"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-ink-900 dark:text-ink-50">
                  {entry.company}
                </h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                  {entry.role}
                </p>
                <p className="mt-3 font-mono text-xs text-ink-400 dark:text-ink-500">
                  {entry.period}
                </p>
                <p className="font-mono text-xs text-ink-400 dark:text-ink-500">
                  {entry.location}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-5 text-[15px] leading-relaxed text-ink-600 before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent-500 dark:text-ink-300 dark:before:bg-accent-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
