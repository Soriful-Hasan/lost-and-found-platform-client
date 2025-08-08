import React, { use, useContext, useEffect, useState } from "react";
import UserContext from "../../provider/AuthContext";
import axios from "axios";
import useUserContext from "../../hook/ContextHook";
import NoDataFound from "../../components/NoDataFound";
import MyPostCard from "./MyPostCard";
import Loader from "../../components/Loader";
import useApplicationApi from "../../api/useApplicationApi";
import { tr } from "date-fns/locale";
import RecoverNoData from "../../components/noData/RecoverNoData";
import MyPostNoFound from "../../components/noData/MyPostNoFound";

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

  return (
    <div className="w-10/12 mx-auto">
      <title>My Post</title>
      <div className="overflow-x-auto mt-10  border-base-content/5 bg-base-100">
        <table className="table border bg-blue-600 ">
          <thead className=" ">
            <tr className="text-white">
              <th>Title</th>
              <th>Location</th>
              <th>Post type</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myPosts.length === 0 ? (
              <tr>
                <td colSpan="100%">
                  <MyPostNoFound></MyPostNoFound>
                </td>
              </tr>
            ) : (
              <>
                {myPosts?.map((post) => (
                  <MyPostCard
                    myPosts={myPosts}
                    setMyPosts={setMyPosts}
                    post={post}
                  />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
