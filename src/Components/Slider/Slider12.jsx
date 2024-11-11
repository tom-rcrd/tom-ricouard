// Slider12.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import c1 from '../../assets/carousel/Projet12/1.png';
import c2 from '../../assets/carousel/Projet12/2.png';
import c3 from '../../assets/carousel/Projet12/4.png';
import c4 from '../../assets/carousel/Projet12/5.png';
import c5 from '../../assets/carousel/Projet12/6.png';
import c6 from '../../assets/carousel/Projet12/7.png';
import c7 from '../../assets/carousel/Projet12/8.png';
import c8 from '../../assets/carousel/Projet12/9.png';
import c9 from '../../assets/carousel/Projet12/10.png';
import c10 from '../../assets/carousel/Projet12/11.png';
import c11 from '../../assets/carousel/Projet12/12.png';
import c12 from '../../assets/carousel/Projet12/13.png';
import c13 from '../../assets/carousel/Projet12/14.png';
import c14 from '../../assets/carousel/Projet12/15.png';
import c15 from '../../assets/carousel/Projet12/55.png';
import c16 from '../../assets/carousel/Projet12/16.png';
import c17 from '../../assets/carousel/Projet12/17.png';
import c18 from '../../assets/carousel/Projet12/18.png';
import c19 from '../../assets/carousel/Projet12/19.png';
import c20 from '../../assets/carousel/Projet12/20.png';
import c21 from '../../assets/carousel/Projet12/21.png';
import c22 from '../../assets/carousel/Projet12/22.png';
import c23 from '../../assets/carousel/Projet12/23.png';
import c24 from '../../assets/carousel/Projet12/24.mp4';
import c25 from '../../assets/carousel/Projet12/25.png';
import c26 from '../../assets/carousel/Projet12/26.png';
import c27 from '../../assets/carousel/Projet12/27.png';
import c28 from '../../assets/carousel/Projet12/28.png';
import c29 from '../../assets/carousel/Projet12/29.png';
import c30 from '../../assets/carousel/Projet12/30.png';

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
function Slider12() {
    const items = [
        { src: c1, alt: "Logo sur tee-shirt" },
        { src: c2, alt: "Logo sur tee-shirt" },
        { src: c3, alt: "Logo sur tee-shirt" },
        { src: c4, alt: "Logo sur tee-shirt" },
        { src: c5, alt: "Logo sur tee-shirt" },
        { src: c6, alt: "Logo sur tee-shirt" },
        { src: c7, alt: "Logo sur tee-shirt" },
        { src: c8, alt: "Logo sur tee-shirt" },
        { src: c9, alt: "Logo sur tee-shirt" },
        { src: c10, alt: "Logo sur tee-shirt" },
        { src: c11, alt: "Logo sur tee-shirt" },
        { src: c12, alt: "Logo sur tee-shirt" },
        { src: c13, alt: "Logo sur tee-shirt" },
        { src: c14, alt: "Logo sur tee-shirt" },
        { src: c15, alt: "Logo sur tee-shirt" },
        { src: c16, alt: "Logo sur tee-shirt" },
        { src: c17, alt: "Logo sur tee-shirt" },
        { src: c18, alt: "Logo sur tee-shirt" },
        { src: c19, alt: "Logo sur tee-shirt" },
        { src: c20, alt: "Logo sur tee-shirt" },
        { src: c21, alt: "Logo sur tee-shirt" },
        { src: c22, alt: "Logo sur tee-shirt" },
        { src: c23, alt: "Logo sur tee-shirt" },
        { src: c24, component: <CarouselVideo src={c24} /> },
        { src: c25, alt: "Logo sur tee-shirt" },
        { src: c26, alt: "Logo sur tee-shirt" },
        { src: c27, alt: "Logo sur tee-shirt" },
        { src: c28, alt: "Logo sur tee-shirt" },
        { src: c29, alt: "Logo sur tee-shirt" },
        { src: c30, alt: "Logo sur tee-shirt" },
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
            {items.map((item, index) => (
                <div className="test" key={index}>
                    <div className="test-images">
                        {item.component ? item.component : <img src={item.src} alt={item.alt} />}
                    </div>
                    <div className="legend">
                        <span>{index + 1}/{items.length}</span> {item.alt}
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default Slider12;
