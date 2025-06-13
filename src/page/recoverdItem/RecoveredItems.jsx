import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import RecoveredItemRow from "./RecoveredItemRow";
import RecoveredItemCard from "./RecoveredItemCard";
import { ImTable2 } from "react-icons/im";
import { PiCardsThreeFill } from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const RecoveredItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [tableFormat, setTableFormat] = useState(false);
  localStorage.setItem("toggle", tableFormat);
  const toggleValue = localStorage.getItem("toggle");
  const user = useUserContext();
  const email = user?.email;
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/recoveredItems/${email}`)
      .then((res) => setRecoveredItems(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  return (
    <div className="">
      <div className="  flex justify-center">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Change layout format <MdKeyboardDoubleArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setTableFormat(true)}>Table</a>
            </li>
            <li>
              <a onClick={() => setTableFormat(false)}>Card</a>
            </li>
          </ul>
        </div>
      </div>

      {tableFormat ? (
        <>
          <div className="w-10/12 mx-auto mt-4 overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table ">
              {/* head */}
              <thead className="bg-[#443dff] text-white ">
                <tr>
                  <th>Email</th>
                  <th>Recovered By</th>
                  <th>Recovery Date</th>
                  <th>Recovery Location</th>
                </tr>
              </thead>
              <tbody className="bg-[#F6F6F6]">
                {recoveredItems?.map((item, index) => (
                  <RecoveredItemRow key={index} item={item}></RecoveredItemRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="w-10/12 mt-4 mx-auto  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recoveredItems?.map((item, index) => (
            // <div>{item.recoverUserEmail}</div>
            <RecoveredItemCard key={index} item={item}></RecoveredItemCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
