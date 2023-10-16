import React from "react";
import Nav from "./Nav";
import { useSpring, animated } from "react-spring";
import { FaLocationDot } from "react-icons/fa6";

const Counter = ({ start, end, duration }) => {
  const { count } = useSpring({
    from: { count: start },
    count: end,
    delay: duration,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{count.to((end) => end.toFixed(0))}</animated.div>;
};

const Header = () => {
  return (
    <>
      <div className="bg-[#131110] w-full text-white relative z-10">
        <Nav />
        <div className="flex justify-center">
          <div className=" pb-10 pt-28 lg:pt-[120px] px-7 lg:px-[120px] w-[450px]  lg:w-full flex flex-col lg:flex-row justify-between gap-10">
            <div className=" relative  lg:w-[450px] w-full lg:pt-[30px] ">
              <div className="absolute top-1 lg:top-[30px] left-[160px] -z-[1]">
                <div className="realtive bg-white   rounded-full shadow-[#ffffff_0px_0px_180px_70px]">
                  <div className="bg-gradient-to-r from-amber-500 to-slate-50 w-[70px] h-[70px] rounded-full"></div>
                </div>
              </div>
              <div className="text-5xl xl:text-[63px] font-bold w-[340px] sm:w-[340px] xl:w-full heading">
                <h2>Discover Most Suitable Property</h2>
              </div>
              <p className="text-[#858585] text-sm pt-10 ">
                Find a variety of properties that suit you very easilty Forget
                all difficulties in finding a residence for you
              </p>
              <div className="my-7 p-3 h-16 bg-white flex items-center gap-2 border-[4px] rounded-lg text-black">
                <FaLocationDot className="text-xl text-blue-600" />
                <div className="w-full h-full  bg-black">
                  <input
                    type="text"
                    className="w-full h-full  focus:outline-none"
                  />
                </div>

                <button className="bg-gradient-to-r from-[#4066ff] to-[#2949c6] px-3 py-2 rounded-lg text-white">
                  Search
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <h2 className="flex gap-1 text-xl sm:text-3xl font-[500]">
                    <Counter start={10} end={9000} duration={50} />
                    <span className="text-[#ffa500]">+</span>
                  </h2>
                  <p className="text-[#8c8f8f] sm:text-[14px]">
                    Premium Product
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="flex gap-1 text-xl sm:text-3xl font-[500]">
                    <Counter start={50} end={2000} duration={150} />
                    <span className="text-[#ffa500]">+</span>
                  </h2>
                  <p className="text-[#8c8f8f] sm:text-[14px]">
                    Happy Customer
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="flex gap-1 text-xl sm:text-3xl font-[500]">
                    <Counter start={10} end={28} duration={300} />
                    <span className="text-[#ffa500]">+</span>
                  </h2>
                  <p className="text-[#8c8f8f] sm:text-[14px]">
                    Awards Winning
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:h-[600px] lg:w-[500px] w-full  bg-[#302E2D] p-3 rounded-t-full ">
              <img
                src="https://real-estate-web.pages.dev/hero-image.png"
                alt=""
                className="h-full w-full rounded-t-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
