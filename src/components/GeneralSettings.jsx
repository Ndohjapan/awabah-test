const settings = ["No of Users", "Login Notification", "Hours of Usage"];

export default function GeneralSettings() {
  return (
    <>
      <div className="relative col-span-10 lg:col-span-3 px-3 py-5">
        <div>
          <div className="mt-1 mb-5">
            <h1 className="text-right text-lg mt-4 mb-6 font-medium">General Settings</h1>
          </div>
          {settings.map((setting, index) => (
            <div
              key={index}
              className="mt-1 mb-5 relative rounded-md shadow-3xl"
            >
              <button className="p-4 block w-full pr-10 sm:text-sm text-left border-gray-300 rounded-md ">
                {setting}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
