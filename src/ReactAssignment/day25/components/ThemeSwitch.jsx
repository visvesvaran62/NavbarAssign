import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(AppContext);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="p-4">
        <h2>Theme: {theme}</h2>

        <button
          onClick={handleToggleTheme}
          className="bg-blue-500 text-white px-4 py-2 mt-2"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}{" "}
        </button>
      </div>
    </>
  );
};

export default ThemeSwitch;