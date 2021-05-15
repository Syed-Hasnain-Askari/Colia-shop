import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/images/carousal_images/car1.jpeg'
import image1 from '../../assets/images/carousal_images/car2.jpeg'
import image2 from '../../assets/images/carousal_images/car3.jpeg'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade className="mt-5">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  );
}
export default ControlledCarousel