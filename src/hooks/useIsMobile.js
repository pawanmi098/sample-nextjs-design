"use client";

import { useEffect, useState } from "react";

/**
 * useIsMobile hook for Next.js
 * @returns {[boolean]}
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return [isMobile];
};

export default useIsMobile;