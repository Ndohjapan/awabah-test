import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}