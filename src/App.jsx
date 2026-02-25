import { Routes, Route } from "react-router-dom";
import "./assets/styles/images.css";
import DEXAScanWaitlist from "./pages/Waitlist/DEXAScanWaitlist";
import Layout from "./components/Layouts";
import LandingLayout from "./components/Layouts/LandingLayout";
import WinaFree$300 from "./pages/WinaFree$300";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home uses landing header + footer */}
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Other routes use main Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/free-dexa-scan" element={<DEXAScanWaitlist />} />
          <Route
            path="/free-dexa-scan/thank-you"
            element={<DEXAScanWaitlist />}
          />
          <Route
            path="/free-dexa-scan-and-longevity-assessment"
            element={<WinaFree$300 />}
          />
          <Route
            path="/free-dexa-scan-and-longevity-assessment/thank-you"
            element={<WinaFree$300 />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
