import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-[500px] w-full text-center flex flex-col items-center justify-center">
        <h1 className="font-[Oswald] text-[120px] md:text-[160px] font-bold leading-none text-[#2463D8]">
          4
          <span className="text-[120px] md:text-[160px] font-bold leading-none text-[#0F172B]">0</span>
          4
        </h1>
        <h2 className="font-[Oswald] text-[24px] md:text-[40px] font-bold capitalize text-[#0F172B] mt-4 mb-2">
          Oops, Page not found!
        </h2>
        <p className="font-[Manrope] text-[20px] md:text-[24px] text-[#64748b] mb-8">
          Oops! The page you're looking for doesn't exist. Let's get you back on track!
        </p>
        <Link
          to="/"
          className="inline-block btn-primary "
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
