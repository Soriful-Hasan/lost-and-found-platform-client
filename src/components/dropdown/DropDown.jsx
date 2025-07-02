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
      {/* Avatar acts as dropdown button */}
      <MenuButton className="focus:outline-none">
        <div className="avatar cursor-pointer bg-gray-100 p-1 rounded-full">
          <div className="w-10   rounded-full  ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt="User Avatar" />
          </div>
        </div>
      </MenuButton>

      {/* Dropdown Items */}
      <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 text-sm text-gray-700">
        <div className="py-1">
          <div className="p-4">
            <h1>{user?.displayName}</h1>
            <div className="border-b mt-2 border-gray-200"></div>
          </div>

          <MenuItem>
            {({ active }) => (
              <button
                onClick={handleSignOut}
                className={`${
                  active ? "bg-gray-100" : ""
                } group flex items-center w-full px-4 py-2`}
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                Logout
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
