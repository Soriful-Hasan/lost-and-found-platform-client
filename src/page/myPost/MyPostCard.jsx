import axios from "axios";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const MyPostCard = ({ post, myPosts, setMyPosts }) => {
  const { title, _id, postType, date, location, status, category } = post;

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_apiUrl}/deleteItem/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              const filter = myPosts.filter((post) => post._id != id);
              setMyPosts(filter);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{location}</td>
      <td>{postType}</td>
      <td>{category}</td>
      <td className="flex gap-4">
        <Link
          to={`/editPost/${_id}`}
          className="bg-gray-200 p-4 cursor-pointer  rounded-full hover:bg-gray-300"
        >
          <FaEdit />
        </Link>
        <button
          onClick={() => handleDeletePost(_id)}
          to="/editPost"
          className="bg-gray-200 p-4 cursor-pointer  rounded-full hover:bg-gray-300"
        >
          <FaTrash color="red" />
        </button>
      </td>
    </tr>
  );
};

export default MyPostCard;
