// Slider6.jsx
import React, { useRef, useEffect } from "react";
import './Slider.css';
import c1 from '../../assets/carousel/Projet6/1.png';
import c2 from '../../assets/carousel/Projet6/2.png';
import c3 from '../../assets/carousel/Projet6/3.png';
import c4 from '../../assets/carousel/Projet6/4.png';
import c5 from '../../assets/carousel/Projet6/5.png';
import c6 from '../../assets/carousel/Projet6/6.png';
import c7 from '../../assets/carousel/Projet6/7.png';
import c777 from '../../assets/carousel/Projet6/777.png';
import c777b from '../../assets/carousel/Projet6/777b.mp4';
import c8 from '../../assets/carousel/Projet6/8.png';
import c9 from '../../assets/carousel/Projet6/9.png';
import c10 from '../../assets/carousel/Projet6/10.png';
import c11 from '../../assets/carousel/Projet6/11.png';
import c12 from '../../assets/carousel/Projet6/12.png';
import c13 from '../../assets/carousel/Projet6/13.png';
import c14 from '../../assets/carousel/Projet6/14.png';
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
function Slider6() {
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
                    <img src={c1} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>1/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c2} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>2/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c3} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>3/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c4} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>4/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c5} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>5/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c6} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>6/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c7} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>7/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c777} alt="Image artistique de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>8/15</span> Image artistique de logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <div className="videotest">
                        <CarouselVideo src={c777b} />
                    </div>
                </div>
                <div className="legend"><span>9/15</span> Vidéo de logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c8} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>10/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c9} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>11/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c10} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>12/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c11} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>13/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c12} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>14/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c13} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>15/15</span> Logo sur tee-shirt</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c14} alt="Design de logo sur tee-shirt" />
                </div>
                <div className="legend"><span>16/15</span> Logo sur tee-shirt</div>
            </div>
        </Carousel>
    );
}

export default Slider6;
