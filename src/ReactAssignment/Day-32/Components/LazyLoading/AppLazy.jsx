import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));

const AppLazy = () => {
  return (<>
   <div className="bg-blue-100 h-20">
      <nav style={{ display: "flex", gap: "20px", padding: "20px", alignItems: "center" }} className="text-lg font-medium">
        <NavLink 
          to="Home" 
          className={({ isActive }) => isActive ? "text-purple-600 font-bold border-b-2 border-purple-600" : "text-gray-700 hover:text-purple-500"}
        >
          Home
        </NavLink>
        <NavLink 
          to="about" 
          className={({ isActive }) => isActive ? "text-purple-600 font-bold border-b-2 border-purple-600" : "text-gray-700 hover:text-purple-500"}
        >
          About
        </NavLink>
        <NavLink 
          to="dashboard" 
          className={({ isActive }) => isActive ? "text-purple-600 font-bold border-b-2 border-purple-600" : "text-gray-700 hover:text-purple-500"}
        >
          Dashboard
        </NavLink>
      </nav>

    
    </div>
    <div>
        <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  </>
   
  );
};

export default AppLazy;