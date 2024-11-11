// Slider3.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c1 from '../../assets/carousel/Projet3/1.png';
import c2 from '../../assets/carousel/Projet3/2.png';
import c3 from '../../assets/carousel/Projet3/3.png';
import c4 from '../../assets/carousel/Projet3/4.png';
import c5 from '../../assets/carousel/Projet3/5.png';
import c6 from '../../assets/carousel/Projet3/6.png';
import c7 from '../../assets/carousel/Projet3/7.png';
import c8 from '../../assets/carousel/Projet3/8.png';
import c9 from '../../assets/carousel/Projet3/9.png';
import c10 from '../../assets/carousel/Projet3/10.mp4';
import c11 from '../../assets/carousel/Projet3/11.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Composant pour gérer la lecture des vidéos avec Intersection Observer
function CarouselVideo({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (entry.isIntersecting) {
            video.load();
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video ref={videoRef} width="100%" loop muted preload="none" playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}

// Composant principal pour le carousel d'images et de vidéos
function Slider3() {
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
          <img src={c1} alt="Intro agence" />
        </div>
        <div className="legend"><span>1/11</span> Intro agence</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c2} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>2/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c3} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>3/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c4} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>4/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c5} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>5/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c6} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>6/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c7} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>7/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c8} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>8/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      <div className="test">
        <div className="test-images">
          <img src={c9} alt="Nom du projet - Nom du graphiste" />
        </div>
        <div className="legend"><span>9/11</span> Nom du projet - Nom du graphiste</div>
      </div>

      {/* Sections de vidéos */}
      <div className="test">
        <div className="test-images">
          <div className="videotest">
            <CarouselVideo src={c10} />
          </div>
        </div>
        <div className="legend"><span>10/11</span> Logo sur tee-shirt</div>
      </div>

      <div className="test">
        <div className="test-images">
          <div className="videotest">
            <CarouselVideo src={c11} />
          </div>
        </div>
        <div className="legend"><span>11/11</span> Logo sur tee-shirt</div>
      </div>
    </Carousel>
  );
}

export default Slider3;
