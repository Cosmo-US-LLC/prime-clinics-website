import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";
import WinaFree$300 from "./pages/WinaFree$300";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Routes>
      {/* Coming Soon — standalone page, no Layout (no navbar/footer) */}
      <Route path="/coming-soon" element={<ComingSoon />} />

      <Route element={<Layout />}>
        <Route index element={<DEXAScanWaitlist />} />
        <Route path="/waitlist-dexa-scan" element={<DEXAScanWaitlist />} />
        <Route path="/wina-free-$300" element={<WinaFree$300 />} />
      </Route>
    </Routes>
  );
}

export default App;
