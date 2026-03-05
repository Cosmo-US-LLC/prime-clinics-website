import React from "react";
import GetInTouch from "@/components/PageComponents/ContactUs/GetInTouch";
import usePageMeta from "@/hooks/usePageMeta";

function ContactUs() {
  usePageMeta(
    "Get In Touch: Optimize Your Performance Today | Prime Clinics",
    "Ready to optimize? Contact Prime Clinics today for inquiries about our services, membership, or to schedule a consultation with our team."
  );

  return (
    <>
      <GetInTouch />
    </>
  );
}

export default ContactUs;