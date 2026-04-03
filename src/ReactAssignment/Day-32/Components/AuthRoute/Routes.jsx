import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Pages/Login';
import Dashboard from './Pages/DashBoard';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
