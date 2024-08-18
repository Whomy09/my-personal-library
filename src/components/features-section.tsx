import { features } from "@/constants";
import { CircleSlash2 } from "lucide-react";
import LibraryFeatureCard from "./library-feature-card";

const FeaturesSection = () => {
  return (
    <>
      <div className="flex gap-2 items-center mb-8" id="features-section">
        <CircleSlash2 />
        <h2 className="text-5xl font-bold">Features</h2>
      </div>
      <div className="flex flex-col gap-4 mb-8 lg:flex-row">
        {features.map((feature) => (
          <LibraryFeatureCard feature={feature} />
        ))}
      </div>
    </>
  );
};

export default FeaturesSection;
