import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const DropDown = ({ user, handleSignOut }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="focus:outline-none group">
        <div className="avatar cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-100 p-1 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-blue-300">
          <div className="w-10 rounded-full ring-2 ring-white ring-offset-2 ring-offset-transparent group-hover:ring-offset-blue-100 transition-all duration-300">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </MenuButton>

      {/* Dropdown Items */}
      <MenuItems className="absolute right-0 mt-3 w-56 origin-top-right rounded-xl bg-white  shadow-2xl ring-1 ring-black/5 focus:outline-none z-50 text-sm text-gray-700 border-0 backdrop-blur-sm transform transition-all duration-200 ease-out">
        <div className="py-2">
          {/* User Info Section */}
          <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl border-b border-gray-100">
            <div className="flex items-center space-x-3">
             
              <div>
                <h1 className="font-semibold text-gray-800 text-sm leading-tight">
                  {user?.displayName}
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={`${
                    active
                      ? "bg-gradient-to-r from-red-50 to-pink-50 text-red-700 border-l-3 border-red-400"
                      : "text-gray-700 hover:text-red-600"
                  } group flex items-center w-full px-4 py-3 text-sm font-medium transition-all duration-200 ease-out transform hover:translate-x-1`}
                >
                  <div
                    className={`${
                      active
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-500 group-hover:bg-red-100 group-hover:text-red-600"
                    } p-1.5 rounded-lg mr-3 transition-colors duration-200`}
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4" />
                  </div>
                  <span className="flex-1 text-left">Logout</span>
                  <div
                    className={`${
                      active
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    } transition-all duration-200`}
                  >
                    →
                  </div>
                </button>
              )}
            </MenuItem>

        
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
