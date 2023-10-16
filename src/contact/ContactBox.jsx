import React from "react";
import {
  BsFillTelephoneFill,
  BsMessenger,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const contactDataList = [
  {
    id: 1,
    title: "Call",
    conatactinfo: "021 123 145 14",
    action: "Call now",
    icons: <BsFillTelephoneFill />,
  },
  {
    id: 2,
    title: "Chat",
    conatactinfo: "021 123 145 14",
    action: "Chat now",
    icons: <AiFillMessage />,
  },
  {
    id: 3,
    title: "Video Call",
    conatactinfo: "021 123 145 14",
    action: "Video Call now",
    icons: <BsFillCameraVideoFill />,
  },
  {
    id: 4,
    title: "Message",
    conatactinfo: "021 123 145 14",
    action: "Message now",
    icons: <BsMessenger />,
  },
];

function ContactBox() {
  return (
    <>
      <div className="flex flex-col gap-5">
        {contactDataList.map((item, id) => (
          <div
            key={id}
            className="p-4 rounded-lg border-2 hover:transform hover:scale-[1.08] md:hover:scale-[1.075] transition-all ease-in-out duration-300
          "
          >
            <div className="flex items-center gap-5">
              <div className="text-[#4066FF] bg-[#eeeeff] p-3 rounded-lg text-xl">
                {item.icons}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-[700] text-[17px] text-[#1F3E72]">
                  {item.title}
                </h2>
                <p className="text-[#8C8B8B] font-[500]">{item.conatactinfo}</p>
              </div>
            </div>
            <div className="w-full h-9 mt-3 rounded-lg hover:transform hover:scale-[0.92] transition-all ease-in-out duration-300 ">
              <button className="text-[#4066FF] bg-[#eeeeff] hover:bg-[#4066ff] hover:text-white w-full h-full rounded-lg text-[14px] font-[600]">
                {item.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactBox;
