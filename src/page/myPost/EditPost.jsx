import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useApplicationApi from "../../api/useApplicationApi";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";

const EditPost = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { updateDataPromise } = useApplicationApi();
  const [selectPostType, setSelectPostType] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    const updateGetData = async () => {
      try {
        setLoading(true);
        const data = await updateDataPromise(id);
        setItem(data);

        // Set initial values
        if (data.postType) {
          setSelectPostType(data.postType);
        }
        if (data.category) {
          setSelectCategory(data.category);
        }
        if (data.date) {
          setSelectedDate(new Date(data.date));
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
        Swal.fire({
          title: "Error loading post",
          text: "Failed to load post data",
          icon: "error",
          draggable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      updateGetData();
    }
  }, [id, updateDataPromise]);

  const handleEditPost = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add selected values
    data.postType = selectPostType;
    data.category = selectCategory;
    data.date = selectedDate.toISOString();

    try {
      const res = await axiosSecure.put(
        `${import.meta.env.VITE_apiUrl}/updatePost/${item._id}`,
        data
      );

      if (res.data.modifiedCount === 1) {
        await Swal.fire({
          title: "Success!",
          text: "Post updated successfully",
          icon: "success",
          draggable: true,
        });
        navigate(-1);
      } else {
        throw new Error("No changes were made");
      }
    } catch (err) {
      console.error("Update error:", err);
      Swal.fire({
        title: "Update Failed",
        text: "Something went wrong while updating the post",
        icon: "error",
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const {
    title,
    name,
    email,
    thumbnail,
    description,
    category,
    location,
    postType,
    date,
    _id,
  } = item;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-black dark:text-white">
                  Edit Lost & Found Item
                </h1>
              </div>
              <p className="text-gray-400">
                Update the details for your lost or found item
              </p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <form onSubmit={handleEditPost} className="space-y-6">
          {/* Item Details Card */}
          <div className="dark:bg-gray-800 bg-white border-gray-200  rounded-lg border dark:border-slate-700">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <h2 className="text-xl  font-semibold dark:text-white">
                  Item Details
                </h2>
              </div>

              <div className="space-y-6">
                {/* Item Title */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                    <span className="text-blue-400 ">T</span>
                    Item Title
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue={title}
                    name="title"
                    placeholder="Enter a descriptive title for the item"
                    className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                {/* Post Type and Category */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="flex text-gray-600 items-center gap-2 text-sm font-medium dark:text-gray-300 mb-3">
                      <span className="text-blue-400 ">📋</span>
                      Post Type
                    </label>
                    <select
                      required
                      value={selectPostType}
                      onChange={(e) => setSelectPostType(e.target.value)}
                      name="postType"
                      className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    >
                      <option value="" disabled className="text-gray-400">
                        Lost Item
                      </option>
                      <option value="Lost">Lost Item</option>
                      <option value="Found">Found Item</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex  items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                      <span className="text-purple-400">⭐</span>
                      Category
                    </label>
                    <select
                      required
                      value={selectCategory}
                      onChange={(e) => setSelectCategory(e.target.value)}
                      name="category"
                      className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    >
                      <option value="" disabled className="text-gray-400">
                        Pets
                      </option>
                      <option value="pets">Pets</option>
                      <option value="gadgets">Gadgets</option>
                      <option value="documents">Documents</option>
                      <option value="other">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item Information Card */}
          <div className="dark:bg-gray-800 bg-white border-gray-200  rounded-lg border dark:border-slate-700">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold dark:text-white">
                  Item Information
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Item Image */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                    <span className="text-purple-400">📷</span>
                    Item Image
                  </label>
                  <input
                    required
                    type="url"
                    name="thumbnail"
                    defaultValue={thumbnail}
                    placeholder="Enter image URL"
                    className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                    <span className="text-red-400">📍</span>
                    Location
                  </label>
                  <input
                    required
                    type="text"
                    name="location"
                    defaultValue={location}
                    placeholder="Where was it lost/found?"
                    className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                {/* Date */}
                <div className="lg:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                    <span className="text-blue-400">📅</span>
                    Date
                  </label>
                  <DatePicker
                    required
                    name="date"
                    className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="08/09/2025"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="dark:bg-gray-800  bg-white border-gray-200  rounded-lg border dark:border-slate-700">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold dark:text-white">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Your full name"
                    className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    defaultValue={email}
                    placeholder="your.email@example.com"
                    className="w-full text-gray-600 border-gray-200 dark:bg-gray-800 border dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="dark:bg-gray-800 bg-white border-gray-200  rounded-lg border dark:border-slate-700">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold dark:text-white">
                  Description
                </h2>
              </div>

              <textarea
                required
                name="description"
                defaultValue={description}
                placeholder="Provide detailed description of the item..."
                rows="6"
                className="w-full text-gray-600 dark:bg-gray-800 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 cursor-pointer py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 border border-slate-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                isSubmitting ? "cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              {isSubmitting ? "Updating..." : "Update Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
