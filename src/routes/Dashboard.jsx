import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import SideBar from "../components/SideBar";
import StickyHeader from "../components/StickyHeader";
import NotFound from "../pages/NotFound";
import Authorization from "../pages/Authorization";
import DoughnutChart from "../components/DoughnutChart";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="md:pl-64 flex flex-col flex-1">
          <StickyHeader setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doughnut" element={<DoughnutChart />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route
              path="*"
              element={
                <>
                  <NotFound />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
