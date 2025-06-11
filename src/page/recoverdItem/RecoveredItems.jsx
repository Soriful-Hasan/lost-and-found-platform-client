import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import RecoveredItemRow from "./RecoveredItemRow";
import RecoveredItemCard from "./RecoveredItemCard";

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
  //   console.log(tableFormat);
  return (
    <div className="">
      <input
        type="checkbox"
        onClick={() => setTableFormat(!tableFormat)}
        className="toggle"
      />
      {tableFormat ? (
        <>
          <div className="mt-4 overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table ">
              {/* head */}
              <thead className="bg-blue-500 text-white ">
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
