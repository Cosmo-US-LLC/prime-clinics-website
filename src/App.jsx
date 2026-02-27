import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";
import WinaFree$300 from "./pages/WinaFree$300";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Coming Soon — standalone page, no Layout (no navbar/footer) */}
        <Route path="/coming-soon" element={<ComingSoon />} />

        <Route element={<Layout />}>
          <Route index element={<DEXAScanWaitlist />} />
          <Route path="/free-dexa-scan" element={<DEXAScanWaitlist />} />
          <Route path="/free-dexa-scan-and-longevity-assessment" element={<WinaFree$300 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
