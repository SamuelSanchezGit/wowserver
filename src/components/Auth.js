import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import backgroundImage from '../assets/wow-background.jpg';

const Auth = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
      throw new Error('User already exists');
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
  };

  const handleLogin = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username && user.password === password);
  };

  const handleSubmit = () => {
    try {
      if (isLogin) {
        const user = handleLogin(username, password);
        if (user) {
          toast.success('Connexion réussie', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsAuthenticated(true);
          navigate('/dashboard');
        } else {
          toast.error('Identifiants incorrects', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        handleRegister(username, password);
        toast.success('Inscription réussie', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLogin(true);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">{isLogin ? 'Connexion' : 'Inscription'}</h1>
        <div className="bg-white p-8 rounded shadow-md text-black w-80">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button onClick={handleSubmit} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>
          <p className="mt-4 text-center">
            {isLogin ? 'Pas encore de compte ?' : 'Déjà inscrit ?'}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer ml-1"
            >
              {isLogin ? 'S\'inscrire' : 'Se connecter'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
