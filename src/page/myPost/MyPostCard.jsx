import React from "react";
import { Link } from "react-router";

const MyPostCard = ({ post }) => {
  const { title, _id } = post;

  const handleDeletePost = () => {};

  return (
    <tr>
      <td>{title}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
      <td>
        <Link to={`/editPost/${_id}`} className="btn">
          Edit
        </Link>
      </td>
      <td>
        <button to="/editPost" className="btn">
          delete
        </button>
      </td>
    </tr>
  );
};

export default MyPostCard;
