import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center border-b border-ink-200/70 pt-24 dark:border-ink-800/70"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-content px-6"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-sm text-accent-600 dark:text-accent-400"
        >
          Daniel Dhaini
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl md:text-6xl dark:text-ink-50"
        >
          Backend &amp; full-stack developer, building with{" "}
          <span className="italic text-ink-600 dark:text-ink-300">
            Node.js, Laravel, and Java/Android.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300"
        >
          Production experience across healthcare, POS, and social platforms.
          Currently completing an MS in Information Systems, seeking an
          internship or developer role.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-ink-50 transition-colors duration-200 hover:bg-accent-600 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-accent-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink-300 px-6 py-3 text-sm font-medium text-ink-700 transition-colors duration-200 hover:border-accent-500 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
