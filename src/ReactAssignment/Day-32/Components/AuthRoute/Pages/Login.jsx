import { useContext, useState } from "react";
import { AuthContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleLogin = () => {
    const userData = { name };

    dispatch({
      type: "LOGIN",
      payload: userData,
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;