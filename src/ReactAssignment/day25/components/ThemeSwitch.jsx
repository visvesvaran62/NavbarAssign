import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-2xl mb-4">Theme Switch</h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-indigo-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitch;