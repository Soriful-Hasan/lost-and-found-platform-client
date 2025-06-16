import React from "react";
import { IoMdStar } from "react-icons/io";

const SetisFiedCard = ({ review }) => {
  return (
    <div className="border rounded-sm p-4 bg-white border-gray-100">
      <div className=" p-4 ">
        <p className="text-gray-600 text-sm">{review.review}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={review.img} alt="" />
          </div>
        </div>
        <div className="flex justify-between  w-full">
          <div className="">
            <h1 className="text-xl text-[#4A8F7D]">{review.name}</h1>
            <p className="text-gray-600 text-sm">{review.position}</p>
          </div>
          <div className="flex">
            <IoMdStar color="#FE6F61" />
            <IoMdStar color="#FE6F61" />
            <IoMdStar color="#FE6F61" />
            <IoMdStar color="#FE6F61" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetisFiedCard;
