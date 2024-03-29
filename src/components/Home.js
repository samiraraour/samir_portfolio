import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="photo-text">
      <div className="image-container">
        <img src="/SamirAraour.png" alt="im" className="profile-image" />
      </div>
      <div className="text-blue-france">
        <h1>Salut! Je suis Samir Araour</h1> 
        <h2>Infographe, photographe et UI designer</h2>
        <p>Je suis spécialisé en brand design, réalisation de vidéos publicitaires et shootings. Je crée des visuels percutants, des interfaces utilisateur attrayantes et des expériences visuelles captivantes. Mon travail englobe la conception de logos, de brochures, d'affiches, ainsi que la capture d'images authentiques et la réalisation de vidéos publicitaires engageantes. </p>
      </div>
      
      </div>
      <div className="skills-container">
        <h1>Mes compétences</h1>
        <div className="skills-row">
          <div className="skill">
          <img src="/aa.png" alt="im" className="skill-image" />
          </div>
          <div className="skill">
          <img src="/bb.png" alt="im" className="skill-image" />
          </div>
          <div className="skill">
          <img src="/cc.png" alt="im" className="skill-image" />
          </div>
          <div className="skill">
          <img src="/dd.png" alt="im" className="skill-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
