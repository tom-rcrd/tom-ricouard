// Slider7.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c0 from '../../assets/carousel/Projet7/0.png';
import c1 from '../../assets/carousel/Projet7/2.mp4';
import c2 from '../../assets/carousel/Projet7/1.mp4';
import c3 from '../../assets/carousel/Projet7/3.mp4';
import c4 from '../../assets/carousel/Projet7/4.mp4';
import c5 from '../../assets/carousel/Projet7/1.png';
import c6 from '../../assets/carousel/Projet7/2.png';
import c7 from '../../assets/carousel/Projet7/3.png';

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
function Slider7() {
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
                    <img src={c0} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/8</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c1} />
                    </div>
                </div>
                <div className="legend"><span>2/8</span> Vidéo de logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c2} />
                    </div>
                </div>
                <div className="legend"><span>3/8</span> Vidéo de logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c3} />
                    </div>
                </div>
                <div className="legend"><span>4/8</span> Vidéo de logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c4} />
                    </div>
                </div>
                <div className="legend"><span>5/8</span> Vidéo de logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c5} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>6/8</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c6} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>7/8</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c7} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>8/8</span> Logo sur tee-shirt</div>
            </div>
        </Carousel>
    );
}

export default Slider7;
