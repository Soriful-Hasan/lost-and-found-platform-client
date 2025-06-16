import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import { useParams } from "react-router";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useApplicationApi from "../../api/useApplicationApi";
import Swal from "sweetalert2";
import ButtonAnimation from "../../components/animation/ButtonAnimation";

const EditPost = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { updateDataPromise } = useApplicationApi();

  useEffect(() => {
    const updateGetData = async () => {
      const data = await updateDataPromise(id);
      setItem(data);
    };
    updateGetData();
  }, [id, updateDataPromise]);

  const handleEditPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.postType = selectPostType;
    data.category = selectCategory;

    axiosSecure
      .post(`${import.meta.env.VITE_apiUrl}/updatePost/${_id}`, data)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            title: "Update post successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          title: "Something was wrong",
          icon: "error",
          draggable: true,
        })
      );
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

  const [selectPostType, setSelectPostType] = useState("");

  useEffect(() => {
    if (postType) {
      setSelectPostType(postType);
    }
  }, [postType]);

  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    if (category) {
      setSelectCategory(category);
    }
  }, [category]);
  return (
    <div className="shadow-sm bg-white mb-4 rounded-sm p-8 lg:w-8/12 mx-auto">
      <title>Update Post</title>
      <div className="">
        <div className="flex items-center gap-2">
          <span className="bg-[#443dff] w-4 h-10 rounded-r-sm"></span>
          <h1 className="text-xl font-bold">Update Your Post</h1>
        </div>
        <div className="border-b border-1 border-gray-200 mt-2"></div>
      </div>
      <div className="place-items-center mt-6">
        <form
          onSubmit={handleEditPost}
          className="flex flex-col gap-8 mt-4   w-full"
        >
          <div className="">
            <div className="item-start mb-4 w-full ">
              <h2 className="font-semibold text-xl">Item Details</h2>
            </div>
            <div className="">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Title
              </label>
              <input
                type="text"
                required
                defaultValue={title}
                name="title"
                placeholder="Title"
                className="appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight  "
              />
            </div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Post Type
            </label>
            <select
              required
              value={selectPostType}
              onChange={(e) => setSelectPostType(e.target.value)}
              name="postType"
              className=" appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight "
            >
              <option value="" disabled selected>
                Post type
              </option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>

            {/* date piker */}
          </div>

          <div className="">
            <h1 className="mb-3 font-semibold text-xl">Item Information </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Thumbnail
                </label>
                <input
                  required
                  type="text"
                  name="thumbnail"
                  defaultValue={thumbnail}
                  placeholder="Item Photo URL"
                  className="appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight  "
                  id="grid-first-name w-full"
                />
              </div>

              <div className="">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  location
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  defaultValue={location}
                  placeholder="location"
                  className="appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                />
              </div>

              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Category
                </label>
                <select
                  required
                  value={selectCategory}
                  onChange={(e) => setSelectCategory(e.target.value)}
                  name="category"
                  className="appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                >
                  <option value="" disabled selected>
                    Category
                  </option>
                  <option value="pets">pets</option>
                  <option value="gadgets">gadgets</option>
                  <option value="documents">documents</option>
                  <option value="other">others</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Date
                </label>
                <DatePicker
                  required
                  defaultValue={date}
                  name="date"
                  className="appearance-none w-full block  focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="mb-3 font-semibold text-xl">Contact Information</h1>
            <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-2">
              <input
                required
                type="text"
                name="name"
                value={name}
                className="appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
              />
              <input
                required
                type="text"
                name="email"
                value={email}
                className="appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
              />
            </div>
          </div>

          <div className="">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Description
            </label>
            <textarea
              required
              type="text"
              defaultValue={description}
              name="description"
              className=" text-start h-40 appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="btn bg-[#443dff] text-white w-full lg:w-2/12 "
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
