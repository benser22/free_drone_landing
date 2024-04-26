import React from "react";
import data from "../data.json";

function Footer() {
  return (
    <footer className="flex w-full py-4 bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center text-white mx-auto">
        <div className="w-screen flex items-center justify-around gap-12 p-4">
          <a href="/">
            <div className="flex items-center gap-2">
              <img
                src={data.logo.url}
                alt={data.logo.alt}
                className="w-12 sm:w-20"
              />
              <p className="font-bold md:text-2xl hover:text-green-custom">
                {data["section-footer"].trademark}
              </p>
            </div>
          </a>
          <p className="hidden md:flex italic text-xl md:text-2xl tracking-widest">
            "{data["section-footer"].slogan}"
          </p>
          <div className="flex items-center text-white">
            <a href={data.blog.url} Target="_blank" className="ml-auto">
              <div
                title={data.blog.text}
                className="text-center hover:text-green-custom text-white cursor-pointer flex items-center gap-2 justify-center w-full"
              >
                <img
                  src={data.blog.icon}
                  alt={`${data.blog.title} icon`}
                  style={{ filter: "invert(1)" }}
                  className="w-8 sm:w-12 "
                />
                <div className="flex flex-col text-left justify-center">
                  <p className="text-md md:text-lg font-bold">
                    {data.blog.title}
                  </p>
                  <h6 className="hidden sm:flex text-[12px] -mt-1 text-gray_default">
                    {data.blog.text}
                  </h6>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-full items-center justify-around px-4 gap-6 text-xs">
          <p className="">{data["section-footer"].copy}</p>
          <div className="flex items-center gap-1">
            <p className="">{data["section-footer"].design}</p>
            <p className="font-semibold">{data["section-footer"].designer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
