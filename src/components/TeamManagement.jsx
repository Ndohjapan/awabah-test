import { React } from "react";
import { HiUser } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import {PiCaretDownFill} from "react-icons/pi"

const users = [
  {
    name: "Block",
  },
  {
    name: "Restrict",
  },
  {
    name: "Delete",
  },
  {
    name: "OTP",
  },
  {
    name: "Access",
  }
];

export default function TeamManagement() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 col-span-2 lg:col-span-1">
          <div className="flex items-center mt-4 mb-6 justify-start">
            <SlSettings className="text-center text-lg font-medium" />{" "}
            <h1 className="text-center text-lg font-medium ml-2">
              {"  "}
              Sub Admin
            </h1>
          </div>
          <ul
            role="list"
            className="grid border border-gray-900 px-4 pt-4"
          >
          {users.map((user, index) => (
            <div key={index} className="mt-1 mb-5 grid grid-cols-5 gap-3">
              <button className="text-lg font-medium col-span-4 px-4 py-2 block w-full sm:text-sm border text-left border-gray-900 ">
                {user.name}
              </button>
              <button className="col-span-1 flex items-center border border-gray-900 justify-center">
                <PiCaretDownFill
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </button>
            </div>
          ))}
          </ul>
        </div>
        <div className="p-4 col-span-2 lg:col-span-1">
          <div className="flex items-center mt-4 mb-6 flex-row-reverse">
            <SlSettings className="text-center text-lg font-medium" />{" "}
            <h1 className="text-center text-lg font-medium mr-2">
              {"  "}
              Internal Management
            </h1>
          </div>
          <ul
            role="list"
            className="grid border border-gray-900 px-4 pt-4"
          >
          {users.map((user, index) => (
            <div key={index} className="mt-1 mb-5 grid grid-cols-5 gap-3">
              <button className="text-lg font-medium col-span-4 px-4 py-2 block w-full sm:text-sm border text-left border-gray-900 ">
                {user.name}
              </button>
              <button className="col-span-1 flex items-center border border-gray-900 justify-center">
                <PiCaretDownFill
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </button>
            </div>
          ))}
          </ul>
        </div>
      </div>
    </>
  );
}
