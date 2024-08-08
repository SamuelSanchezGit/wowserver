import React from 'react';
import backgroundImage from '../assets/wow-background.jpg';
import newsImage from '../assets/news-image.jpg'; // Exemple d'image pour les actualités

const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 p-8 text-white">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Bienvenue sur notre serveur privé WoW</h1>
          <p className="text-2xl mb-4">Rejoignez notre guilde et commencez votre aventure aujourd'hui !</p>
          <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700">
            Rejoignez-nous
          </button>
        </header>
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Actualités</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gray-900 bg-opacity-75 p-4 m-4 rounded shadow-lg max-w-md">
              <img src={newsImage} alt="Actualités" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold mb-2">Nouvelle extension: La Guerre des Ombres</h3>
              <p>
                Découvrez la nouvelle extension de notre serveur, avec des nouvelles zones, des quêtes épiques et des donjons inédits. Préparez-vous pour des aventures palpitantes.
              </p>
            </div>
            {/* Ajouter d'autres articles similaires ici */}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">À propos de nous</h2>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Notre serveur privé WoW est dédié à offrir une expérience de jeu authentique et enrichissante. Nous sommes une communauté de joueurs dévoués qui aiment partager notre passion pour World of Warcraft.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
