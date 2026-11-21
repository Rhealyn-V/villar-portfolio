import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ darkMode: false, setDarkMode: () => {} });

// index.html sets the `dark` class before first paint (saved choice, else the
// OS preference), so we read the initial state from the DOM to avoid a flash.
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", darkMode ? "#020617" : "#F8FAFC");
  }, [darkMode]);

  const update = (value) => {
    try {
      localStorage.setItem("theme", value ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setDarkMode(value);
  };

  return <ThemeContext.Provider value={{ darkMode, setDarkMode: update }}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => useContext(ThemeContext);

export default ThemeProvider;
