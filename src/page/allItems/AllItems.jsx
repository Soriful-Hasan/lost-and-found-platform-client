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
    <div className="">
      <title>Lost and found items</title>
      <div className="flex-col md:flex-row flex justify-center gap-4 mt-4 w-10/12 mx-auto ">
        <label className="input  lg:w-xl  rounded-full focus-within:outline-none focus-within:ring-0 border border-gray-300">
          <input
            type="search "
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="🔍 Search by title or location"
            className="w-full focus:outline-none  focus:ring-0"
          />
        </label>
        <select
          onChange={handleSort}
          defaultValue=""
          className="select focus-within:outline-none focus-within:ring-0 border border-gray-300  rounded-full"
        >
          <option disabled={true}>Sort by Location</option>
          <option value="asc">A → Z</option>
          <option value="desc">Z → A</option>
        </select>
      </div>
      {allPosts.length === 0 ? (
        <>
          <NoDataFound></NoDataFound>
        </>
      ) : (
        <>
          <div className="w-10/12 mx-auto grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10">
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
