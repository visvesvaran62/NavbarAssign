import { useEffect, useReducer } from "react";
import { AuthContext } from "./Context";

const initialState = {
  user: null,
  isLoggedIn: false,
};


const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        isLoggedIn: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};


const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    authReducer,
    initialState,
    (init) => {
      const storedUser = localStorage.getItem("user");
      return storedUser
        ? { user: JSON.parse(storedUser), isLoggedIn: true }
        : init;
    }
  );

 
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider