import React, { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";
import ItemCards from "../page/items/ItemCards";

import About from "../section/About";
import { Link } from "react-router";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { LiaGripfire } from "react-icons/lia";
import ClientsSetisfied from "../page/satisfiedClients/ClientsSatisfied";
import AnimationSection from "../components/animation/AnimationSection";
import Loader from "../components/Loader";
import Process from "../section/FAQ";
import NoDataFound from "../components/NoDataFound";
import Slider from "../components/slider/Slider";
import Hero from "../components/Hero/Hero";
import ContactUs from "../page/ContactUs";
import ClientsSatisfied from "../page/satisfiedClients/ClientsSatisfied";

const Home = () => {
  const [items, setItems] = useState();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/getItems`)
      .then((res) => {
        setItems(res.data);
        setDataLoading(false);
      })
      .catch((error) => {});
  }, []);

  if (dataLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <title>Home</title>
      <Hero />
      <div className="place-items-center  mt-10 w-10/12 mx-auto">
        <div className="flex items-center gap-2">
          <LiaGripfire size={30} color="#ff9a00" />
          <h1 className="text-2xl font-bold mb-2 text-[#4A8F7D]">
            Recent Post
          </h1>
        </div>
        <p className="text-gray-600 dark:text-white text-sm">
          These are the latest items reported or found. <br />
          Check them out — maybe one of them is yours!
        </p>
      </div>

      {items.length === 0 ? (
        <>
          <NoDataFound></NoDataFound>
        </>
      ) : (
        <>
          <div className="w-10/12 mx-auto grid gap-8 xl:gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {items?.map((item, index) => (
              <ItemCards key={index} item={item}></ItemCards>
            ))}
          </div>{" "}
        </>
      )}

      <div className=" flex justify-center mt-16">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/allPosts"}
          className="btn hover:bg-blue-500 shadow-sm flex items-center bg-[#443dff] text-white"
        >
          See All Post <MdOutlineKeyboardDoubleArrowRight />
        </Link>
      </div>
      <div className="w-10/12 mx-auto mt-30">
        <About></About>

        <Process></Process>
        <ClientsSatisfied />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
