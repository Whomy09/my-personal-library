import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="my-8 lg:max-w-4xl lg:mx-auto">
      <section className="flex flex-col gap-4">
        <h1>My Personal Library</h1>
        <p>
          This is a project with which I will be practicing react and also
          integrating the api I previously built called library-api.{" "}
        </p>
      </section>
      <Button className="mt-4">Test</Button>
    </main>
  </StrictMode>
);
