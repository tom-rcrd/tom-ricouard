// Slider1.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c1 from '../../assets/carousel/Projet1/1bis.mp4';
import c2 from '../../assets/carousel/Projet1/1.png';
import c3 from '../../assets/carousel/Projet1/2.png';
import c4 from '../../assets/carousel/Projet1/3.png';
import c5 from '../../assets/carousel/Projet1/4.png';
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
function Slider1() {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            animationHandler="fade"
            swipeable={false}
        >         <div className="test">
        <div className="test-images">
            <div className="videotest">
                <CarouselVideo src={c1} />
            </div>
        </div>
        <div className="legend"><span>2/2</span> Vidéo du projet</div>
    </div>

           <div className="test">
                <div className="test-images">
                    <img src={c5} alt="Logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/2</span> Logo sur tee-shirt</div>
            </div>
   

            <div className="test">
                <div className="test-images">
                    <img src={c2} alt="Logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/2</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c3} alt="Logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/2</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c4} alt="Logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/2</span> Logo sur tee-shirt</div>
            </div>
     
        </Carousel>
    );
}

export default Slider1;
