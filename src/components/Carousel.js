import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, appendDots: dots => <div>
        <ul style={{ margin: "auto", bottom: "10px" }}>
          {dots}
        </ul>
      </div>, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } }] }; // Enable autoplay // Set autoplay speed in milliseconds (3 seconds in this case)
  return <div className="w-full mt-3 mb-5 box-border">
      <Slider {...settings}>
        <div className="">
          <img src="/image1.png" alt="Slide 1" className="w-full h-full" />
        </div>
        <div className="">
          <img src="/image2.png" alt="Slide 2" className="w-full h-full" />
        </div>
        <div className="">
          <img src="/image3.png" alt="Slide 3" className="w-full h-full" />
        </div>
        <div className="">
          <img src="/image4.png" alt="Slide 3" className="w-full h-full" />
        </div>
      </Slider>
    </div>;
}

export default Carousel;
