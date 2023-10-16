import React from "react";

const Logos = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-8 p-7 lg:flex-row lg:justify-between">
          <div className="w-[140px] ">
            <img
              src="https://real-estate-web.pages.dev/prologis.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-[140px] ">
            <img
              src="https://real-estate-web.pages.dev/tower.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-[140px] ">
            <img
              src="https://real-estate-web.pages.dev/equinix.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-[140px] ">
            <img
              src="https://real-estate-web.pages.dev/realty.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logos;
