import { useState } from "react";
import { AppContext } from "../context/AppContext";


const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang,setLang]=useState("en")
  const[count,setCount]=useState(0)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const  toggleLang=()=>{
   setLang(lang === "en" ? "ta" : "en");

  }
    const addToCart = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme,lang,toggleLang,count,addToCart}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;