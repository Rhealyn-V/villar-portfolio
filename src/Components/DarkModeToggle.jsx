import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../Context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      className="icon-btn"
    >
      {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
};

export default DarkModeToggle;
