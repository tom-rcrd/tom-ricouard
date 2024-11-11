import React, { useRef, useEffect } from "react";
import './Slider.css'
import c1 from '../../assets/carousel/Projet19/1.png'
import c2 from '../../assets/carousel/Projet19/2.png'
import c3 from '../../assets/carousel/Projet19/3.png'
import c4 from '../../assets/carousel/Projet19/4.png'
import c5 from '../../assets/carousel/Projet19/5.png'
import c6 from '../../assets/carousel/Projet19/6.png'
import c6b from '../../assets/carousel/Projet19/6b.png'
import c7 from '../../assets/carousel/Projet19/7.png'
import c8 from '../../assets/carousel/Projet19/8.png'
import c9 from '../../assets/carousel/Projet19/9.png'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

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
      
function Slider19 () {
    return (
        <>
        
        <Carousel showThumbs={false} 
    showStatus={false}
    showIndicators={false}
    infiniteLoop={true}
    animationHandler="fade" swipeable={false}>

    
<div className="test">
<div className="test-images">
        <img src={c1} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo pour l'association L'Etage</div>
</div>


<div className="test">
<div className="test-images">
        <img src={c2} alt="" />
        </div>
        <div className="legend"><span>2/3</span>Planche de test cartes de membre</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c3} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c4} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c5} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c6} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>
<div className="test">
<div className="test-images">
        <img src={c6b} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>
<div className="test">
<div className="test-images">
        <img src={c7} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>
<div className="test">
<div className="test-images">
        <img src={c8} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>
<div className="test">
<div className="test-images">
        <img src={c9} alt="" />
        </div>
        <div className="legend"><span>3/3</span>Cartes de membre finales</div>
</div>
        </Carousel>
        

        
        </>


    );
    
}


export default Slider19
