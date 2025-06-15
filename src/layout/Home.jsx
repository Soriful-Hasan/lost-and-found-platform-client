import React, { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";
import ItemCards from "../page/items/ItemCards";
import Slider from "../components/slider/Slider";
import About from "../section/About";
import { Link } from "react-router";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { LiaGripfire } from "react-icons/lia";

const Home = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/getItems`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <div className="">
        <Slider></Slider>
      </div>
      <div className="w-10/12 mx-auto mt-20 flex items-center gap-2">
        <LiaGripfire size={30} color="#ff9a00" />
        <h1 className="text-2xl font-semibold">Recent Post</h1>
      </div>
      <div className="w-10/12 mx-auto grid gap-8 xl:gap-16 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        {items?.map((item, index) => (
          <ItemCards key={index} item={item}></ItemCards>
        ))}
      </div>
      <div className=" flex justify-center mt-16">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/allPosts"}
          className="btn hover:bg-blue-500 shadow-sm flex items-center bg-[#443dff] text-white"
        >
          View All Post <MdOutlineKeyboardDoubleArrowRight />
        </Link>
      </div>
      <div className="w-10/12 mx-auto mt-20">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
