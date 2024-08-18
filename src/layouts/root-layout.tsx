import Navbar from "@/components/navbar/navbar";
import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="mx-4 lg:max-w-5xl lg:mx-auto">
        <Navbar />
      </header>
      <main className="mx-4 lg:max-w-5xl lg:mx-auto">
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
