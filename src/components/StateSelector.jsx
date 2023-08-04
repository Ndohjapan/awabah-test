import { SearchIcon, ChevronRightIcon } from "@heroicons/react/outline";

const cities = [
  "Lagos",
  "Ibadan",
  "Abuja",
  "Port Harcourt",
  "Jos",
  "Kaduna",
  "Anambra",
  "Benin",
];

export default function StateSelector() {
  return (
    <>
      <div className="relative col-span-10 lg:col-span-3 px-3 py-5">
        <div>
          <div className="mt-1 mb-5 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="p-2 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md"
              placeholder="Search..."
            />
          </div>
          {cities.map((city, index) => (
            <div key={index} className="mt-1 mb-5 relative rounded-md shadow-sm">
              <button className="p-4 block w-full pr-10 sm:text-sm border text-left border-gray-300 rounded-md ">
                {city}
              </button>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronRightIcon
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
