import React from "react";
import AccordionItem from "./../accordion/AccordionItems";

const Value = () => {
  return (
    <>
      <div id="ourValue" className="bg-white lg:px-20 md:px-10 px-5 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex justify-center">
            <div className=" w-[450px]  lg:w-full">
              <div className="lg:h-[600px] lg:w-[500px] w-full  bg-[#E9E9E9] p-3 rounded-t-full ">
                <img
                  src="https://real-estate-web.pages.dev/value.png"
                  alt=""
                  className="h-full w-full rounded-t-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[450px] w-full flex justify-center flex-col">
            <div className="flex flex-col items-center sm:items-start py-5 ">
              <h2 className="text-[#FFA500] text-xl sm:text-2xl pb-2   font-semibold">
                Our Value
              </h2>
              <h2 className="text-[#1F3E72] text-2xl sm:text-3xl font-[950]">
                Value We Give to You
              </h2>
              <p className="font-medium text-[#A2A1A1] text-sm lg:text-xs mt-5">
                We always ready to help by providijng the best services for you.
                <br /> We beleive a good blace to live can make your life better
              </p>
            </div>
            <AccordionItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Value;
