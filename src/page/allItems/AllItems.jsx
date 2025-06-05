import axios from "axios";
import React, { useEffect, useState } from "react";
import AllPostCard from "./AllItemsCard";
import AllItemsCard from "./AllItemsCard";

const AllItems = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/allPosts`)
      .then((res) => {
        setAllPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <div className="flex justify-center mt-10 ">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid gap-4 grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {allPosts?.map((post) => (
          <AllItemsCard post={post}></AllItemsCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
