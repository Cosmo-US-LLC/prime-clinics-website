const KLAVIYO_COMPANY_ID = "Wnsp3Z";
// Required for subscribe API. In Klaviyo: Audience → Lists → [your list] → ID in URL or list settings
const KLAVIYO_LIST_ID = import.meta.env.VITE_KLAVIYO_LIST_ID || "";

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

/** Ensure Klaviyo script is loaded (e.g. for embed forms). */
export { loadKlaviyoScript };

/*
 * Custom identify/track/subscribe — COMMENTED OUT while using Klaviyo Lead + Design embed form on DEXA scan page.
 * Uncomment and remove the no-op below to restore custom tracking.
 *
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
    identifyPayload.$email = emailVal;
    identifyPayload.Email = emailVal;
  }

  if ($phone_number_region) {
    const phoneVal = ($phone_number_region || "").trim();
    identifyPayload.$phone_number = phoneVal;
    identifyPayload.$phone_number_region = phoneVal;
    identifyPayload.Phone = phoneVal;
  }

  if (firstName) {
    const nameVal = (firstName || "").trim();
    identifyPayload.$first_name = nameVal;
    identifyPayload.firstName = nameVal;
  }

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

  queue.push([
    "track",
    eventName || "Win Form Submitted",
    {
      ...identifyPayload,
      ...properties,
    },
  ]);

  const emailVal = Email ? (Email || "").trim().toLowerCase() : "";
  const phoneVal = $phone_number_region ? ($phone_number_region || "").trim() : "";
  if ((emailVal || phoneVal) && KLAVIYO_LIST_ID) {
    const profileAttrs = {
      ...(emailVal && { email: emailVal }),
      ...(phoneVal && { phone_number: phoneVal }),
      ...(firstName && { first_name: (firstName || "").trim() }),
      ...(properties && Object.keys(properties).length > 0 && { properties }),
    };
    try {
      await fetch(
        `https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Revision: "2024-07-15",
          },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: {
                profile: {
                  data: {
                    type: "profile",
                    attributes: profileAttrs,
                  },
                },
                custom_source: eventName || "Website form",
              },
              relationships: {
                list: {
                  data: {
                    type: "list",
                    id: KLAVIYO_LIST_ID,
                  },
                },
              },
            },
          }),
        }
      );
    } catch (err) {
      console.warn("Klaviyo subscribe failed:", err);
    }
  }
};
*/

/** No-op when using Klaviyo embed form (Lead + Design). Loads script only for backward compatibility. */
export const klaviyoIdentifyAndTrack = async () => {
  await loadKlaviyoScript();
};
