import data from "../../data.json";
function Future() {
  return (
    <section id="future">
      <div className="py-12 px-4 sm:py-30 flex flex-col text-center bg-black max-w-[100vw]">
        <h2 className="text-3xl pt-10 sm:px-20 lg:text-4xl font-bold text-center text-white mb-6">
          {data["section-future"].title}
        </h2>
        <p className="px-10 pb-10 text-lg sm:w-2/3 lg:w-[60%] lg:text-[1.4rem] text-white text-center mx-auto">
          {data["section-future"].subtitle}
        </p>
        <div className="mx-auto flex flex-col sm:flex-row items-center gap-4 2xl:mx-auto sm:gap-8 xl:gap-0 justify-start">
          <div className="w-[40vw] 2xl:w-4/5">
            <img
              src={data["section-future"].image.url}
              alt={data["section-explore"].bg.alt}
              className="sm:w-full lg:w-4/5 2xl:max-w-[450px] mx-auto sm:mx-0"
            />
          </div>
          <div className="grid grid-cols-2 w-full sm:grid-cols-1 sm:w-[18vw] gap-4 sm:gap-4 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 text-green-custom">
            {data["section-future"].column.map((item, index) => (
              <div key={index} className="flex-col space-y-1">
                <p className="text-xl md:text-2xl xl:text-3xl font-bold">
                  {item.title}
                </p>
                <p className="">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Future;
