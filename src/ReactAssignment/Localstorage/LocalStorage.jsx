import { Route, Routes } from "react-router-dom"
import Register from "./Components/Register"
import Login2 from "./Components/auth/Login2"
import Dashboard from "./Components/auth/Dashboard"
import Hoc from "../Hoc/Hoc"


const LocalStorage = () => {
  return (
    <div>
        <Register/>
        <Login2/>
        <Hoc/>
        <Routes>

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    </div>
  )
}

export default LocalStorage
