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
import { Plus } from "lucide-react";
import { Link } from "react-router";

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
      {/* Header Section */}
      <div className="mb-8 ">
        <div className="flex flex-col space-y-6 text-center md:space-y-0 md:text-start md:flex-row items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Posts</h1>
            <p className="text-gray-600">Manage and organize your content</p>
          </div>
          <Link
            to={"/addItem"}
            className="inline-flex items-center px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "#443dff" }}
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Post
          </Link>
        </div>
      </div>
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
