import React, { useContext, useState } from "react";
import UserContext from "../../provider/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddItem = () => {
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    axios
      .post(`${import.meta.env.VITE_apiUrl}/addItem`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="place-items-center">
      <form
        onSubmit={handlePostSubmit}
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
          placeholder="Item Photo URL"
          className="input w-full"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input w-full"
        />
        {/* <input
          type="text"
          name="category"
          placeholder="Category "
          className="input w-full"
        /> */}
        <select name="category" className="select w-full">
          <option value="" disabled selected>
            Select category type
          </option>
          <option value="pets">pets</option>
          <option value="gadgets">gadgets</option>
          <option value="documents">documents</option>
          <option value="other">others</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="location"
          className="input w-full"
        />
        <DatePicker
          name="date"
          className="input w-full"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />

        <input
          type="text"
          name="name"
          value={user?.displayName}
          className="input w-full"
        />
        <input
          type="text"
          name="email"
          value={user?.email}
          className="input w-full"
        />
        <button type="submit" className="btn">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default AddItem;
