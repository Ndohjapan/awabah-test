import OverviewHeader from "../components/OverviewHeader";
import OverviewCards from "../components/OverviewCards";

export default function Overview() {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <OverviewHeader />
            <OverviewCards />
          </div>
        </div>
      </main>
    </>
  );
}
