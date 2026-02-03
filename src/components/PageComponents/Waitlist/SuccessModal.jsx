import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import successImage from "@/assets/images/success_modal/success_dialog_desktop.webp";
import { X } from "lucide-react";

function SuccessModal({ open, onOpenChange }) {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="h-[100vh] w-[100vw] overflow-hidden max-w-none  p-0 rounded-none border-0 sm:h-auto sm:w-[90vw] sm:max-w-[700px] sm:rounded-xl z-[999999]"
        showCloseButton={false}
      >
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[350px] w-full">
          <img
            src={successImage}
            alt="Success"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 w-10 h-10 hover:cursor-pointer bg-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-white overflow-y-auto">
          <h2 className="font-[Oswald] text-[24px] md:text-[36px] font-bold leading-tight uppercase text-center">
            <span className="text-[#2463D8]">Thanks</span>
            <span className="text-[#040A16]"> for Entering the Pool!</span>
          </h2>
          
          <p className="font-[Manrope] text-[14px] md:text-[16px] leading-relaxed text-[#030712] text-center max-w-[640px]">
            You're on the list to win a free DEXA scan. Winners will receive a
            digital voucher 15 days before our official launch. Use it to book
            your priority scan as soon as our calendar opens and take the first
            step toward peak performance and longevity.
          </p>

          <button
            onClick={handleBackToHome}
            className="w-full btn-primary max-w-[220px]"
          >
            Back to Home Page
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SuccessModal;
