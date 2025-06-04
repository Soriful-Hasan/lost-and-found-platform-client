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
    <div className="grid gap-4 grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      {allPosts?.map((post) => (
        <AllItemsCard post={post}></AllItemsCard>
      ))}
    </div>
  );
};

export default AllItems;
