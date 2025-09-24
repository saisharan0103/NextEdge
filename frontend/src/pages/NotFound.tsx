import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg text-text">
      <div className="text-center space-y-4">
        <h1 className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight">404</h1>
        <p className="text-lg text-muted">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center justify-center rounded-button border border-border px-6 py-3 text-base font-medium text-text transition duration-hover ease-fluid hover:border-primary hover:text-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
