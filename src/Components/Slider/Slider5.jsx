// Slider5.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c6 from '../../assets/carousel/Projet5/1.mp4';
import c1 from '../../assets/carousel/Projet5/1.png';
import c2 from '../../assets/carousel/Projet5/2.png';
import c3 from '../../assets/carousel/Projet5/3.png';
import c4 from '../../assets/carousel/Projet5/5.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Composant pour gérer la lecture des vidéos
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

// Composant principal pour le slider
function Slider5() {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            animationHandler="fade"
            swipeable={false}
        >
            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c6} />
                    </div>
                </div>
                <div className="legend"><span>1/4</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c1} alt="Visuel du projet - T-shirt avec logo" />
                </div>
                <div className="legend"><span>2/4</span> Nom du projet - Nom du graphiste</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c2} alt="Visuel du projet - Autre design de t-shirt" />
                </div>
                <div className="legend"><span>3/4</span> Nom du projet - Nom du graphiste</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c3} alt="Visuel du projet - Design graphique" />
                </div>
                <div className="legend"><span>4/4</span> Nom du projet - Nom du graphiste</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c4} alt="Visuel du projet - Autre design" />
                </div>
                <div className="legend"><span>5/4</span> Nom du projet - Nom du graphiste</div>
            </div>
        </Carousel>
    );
}

export default Slider5;
