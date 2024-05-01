import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/img/image1.png";
import image2 from "../assets/img/image2.png";
import image3 from "../assets/img/image3.png";
import image4 from "../assets/img/image4.png";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots =>
      <div>
        <ul style={{ margin: "auto", bottom: "10px" }}>
          {dots}
        </ul>
      </div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }; // Enable autoplay // Set autoplay speed in milliseconds (3 seconds in this case)
  return (
    <div className="w-full mt-3 mb-5 box-border">
      <Slider {...settings}>
        <div className="">
          <img src={image1} alt="Slide 1" className="w-full h-full" />
        </div>
        <div className="">
          <img src={image2} alt="Slide 2" className="w-full h-full" />
        </div>
        <div className="">
          <img src={image3} alt="Slide 3" className="w-full h-full" />
        </div>
        <div className="">
          <img src={image4} alt="Slide 3" className="w-full h-full" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
