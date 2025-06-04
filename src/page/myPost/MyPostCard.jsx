import React from "react";

const MyPostCard = ({ post }) => {
  const { title } = post;
  return (
    <tr>
      
      <td>{title}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
      <td className="">Edit</td>
      <td>delete</td>
    </tr>
  );
};

export default MyPostCard;
