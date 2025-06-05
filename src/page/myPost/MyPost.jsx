import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../provider/AuthContext";
import axios from "axios";
import useUserContext from "../../hook/ContextHook";
import NoDataFound from "../../components/NoDataFound";
import MyPostCard from "./MyPostCard";
import Loader from "../../components/Loader";

const MyPost = () => {
  const user = useUserContext();
  const [loading, setLoading] = useState(true);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/myPosts/${user?.email}`)
      .then((res) => {
        setMyPosts(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [user?.email]);
  if (loading) {
    return <Loader />;
  }
  if (myPosts.length < 1) {
    return <NoDataFound />;
  }
  return (
    <div>
      <div className="overflow-x-auto mt-10 rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
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
