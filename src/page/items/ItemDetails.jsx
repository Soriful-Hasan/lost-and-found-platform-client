import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUserContext from "../../hook/ContextHook";
import { FaCheckCircle } from "react-icons/fa";

const ItemDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const user = useUserContext();
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
    axios
      .post(`${import.meta.env.VITE_apiUrl}/recoverItem`, recoverData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    // update itemsCollection status recovered

    const statusData = {
      id: _id,
      status: "recovered",
    };
    axios
      .post(`${import.meta.env.VITE_apiUrl}/updateStatus`, statusData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/getItem/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
    <div className="w-8/12 mx-auto">
      <div className="p-4 space-y-2">
        <h1 className="text-2xl font-semibold">Lost and Found Item Details</h1>
        {status == "recovered" && (
          <p className="flex items-center gap-2">
            <FaCheckCircle color="green" />
            Recovered
          </p>
        )}
        <div className="border-b border-gray-100 mt-2"></div>
      </div>
      <div className=" p-4">
        <img
          width={300}
          height={200}
          className=" rounded-xl"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className=" gap-8 justify-center ">
        <div className="p-4">
          <div className="border-t-8 border-blue-500">
            <div className="border p-4 space-y-2  border-gray-100">
              <div className="ml-4">
                <h2 className="text-xl ">Item {postType}</h2>
                <h1 className="text-gray-600">{title}</h1>
              </div>
            </div>
            <div className="border p-4  border-gray-100">
              <div className="ml-4 space-y-2">
                <h2 className="text-xl">Category</h2>
                <p>{category}</p>
              </div>
            </div>
            <div className="border p-4  border-gray-100">
              <div className="ml-4 space-y-2">
                <h2 className="text-xl">Post Type</h2>
                <p>{postType}</p>
              </div>
            </div>
            <div className="border p-4 space-y-2 border-gray-100">
              <div className="ml-4">
                <h2 className="text-xl">Date</h2>
                <p>{date}</p>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t-8 border-blue-500">
            <div className="border p-4 space-y-2 border-gray-100">
              <div className="ml-4">
                <h2 className="text-xl">Email</h2>
                <p>{email}</p>
              </div>
            </div>
            <div className="border p-4 space-y-2 border-gray-100">
              <div className="ml-4">
                <h2 className="text-xl">Name</h2>
                <p>{name}</p>
              </div>
            </div>
            <div className="border p-4 space-y-2 border-gray-100">
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Location</h2>
                <p>{location}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-2  mb-4 p-6 rounded bg-gray-100">
            <h2 className="text-xl">Item Details</h2>
            <p className="text-gray-600 ">
              {description}Product details, also known as product descriptions,
              are the specific pieces of information that describe a product,
              including its name, size, color, materials, features, and price.
              These details help customers understand the product and whether it
              meets their needs. Product detail pages (PDPs) on e-commerce sites
              provide a comprehensive overview of
            </p>
          </div>

          {status === "recovered" ? (
            <div className="flex gap-4 mt-10 mb-10">
              <button className="btn disabled rounded-4xl bg-blue-300 text-gray-600 disabled:bg-gray-500 cursor-not-allowed">
                Already Recovered
              </button>
              <button className="btn disabled rounded-4xl bg-blue-400 text-white">
                Back to All Items
              </button>
            </div>
          ) : (
            <div className=" flex gap-4 mt-4">
              {postType == "Lost" && (
                <>
                  <button
                    className="btn rounded-4xl bg-blue-500 text-white"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Found This
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <div className="">
                        <div className="flex justify-between">
                          <h1 className="mb-4 font-bold ">
                            Mining Parson information
                          </h1>
                          <button
                            onClick={() => {
                              document.getElementById("my_modal_1").close();
                            }}
                            className="btn"
                          >
                            x
                          </button>
                        </div>
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img src={user?.photoURL} />
                          </div>
                        </div>
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
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
                            <input
                              type="text"
                              name="location"
                              className="input w-full"
                              placeholder="location"
                            ></input>
                            <input
                              type="date"
                              name="date"
                              className="input w-full"
                              placeholder="date"
                            ></input>
                          </div>
                          {/* if there is a button in form, it will close the modal */}
                          <div className="flex justify-end mt-10">
                            <button type="submit" className="btn ">
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
                    className="btn rounded-4xl bg-blue-500 text-white"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    This Is Mine
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <div className="">
                        <div className="flex justify-between">
                          <h1 className="mb-4 font-bold ">
                            Mining Parson information
                          </h1>
                          <button
                            onClick={() => {
                              document.getElementById("my_modal_1").close();
                            }}
                            className="btn"
                          >
                            x
                          </button>
                        </div>
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img src={user?.photoURL} />
                          </div>
                        </div>
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
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
                            <input
                              type="text"
                              name="location"
                              className="input w-full"
                              placeholder="location"
                            ></input>
                            <input
                              type="date"
                              name="date"
                              className="input w-full"
                              placeholder="date"
                            ></input>
                          </div>
                          {/* if there is a button in form, it will close the modal */}
                          <div className="flex justify-end mt-10">
                            <button type="submit" className="btn ">
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
  );
};

export default ItemDetails;
