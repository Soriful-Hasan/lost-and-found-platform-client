import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useUserContext from "../../hook/ContextHook";
import RecoveredItemRow from "./RecoveredItemRow";
import RecoveredItemCard from "./RecoveredItemCard";
import { ImTable2 } from "react-icons/im";
import { PiCardsFill, PiCardsThreeFill } from "react-icons/pi";
import {
  MdKeyboardDoubleArrowDown,
  MdEmail,
  MdPerson,
  MdCalendarToday,
  MdLocationOn,
} from "react-icons/md";
import useApplicationApi from "../../api/useApplicationApi";
import { FaTable, FaCheckCircle } from "react-icons/fa";
import RecoverNoData from "../../components/noData/RecoverNoData";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";
import { Link } from "react-router";
import { Plus, Search, Filter } from "lucide-react";

const RecoveredItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const { recoverItemsPromise } = useApplicationApi();
  const user = useUserContext();
  const email = user?.email;
  const [dataLoading, setDataLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const recoverItemsData = async () => {
      const data = await recoverItemsPromise(email);
      setRecoveredItems(data);
      setDataLoading(false);
    };
    recoverItemsData();
  }, [email, recoverItemsPromise]);

  // Filter and sort items
  const filteredItems = recoveredItems.filter(
    (item) =>
      item.recoverUserEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.recoverUserName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.recoverLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (dataLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 ">
      <title>Recovery items</title>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl  p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Recovered Items
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Track and manage your recovered posts
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search recovered items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#443dff] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-full sm:w-64"
                />
              </div>

              <Link
                to={"/addItem"}
                className="inline-flex items-center justify-center px-6 py-2 bg-[#443dff] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200  hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Item
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Total Recovered
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {recoveredItems.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  This Month
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {
                    recoveredItems.filter((item) => {
                      const itemDate = new Date(item.recoverDate);
                      const currentDate = new Date();
                      return (
                        itemDate.getMonth() === currentDate.getMonth() &&
                        itemDate.getFullYear() === currentDate.getFullYear()
                      );
                    }).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <MdCalendarToday className="text-[#443dff] text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Filtered Results
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {filteredItems.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Search className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl  overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <FaTable className="text-[#443dff]" />
                <span>Recovery Details</span>
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredItems.length} of {recoveredItems.length} items
              </div>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="p-8">
              {recoveredItems.length === 0 ? (
                <RecoverNoData />
              ) : (
                <div className="text-center py-8">
                  <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No matching results
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search terms
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#443dff] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <MdEmail className="w-4 h-4" />
                        <span>Contact Email</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <MdPerson className="w-4 h-4" />
                        <span>Recovered By</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <MdCalendarToday className="w-4 h-4" />
                        <span>Recovery Date</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <MdLocationOn className="w-4 h-4" />
                        <span>Recovery Location</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredItems.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <MdEmail className="text-[#443dff] text-sm" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.recoverUserEmail}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                            <MdPerson className="text-green-600 dark:text-green-400 text-sm" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.recoverUserName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                            <MdCalendarToday className="text-purple-600 dark:text-purple-400 text-sm" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {new Date(item.recoverDate).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(item.recoverDate).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                            <MdLocationOn className="text-orange-600 dark:text-orange-400 text-sm" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.recoverLocation}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        {filteredItems.length > 0 && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl  p-6">
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <p className="text-2xl font-bold text-[#443dff]">
                  {filteredItems.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Items Shown
                </p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.round(
                    (filteredItems.length / recoveredItems.length) * 100
                  )}
                  %
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Of Total
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecoveredItems;
