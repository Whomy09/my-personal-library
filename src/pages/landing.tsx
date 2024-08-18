import Navbar from "@/components/navbar";
import InformationSection from "@/components/information-section";

const Landing = () => {
  return (
    <>
      <div className="py-8 mx-4 h-screen lg:max-w-5xl lg:mx-auto">
        <Navbar />
        <InformationSection />
      </div>
    </>
  );
};

export default Landing;
