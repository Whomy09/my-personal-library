import Footer from "@/components/footer";
import FeaturesSection from "@/components/features-section";
import InformationSection from "@/components/information-section";

const Landing = () => {
  return (
    <>
      <InformationSection />
      <hr className="my-8" />
      <FeaturesSection />
      <hr className="my-8" />
      <Footer />
    </>
  );
};

export default Landing;
