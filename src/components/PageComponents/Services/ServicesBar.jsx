import React from "react";
import { Link } from "react-router-dom";
import { SERVICES_NAV } from "@/constants/servicesRegistry";

function ServicesBar({ currentPath }) {
  return (
    <div className="relative z-10 backdrop-blur-[15px] bg-[rgba(36, 99, 216, 0.01)] h-[70px] flex items-center rounded-b-2xl overflow-x-auto overflow-y-hidden">
      <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 flex items-center">
        <nav
          className="flex flex-row items-center justify-between w-full gap-6 md:gap-8 min-w-max py-4"
          aria-label="Services"
        >
          {SERVICES_NAV.map(({ path, label }) => {
            const isActive = currentPath === path;
            return (
              <Link
                key={path}
                to={path}
                className={`group relative shrink-0 pt-[24px] pb-[16px] font-sans text-[16px] leading-[24px] whitespace-nowrap transition-colors duration-300 ease-out ${
                  isActive
                    ? "font-bold text-white"
                    : "font-normal text-[#f3f4f6] hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[4px] w-full bg-white origin-left transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default ServicesBar;
