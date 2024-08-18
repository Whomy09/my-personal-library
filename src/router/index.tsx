import Home from "@/pages/home";
import Landing from "@/pages/landing";
import RootLayout from "@/layouts/root-layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
    ],
  },
]);
