import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { contactLinks } from "../data/contact";
import Reveal from "./Reveal";

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  Email: FiMail,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-ink-200/70 py-24 md:py-32 dark:border-ink-800/70"
    >
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-accent-600 dark:text-accent-400">
            Get in touch
          </p>
          <h2 className="max-w-xl text-balance font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
            Open to internship and developer roles.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col divide-y divide-ink-200/70 border-t border-ink-200/70 dark:divide-ink-800/70 dark:border-ink-800/70">
          {contactLinks.map((link, index) => {
            const Icon = icons[link.label];
            return (
              <Reveal key={link.label} delay={index * 0.05}>
                <a
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="group flex items-center justify-between gap-4 py-6"
                >
                  <span className="flex items-center gap-4">
                    <Icon size={18} />
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-wide text-ink-400 dark:text-ink-500">
                        {link.label}
                      </span>
                      <span className="text-lg text-ink-800 transition-colors duration-200 group-hover:text-accent-600 dark:text-ink-100 dark:group-hover:text-accent-400">
                        {link.value}
                      </span>
                    </span>
                  </span>
                  <FiArrowUpRight
                    className="shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-500 dark:group-hover:text-accent-400"
                    size={18}
                  />
                </a>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-16 font-mono text-xs text-ink-400 dark:text-ink-600">
          © {new Date().getFullYear()} Daniel Dhaini
        </p>
      </div>
    </section>
  );
}
