import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import RecoveredItemRow from "./RecoveredItemRow";

const RecoveredItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
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
  //   console.log(recoveredItems);
  return (
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
          {recoveredItems?.map((item) => (
            <RecoveredItemRow item={item}></RecoveredItemRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecoveredItems;
