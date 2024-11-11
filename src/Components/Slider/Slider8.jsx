// Slider8.jsx
import React from "react";
import './Slider.css';
import c1 from '../../assets/carousel/Projet8/1.png';
import c2 from '../../assets/carousel/Projet8/2.png';
import c3 from '../../assets/carousel/Projet8/3.png';
import c4 from '../../assets/carousel/Projet8/4.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Composant principal pour le slider
function Slider8() {
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
                <div className="legend"><span>1/4</span> Logo sur tee-shirt 1</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c2} alt="Logo sur tee-shirt 2" />
                </div>
                <div className="legend"><span>2/4</span> Logo sur tee-shirt 2</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c3} alt="Logo sur tee-shirt 3" />
                </div>
                <div className="legend"><span>3/4</span> Logo sur tee-shirt 3</div>
            </div>

            <div className="test">
                <div className="test-images">
                    <img src={c4} alt="Logo sur tee-shirt 4" />
                </div>
                <div className="legend"><span>4/4</span> Logo sur tee-shirt 4</div>
            </div>
        </Carousel>
    );
}

export default Slider8;
