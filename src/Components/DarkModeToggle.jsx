import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../Context/ThemeContext";

const DarkModeToggle = ({ className = "" }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-brand-primary transition-all duration-300 hover:scale-110 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-brand-secondary ${className}`}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default DarkModeToggle;
