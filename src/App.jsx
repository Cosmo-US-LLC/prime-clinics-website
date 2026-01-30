import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";
import WinaFree$300 from "./pages/WinaFree$300";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DEXAScanWaitlist />} />
          <Route path="/free-dexa-scan" element={<DEXAScanWaitlist />} />
          <Route path="/free-dexa-scan-and-longevity-assessment" element={<WinaFree$300 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
