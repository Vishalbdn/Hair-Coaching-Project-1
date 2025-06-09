import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <div className="relative">
        <input
          type="checkbox"
          id="darkmode-toggle"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />

        <label
          htmlFor="darkmode-toggle"
          className="flex items-center justify-between w-16 h-8 bg-gray-100 dark:bg-black rounded-full px-2 cursor-pointer relative transition-colors peer-checked:bg-black"
        >
          {/* Sun and Moon Icons */}
          <FiSun className="text-yellow-500 w-3 h-3 z-10" />
          <FiMoon className="text-white w-3 h-3 z-10" />

          <span
            className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full top-1 left-1 transition-transform duration-300 ease-in-out ${
              theme === "dark" ? "translate-x-8" : "translate-x-0"
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
