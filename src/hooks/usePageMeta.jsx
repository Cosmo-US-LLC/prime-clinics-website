import { useEffect } from "react";

/**
 * Simple hook to set document title and meta description.
 */
function usePageMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector(
        'meta[name="description"]'
      );

      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
}

export default usePageMeta;

