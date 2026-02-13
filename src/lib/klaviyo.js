const KLAVIYO_COMPANY_ID = "Wnsp3Z";

const loadKlaviyoScript = (() => {
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
  email,
  phone,
  fullName,
  eventName,
  properties,
} = {}) => {
  if (!email && !phone) {
    return;
  }

  await loadKlaviyoScript();

  const queue = window._learnq || [];
  window._learnq = queue;

  const identifyPayload = {};

  if (email) {
    identifyPayload.$email = email.trim().toLowerCase();
  }

  if (phone) {
    identifyPayload.$phone_number_region = phone.trim();
  }

  if (fullName) {
    identifyPayload.firstName = (fullName || "").trim();
  }

  // Add custom properties to profile (for segmentation, flows, filtering)
  if (properties && Object.keys(properties).length > 0) {
    queue.push([
      "identify",
      {
        ...identifyPayload,
        ...properties, // saves as profile properties
      },
    ]);
  } else if (Object.keys(identifyPayload).length > 0) {
    queue.push(["identify", identifyPayload]);
  }

  // Track event (properties also sent as event properties)
  queue.push([
    "track",
    eventName || "Win Form Submitted",
    {
      ...properties,
    },
  ]);
};
