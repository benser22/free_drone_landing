import React, { useState } from "react";
import data from "../../data.json";

function LastSection() {
  return (
    <section id="accessories">
      <div className="flex-col items-start justify-center max-w-[100vw] pt-16 bg-white">
        <div className="w-1/2 ml-4 z-10">
          <div
            className="mx-auto sm:h-[10vw] sm:w-[10vw] rounded-full bg-black flex items-center justify-center font-[500]"
            style={{
              boxShadow: "0px 0px 32px -10px rgba(0,0,0,0.75)",
            }}
          >
            <h3 className="p-4 py-[1.3rem] text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
              {data["section-last"].stamp}
            </h3>
          </div>
        </div>
        <img
          src={data["section-last"].image.url}
          alt={data["section-last"].image.alt}
          className="w-4/5 mx-auto -mt-20"
        />
        <div
          className="flex justify-center mt-32 pb-32"
          style={{
            backgroundImage: `url(${data["section-last"].logo.url})`,
            backgroundSize: "cover", // Ajuste importante aquí
            backgroundRepeat: "no-repeat", // Asegura que no se repita la imagen
            width: "100%",
          }}
        >
          <img
            src={data["section-last"].image2.url}
            alt={data["section-last"].image2.alt}
            className="w-3/5 m-auto"
          />
        </div>
      </div>
    </section>
  );
}
export default LastSection;
