import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import RecoveredItemRow from "./RecoveredItemRow";
import RecoveredItemCard from "./RecoveredItemCard";
import { ImTable2 } from "react-icons/im";
import { PiCardsFill, PiCardsThreeFill } from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import useApplicationApi from "../../api/useApplicationApi";
import { FaTable } from "react-icons/fa";
import RecoverNoData from "../../components/noData/RecoverNoData";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";

const RecoveredItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const { recoverItemsPromise } = useApplicationApi();
  const user = useUserContext();
  const email = user?.email;
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    const recoverItemsData = async () => {
      const data = await recoverItemsPromise(email);
      setRecoveredItems(data);
      setDataLoading(false);
    };
    recoverItemsData();
  }, [email, recoverItemsPromise]);

  if (dataLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <title>Recovery items</title>

      <>
        <div className="w-10/12 mx-auto mt-4 mb-10 overflow-x-auto  border border-base-content/5 bg-base-100">
          <table className="table ">
            {/* head */}
            <thead className="bg-blue-600 ">
              <tr className="text-white">
                <th className="">Email</th>
                <th>Recovered By</th>
                <th>Recovery Date</th>
                <th>Recovery Location</th>
              </tr>
            </thead>

            <tbody className="bg-white ">
              {recoveredItems.length === 0 ? (
                <tr>
                  <td colSpan="100%">
                    <RecoverNoData></RecoverNoData>
                  </td>
                </tr>
              ) : (
                <>
                  {recoveredItems?.map((item, index) => (
                    <RecoveredItemRow
                      key={index}
                      item={item}
                    ></RecoveredItemRow>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default RecoveredItems;
