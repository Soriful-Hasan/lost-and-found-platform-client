import axios from "axios";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPostCard = ({ post, myPosts, setMyPosts }) => {
  const { title, _id, postType,date } = post;

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
      <td>Quality Control Specialist</td>
      <td>{postType}</td>
      <td>
        <Link to={`/editPost/${_id}`} className="btn">
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDeletePost(_id)}
          to="/editPost"
          className="btn"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default MyPostCard;
