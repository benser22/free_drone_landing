import data from "../../data.json";

function Hero() {
  return (
    <section id="home">
      <div
        className="flex w-[full] h-[90%] max-w-screen sm:h-[70vw] md:[75vw] lg:h-[45vw] mt-[5vh] py-12 sm:pt-16 sm:mt-[80px]"
        style={{
          backgroundImage: `url(${data["section-one"].bg})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      ></div>
    </section>
  );
}

export default Hero;
