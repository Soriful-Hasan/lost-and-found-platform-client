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
  console.log(toggleValue);
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
          <div className="mt-4 border border-gray-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>index</th>
                  <th>Email</th>
                  <th>Job</th>
                  <th>Recovered</th>
                </tr>
              </thead>
              <tbody>
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
