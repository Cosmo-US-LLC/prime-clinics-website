const readBackendHost = () => {
  const envHost =
    import.meta.env.VITE_BACKEND_HOST || import.meta.env.BACKEND_HOST || "";
  return envHost.toString().trim().replace(/\/+$/, "");
};

export const submitFormResponse = async ({ formKey, data }) => {
  const backendHost = readBackendHost();
  if (!backendHost) {
    throw new Error("Backend host is not configured.");
  }
  if (!formKey) {
    throw new Error("Form key is required.");
  }

  const response = await fetch(
    `${backendHost}/api/save-response/${encodeURIComponent(formKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data ?? {}),
    }
  );

  let payload = null;
  try {
    payload = await response.json();
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    const message =
      payload?.message || "Something went wrong while submitting the form.";
    throw new Error(message);
  }

  return payload;
};
