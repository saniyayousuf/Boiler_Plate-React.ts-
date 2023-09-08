import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Home() {
  const navigate = useNavigate()
  const openPage = () => {
    navigate('/Dashboard');
  };
  return (
    <>
      <div>
        <h1>Home</h1>
        <button onClick={openPage}>Click to open Dashboard</button>

        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </>
  );
}
