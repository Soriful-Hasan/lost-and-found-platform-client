import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { GoArrowUpRight } from "react-icons/go";

import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import ButtonAnimation from "../animation/ButtonAnimation";
import TypeWriter from "../typewriter/TypeWriter";

const Slider = () => {
  return (
    <div className="flex  flex-col flex-col-reverse xl:flex-row p-5  md:p-20 gap-4  mx-auto bg-white  ">
      <div className="pb-5 mb-4 flex-1 items-start flex flex-col gap-4 p-2 ">
        <TypeWriter></TypeWriter>
        <div className="mt-5">
          <img className="w-100" src="/lost.svg" alt="" />
        </div>
        <p className="text-gray-600 text-sm">
          Welcome to our Lost and Found platform — your trusted place to reunite
          people <br /> with their lost belongings. Whether you've misplaced
          something or found an item, <br /> our site makes it easy to report
          and search.
        </p>
        <ButtonAnimation>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/allPosts"}
            className="btn rounded-xl  bg-[#443dff] text-white"
          >
            Explore Now <GoArrowUpRight />
          </Link>
        </ButtonAnimation>
      </div>

      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="flex-1 mySwiper xl:mt-20 w-full lg:max-w-[700px] xl:max-w-[900px] mx-auto  overflow-hidden border border-gray-300"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1553991562-9f24b119ff51?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1607429486860-9192a334247d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1698352709078-7dde09852142?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1643895008873-3a14d4357607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
