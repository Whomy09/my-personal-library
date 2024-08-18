const InformationSection = () => {
  return (
    <>
      <div className="flex justify-between gap-16 pt-8">
        <div className="flex flex-col w-full gap-6 justify-center">
          <h2 className="text-4xl text-center lg:text-left lg:text-6xl font-bold">
            Your website to find your favorite books
          </h2>
          <p className="text-center lg:text-left lgtext-lg">
            Welcome to your literary corner! Here, every book is a door to a new
            adventure, explore and let yourself go!
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            src="/reading.svg"
            alt="Person reading a book"
            className="w-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default InformationSection;
