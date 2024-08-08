import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/wow-background.jpg';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
    axios.post(url, { username, password })
      .then(response => {
        alert(isLogin ? 'Connexion réussie' : 'Inscription réussie');
      })
      .catch(error => {
        alert('Erreur lors de la ' + (isLogin ? 'connexion' : 'inscription'));
      });
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
