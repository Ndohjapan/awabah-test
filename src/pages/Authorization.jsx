import TeamManagement from "../components/TeamManagement";
import TeamView from "../components/TeamView";

export default function Authorization() {
  return (
    <>
      <div className="grid grid-cols-10 relative z-0 overflow-hidden">
        <main className="col-span-7">
          <div className="max-w-7xl mx-auto py-6 sm:px-6">
            <TeamView/>
            <TeamManagement/>
          </div>
        </main>
        <aside className="col-span-3 bg-slate-900 hidden relative xl:flex xl:flex-col flex-shrink-0 border-l border-gray-200 overflow-y-auto">
          {/* Start secondary column (hidden on smaller screens) */}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
          </div>
          {/* End secondary column */}
        </aside>
      </div>
    </>
  );
}
