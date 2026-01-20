import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
// import Home from "./pages/Home";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/waitlist-dexa-scan" element={<DEXAScanWaitlist />} />
      </Route>
    </Routes>
  );
}

export default App;
