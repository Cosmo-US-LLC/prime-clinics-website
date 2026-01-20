import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DEXAScanWaitlist />} />
        <Route path="/waitlist-dexa-scan" element={<DEXAScanWaitlist />} />
      </Route>
    </Routes>
  );
}

export default App;
