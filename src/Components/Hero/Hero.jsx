import './Hero.css';
import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider'; 
import Slider2 from '../Slider/Slider2';
import Slider3 from '../Slider/Slider3';
import Slider4 from '../Slider/Slider4'; 
import Slider5 from '../Slider/Slider5';  
import Slider6 from '../Slider/Slider6'; 
import Slider7 from '../Slider/Slider7';
import Slider8 from '../Slider/Slider8';
import Slider9 from '../Slider/Slider9';
import Slider95 from '../Slider/Slider95';
import Slider10 from '../Slider/Slider10';
import Slider10b from '../Slider/Slider10b';
import Slider11 from '../Slider/Slider11';
import Slider12 from '../Slider/Slider12';
import Slider13 from '../Slider/Slider13';
import Slider14 from '../Slider/Slider14';
import Slider15 from '../Slider/Slider15';
import Slider16 from '../Slider/Slider16';
import Slider17 from '../Slider/Slider17'; 
import Slider18 from '../Slider/Slider18'; 
import Slider19 from '../Slider/Slider19'; 
import Footer from '../Footer/Footer';
import projectDescriptions from './projectDescriptions.json';

const projectData = [
   { id: 'projet19', year: '2020', title: 'L\'Etage', type: 'Direction artistique / Print / Visuels', description: projectDescriptions.projet19, Slider: Slider19 },
   { id: 'projet18', year: '2024', title: 'Lite', type: 'Logotype', description: projectDescriptions.projet18, Slider: Slider18 },
   { id: 'projet17', year: '2024', title: 'Höfn Studio', type: 'Webdesign / Développement web',description: projectDescriptions.projet17, Slider: Slider17 },
   { id: 'projet15', year: '2023', title: 'Lite - Hargneux', type: 'Montage / Effets visuels',description: projectDescriptions.projet15, Slider: Slider15 },
   { id: 'projet14', year: '2023', title: 'APIX - Fête de la musique', type: 'Direction artistique',description: projectDescriptions.projet14, Slider: Slider14 },
   { id: 'projet13', year: '2022', title: 'Geminii', type: 'Vidéo',description: projectDescriptions.projet13, Slider: Slider13 },
   { id: 'projet16', year: '2022', title: 'APIX - Diving', type: 'Cover',description: <projectDescriptions className="projet16"></projectDescriptions>, Slider: Slider16 },
   { id: 'projet12', year: '2022', title: 'Lite - Lite Tape vol.1', type: 'Visuel',description: projectDescriptions.projet12, Slider: Slider12 },
   { id: 'projet11', year: '2022', title: 'APIX', type: 'Visuels / Direction Artistique',description: projectDescriptions.projet11, Slider: Slider11 },
   { id: 'projet10b', year: '2022', title: 'Lite - Poche', type: 'Visuel',description: projectDescriptions.projet10b, Slider: Slider10b },
   { id: 'projet10', year: '2021', title: 'Jackson MNR', type: 'Développement web',description: projectDescriptions.projet10, Slider: Slider10 },
   { id: 'projet95', year: '2021', title: 'Kartoon - Clair Obscur', type: 'Custom type / Cover',description: projectDescriptions.projet95, Slider: Slider95 },
   { id: 'projet9', year: '2021', title: 'Après la marche', type: 'Édition / Photo',description: projectDescriptions.projet9, Slider: Slider9 },
   { id: 'projet8', year: '2020', title: 'Studio Carré', type: 'Logotype',description: projectDescriptions.projet8, Slider: Slider8 },
   { id: 'projet7', year: '2020', title: 'Kartoon', type: 'Effets vidéos',description: projectDescriptions.projet7, Slider: Slider7 },
   { id: 'projet6', year: '2020', title: 'Chicago', type: 'Installation / Édition / Print',description: projectDescriptions.projet6, Slider: Slider6 },
   { id: 'projet5', year: '2020', title: 'Mémoire DNSEP', type: 'Édition',description: projectDescriptions.projet5, Slider: Slider5 },
   { id: 'projet4', year: '2020', title: 'Esthétique des écrans', type: 'Édition',description: projectDescriptions.projet4, Slider: Slider4 },
   { id: 'projet3', year: '2020', title: 'Module', type: 'Installation / Édition / Affiches',description: projectDescriptions.projet3, Slider: Slider3 },
   { id: 'projet2', year: '2019', title: 'Intro - Béton', type: 'Motion design / Print / Photographie',description: projectDescriptions.projet2, Slider: Slider2 },
   { id: 'projet1', year: '2018', title: 'Une Saison Graphique', type: 'Webdesign',description: projectDescriptions.projet1, Slider: Slider },
];

const Project = ({ project, selectedProjet, scrollToProject }) => {
  return (
    <div className={`projet ${selectedProjet === project.id ? 'selected' : ''}`}>
      <a 
        href={`#${project.id}`} 
        onClick={(e) => {
          e.preventDefault();
          scrollToProject(project.id);
        }}
      >
        <li className="index-item">{project.year}</li>
        <li className="index-item">{project.title}</li>
        <li className="index-item type">{project.type}</li>
        
      </a>
    </div>
  );
};

function Hero() {
  const [selectedProjet, setSelectedProjet] = useState(null); 
  const [isScrolling, setIsScrolling] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isScrolling) {
            setSelectedProjet(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    const projetSections = document.querySelectorAll('.hero-projets > div');
    projetSections.forEach((section) => observer.observe(section));

    return () => {
      projetSections.forEach((section) => observer.unobserve(section));
    };
  }, [isScrolling]);

  const scrollToProject = (id) => {
    const target = document.getElementById(id);
    if (target) {
      setIsScrolling(true);
      target.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setIsScrolling(false);
        setSelectedProjet(id);
      }, 600); // ajuster si besoin
    }
  };

  const toggleDescriptionVisibility = (id) => {
    if (visibleDescription === id) {
      // Commence la transition de disparition
      setTransitionClass('leaving');
      // Masque le contenu après la transition de disparition
      setTimeout(() => {
        setVisibleDescription(null);
        setTransitionClass('');
      }, 700); // Durée de disparition : 0.5s
    } else {
      // Montre directement le contenu avec transition d'apparition
      setVisibleDescription(id);
      setTransitionClass('entering');
    }
 };

  return (
    <div className="hero">
      <section className="hero-index">
        <div className="container">
          {projectData.map(project => (
            <Project 
              key={project.id} 
              project={project} 
              selectedProjet={selectedProjet} 
              scrollToProject={scrollToProject} 
            />
          ))}
        </div>
        <Footer />
      </section>

      <div id="hero-index">
        <section className="hero-projets">
          {projectData.map(project => (
            <div key={project.id} id={project.id}>
              <project.Slider />
              <div className="projet" onClick={() => toggleDescriptionVisibility(project.id)}>
                <a href={`#${project.id}`}>
                  <li className="index-item">{project.year}</li>
                  <li className="index-item">{project.title}</li>
                  <li className="index-item type">{project.type}</li>
                </a>
                <p
              className={`index-item description ${
                visibleDescription === project.id ? transitionClass : ''
              }`}
            >
              {project.description}
            </p>
              </div>
            </div>
          ))}
        </section>
       </div>
       </div>
  );
}

export default Hero;
