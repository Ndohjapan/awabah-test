import AdminSettings from "../components/AdminSettings";
import AuthorizationSettings from "../components/AuthorizationSettings";
import GeneralSettings from "../components/GeneralSettings";
import OverviewHeader from "../components/OverviewHeader";
import TeamManagement from "../components/TeamManagement";
import TeamView from "../components/TeamView";

export default function Authorization() {
  return (
    <>
      <div className="grid grid-cols-4 relative z-0 overflow-hidden">
        <main className="col-span-4 lg:col-span-3">
          <div className="max-w-7xl mx-auto py-6 sm:px-6">
            <OverviewHeader data={"Authorization"}/>
            <TeamView/>
            <TeamManagement/>
          </div>
        </main>
        <aside className="col-span-4 lg:col-span-1 hidden relative xl:flex xl:flex-col flex-shrink-0 border-l border-gray-200 overflow-y-auto">
          {/* Start secondary column (hidden on smaller screens) */}
          <div className="absolute inset-0 py-6 px-1 sm:px-1 lg:px-1">
            <GeneralSettings/>
            <AuthorizationSettings/>
            <AdminSettings/>
          </div>
          {/* End secondary column */}
        </aside>
      </div>
    </>
  );
}
