import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
            />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
