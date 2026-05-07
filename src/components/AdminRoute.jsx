import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = ({ user, loading }) => {
  // If we are still checking the database, show a loading screen
  if (loading) return <div>Loading...</div>;

  // If user is not an admin, send them to the sign-in page
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // If they ARE an admin, show the protected page (Outlet)
  return <Outlet />;
};

export default AdminRoute;