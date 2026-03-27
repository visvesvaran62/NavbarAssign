import React from 'react'
import Navbar from '../Components/Navbar'
import AuthRoute from '../Route/AuthRoute'
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {
   const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/assignments/27/login")}>
        Go to Login
      </button>

      <button onClick={() => navigate("/assignments/27/register")}>
        Go to Register
      </button>
    </>
  );
};

export default Dashboard
