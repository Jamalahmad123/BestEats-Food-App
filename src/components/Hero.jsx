const Hero = () => (
  <section className="pt-6">
    <div className="container mx-auto px-2">
      <div className="flex items-center justify-center shadow-lg min-h-[40vh] md:min-h-[60vh] md:justify-start bg-hero">
        <h1 className="capitalize text-white text-4xl pl-1 font-bold md:text-5xl lg:text-6xl">
          the{" "}
          <span className="text-orange-500">
            best <br className="hidden md:block" /> foods
          </span>{" "}
          delivered
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
