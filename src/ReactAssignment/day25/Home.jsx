import LanguageSwitch from "./components/LanguageSwitch";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ThemeSwitch from "./components/ThemeSwitch";

const Home = () => {
  return (<>
  <ThemeSwitch />
  <LanguageSwitch/>
    <Navbar/>
  <Product/>

  </>);
};

export default Home;