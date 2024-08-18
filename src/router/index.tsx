import Home from "@/pages/home";
import Landing from "@/pages/landing";
import RootLayout from "@/layouts/root-layout";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "@/components/route-guards/public-route";
import ProtectedRoute from "@/components/route-guards/protected-route";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/landing",
        element: (
          <PublicRoute>
            <Landing />
          </PublicRoute>
        ),
      },
    ],
  },
]);
