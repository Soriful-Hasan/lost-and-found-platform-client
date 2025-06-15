import React, { useContext, useState } from "react";
import UserContext from "../../provider/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useApplicationApi from "../../api/useApplicationApi";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
const AddItem = () => {
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  console.log(selectedDate);
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    axiosSecure
      .post(`${import.meta.env.VITE_apiUrl}/addItem`, data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Post submit successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Something was wrong",
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <div className="shadow-sm mb-4  bg-white rounded-sm p-8 lg:w-8/12 mx-auto">
      <div className="">
        <div className="flex items-center gap-2">
          <span className="bg-[#443dff] w-4 h-10 rounded-r-sm"></span>
          <h1 className="text-xl font-bold">Add Lost & Found Item</h1>
        </div>
        <div className="border-b border-1 border-gray-200 mt-2"></div>
        <h2 className="mt-2 text-sm font-semibold">
          Lost or Found Something? Fill Out the Form
        </h2>
      </div>
      <div className="place-items-center mt-4">
        <form
          onSubmit={handlePostSubmit}
          className="flex flex-col gap-8 mt-4   w-full"
        >
          <div className="">
            <div className="item-start mb-2 w-full ">
              <h2 className="font-semibold text-xl">Item Details</h2>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight  "
            />
            <select
              name="postType"
              className=" appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight "
            >
              <option value="" disabled selected>
                Post type
              </option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          <div className="">
            <h1 className="mb-2 font-semibold text-xl">Item Information </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="thumbnail"
                placeholder="Item Photo URL"
                className="appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight  "
                id="grid-first-name w-full"
              />
              <input
                type="text"
                name="location"
                placeholder="location"
                className="appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
              />
              <select
                name="category"
                className="appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
              >
                <option value="" disabled selected>
                  Category
                </option>
                <option value="pets">pets</option>
                <option value="gadgets">gadgets</option>
                <option value="documents">documents</option>
                <option value="other">others</option>
              </select>

              <DatePicker
                name="date"
                className="w-full  appearance-none block  focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
          </div>

          <div className="">
            <h1 className="mb-2 font-semibold text-xl">Contact Information</h1>
            <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-2">
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
              />
              <input
                type="text"
                name="email"
                value={user?.email}
                className="appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
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
              type="text"
              name="description"
              className=" text-start h-40 appearance-none block w-full focus:-border-blue-500 bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="btn hover:bg-blue-500 bg-[#443dff] text-white w-full lg:w-2/12 "
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
