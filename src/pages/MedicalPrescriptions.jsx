import React from "react";
import MedicalPrescriptionsHero from "@/components/PageComponents/MedicalPrescriptions/MedicalPrescriptionsHero";
import MedicalPrescriptionsExpertCare from "@/components/PageComponents/MedicalPrescriptions/MedicalPrescriptionsExpertCare";
import MedicalPrescriptionsProtocol from "@/components/PageComponents/MedicalPrescriptions/MedicalPrescriptionsProtocol";
import ConditionsWeAssess from "@/components/PageComponents/MedicalPrescriptions/ConditionsWeAssess";
import MedicalPrescriptionsTestimonials from "@/components/PageComponents/MedicalPrescriptions/MedicalPrescriptionsTestimonials";
import ClinicStandard from "@/components/PageComponents/MedicalPrescriptions/ClinicStandard";
import HomeFAQ from "@/components/PageComponents/Home/HomeFAQ";
import { medicalPrescriptionsFaqData } from "@/constants/generalFaqData";
import usePageMeta from "@/hooks/usePageMeta";

function MedicalPrescriptions() {
  usePageMeta(
    "Private Sexual Wellness & Prescriptions | Prime Clinics",
    "Expert care with zero compromise. Get discreet access to medical prescriptions for performance, vitality, and sexual wellness at Prime Clinics."
  );

  return (
    <>
      <MedicalPrescriptionsHero />
      <MedicalPrescriptionsExpertCare />
      <MedicalPrescriptionsProtocol />
      <ConditionsWeAssess />
      <MedicalPrescriptionsTestimonials />
      <ClinicStandard />
      <HomeFAQ
        heading="Frequently Asked Questions"
        description="Information regarding the Prime Clinics experience."
        items={medicalPrescriptionsFaqData}
      />
    </>
  );
}

export default MedicalPrescriptions;
