import React from "react";
import VipPathwayForm from "@/components/PageComponents/Form/VipPathwayForm";

function ReadyToYourVIP() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#040816] ready_to_vip"
      aria-label="VIP Pathway"
    >
      <div className="relative mx-auto h-full flex flex-col items-end justify-center min-h-[560px] w-full max-w-[1280px] px-4 py-12 md:px-8 md:py-20">
        <div className="flex w-full h-full max-w-[550px] items-center justify-center">
          <VipPathwayForm />
        </div>
      </div>
    </section>
  );
}

export default ReadyToYourVIP;
