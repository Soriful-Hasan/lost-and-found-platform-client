import { useStatStyles } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useUserContext from "../../hook/ContextHook";
import { FaCheckCircle } from "react-icons/fa";
import { HiExclamationCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { IoMdContact } from "react-icons/io";
import { MdEmail, MdLocationOn, MdCalendarToday } from "react-icons/md";
import useApplicationApi from "../../api/useApplicationApi";
import useAxiosSecure from "../../hook/useAxiosSecure";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";

const ItemDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [item, setItem] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();
  const user = useUserContext();
  const { postDetailsPromise } = useApplicationApi();
  const [reload, setReload] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const userName = user?.displayName;
  const userEmail = user?.email;

  const handleDataSubmitModal = async (e, _id, userName, userEmail) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const date = form.date.value;
    const recoverUserEmail = form.recoverUserEmail.value;
    const recoverUserName = form.recoverUserName.value;
    const recoverData = {
      recoverLocation: location,
      recoverDate: date,
      recoverId: _id,
      recoverUserName: recoverUserName,
      recoverUserEmail: recoverUserEmail,
    };
    // post recover item data on recoverItemCollection
    axiosSecure
      .post(`${import.meta.env.VITE_apiUrl}/recoverItem`, recoverData)
      .then((res) => {})
      .catch((error) => {});

    // update itemsCollection status recovered

    const statusData = {
      id: _id,
      status: "recovered",
    };
    axiosSecure
      .post(`${import.meta.env.VITE_apiUrl}/updateStatus`, statusData)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            title: "item recover successfully",
            icon: "success",
            draggable: true,
          });
          setReload(!reload);
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const postDetailsData = async () => {
      const data = await postDetailsPromise(id);
      setItem(data);
      setDataLoading(false);
    };
    postDetailsData();
  }, [id, postDetailsPromise, reload]);

  const {
    title,
    name,
    email,
    thumbnail,
    description,
    category,
    location,
    date,
    postType,
    _id,
    status,
  } = item;

  if (dataLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 py-8">
      <title>Item details</title>

      <div className="xl:w-10/12 lg:w-10/12 mx-auto px-4">
        {/* Status Banner */}
        {status === "recovered" && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg shadow-sm">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 text-xl mr-3" />
              <span className="text-green-800 font-semibold text-lg">
                Item Successfully Recovered!
              </span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700  overflow-hidden">
            <div className="p-8">
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src={thumbnail}
                  alt={title}
                />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="dark:bg-gray-800 bg-white border-gray-200 rounded-lg p-6 mb-6 border dark:border-slate-700">
            {/* Header */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h1>
              <div className="flex items-center space-x-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    postType === "Lost"
                      ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                      : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  }`}
                >
                  Item {postType}
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium">
                  {category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <MdCalendarToday className="text-[#443dff] text-xl" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {postType} Date
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <MdLocationOn className="text-[#443dff] text-xl" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {postType} Location
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <IoMdContact className="text-[#443dff] text-xl" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {name}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MdEmail className="text-[#443dff] text-xl" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {email}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {status === "recovered" ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-red-50 border   border-red-200 rounded-lg">
                  <HiExclamationCircle className="text-red-500 text-xl flex-shrink-0" />
                  <span className="text-red-800  font-medium">
                    This item has already been recovered
                  </span>
                </div>
                <Link
                  to={"/allPosts"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Back to All Items
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {postType === "Lost" && (
                  <button
                    className="w-full sm:w-auto px-8 py-3 bg-[#443dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    🎉 Found This Item
                  </button>
                )}
                {postType === "Found" && (
                  <button
                    className="w-full sm:w-auto px-8 py-3 bg-[#443dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    ✋ This Is Mine
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {postType === "Lost"
                  ? "Lost Item Recovery"
                  : "Found Item Recovery"}
              </h2>
              <button
                onClick={() => document.getElementById("my_modal_1").close()}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <RxCross2 className="text-gray-500 text-xl" />
              </button>
            </div>

            {/* User Avatar */}
            <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#443dff] ring-offset-2">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {user?.displayName}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) =>
                handleDataSubmitModal(e, _id, userName, userEmail)
              }
              method="dialog"
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Recovery Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="Where did you find/recover this item?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Recovery Date
                </label>
                <DatePicker
                  name="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="recoverUserName"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                  value={user?.displayName}
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="recoverUserEmail"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                  value={user?.email}
                  readOnly
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => document.getElementById("my_modal_1").close()}
                  type="submit"
                  className="px-8 py-3 bg-[#443dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit Recovery
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ItemDetails;
