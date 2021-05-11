import React from 'react';
import { Fade } from 'react-slideshow-image';
import './carousal.css';
const Carousal = () => {
  const fadeImages = [
    '../../assets/images/carousal_images/car1.jpeg',
    '../../assets/images/carousal_images/car2.jpeg',
    '../../assets/images/carousal_images/car3.jpeg'
  ];

  return (
    <div>
      <h2>Fade Effect</h2>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} className="img-fluid" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Carousal;
