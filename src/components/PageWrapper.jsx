import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children }) {
  const location = useLocation();
  const [display, setDisplay] = useState(children);

  useEffect(() => {
    setDisplay(children);
  }, [location, children]);

  return <div className="page-transition">{display}</div>;
}
