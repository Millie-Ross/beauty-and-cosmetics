import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Clear the user's session or token
    localStorage.removeItem('token'); 

    // 2. Redirect the user back to the home/header page
    navigate('/header');
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2>Logging out...</h2>
        <p>Please wait while we clear your session.</p>
      </div>
    </div>
  );
};

export default Logout;