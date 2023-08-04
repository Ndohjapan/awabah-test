import React from "react";
import {HiUser} from "react-icons/hi2"

const users = [
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-awabah-400"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-red-200"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-awabah-400"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-red-200"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-awabah-400"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-red-200"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-awabah-400"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-red-200"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-awabah-400"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-red-200"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-awabah-400"
  },
  {
    name: "Omolara Dansu",
    role: "Designer",
    border: "border-red-200"
  },
];

export default function TeamView() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
          <div className="p-4 col-span-2 lg:col-span-1">

          <h1 className="text-center text-lg mt-4 mb-6 font-medium">Sub Admin</h1>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {users.map((file, index) => (
              <li key={index} className="relative cursor-pointer flex flex-col items-center justify-center">
                <div className={`group w-14 flex items-center justify-center border ${file.border} h-14 rounded-sm`}>
                    <HiUser/>
                </div>
                <p className="mt-2 block text-center text-[10px] font-medium text-gray-900 truncate pointer-events-none">
                  {file.name}
                </p>
                <p className="block text-[10px] text-center font-medium text-gray-500 pointer-events-none">
                  {file.role}
                </p>
              </li>
            ))}
          </ul>
          </div>
          <div className="p-4 col-span-2 lg:col-span-1">

          <h1 className="text-center text-lg mt-4 mb-6 font-medium">Internal Management</h1>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {users.map((file, index) => (
              <li key={index} className="relative cursor-pointer flex flex-col items-center justify-center">
                <div className={`group w-14 flex items-center justify-center border ${file.border} h-14 rounded-sm`}>
                    <HiUser/>
                </div>
                <p className="mt-2 block text-center text-[10px] font-medium text-gray-900 truncate pointer-events-none">
                  {file.name}
                </p>
                <p className="block text-[10px] text-center font-medium text-gray-500 pointer-events-none">
                  {file.role}
                </p>
              </li>
            ))}
          </ul>
          </div>
      </div>
    </>
  );
}
