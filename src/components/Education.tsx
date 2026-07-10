import { degrees, growth } from "../data/education";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-ink-200/70 py-24 md:py-32 dark:border-ink-800/70"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="grid gap-6 sm:grid-cols-2">
          {degrees.map((deg, index) => (
            <Reveal
              key={deg.degree}
              delay={index * 0.06}
              className="rounded-2xl border border-ink-200 p-6 dark:border-ink-800"
            >
              <h3 className="font-display text-xl font-medium text-ink-900 dark:text-ink-50">
                {deg.degree}
              </h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                {deg.institution}
              </p>
              <div className="mt-4 flex items-center gap-3 font-mono text-xs text-ink-400 dark:text-ink-500">
                <span>{deg.period}</span>
                {deg.detail && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{deg.detail}</span>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <p className="mb-6 max-w-2xl text-balance text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            The MS builds directly on prior backend and frontend experience —
            its value has been in deepening how I reason about architecture,
            not in producing new showcase projects.
          </p>

          <div className="flex flex-col gap-6">
            {growth.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-balance text-[15px] leading-relaxed text-ink-600 dark:text-ink-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
