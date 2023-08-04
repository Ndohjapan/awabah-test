import Location from "../sections/Location";
import Overview from "../sections/Overview";
import Table from "../sections/Table";
import Trend from "../sections/Trend";
import Usage from "../sections/Usage";

export default function Home() {
  return (
    <>
      <Overview />
      <Table />
      <Trend/>
      <Location/>
      <Usage/>
    </>
  );
}