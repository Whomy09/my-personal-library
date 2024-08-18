import Footer from "@/components/footer";
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
        <hr className="my-8" />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
