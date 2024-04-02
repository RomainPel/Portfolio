import React from 'react';
import './Portfolio.css'; // Importation du fichier CSS pour le styling

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <header>
          <h1>Portfolio de Romain</h1>
          <p>Bienvenue sur le portfolio de Romain. Voici quelques-uns de ses projets :</p>
        </header>
        <main>
          <section className="projects-section">
            <h2>Projets</h2>
            <ul>
              <li>Projet 1</li>
              <li>Projet 2</li>
              <li>Projet 3</li>
              {/* Ajoutez d'autres projets ici */}
            </ul>
          </section>
          <section className="about-section">
            <h2>A propos de moi</h2>
            <p>Romain est un développeur passionné avec une expertise dans les technologies web.</p>
            {/* Ajoutez plus d'informations à propos de Romain ici */}
          </section>
        </main>
        <footer>
          <p>Contactez Romain :</p>
          <ul className="contact-info">
            <li>Email : romain@example.com</li>
            <li>Téléphone : 123-456-7890</li>
            {/* Ajoutez d'autres informations de contact ici */}
          </ul>
        </footer>
      </div>
    );
  }
}

export default Portfolio;
