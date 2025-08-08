import React from "react";
import { Link } from "react-router";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";


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
      <div className="card border-gray-200 rounded bg-white w-full border ">
        <div className="p-2">
          <div className="w-full h-60 bg-gray-100  rounded-md">
            <img
              className="w-full rounded-sm h-full object-cover"
              src={thumbnail}
              alt="image"
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title line-clamp-1 ">{title}</h2>
          <p className="text-gray-800 text-sm line-clamp-2">{description}</p>
          <p className="flex items-center gap-2 ">
            <BiSolidCalendarCheck color="#443dff" />
            {date}
          </p>
          <p className="flex items-center gap-2 ">
            <IoLocationSharp color="#443dff" />
            {location}
          </p>
          <div className="card-actions justify-end">
            
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={`itemDetails/${_id}`}
                className="btn hover:bg-blue-500 shadow-sm bg-[#443dff] flex gap-2  text-white border-none btn-primary"
              >
                Details <FaArrowRightLong />
              </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
