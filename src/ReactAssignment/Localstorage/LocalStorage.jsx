import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login2 from "./Components/auth/Login2";
import Dashboard from "./Components/auth/Dashboard";

const LocalStorage = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login2 />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default LocalStorage;