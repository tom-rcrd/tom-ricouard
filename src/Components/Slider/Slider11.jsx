// Slider11.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c1 from '../../assets/carousel/Projet11/1.png';
import c2 from '../../assets/carousel/Projet11/1.mp4';
import c3 from '../../assets/carousel/Projet11/12.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Composant pour gérer les vidéos dans le carousel
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
function Slider11() {
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
                    <img src={c1} alt="Logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/3</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c2} />
                    </div>
                </div>
                <div className="legend"><span>2/3</span> Vidéo du projet</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c3} />
                    </div>
                </div>
                <div className="legend"><span>3/3</span> Deuxième vidéo du projet</div>
            </div>
        </Carousel>
    );
}

export default Slider11;
