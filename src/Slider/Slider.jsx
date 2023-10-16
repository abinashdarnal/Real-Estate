import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import SliderData from "./SliderData";

const Slider = () => {
  return (
    <>
      <div className=" lg:px-20 md:px-10 px-5  overflow-hidden bg-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {SliderData.map((items, id) => (
            <SwiperSlide key={id}>
              <div className="p-5">
                <img src={items.image} alt="" />
                <div>
                  <h2 className="text-[#FFA500] text-lg font-semibold py-3">
                    $ <span className="text-[#909090]">{items.rate}</span>
                  </h2>
                  <h1 className="text-[#1F3E72] font-bold text-2xl">
                    {items.title}
                  </h1>
                  <p className="text-[#909090] text-xs font-semibold py-2">
                    {items.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>page1</SwiperSlide>
    <SwiperSlide>page2</SwiperSlide>
    <SwiperSlide>page3</SwiperSlide>
    <SwiperSlide>page4</SwiperSlide>
    <SwiperSlide>page5</SwiperSlide>
    <SwiperSlide>page6</SwiperSlide>
    <SwiperSlide>page7</SwiperSlide>
    <SwiperSlide>page8</SwiperSlide>
    <SwiperSlide>page9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
