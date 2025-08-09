import axios from "axios";
import React, { useEffect, useState } from "react";
import AllPostCard from "./AllItemsCard";
import AllItemsCard from "./AllItemsCard";
import Loader from "../../components/Loader";
import NoDataFound from "../../components/NoDataFound";

const AllItems = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [dataLoading, setDataLoading] = useState(true);
  console.log(sort);
  const handleSort = (e) => {
    const selected = e.target.value;
    if (selected === "asc" || selected === "desc") {
      setSort(selected);
    }
  };
  console.log(sort);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_apiUrl
        }/allPosts?search=${search}&option=${sort}`
      )
      .then((res) => {
        setAllPosts(res.data);
        setDataLoading(false);
      })
      .catch((error) => {});
  }, [search, sort]);

  if (dataLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-20">
      <title>Lost and found items</title>
      <div className="flex-col md:flex-row flex justify-between gap-6 mt-6 w-11/12 max-w-4xl mx-auto">
        {/* Enhanced Search Input */}
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
            <svg
              className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search by Title or Location..."
            className="w-full pl-12 pr-6 py-4 dark:text-white dark:bg-gray-800 dark:border-gray-600 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-0 focus:border-blue-400 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg placeholder-gray-400 text-sm font-medium"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Enhanced Select Dropdown */}
        <div className="relative group md:w-64">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
            <svg
              className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </div>
          <select
            onChange={handleSort}
            defaultValue=""
            className="w-full pl-12 pr-10 py-4 dark:text-white dark:bg-gray-800 dark:border-gray-600 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-0 focus:border-purple-400 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg text-sm font-medium appearance-none cursor-pointer"
          >
            <option className="dark:text-white py-2" value="" disabled>
              Sort by Title
            </option>
            <option className="dark:text-white py-2" value="asc">
              📈 Ascending (A-Z)
            </option>
            <option className="dark:text-white py-2" value="desc">
              📉 Descending (Z-A)
            </option>
          </select>

          {/* Custom Dropdown Arrow */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-all duration-200 group-focus-within:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Optional: Add filter chips or tags */}
    
      {allPosts.length === 0 ? (
        <>
          <NoDataFound></NoDataFound>
        </>
      ) : (
        <>
          <div className="w-10/12 mx-auto grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-10">
            {allPosts?.map((post) => (
              <AllItemsCard post={post}></AllItemsCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllItems;
