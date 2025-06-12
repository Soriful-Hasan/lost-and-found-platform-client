import React, { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";
import ItemCards from "../page/items/ItemCards";
import Slider from "../components/slider/Slider";
import About from "../section/About";
import { Link } from "react-router";

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
      <div className="w-8/12 mx-auto mt-20 ">
        <h1 className="text-2xl font-bold">Recent Post</h1>
        <div className="border-b mt-2 border-gray-200"></div>
      </div>
      <div className="w-8/12 mx-auto grid gap-8 mb-8 grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10">
        {items?.map((item, index) => (
          <ItemCards key={index} item={item}></ItemCards>
        ))}
      </div>
      <div className=" flex justify-center mt-16">
        <Link
          to={"/allPosts"}
          className="btn w-sm rounded-xl  bg-blue-400 text-white"
        >
          View All Post
        </Link>
      </div>
      <div className="w-8/12 mx-auto mt-20">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
