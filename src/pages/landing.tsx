import Navbar from "@/components/navbar";
import FeaturesSection from "@/components/features-section";
import InformationSection from "@/components/information-section";

const Landing = () => {
  return (
    <>
      <div className="py-8 mx-4 h-screen lg:max-w-5xl lg:mx-auto">
        <Navbar />
        <InformationSection />
        <hr className="my-8" />
        <FeaturesSection />
      </div>
    </>
  );
};

export default Landing;
