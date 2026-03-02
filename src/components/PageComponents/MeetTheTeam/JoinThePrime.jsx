import React from "react";
import PrimeBg from '@/assets/images/MeetTheTeam/JoinBg.webp'

function JoinThePrime() {
  return (
    <section className="w-full py-2 md:py-2">
      <div className="max-w-[full] mx-auto px-4 md:px-2">
        
        <div className="relative rounded-[16px] overflow-hidden">

          {/* Background Image */}
          <img
            src={PrimeBg} // 🔁 replace with your image
            alt="Join Prime Clinical Team"
            className="w-full h-[420px] md:h-[550px] object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col max-w-[760px] mx-auto items-center justify-center text-center px-6 ">

            <h2 className="heading-2 text-[#ffff] uppercase mb-5">
              Join the Prime Clinical Team
            </h2>

            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#ffff] mb-7">
              We are always looking for elite medical professionals, performance specialists,
              and dedicated support staff who share our absolute passion for proactive health
              and regenerative medicine.
            </p>

            <button type="button" className="inline-flex btn-primary w-fit">
                View Open Positions
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default JoinThePrime;