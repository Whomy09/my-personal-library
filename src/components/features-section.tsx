import { FEATURES } from "@/constants";
import { CircleSlash2 } from "lucide-react";
import LibraryFeatureCard from "./library-feature-card";

const FeaturesSection = () => {
  return (
    <>
      <div
        className="flex flex-col gap-2 items-center mb-8 lg:flex-row"
        id="features-section"
      >
        <CircleSlash2 />
        <h2 className="font-bold text-3xl lg:text-5xl">Features</h2>
      </div>
      <div className="flex flex-col gap-4 mb-8 lg:flex-row">
        {FEATURES.map((feature, i) => (
          <LibraryFeatureCard key={i} feature={feature} />
        ))}
      </div>
    </>
  );
};

export default FeaturesSection;
