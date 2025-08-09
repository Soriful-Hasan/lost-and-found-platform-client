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
import {
  Plus,
  Search,
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Link } from "react-router";
import {
  MdTitle,
  MdLocationOn,
  MdCategory,
  MdPostAdd,
  MdViewList,
  MdEdit,
  MdDelete,
  MdFilterList,
} from "react-icons/md";
import { FaSearch, FaEye } from "react-icons/fa";

const MyPost = () => {
  const user = useUserContext();
  const email = user?.email;
  const [dataLoading, setDataLoading] = useState(true);
  const [myPosts, setMyPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState("table");

  const { myPostPromise } = useApplicationApi();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await myPostPromise(email);
      setMyPosts(data);
      setDataLoading(false);
    };
    fetchPosts();
  }, [email, myPostPromise, setDataLoading]);

  // Filter and search posts
  const filteredPosts = myPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "all" || post.postType === filterType;
    const matchesCategory =
      filterCategory === "all" || post.category === filterCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  // Get statistics
  const stats = {
    total: myPosts.length,
    lost: myPosts.filter((p) => p.postType === "Lost").length,
    found: myPosts.filter((p) => p.postType === "Found").length,
    recovered: myPosts.filter((p) => p.status === "recovered").length,
  };

  if (dataLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 ">
      <title>My Posts</title>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl  p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <MdViewList className="text-[#443dff] text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  My Posts
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Manage and organize your lost & found items
                </p>
              </div>
            </div>

            <Link
              to={"/addItem"}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#443dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200  hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Post
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Total Posts
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.total}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <MdPostAdd className="text-[#443dff] text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Lost Items
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.lost}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Search className="text-red-600 dark:text-red-400 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Found Items
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.found}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Eye className="text-green-600 dark:text-green-400 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Recovered
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.recovered}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl  p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Types</option>
                <option value="Lost">Lost Items</option>
                <option value="Found">Found Items</option>
              </select>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="pets">Pets</option>
                <option value="gadgets">Gadgets</option>
                <option value="documents">Documents</option>
                <option value="other">Others</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredPosts.length} of {myPosts.length} posts
              </span>
            </div>
          </div>
        </div>

     <div className="bg-white dark:bg-gray-800 rounded-2xl  overflow-hidden">
          <div className="px-4 sm:px-8 py-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
              <List className="text-[#443dff]" />
              <span>Your Posts</span>
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-8">
              {myPosts.length === 0 ? (
                <MyPostNoFound />
              ) : (
                <div className="text-center py-8">
                  <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No matching posts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#443dff] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <MdTitle className="w-4 h-4" />
                          <span>Title</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <MdLocationOn className="w-4 h-4" />
                          <span>Location</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <MdPostAdd className="w-4 h-4" />
                          <span>Post Type</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <MdCategory className="w-4 h-4" />
                          <span>Category</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        <span>Status</span>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                        <span>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredPosts.map((post) => (
                      <tr
                        key={post._id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600 flex-shrink-0">
                              {post.thumbnail ? (
                                <img
                                  src={post.thumbnail}
                                  alt={post.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <MdTitle className="text-gray-400 text-lg" />
                                </div>
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {post.title}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <MdLocationOn className="text-gray-400 text-sm flex-shrink-0" />
                            <span className="text-sm text-gray-900 dark:text-white truncate">
                              {post.location}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                              post.postType === "Lost"
                                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            }`}
                          >
                            {post.postType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                              post.status === "recovered"
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {post.status === "recovered" ? "Recovered" : "Active"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <MyPostCard
                              myPosts={myPosts}
                              setMyPosts={setMyPosts}
                              post={post}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredPosts.map((post) => (
                    <div
                      key={post._id}
                      className="p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Thumbnail */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600 flex-shrink-0">
                          {post.thumbnail ? (
                            <img
                              src={post.thumbnail}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <MdTitle className="text-gray-400 text-xl" />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Title and Date */}
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>

                          {/* Location */}
                          <div className="flex items-center space-x-2 mb-3">
                            <MdLocationOn className="text-gray-400 text-sm flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                              {post.location}
                            </span>
                          </div>

                          {/* Badges */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span
                              className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                                post.postType === "Lost"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                  : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              }`}
                            >
                              {post.postType}
                            </span>
                            <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              {post.category}
                            </span>
                            <span
                              className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                                post.status === "recovered"
                                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              }`}
                            >
                              {post.status === "recovered" ? "Recovered" : "Active"}
                            </span>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-end space-x-2">
                            <MyPostCard
                              myPosts={myPosts}
                              setMyPosts={setMyPosts}
                              post={post}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Summary */}
        {filteredPosts.length > 0 && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <p className="text-2xl font-bold text-[#443dff]">
                  {filteredPosts.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Items Shown
                </p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {filteredPosts.filter((p) => p.status === "recovered").length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recovered
                </p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <p className="text-2xl font-bold text-orange-600">
                  {Math.round((filteredPosts.length / myPosts.length) * 100)}%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Of Total
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPost;
