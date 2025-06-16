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
  const [tableFormat, setTableFormat] = useState(false);
  localStorage.setItem("toggle", tableFormat);
  const { recoverItemsPromise } = useApplicationApi();
  const toggleValue = localStorage.getItem("toggle");
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
      <div className="space-y-2 w-10/12 mx-auto">
        <h1 className="text-[#4A8F7D] text-center text-xl font-semibold mb-4">
          Change Layout
        </h1>
        <div className="  flex gap-6 items-center justify-center">
          <div className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
            <PiCardsFill
              size={30}
              className="cursor-pointer  "
              onClick={() => setTableFormat(false)}
            />
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 cursor pointer p-3 rounded-full">
            <FaTable
              size={30}
              className="cursor-pointer "
              onClick={() => setTableFormat(true)}
            />
          </div>
        </div>
        <div className="border-b border-gray-200"></div>
      </div>

      {tableFormat ? (
        <>
          <div className="w-10/12 mx-auto mt-4 mb-10 overflow-x-auto  border border-base-content/5 bg-base-100">
            <table className="table ">
              {/* head */}
              <thead className="bg-[#443dff] text-white ">
                <tr className="">
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
      ) : (
        <div className="">
          {recoveredItems.length === 0 ? (
            <RecoverNoData></RecoverNoData>
          ) : (
            <div className="w-10/12 mt-4 mx-auto  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="">
                {recoveredItems?.map((item, index) => (
                  // <div>{item.recoverUserEmail}</div>
                  <RecoveredItemCard
                    key={index}
                    item={item}
                  ></RecoveredItemCard>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
