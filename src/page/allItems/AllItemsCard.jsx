import React from "react";
import { Link } from "react-router";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const AllItemsCard = ({ post }) => {
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
  } = post;
  return (
    <div>
      <div className="card border-gray-200 rounded bg-white w-full border ">
        <div className="p-2">
          <div className="w-full h-60 bg-gray-100  rounded-md ">
            <img
              className="w-full rounded-sm h-full object-cover"
              src={thumbnail}
              alt="image"
            />
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title line-clamp-1 ">{title}</h2>
          <p className="text-gray-700 text-sm line-clamp-2">
            hello i am soriful hasana this product i found in our gardern and
            this is my name best obption and this{description}
          </p>
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
              to={`/itemDetails/${_id}`}
              className="btn bg-[#443dff] flex gap-2  text-white border-none btn-primary"
            >
              see item <HiOutlineArrowLongRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItemsCard;
