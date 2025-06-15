import React, { use, useContext, useEffect, useState } from "react";
import UserContext from "../../provider/AuthContext";
import axios from "axios";
import useUserContext from "../../hook/ContextHook";
import NoDataFound from "../../components/NoDataFound";
import MyPostCard from "./MyPostCard";
import Loader from "../../components/Loader";
import useApplicationApi from "../../api/useApplicationApi";

const MyPost = () => {
  const user = useUserContext();
  const email = user?.email;
  const [dataLoading, setDataLoading] = useState(true);

  const [myPosts, setMyPosts] = useState([]);
  const { myPostPromise } = useApplicationApi();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await myPostPromise(email);
      setMyPosts(data);
      setDataLoading(false);
    };
    fetchPosts();
  }, [email, myPostPromise, setDataLoading]);

  if (dataLoading) {
    return <Loader />;
  }
  if (myPosts?.length < 1) {
    return <NoDataFound />;
  }
  return (
    <div className="w-10/12 mx-auto">
      <div className="overflow-x-auto mt-10  border-base-content/5 bg-base-100">
        <table className="table">
          <thead className="bg-[#443dff] text-white">
            <tr className="">
              <th>Title</th>
              <th>Location</th>
              <th>Post type</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myPosts?.map((post) => (
              <MyPostCard
                myPosts={myPosts}
                setMyPosts={setMyPosts}
                post={post}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
