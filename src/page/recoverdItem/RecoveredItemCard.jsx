import React from "react";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const RecoveredItemCard = ({ item }) => {
  return (
    <div>
      <div className="card  bg-[#F6F6F6]  w-full shadow-sm">
        <div className="card-body">
          <h2 className="font-semibold flex items-center gap-2">
            <FaUserCircle color="#3b82f6" />
            Recovered by {item.recoverUserName}
          </h2>
          <h2 className="font-semibold flex items-center gap-2">
            <MdEmail color="#3b82f6" />
            {item.recoverUserEmail}
          </h2>
          <p className="flex items-center gap-2 ">
            <BiSolidCalendarCheck color="#3b82f6" />
            {item.recoverDate}
          </p>

          <p className="flex items-center gap-2 ">
            <IoLocationSharp color="#3b82f6" />
            {item.recoverLocation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoveredItemCard;
