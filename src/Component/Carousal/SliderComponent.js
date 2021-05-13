import React from 'react'
import './SliderComponent.css'

import Slider from 'react-slick';
import slide1 from '../../assets/images/carousal_images/car1.jpeg'
import slide2 from '../../assets/images/carousal_images/car2.jpeg'
import slide3 from '../../assets/images/carousal_images/car3.jpeg'

export default function SliderComponent() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        // responsive: [
        //     {breakpoint: 500, settings: {slidesToShow: 1}},
        //     {breakpoint: 700, settings: {slidesToShow: 1}},
        //     {breakpoint: 900, settings: {slidesToShow: 1}},
        //     {breakpoint: 1200, settings: {slidesToShow: 1}},
        //     ],
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider__wrapper">
            <Slider {...settings}>
                <div>
                    <img src={slide1} className="slider__img" />
                </div>
                {/* <div>
                    <img src={slide2} className="slider__img"/>
                </div>
                <div>
                    <img src={slide3} className="slider__img"/>
                </div> */}
            </Slider>
        </div>
    )
}