import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

export default function Table() {
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-7">
          <div className="shadow-3xl px-4 sm:px-6 lg:px-8">
            <TableHeader />
            <TableBody />
          </div>
        </div>
      </main>
    </>
  );
}

