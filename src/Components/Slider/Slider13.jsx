import React, { useRef, useEffect } from "react";
import './Slider.css'
import c1 from '../../assets/carousel/Projet13/1.png'
import c2 from '../../assets/carousel/Projet13/2.png'
import c3 from '../../assets/carousel/Projet13/3.jpg'
import c4 from '../../assets/carousel/Projet13/4.jpg'
import c5 from '../../assets/carousel/Projet13/5.jpg'
import c6 from '../../assets/carousel/Projet13/6.jpg'
import c7 from '../../assets/carousel/Projet13/7.jpg'
import c8 from '../../assets/carousel/Projet13/8.jpg'
import c9 from '../../assets/carousel/Projet13/9.jpg'
import c10 from '../../assets/carousel/Projet13/1.mp4'
import c11 from '../../assets/carousel/Projet13/2.mp4'
import c12 from '../../assets/carousel/Projet13/3.mp4'
import c13 from '../../assets/carousel/Projet13/4.mp4'
import c14 from '../../assets/carousel/Projet13/5.mp4'
import c15 from '../../assets/carousel/Projet13/6.mp4'
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
      
function Slider13 () {
    return (
        <>
        
        <Carousel
       showThumbs={false}
       showStatus={false}
       showIndicators={false}
       infiniteLoop={true}
       animationHandler="fade"
       swipeable={false}>
    

<div className="test">
          <div className="test-images">
            <div className="videotest">
              <CarouselVideo src={c10} />
            </div>
          </div>
          <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
        </div>

<div className="test">
          <div className="test-images">
            <div className="videotest">
              <CarouselVideo src={c11} />
            </div>
          </div>
          <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
        </div>
<div className="test">
          <div className="test-images">
            <div className="videotest">
              <CarouselVideo src={c12} />
            </div>
          </div>
          <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
        </div>

<div className="test">
          <div className="test-images">
            <div className="videotest">
              <CarouselVideo src={c13} />
            </div>
          </div>
          <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
        </div>

<div className="test">
          <div className="test-images">
            <div className="videotest">
              <CarouselVideo src={c14} />
            </div>
          </div>
          <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
        </div>

<div className="test">
          <div className="test-images">
            <div className="videotest">
              <CarouselVideo src={c15} />
            </div>
          </div>
          <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
        </div>

<div className="test">
<div className="test-images">
<img src={c7} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>
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
<div className="test">
<div className="test-images">
<img src={c5} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>
<div className="test">
<div className="test-images">
<img src={c6} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>

<div className="test">
<div className="test-images">
<img src={c8} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>
<div className="test">
<div className="test-images">
<img src={c9} alt="" />
        </div>
        <div className="legend"><span>1/3</span>Logo sur tee-shirt</div>
</div>
        </Carousel>
        

        
        </>


    );
    
}


export default Slider13
