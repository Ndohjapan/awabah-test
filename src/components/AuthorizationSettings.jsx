const settings = ["Pending Authotizations(5)", "Authorization History"];

export default function AuthorizationSettings() {
  return (
    <>
      <div className="relative col-span-10 lg:col-span-3">
        <div>
          <div className="mb-2 px-3">
            <h1 className="text-center text-awabah-600 text-lg mb-6 font-medium">AUTHORIZATION</h1>
          </div>
          <div className="px-3 py-3 bg-awabah-300 rounded-md">
          {settings.map((setting, index) => (
            <div
              key={index}
              className="mt-1 mb-5 relative rounded-md shadow-3xl bg-white"
            >
              <button className="p-4 block w-full pr-10 sm:text-sm  text-left border-gray-300 rounded-md ">
                {setting}
              </button>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
