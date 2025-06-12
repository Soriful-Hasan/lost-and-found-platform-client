import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="flex p-20 gap-4  mx-auto bg-[#F6F6F6] ">
      <div className="flex-1 items-center flex flex-col gap-4 p-2 ">
        <h1 className="font-bold text-2xl">
          Here is it is best lost and found item platform
        </h1>
        <p
          className="text-gray-600
        
        "
        >
          Welcome to our Lost and Found platform — your trusted place to reunite
          people with their lost belongings. Whether you've misplaced something
          or found an item, our site makes it easy to report and search. We
          connect honest finders with those who have lost valuable possessions.
          Our mission is to reduce the stress and time spent on locating lost
          items. Users can upload item photos, descriptions, and contact
          details. We use location-based search to make finding easier. All
          listings are verified to prevent misuse. With a user-friendly
          interface, reporting or claiming is quick and secure. We value
          integrity, safety, and community support. Join us in building a
          helpful network of responsible individuals.
        </p>
      </div>

      <Swiper
        loop:true
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onAutoplay={Pagination}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper flex-1"
      >
        <SwiperSlide>
          <img src="/slider2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
