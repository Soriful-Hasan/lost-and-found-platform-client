import React, { useContext, useState } from "react";
import UserContext from "../../provider/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useApplicationApi from "../../api/useApplicationApi";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import {
  MdTitle,
  MdCategory,
  MdLocationOn,
  MdImage,
  MdCalendarToday,
  MdPerson,
  MdEmail,
  MdDescription,
  MdPostAdd,
} from "react-icons/md";

const AddItem = () => {
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

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
    <div className="min-h-screen bg-gray-50 py-20 dark:bg-gray-900 ">
      <title>Add post</title>

      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-12 bg-[#443dff] rounded-full"></div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Add Lost & Found Item
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Lost or Found Something? Fill Out the Form Below
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <MdPostAdd className="text-[#443dff] text-4xl" />
            </div>
          </div>
        </div>

        <form onSubmit={handlePostSubmit} className="space-y-8">
          {/* Item Details Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <MdTitle className="text-[#443dff] text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Item Details
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdTitle className="text-[#443dff]" />
                  <span>Item Title</span>
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="Enter a descriptive title for the item"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdPostAdd className="text-[#443dff]" />
                  <span>Post Type</span>
                </label>
                <select
                  required
                  name="postType"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                >
                  <option value="" disabled>
                    Select post type
                  </option>
                  <option value="Lost">🔍 Lost Item</option>
                  <option value="Found">✅ Found Item</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdCategory className="text-[#443dff]" />
                  <span>Category</span>
                </label>
                <select
                  required
                  name="category"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="pets">🐾 Pets</option>
                  <option value="gadgets">📱 Gadgets</option>
                  <option value="documents">📄 Documents</option>
                  <option value="other">🔍 Others</option>
                </select>
              </div>
            </div>
          </div>

          {/* Item Information Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <MdImage className="text-[#443dff] text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Item Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdImage className="text-[#443dff]" />
                  <span>Item Image</span>
                </label>
                <input
                  required
                  type="url"
                  name="thumbnail"
                  placeholder="Enter image URL"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdLocationOn className="text-[#443dff]" />
                  <span>Location</span>
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  placeholder="Where was it lost/found?"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdCalendarToday className="text-[#443dff]" />
                  <span>Date</span>
                </label>
                <DatePicker
                  required
                  name="date"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select date"
                />
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <MdPerson className="text-[#443dff] text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdPerson className="text-[#443dff]" />
                  <span>Your Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={user?.displayName}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                  readOnly
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <MdEmail className="text-[#443dff]" />
                  <span>Your Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={user?.email}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <MdDescription className="text-[#443dff] text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Description
              </h2>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <MdDescription className="text-[#443dff]" />
                <span>Detailed Description</span>
              </label>
              <textarea
                required
                name="description"
                rows="6"
                placeholder="Provide detailed description of the item, including color, size, distinguishing features, etc."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ready to Submit?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Double-check your information before posting
                </p>
              </div>
              <button
                type="submit"
                className="px-8 cursor-pointer py-4 bg-[#443dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 -lg hover:-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <MdPostAdd className="text-xl" />
                <span>Submit Post</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
