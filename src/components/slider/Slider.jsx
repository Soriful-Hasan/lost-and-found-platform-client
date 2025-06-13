import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { GoArrowUpRight } from "react-icons/go";

import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  return (
    <div className="flex flex-col flex-col-reverse xl:flex-row p-5  md:p-20 gap-4  mx-auto bg-white ">
      <div className=" flex-1 items-start flex flex-col gap-4 p-2 ">
        <h1 className="text-black text-3xl md:text-5xl">
          Here is it is best lost and found <br /> item platform
        </h1>
        <p className="text-gray-600 text-sm">
          Welcome to our Lost and Found platform — your trusted place to reunite
          people <br /> with their lost belongings. Whether you've misplaced
          something or found an item, <br /> our site makes it easy to report
          and search.
        </p>
        <Link
          to={"/allPosts"}
          className="btn rounded-xl  bg-[#443dff] text-white"
        >
          Explore Now <GoArrowUpRight />
        </Link>
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
        className=" mySwiper flex-1 w-full lg:mx-w-[700px] xl:mx-w-[800px] lg:h-[250px] rounded-lg overflow-hidden  border border-gray-300"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <img
            src="/slider2.png"
            className=" w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider2.png"
            className=" w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider2.png"
            className=" w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
