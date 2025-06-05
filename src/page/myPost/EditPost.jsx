import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import { useParams } from "react-router";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditPost = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [item, setItem] = useState({});
  const { id } = useParams();
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

  const handleEditPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    axios
      .post(`${import.meta.env.VITE_apiUrl}/updatePost/${_id}`, data)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          alert("Update Data Successfully");
        }
      })
      .catch((err) => console.log(err));
    console.log(data);
  };

  const {
    title,
    name,
    email,
    thumbnail,
    description,
    category,
    location,
    date,
    _id,
  } = item;
  return (
    <div className="place-items-center">
      <form
        onSubmit={handleEditPost}
        className="flex flex-col gap-8 mt-8  w-6/12"
      >
        <select name="postType" className="select w-full">
          <option value="" disabled selected>
            Select Post Type
          </option>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>
        <input
          type="text"
          name="thumbnail"
          defaultValue={thumbnail}
          placeholder="Item Photo URL"
          className="input w-full"
        />
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Title"
          className="input w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          defaultValue={description}
          className="input w-full"
        />
        <input
          type="text"
          name="category"
          defaultValue={category}
          placeholder="Category "
          className="input w-full"
        />
        <input
          type="text"
          name="location"
          defaultValue={location}
          placeholder="location"
          className="input w-full"
        />
        <DatePicker
          name="date"
          className="input w-full"
          defaultValue={date}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />

        <input
          type="text"
          name="name"
          defaultValue={name}
          className="input w-full"
        />
        <input
          type="text"
          name="email"
          defaultValue={email}
          className="input w-full"
        />
        <button type="submit" className="btn">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
