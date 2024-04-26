import React, { useState } from "react";
import data from "../../data.json";
import { Link } from "react-scroll";

function LastSection() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue.trim() === "") {
      setIsValidEmail(true);
      setEmailError("");
    } else {
      validateEmail(inputValue);
    }
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);
    setIsValidEmail(isValid);
    setEmailError(isValid ? "" : data["section-contact"].error);
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:${email}`;
    } else {
      alert(emailError || data["section-contact"].error);
    }
  };

  return (
    <>
      <section id="accessories">
        <div className="flex-col items-start justify-center max-w-[100vw] pt-16 bg-white">
          <div className="w-1/2 ml-4 z-10">
            <div
              className="mx-auto h-[10vw] mb-12 sm:mb-0 z-10 w-[10vw] rounded-full bg-black flex items-center justify-center font-[500]"
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
            className="w-4/5 mx-auto -mt-20 -mb-20"
          />
          <div
            className="flex justify-center mt-32 pb-32 relative h-96"
            style={{
              width: "100%",
              maxWidth: "100vw",
            }}
          >
            <img
              src={data["section-last"].logo.url}
              alt={data["section-last"].logo.alt}
              className="absolute inset-0 w-screen object-cover opacity-30"
            />
            <img
              src={data["section-last"].image2.url}
              alt={data["section-last"].image2.alt}
              className="absolute w-[45%] sm:w-3/5 top-10 m-auto"
              style={{
                height: "auto",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex -mt-5 sm:mt-[15%] md:mt-[30%] lg:mt-[40%]"></div>
        <div className="xl:px-[8vw] flex h-[200px] sm:h-[150px] text-xl sm:text-xl lg:text-base 2xl:text-xl max-w-[100vw] justify-between items-center md:gap-12 2xl:gap-44 bg-black px-4">
          <div className="hidden md:flex items-center w-1/2 gap-4 mr-auto">
            {data["section-header"].navbar.map((item, index) => (
              <Link
                to={item.href}
                spy={false}
                smooth={true}
                duration={500}
                key={index}
                offset={-80}
                className={`cursor-pointer ${item.id === 8 ? "hidden" : ""}`}
              >
                <p
                  className="text-white hover:text-green-custom text-md sm:text-[12px] lg:text-[16px] 2xl:text-xl w-max"
                  key={item.id}
                >
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-center mx-auto w-full">
            <div className="flex flex-col md:flex-row space-y-4 sm:gap-4 sm:space-y-0 items-center text-center">
              <p className="text-[16px] font-semibold flex md:hidden px-4 w-full text-white justify-center">
                {data["section-contact"].text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center w-full sm:w-5/6 md:w-full sm:pl-6 mx-auto 2xl:w-full">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mx-auto w-2/3 sm:w-2/3 text-xs sm:text-md text-center sm:text-left bg-transparent text-white py-2 px-5 border sm:border-r-0 sm:rounded-r-none placeholder-gray-400 rounded-md"
                  placeholder={data["section-contact"].input_placeholder}
                />
                <button
                  className="w-1/3 sm:w-2/5 mx-auto text-xs sm:text-md text-black font-bold bg-white py-2 px-5 border border-white rounded-md sm:rounded-l-none"
                  onClick={handleButtonClick}
                >
                  {data["section-contact"].button}
                </button>
              </div>
            </div>
            <div className="flex relative mx-auto w-full">
              {emailError && (
                <p
                  style={{
                    textShadow: "0.5px 0.5px 1px rgba(0, 0, 0, 0.5)",
                    left: 0,
                    right: 0,
                    margin: "auto",
                  }}
                  className="absolute pt-0 sm:pt-1 md:pt-2 text-red-400 text-sm"
                >
                  {data["section-contact"].error}
                </p>
              )}
            </div>
          </div>
        </div>
        <hr className="bg-green-custom h-[1px] border-none min-w-[90vw] left-[5%] absolute 2xl:hidden" />
      </section>
    </>
  );
}
export default LastSection;
