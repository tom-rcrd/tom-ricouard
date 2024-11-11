// Slider4.jsx
import React from "react";
import './Slider.css';
import c1 from '../../assets/carousel/Projet4/1.png';
import c2 from '../../assets/carousel/Projet4/2.png';
import c3 from '../../assets/carousel/Projet4/3.png';
import c4 from '../../assets/carousel/Projet4/4.png';
import c5 from '../../assets/carousel/Projet4/5.png';
import c6 from '../../assets/carousel/Projet4/6.png';
import c7 from '../../assets/carousel/Projet4/6b.png';
import c8 from '../../assets/carousel/Projet4/7.png';
import c9 from '../../assets/carousel/Projet4/8.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Composant principal pour le carousel d'images
function Slider4() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      animationHandler="fade"
      swipeable={false}
    >
      {/* Sections d'images */}
      <div className="test">
        <div className="test-images">
          <img src={c1} alt="Introduction à l'agence" />
        </div>
        <div className="legend"><span>1/9</span> Introduction à l'agence</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c2} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>2/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c3} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>3/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c4} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>4/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c5} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>5/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c6} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>6/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c7} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>7/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c8} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>8/9</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c9} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>9/9</span> Nom du projet - Nom du graphiste</div>
      </div>
    </Carousel>
  );
}

export default Slider4;
