import { useState } from "react";
import { AppContext } from "../context/AppContext";


const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang,setLang]=useState("en")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const  toggleLang=()=>{
   setLang(lang === "en" ? "ta" : "en");

  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme,lang,toggleLang }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;