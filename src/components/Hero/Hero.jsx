import data from "../../data.json";

function Hero() {
  return (
    <section id="home">
      <div className="mt-32 flex flex-col items-center justify-start space-y-2">
        <h1 className="text-center w-[90vw] sm:w-4/5 lg:w-2/3 text-2xl lg:text-6xl md:text-5xl sm:text-4xl font-bold lg:leading-[3.8rem] tracking-[0.05em]">
          {data["section-hero"].title}
        </h1>
        <h3 className="text-xs sm:text-md lg:text-xl w-full sm:w-1/2 lg:w-1/2 px-8 mx-auto text-right mt-2">
          {data["section-hero"].subtitle}
        </h3>
        <div
          className="sm:h-[10vw] sm:w-[10vw] rounded-full bg-black flex items-center justify-center font-[500] "
          style={{ boxShadow: "0px 0px 32px -10px rgba(0,0,0,0.75)" }}
        >
          <h3 className="p-4 py-[1.3rem] text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
            {data["section-hero"].stamp}
          </h3>
        </div>
        <img
          src={data["section-hero"].bg.url}
          alt={data["section-hero"].bg.alt}
          className="w-full h-auto bg-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
