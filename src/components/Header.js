import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast.success('Déconnexion réussie', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/auth');
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">WoW Private Server</h1>
      <nav>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="mx-2 hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="mx-2 hover:underline">Logout</button>
          </>
        ) : (
          <Link to="/auth" className="mx-2 hover:underline">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
