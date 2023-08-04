import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  HiOutlineBuildingOffice2,
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineGift,
} from "react-icons/hi2";
import UserSettings from "../assets/UserSettings";
import Logout from "../assets/Logout";
import Settings from "../assets/Settings";
import images from "../assets/images.json"

const navigation = [
  { name: "Dashboard", href: "#", icon: HiOutlineHome, current: true },
  {
    name: "Vlauebah Plans",
    href: "#",
    icon: HiOutlineBuildingOffice2,
    current: false,
  },
  { name: "Beneficiary", href: "#", icon: HiOutlineUsers, current: false },
  { name: "Dash Dem", href: "#", icon: HiOutlineGift, current: false },
  {
    name: "User Authentication",
    href: "#",
    icon: UserSettings,
    current: false,
  },
];

const subNavigation = [
  { name: "Settings", href: "#", icon: Settings, current: false },
  { name: "Logout", href: "#", icon: Logout, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
export default function SideBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-1 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-12 w-auto"
                  src={images.logo}
                  alt="Valubah"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-awabah-600"
                            : "text-awabah-600 group-hover:text-gray-500",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                  <div
                    className="m-8"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                  >
                    <div
                      className="grid grid-cols-1 gap-6 items-center mt-5"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                      <h1 className="text-center text-2xl font-bold text-gray-300 font-inria">
                        Wallet
                      </h1>
                      <div className="w-full border-t border-gray-300" />
                    </div>
                  </div>
                  {subNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-awabah-600"
                            : "text-awabah-600 group-hover:text-gray-500",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-1 bg-white overflow-y-auto">
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            <img
              className="h-12 w-auto"
              src={images.logo}
              alt="Valubah"
            />
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-awabah-600 font-semibold"
                        : "text-awabah-600 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
              <div
                className="m-8"
                style={{ marginTop: "2rem", marginBottom: "2rem" }}
              >
                <div
                  className="grid grid-cols-1 gap-6 items-center mt-5"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                  <h1 className="text-center text-2xl font-bold text-gray-300 font-inria">
                    Wallet
                  </h1>
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
              {subNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-awabah-600"
                        : "text-awabah-600 group-hover:text-gray-500",
                      "mr-4 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
