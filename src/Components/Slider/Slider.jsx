import React from "react"
import './Slider.css'
import c1 from '../../assets/carousel/1.jpg'
import c2 from '../../assets/carousel/2.jpg'
import c3 from '../../assets/carousel/3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'


function Slider () {
    return (
        <>
        
        <Carousel showThumbs={false}
    showStatus={false}
    showIndicators={false}
    infiniteLoop={true}
    animationHandler="fade" swipeable={false}>

    
<div>
        <img src={c1} alt="" />
        <p className="legend"><span>1/3</span>Höfn Studio - Maquette site web</p>
</div>
<div>
        <img src={c2} alt="" />
        <p className="legend"><span>2/3</span>Nom du projet - Nom du graphiste</p>
</div>
<div>
        <img src={c3} alt="" />
        <p className="legend"><span>3/3</span>Nom du projet - Nom du graphiste</p>
</div>


        </Carousel>
        

        
        </>


    );
    
}


export default Slider
