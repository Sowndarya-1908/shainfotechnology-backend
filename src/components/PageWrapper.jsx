import React, { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function PageWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("sha_visited");

    if (!visited) {
      setShowLoader(true);

      const timer = setTimeout(() => {
        setShowLoader(false);
        localStorage.setItem("sha_visited", "true");
      }, 1300); // loader duration

      return () => clearTimeout(timer);
    }
  }, []);

  if (showLoader) return <PageLoader />;

  return <>{children}</>;
}
