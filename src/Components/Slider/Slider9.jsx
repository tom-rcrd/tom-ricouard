// Slider9.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c7 from '../../assets/carousel/Projet9/1.mp4';
import c1 from '../../assets/carousel/Projet9/1.png';
import c2 from '../../assets/carousel/Projet9/2.png';
import c3 from '../../assets/carousel/Projet9/3.png';
import c4 from '../../assets/carousel/Projet9/4.png';
import c5 from '../../assets/carousel/Projet9/5.png';
import c6 from '../../assets/carousel/Projet9/6.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Composant pour la gestion des vidéos dans le carousel
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
function Slider9() {
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
                    <img src={c1} alt="Logo sur tee-shirt 1" />
                </div>
                <div className="legend"><span>1/7</span> Logo sur tee-shirt 1</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c7} />
                    </div>
                </div>
                <div className="legend"><span>2/7</span> Vidéo du projet</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c2} alt="Logo sur tee-shirt 2" />
                </div>
                <div className="legend"><span>3/7</span> Logo sur tee-shirt 2</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c3} alt="Logo sur tee-shirt 3" />
                </div>
                <div className="legend"><span>4/7</span> Logo sur tee-shirt 3</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c4} alt="Logo sur tee-shirt 4" />
                </div>
                <div className="legend"><span>5/7</span> Logo sur tee-shirt 4</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c5} alt="Logo sur tee-shirt 5" />
                </div>
                <div className="legend"><span>6/7</span> Logo sur tee-shirt 5</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c6} alt="Logo sur tee-shirt 6" />
                </div>
                <div className="legend"><span>7/7</span> Logo sur tee-shirt 6</div>
            </div>
        </Carousel>
    );
}

export default Slider9;
