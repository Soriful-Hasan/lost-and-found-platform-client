import React from "react";
import { Link } from "react-router";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const ItemCards = ({ item }) => {
  const {
    title,

    thumbnail,
    description,

    location,
    status,
    date,
    _id,
  } = item;
  return (
    <div>
      <div className="group card border-gray-200 rounded-2xl dark:border-gray-700 dark:bg-gray-800 bg-white w-full border   transform  duration-300 overflow-hidden">

        <div className="relative p-3">
          <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={thumbnail}
              alt="image"
            />
         
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

         
            <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-lg">
              {status === "recovered" ? <p>Recovered</p> : <p>Still Missing</p>}
            </div>
          </div>
        </div>

        {/* Enhanced Card Body */}
        <div className="px-6 pb-6 space-y-4">
          {/* Title Section */}
          <div className="space-y-2">
            <h2 className="text-xl line-clamp-1 font-bold text-gray-900 dark:text-white  leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Info Section with Enhanced Icons */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <BiSolidCalendarCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {date}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center justify-center w-8 h-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <IoLocationSharp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {location}
              </span>
            </div>
          </div>

          {/* Enhanced Action Section */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              {/* Price or Status (Optional) */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                View Details
              </div>

              {/* Enhanced Button */}
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={`itemDetails/${_id}`}
                className="group/btn bg-primary relative inline-flex items-center gap-2 px-6 py-3   text-white font-semibold rounded-xl  "
              >
                {/* Button Content */}
                <span className="relative z-10">Details</span>
                <FaArrowRightLong className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
