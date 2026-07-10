import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-sm text-accent-600 dark:text-accent-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
        {title}
      </h2>
    </Reveal>
  );
}
