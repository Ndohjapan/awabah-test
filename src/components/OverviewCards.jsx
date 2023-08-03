import { HiOutlineBuildingOffice2, HiOutlineUsers } from "react-icons/hi2";
import Subscription from "../assets/Subscription";
import PullRequest from "../assets/PullRequest";

const people = [
  {
    name: "Total Valubah Plans",
    icon: HiOutlineBuildingOffice2,
    left: "Active 5000",
    right: "Inactive 500",
  },
  {
    name: "Total Beneficiaries",
    icon: HiOutlineUsers,
    left: "Active 5000",
    right: "Inactive 500",
  },
  {
    name: "Total Requests",
    icon: PullRequest,
    left: "Approved 5000",
    right: "Pending 50",
  },
  {
    name: "Total Subscriptions",
    icon: Subscription,
    left: "Pending 5000",
    right: "Inactive 500",
  },
];

export default function OverviewCards() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-7">
      {people.map((person) => (
        <li
          key={person.name}
          className="col-span-1 bg-awabah-300 rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex truncate">
              <div className="max-w-max p-3 border rounded-lg bg-awabah-300">
                <person.icon className="text-awabah-600 text-4xl" />
              </div>

              <div className="flex items-center space-x-3 ml-2">
                <h3 className="text-gray-900 text-lg font-medium truncate">
                  {person.name}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200 border border-t-awabah-gray-400">
              <div className="w-0 flex-1 flex border border-r-awabah-gray-400">
                <a
                  href="#"
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <span className="text-base">{person.left}</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex border border-l-awabah-gray-400">
                <a
                  href="#"
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span className="text-base">{person.right}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
