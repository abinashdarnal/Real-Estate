import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row justify-between md:gap-0 gap-10 lg:px-20 md:px-10 px-5 pt-10 pb-6">
        <div className="flex justify-center">
          <div className="flex flex-col items-center md:items-start max-w-[240px]">
            <div className="w-[100px]">
              <img
                src="https://real-estate-web.pages.dev/logo2.png"
                alt=""
                className="w-full "
              />
            </div>
            <h3 className="text-[#8c8b8b] text-[15px]">
              Our vision is to make all people the best place to live for them.
            </h3>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-5 w-[430px] ">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#1f3e72] text-[28px] font-black">
                Information
              </h3>
              <p className="text-[#8c8b8b] text-[15px]">
                145 New York, Fl 5467 USA
              </p>
            </div>
            <div className="  list-none text-black flex justify-around md:justify-between font-[500] ">
              <li className=" hover:text-blue-600 hover:underline transition-all ease-in-out duration-300  ">
                <a href="#residencies">Residencies</a>
              </li>
              <li className="  hover:text-blue-600 hover:underline transition-all ease-in-out duration-300 ">
                <a href="#ourValue">Our Value</a>
              </li>
              <li className="  hover:text-blue-600 hover:underline transition-all ease-in-out duration-300 ">
                <a href="#contactUs">Contact Us</a>
              </li>
              <li className=" hover:text-blue-600 hover:underline transition-all ease-in-out duration-300  ">
                <a href="#getStarted">Get Started</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
