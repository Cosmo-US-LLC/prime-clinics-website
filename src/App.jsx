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
import VipAccess from "./pages/VipAccess";
import ComingSoon from "./pages/ComingSoon";
import PhysicalHealth from "./pages/Services/PhysicalHealth";
import HormoneHealth from "./pages/Services/HormoneHealth";
import IntimateHealth from "./pages/Services/IntimateHealth";
import RegenerativeAesthetics from "./pages/Services/RegenerativeAesthetics";
import WeightManagement from "./pages/Services/WeightManagement";
import MentalFitness from "./pages/Services/MentalFitness";
import JointRehabilitation from "./pages/Services/JointRehabilitation";
import MeetTheTeam from "./pages/MeetTheTeam";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home uses landing header + footer */}
        {/* <Route index element={<ComingSoon />} /> */}
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/services/physical-health"
            element={<PhysicalHealth />}
          />
          <Route path="/services/hormone-health" element={<HormoneHealth />} />
          <Route
            path="/services/intimate-health"
            element={<IntimateHealth />}
          />
          <Route
            path="/services/regenerative-aesthetics"
            element={<RegenerativeAesthetics />}
          />
          <Route
            path="/services/weight-management"
            element={<WeightManagement />}
          />
          <Route path="/services/mental-fitness" element={<MentalFitness />} />
          <Route
            path="/services/joint-rehabilitation"
            element={<JointRehabilitation />}
          />
          <Route path="/vip-access" element={<VipAccess />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
        </Route>
        {/* Other routes use main Navbar + Footer */}
        <Route element={<Layout />}>
          {/* <Route index element={<DEXAScanWaitlist />} /> */}
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
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
