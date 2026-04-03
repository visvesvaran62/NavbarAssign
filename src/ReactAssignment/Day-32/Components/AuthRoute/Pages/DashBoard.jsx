import { useContext } from "react";
import { AuthContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {state.user?.name}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;