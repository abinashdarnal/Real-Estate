import React from "react";
import Slider from "./../Slider/Slider";

const Residencies = () => {
  return (
    <>
      <div id="residencies" className="bg-white py-5 ">
        <div className="flex flex-col items-center sm:items-start py-5  lg:px-20 md:px-10 px-5 font-[650]">
          <h2 className="text-[#FFA500] text-xl sm:text-2xl pb-2">
            Best Choices
          </h2>
          <h2 className="text-[#1F3E72] text-2xl sm:text-3xl">
            Popular Residencies
          </h2>
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Residencies;
