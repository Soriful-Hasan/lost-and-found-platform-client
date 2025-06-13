import React from "react";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const RecoveredItemCard = ({ item }) => {
  return (
    <div>
      <div className="card  bg-white  w-full shadow-sm">
        <div className="card-body">
          <h2 className="font-semibold flex items-center gap-2">
            <FaUserCircle color="#443dff" />
            Recovered by {item.recoverUserName}
          </h2>
          <h2 className="font-semibold flex items-center gap-2">
            <MdEmail color="#443dff" />
            {item.recoverUserEmail}
          </h2>
          <p className="flex items-center gap-2 ">
            <BiSolidCalendarCheck color="#443dff" />
            {item.recoverDate}
          </p>

          <p className="flex items-center gap-2 ">
            <IoLocationSharp color="#443dff" />
            {item.recoverLocation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoveredItemCard;
