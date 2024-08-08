import React from 'react';
import { FaBell } from 'react-icons/fa';
import arthasImage from '../assets/arthas.jpg';
import jainaImage from '../assets/jaina.jpg';
import thrallImage from '../assets/thrall.jpg';
import backgroundImage from '../assets/wow-background.jpg';

const Dashboard = () => {
  const characters = [
    { name: 'Arthas', class: 'Death Knight', level: 80, image: arthasImage },
    { name: 'Jaina', class: 'Mage', level: 70, image: jainaImage },
    { name: 'Thrall', class: 'Shaman', level: 85, image: thrallImage },
  ];

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 text-white">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        {/* Statistiques Personnelles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Statistiques Personnelles</h2>
          <div className="bg-gray-900 bg-opacity-75 p-4 rounded shadow-lg flex justify-around">
            <div className="text-center">
              <h3 className="text-xl font-bold">Temps de Jeu</h3>
              <p>120 heures</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Niveau Moyen</h3>
              <p>75</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Raids Réussis</h3>
              <p>15</p>
            </div>
          </div>
        </section>

        {/* Dernières Activités */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Dernières Activités</h2>
          <div className="bg-gray-900 bg-opacity-75 p-4 rounded shadow-lg">
            <p>Vous avez terminé le donjon "Stratholme" avec succès.</p>
            <p>Vous avez rejoint la guilde "Les Défenseurs d'Azeroth".</p>
            <p>Vous avez atteint le niveau 80 avec votre personnage "Arthas".</p>
          </div>
        </section>

        {/* Messages/Notifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Messages/Notifications</h2>
          <div className="bg-gray-900 bg-opacity-75 p-4 rounded shadow-lg flex items-center">
            <FaBell className="w-10 h-10 mr-4 text-yellow-500" />
            <p>Vous avez 3 nouvelles invitations à des raids.</p>
          </div>
        </section>

        {/* Événements à venir */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Événements à venir</h2>
          <div className="bg-gray-900 bg-opacity-75 p-4 rounded shadow-lg">
            <p>Raid "Le Repaire de l'Aile Noire" - 25 mars 2024</p>
            <p>Événement PvP "Bataille de Warsong" - 1 avril 2024</p>
            <p>Raid "Le Temple d'Ahn'Qiraj" - 15 avril 2024</p>
          </div>
        </section>

        {/* Vos Personnages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Vos Personnages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {characters.map((char, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-75 p-4 rounded shadow-lg">
                <img src={char.image} alt={char.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-xl font-bold">{char.name}</h3>
                <p>Classe: {char.class}</p>
                <p>Niveau: {char.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
