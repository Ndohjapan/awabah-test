const settings = ["Sub Admins (25)", "Internal Management (25)"];

export default function AdminSettings() {
  return (
    <>
      <div className="relative col-span-10 lg:col-span-3 px-3 py-5">
        <div>
          <div className="mb-5">
            <h1 className="text-right text-lg mb-6 font-medium">
              Admins (50)
            </h1>
          </div>
          {settings.map((setting, index) => (
            <div
              key={index}
              className="mt-1 mb-5 relative shadow-3xl"
            >
              <button className="p-4 block w-full pr-10 sm:text-sm text-left border-gray-300 rounded-md ">
                {setting}
              </button>
            </div>
          ))}
          <div key={3} className="mt-1 mb-5 relative rounded-md shadow-sm">
            <button className="p-4 block w-full pr-10 sm:text-sm border text-left bg-awabah-300 rounded-md ">
              Deactivated Admins (10)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
