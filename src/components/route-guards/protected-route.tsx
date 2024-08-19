import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../loading-page";

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <LoadingPage />;
  }

  if (!isSignedIn) {
    return <Navigate to="/landing" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;