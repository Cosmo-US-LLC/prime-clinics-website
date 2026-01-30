import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";
import WinaFree$300 from "./pages/WinaFree$300";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DEXAScanWaitlist />} />
        <Route path="/waitlist-dexa-scan" element={<DEXAScanWaitlist />} />
        <Route path="/free-dexa-scan" element={<WinaFree$300 />} />
      </Route>
    </Routes>
  );
}

export default App;
