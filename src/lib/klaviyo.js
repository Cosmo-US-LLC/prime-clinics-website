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
        'script[src*="klaviyo.com/onsite/js/klaviyo.js"]'
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

const splitName = (fullName) => {
  const cleaned = (fullName || "").trim();
  if (!cleaned) {
    return { firstName: "", lastName: "" };
  }

  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
};

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

  const { firstName, lastName } = splitName(fullName);
  const identifyPayload = {};

  if (email) {
    identifyPayload.$email = email.trim().toLowerCase();
  }

  if (phone) {
    identifyPayload.$phone_number = phone.trim();
  }

  if (firstName) {
    identifyPayload.$first_name = firstName;
  }

  if (lastName) {
    identifyPayload.$last_name = lastName;
  }

  if (Object.keys(identifyPayload).length > 0) {
    queue.push(["identify", identifyPayload]);
  }

  queue.push([
    "track",
    eventName || "Win Form Submitted",
    {
      ...properties,
    },
  ]);
};
