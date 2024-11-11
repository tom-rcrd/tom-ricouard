import React, { useRef, useEffect } from "react";
import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Importation des images et vidéos
import c1 from '../../assets/carousel/Projet2/1.png';
import c2 from '../../assets/carousel/Projet2/2.png';
import c3 from '../../assets/carousel/Projet2/3.png';
import c5 from '../../assets/carousel/Projet2/5.png';
import c6 from '../../assets/carousel/Projet2/6.png';
import c7 from '../../assets/carousel/Projet2/7.png';
import c8 from '../../assets/carousel/Projet2/6.mp4';

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
        <video ref={videoRef} className="videotest" loop muted preload="none">
            <source src={src} type="video/mp4" />
        </video>
    );
}

function Slider2() {
    // Tableau d'éléments (images et vidéos) avec légendes
    const slides = [
        { src: c8, type: 'video', legend: 'Vidéo de logo sur tee-shirt' }, // Vidéo
        { src: c1, type: 'image', legend: 'Intro agence' }, // Image
        { src: c2, type: 'image', legend: 'Nom du projet - Nom du graphiste' }, // Image
        { src: c3, type: 'image', legend: 'Nom du projet - Nom du graphiste' }, // Image
        { src: c6, type: 'image', legend: 'Nom du projet - Nom du graphiste' }, // Image
        { src: c7, type: 'image', legend: 'Nom du projet - Nom du graphiste' }, // Image
        { src: c5, type: 'image', legend: 'Nom du projet - Nom du graphiste' }, // Image
    ];

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            animationHandler="fade"
            swipeable={false}
        >
            {slides.map((slide, index) => (
                <div className="test" key={index}>
                    <div className="test-images">
                        {slide.type === 'video' ? (
                            <CarouselVideo src={slide.src} />
                        ) : (
                            <img src={slide.src} alt={`Slide ${index + 1}`} />
                        )}
                    </div>
                    <div className="legend">
                        <span>{`${index + 1}/${slides.length}`}</span> {/* Compteur automatique */}
                        {slide.legend} {/* Légende unique */}
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default Slider2;
