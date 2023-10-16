import React from "react";

const Started = () => {
  return (
    <>
      <div
        id="getStarted"
        className="bg-white lg:px-20 md:px-10 px-5 py-10 text-white "
      >
        <div className="py-14 px-7 bg-[#4161DF] border-[5px] rounded-lg border-[#5D77D6] flex flex-col items-center">
          <div className="sm:text-3xl text-2xl font-[500] sm:font-[700] pb-1">
            <h2>Get started with Homyz</h2>
          </div>
          <h2 className="text-[#9dadeb] text-center py-5">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </h2>
          <div>
            <button className="bg-[#5A73D7] border-white border-[2px] rounded-lg px-4 py-[10px] font-[500] text-[15px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Started;
