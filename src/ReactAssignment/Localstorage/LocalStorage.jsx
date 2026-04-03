import { Route, Routes, Link } from "react-router-dom";
import Register from "./Components/Register";
import Login2 from "./Components/auth/Login2";
import Dashboard from "./Components/auth/Dashboard";

const LocalStorage = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex gap-4 mb-8">
        <Link to="" className="text-blue-500 underline font-medium">Register</Link>
        <Link to="login" className="text-blue-500 underline font-medium">Login</Link>
        <Link to="dashboard" className="text-blue-500 underline font-medium">Dashboard</Link>
      </div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login2 />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default LocalStorage;