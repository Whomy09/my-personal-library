import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import LoadingPage from "../loading-page";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <LoadingPage />;
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
