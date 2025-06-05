import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUserContext from "../../hook/ContextHook";

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

    axios
      .post(`${import.meta.env.VITE_apiUrl}/updateStatus`)
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
  } = item;

  return (
    <div>
      <div className="flex gap-8 justify-center mt-10">
        <div className="w-xl  p-4">
          <img className="w-full rounded-xl " src={thumbnail} alt="" />
        </div>
        <div className="p-4">
          <p className="font-bold">Post Title</p>
          <h1>{title}</h1>
          <h1>{name}</h1>
          <div className="mt-10 space-y-2">
            <p className="font-bold">Post details</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{location}</p>
            <p>{date}</p>
            <p>{postType}</p>
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-bold">User Information</p>
            <p>{email}</p>
            <p>{name}</p>
          </div>
          <div className=" flex gap-4 mt-4">
            {postType == "Lost" && <button className="btn">Found This!</button>}
            {postType == "Found" && (
              <>
                <button
                  className="btn"
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
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
