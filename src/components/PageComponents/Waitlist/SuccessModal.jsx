import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import defaultSuccessImage from "@/assets/images/success_modal/success_dialog_desktop.webp";
import { X } from "lucide-react";

/**
 * SuccessModal - Dynamic success modal with customizable image and text
 *
 * @param {boolean} open - Controls modal visibility
 * @param {function} onOpenChange - Called when modal open state changes
 * @param {string|object} image - Hero image (URL or imported module). Default: success_dialog_desktop.webp
 * @param {string} titleHighlight - Title part in blue (e.g. "Thanks")
 * @param {string} titleRest - Title part in dark (e.g. " for Entering the Pool!")
 * @param {string} description - Main paragraph text
 * @param {string} buttonText - CTA button label
 * @param {function} onButtonClick - Called when CTA is clicked. Default: navigates to /
 * @param {string} imageAlt - Alt text for the hero image
 */
function SuccessModal({
  open,
  onOpenChange,
  image = defaultSuccessImage,
  titleHighlight = "Thanks",
  titleRest = " for Entering the Pool!",
  description = "You're on the list to win a free DEXA scan. Winners will receive a digital voucher 15 days before our official launch. Use it to book your priority scan as soon as our calendar opens and take the first step toward peak performance and longevity.",
  buttonText = "Back to Home Page",
  onButtonClick,
  imageAlt = "Success",
  hashOnOpen = null, // e.g. "free-dexa-scan-thank-you" - adds #hash to URL when modal opens
}) {
  React.useEffect(() => {
    if (!hashOnOpen) return;
    if (open) {
      const url = `${window.location.pathname}#${hashOnOpen}`;
      window.history.pushState(null, "", url);
    } else {
      if (window.location.hash === `#${hashOnOpen}`) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [open, hashOnOpen]);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.location.href = "/";
    }
  };

  const imageSrc = typeof image === "string" ? image : image?.default ?? image;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-rows-[auto_1fr] w-[calc(100%-2rem)] max-w-[420px] sm:max-w-[700px] sm:w-[90vw] max-h-[90vh] overflow-hidden p-0 rounded-xl border shadow-lg z-999999"
        showCloseButton={false}
      >
        {/* Hero Image */}
        <div className="relative h-[35vh] md:h-[300px] w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
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
            <span className="text-[#2463D8]">{titleHighlight}</span>
            <span className="text-[#040A16]">{titleRest}</span>
          </h2>

          <p className="font-[Manrope] text-[14px] md:text-[16px] leading-relaxed text-[#030712] text-center max-w-[640px]">
            {description}
          </p>

          <button
            onClick={handleButtonClick}
            className="w-full btn-primary max-w-[220px]"
          >
            {buttonText}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SuccessModal;
