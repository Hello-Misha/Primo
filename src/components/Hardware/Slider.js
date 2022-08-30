import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../../img/ModelLineBlock-img1.png";
import image2 from "../../img/ModelLineBlock-img1.png";
import image3 from "../../img/ModelLineBlock-img1.png";
import image4 from "../../img/ModelLineBlock-img1.png";
import image5 from "../../img/ModelLineBlock-img1.png";
import image6 from "../../img/ModelLineBlock-img1.png";

export default function Slider() {
  const imageSet = [image1, image2, image3, image4, image5, image6];

  const breakPoints = {
    640: {
      width: 640,
      slidesPerView: 1,
    },

    768: {
      width: 768,
      slidesPerView: 3,
    },
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={breakPoints}
      navigation={true}
    >
      {imageSet.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={image} alt={image} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
