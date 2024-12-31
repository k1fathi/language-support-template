// src/components/RouteLoader.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoader } from "../contexts/LoaderContext";

const RouteLoader = () => {
  const { setLoading } = useLoader();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);

  return null;
};

export default RouteLoader;
