import React, { useRef, useEffect } from "react";
import './Slider.css'
import c1 from '../../assets/carousel/Projet17/2.png'
import c2 from '../../assets/carousel/Projet17/3.png'
import c3 from '../../assets/carousel/Projet17/4.png'
import c4 from '../../assets/carousel/Projet17/5.png'
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
  
function Slider17 () {
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
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c2} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c3} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>

<div className="test">
<div className="test-images">
        <img src={c4} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>



        </Carousel>
        

        
        </>


    );
    
}


export default Slider17
