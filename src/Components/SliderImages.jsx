import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const SliderImages = () => {
  const Images = [
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-8.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-1.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-2.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-2.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-3.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-4.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-5.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-6.png",
    },
    {
      url: "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/partner-7.png",
    },
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={5000} // adjust for slower or faster motion
      autoplay={{ delay: 1, disableOnInteraction: false }}
      slidesPerView={"auto"}
      spaceBetween={30}
      allowTouchMove={false}
      className="my-4"
      style={{ width: "100%", padding: "20px 0" }}
    >
      {Images.map((img, idx) => (
        <SwiperSlide key={idx} style={{ width: "150px" }}>
          <img
            src={img.url}
            alt={`Logo ${idx}`}
            className="w-full h-auto object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderImages;
