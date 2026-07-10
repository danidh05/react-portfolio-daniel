import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors duration-200 hover:border-accent-500 hover:text-accent-500 dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
    >
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}
