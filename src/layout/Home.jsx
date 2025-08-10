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
import { Clock, Eye } from "lucide-react";

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
       
        <div className="flex items-center  justify-center gap-3 mt-30 mb-10">
          <div className="w-12 h-12  bg-blue-600 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h1>
        </div>
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
          className="btn hover:bg-blue-500  shadow-sm flex items-center bg-[#443dff] text-white"
        >
          See All Post <MdOutlineKeyboardDoubleArrowRight />
        </Link>
      </div>
      <section className="bg-blue-500/6   mt-30 ">
        <About></About>
      </section>
      <div className="w-10/12 mx-auto ">
        <Process></Process>
        <ClientsSatisfied />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
