import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">WoW Private Server</h1>
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="px-4 py-2 hover:underline">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="px-4 py-2 hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="px-4 py-2 hover:underline">Logout</button>
          </>
        ) : (
          <Link to="/auth" className="px-4 py-2 hover:underline">Login</Link>
        )}
      </nav>
      <div className="md:hidden">
        <button
          type="button"
          className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4 mt-4">
          <Link to="/" className="px-4 py-2 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="px-4 py-2 hover:underline" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <button onClick={handleLogout} className="px-4 py-2 hover:underline">Logout</button>
            </>
          ) : (
            <Link to="/auth" className="px-4 py-2 hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
