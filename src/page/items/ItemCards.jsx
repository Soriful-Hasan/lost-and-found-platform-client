import React from "react";
import { Link } from "react-router";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

const ItemCards = ({ item }) => {
  const {
    title,
    name,
    email,
    thumbnail,
    description,
    category,
    location,
    status,
    date,
    _id,
  } = item;
  return (
    <div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <div className="card bg-[#F6F6F6] w-full shadow-sm">
        <div className="w-full h-50 ">
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt="image"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title line-clamp-1 ">{title}</h2>
          <p className="text-gray-700 text-sm line-clamp-2">
            hello i am soriful hasana this product i found in our gardern and
            this is my name best obption and this{description}
          </p>
          <p className="flex items-center gap-2 ">
            <BiSolidCalendarCheck color="#3b82f6" />
            {date}
          </p>
          <p className="flex items-center gap-2 ">
            <IoLocationSharp color="#3b82f6" />
            {location}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`itemDetails/${_id}`}
              className="btn bg-[#3b82f6] flex gap-2  text-white border-none btn-primary"
            >
              see item <HiOutlineArrowLongRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
