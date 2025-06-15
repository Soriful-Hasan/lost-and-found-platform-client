import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useUserContext from "../../hook/ContextHook";
import { FaCheckCircle } from "react-icons/fa";
import { HiExclamationCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useApplicationApi from "../../api/useApplicationApi";
import useAxiosSecure from "../../hook/useAxiosSecure";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const ItemDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [item, setItem] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();
  const user = useUserContext();
  const { postDetailsPromise } = useApplicationApi();
  const userName = user?.displayName;
  const userEmail = user?.email;

  const handleDataSubmitModal = (e, _id, userName, userEmail) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const date = form.date.value;
    const recoverData = {
      recoverLocation: location,
      recoverDate: date,
      recoverId: _id,
      recoverUserName: userName,
      recoverUserEmail: userEmail,
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
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const postDetailsData = async () => {
      const data = await postDetailsPromise(id);
      setItem(data);
    };
    postDetailsData();
  }, [id, postDetailsPromise]);

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

  return (
    <div className="xl:w-8/12  lg:w-10/12 mx-auto  flex flex-col">
      <div className="p-4 space-y-2">
        <h1 className="lg:text-2xl text-xl font-semibold">
          Lost and Found Item Details
        </h1>
        {status == "recovered" && (
          <p className="flex items-center gap-2">
            <FaCheckCircle color="green" />
            Recovered
          </p>
        )}
        <div className="border-b border-gray-100 mt-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-gray-100 lg:h-150 p-10 rounded">
          <div className=" p-4 flex-1 ">
            <img
              width={300}
              height={200}
              className=" rounded-xl"
              src={thumbnail}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="font-semibold text-gray-600">Item {postType}</p>
            <div className="border-b border-gray-200"></div>
          </div>
          <div className="">
            <p className="mt-4 font-semibold text-gray-600">{category}</p>
            <div className="border-b mt-4 border-gray-200"></div>
          </div>
          <div className="mt-4 text-gray-600">
            <p className="text-sm">
              <span className="font-semibold text-black">Description:</span>{" "}
              {description}
            </p>
            <div className="border-b mt-4 border-gray-200"></div>
          </div>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex gap-6">
              <p className="text-gray-600"> {postType} Date:</p>
              <p className="font-semibold">{date}</p>
            </div>
            <div className="flex gap-6 ">
              <p className="text-gray-600">{postType} Location:</p>
              <p className="font-semibold">{location}</p>
            </div>
          </div>

          <div className="bg-gray-100 mt-8 p-4 space-y-2 rounded">
            <h3 className="font-semibold text-gray-950">Contact Info</h3>
            <p className="flex gap-2 items-center">
              <IoMdContact />
              {name}
            </p>
            <p className="flex gap-2 items-center">
              <MdEmail />
              {email}
            </p>
          </div>

          <div className="">
            {status === "recovered" ? (
              <div className=" gap-4 mt-6 mb-10 space-y-2">
                <p className="bg-gray-100 p-2 rounded flex items-center gap-2">
                  <HiExclamationCircle color="red" /> This item already
                  recovered
                </p>
                <Link
                  to={"/allPosts"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="btn mt-4 disabled bg-[#443dff] text-white"
                >
                  Back to All Items
                </Link>
              </div>
            ) : (
              <div className=" flex gap-4 mt-4">
                {postType == "Lost" && (
                  <>
                    <button
                      className="btn hover:bg-blue-500 mt-4 bg-[#443dff] text-white"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Found This
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <div className="">
                          <div className="">
                            <div className="flex items-center justify-between">
                              <h1 className=" font-bold ">Lost Item Recover</h1>
                              <button
                                onClick={() => {
                                  document.getElementById("my_modal_1").close();
                                }}
                                className="cursor-pointer hover:bg-gray-200 btn-ghost bg-gray-100 p-2 rounded-full"
                              >
                                <RxCross2 />
                              </button>
                            </div>
                            <div className="border-b border-gray-200 mt-2 mb-2"></div>
                          </div>

                          <div className=" space-y-3">
                            <div className="avatar">
                              <div className="ring-primary mt-4 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img src={user?.photoURL} />
                              </div>
                            </div>
                            <p>{user?.displayName}</p>
                            <p>{user?.email}</p>
                          </div>
                        </div>

                        <div className="modal-action">
                          <form
                            onSubmit={(e) =>
                              handleDataSubmitModal(e, _id, userName, userEmail)
                            }
                            method="dialog"
                            className="w-full "
                          >
                            <div className="flex flex-col gap-4">
                              <div className="">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="username"
                                >
                                  Recover location
                                </label>
                                <input
                                  type="text"
                                  name="location"
                                  className=" appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                                  placeholder="location"
                                ></input>
                              </div>

                              <div className="">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="username"
                                >
                                  Recover Date
                                </label>
                                <DatePicker
                                  name="date"
                                  className="w-full  appearance-none block  focus:-border-blue-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                                  selected={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}
                                />
                              </div>
                            </div>
                            {/* if there is a button in form, it will close the modal */}
                            <div className="flex justify-end mt-10">
                              <button
                                onClick={() => {
                                  document.getElementById("my_modal_1").close();
                                }}
                                type="submit"
                                className="btn hover:bg-blue-500 bg-[#443dff] text-white"
                              >
                                Submit recover
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </>
                )}
                {postType == "Found" && (
                  <>
                    <button
                      className="btn hover:bg-blue-500  bg-[#443dff] text-white"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      This Is Mine
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <div className="">
                          <div className="flex items-center justify-between">
                            <h1 className=" font-bold ">Found Item Recover</h1>
                            <button
                              onClick={() => {
                                document.getElementById("my_modal_1").close();
                              }}
                              className="cursor-pointer hover:bg-gray-200 btn-ghost bg-gray-100 p-2 rounded-full"
                            >
                              <RxCross2 />
                            </button>
                          </div>
                          <div className="border-b border-gray-200 mt-2 mb-2"></div>

                          <div className=" space-y-3">
                            <div className="avatar">
                              <div className="ring-primary mt-4 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img src={user?.photoURL} />
                              </div>
                            </div>
                            <p>{user?.displayName}</p>
                            <p>{user?.email}</p>
                          </div>
                        </div>

                        <div className="modal-action ">
                          <form
                            onSubmit={(e) =>
                              handleDataSubmitModal(e, _id, userName, userEmail)
                            }
                            method="dialog"
                            className="w-full"
                          >
                            <div className="flex flex-col gap-4">
                              <div className="">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="username"
                                >
                                  Recover location
                                </label>
                                <input
                                  type="text"
                                  name="location"
                                  className=" appearance-none block w-full focus:-border-blue-500 bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                                  placeholder="location"
                                ></input>
                              </div>

                              <div className="">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="username"
                                >
                                  Recover Date
                                </label>
                                <DatePicker
                                  name="date"
                                  className="w-full  appearance-none block  focus:-border-blue-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight"
                                  selected={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}
                                />
                              </div>
                            </div>
                            {/* if there is a button in form, it will close the modal */}
                            <div className="flex justify-end mt-10">
                              <button
                                onClick={() => {
                                  document.getElementById("my_modal_1").close();
                                }}
                                type="submit"
                                className="btn hover:bg-blue-500 bg-[#443dff] text-white"
                              >
                                Submit recover
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
