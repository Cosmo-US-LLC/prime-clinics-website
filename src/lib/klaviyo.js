const KLAVIYO_COMPANY_ID = "Wnsp3Z";

export const loadKlaviyoScript = (() => {
  let loadPromise = null;

  return () => {
    if (typeof window === "undefined") {
      return Promise.resolve();
    }

    if (window._learnq) {
      return Promise.resolve();
    }

    if (loadPromise) {
      return loadPromise;
    }

    loadPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(
        'script[src*="klaviyo.com/onsite/js/klaviyo.js"]',
      );

      if (existing) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`;
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error("Failed to load Klaviyo script."));
      document.head.appendChild(script);
    });

    return loadPromise;
  };
})();

export const klaviyoIdentifyAndTrack = async ({
  Email,
  $phone_number_region,
  firstName,
  eventName,
  properties,
} = {}) => {
  if (!Email && !$phone_number_region) {
    return;
  }

  await loadKlaviyoScript();

  const queue = window._learnq || [];
  window._learnq = queue;

  const identifyPayload = {};

  if (Email) {
    const emailVal = (Email || "").trim().toLowerCase();
    identifyPayload.$email = emailVal; // required for Klaviyo to create/identify profile
    identifyPayload.Email = emailVal;
  }

  if ($phone_number_region) {
    const phoneVal = ($phone_number_region || "").trim();
    identifyPayload.$phone_number = phoneVal; // Klaviyo default Phone column + custom box
    identifyPayload.$phone_number_region = phoneVal;
    identifyPayload.Phone = phoneVal; // custom profile property for custom box display
  }

  if (firstName) {
    const nameVal = (firstName || "").trim();
    identifyPayload.$first_name = nameVal;
    identifyPayload.firstName = nameVal;
  }

  // Add custom properties to profile (for segmentation, flows, filtering)
  if (properties && Object.keys(properties).length > 0) {
    queue.push([
      "identify",
      {
        ...identifyPayload,
        ...properties,
      },
    ]);
  } else if (Object.keys(identifyPayload).length > 0) {
    queue.push(["identify", identifyPayload]);
  }

  // Track event (include profile fields so Klaviyo can update profile from event)
  queue.push([
    "track",
    eventName || "Win Form Submitted",
    {
      ...identifyPayload,
      ...properties,
    },
  ]);
};
