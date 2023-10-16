import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import { BiSolidBarChartSquare, BiSolidDownArrow } from "react-icons/bi";

function Icon({ id, open }) {
  return (
    <div className="text-[13px] p-3 rounded-lg bg-[#eeeeff] text-[#4368ff] flex justify-center items-center">
      <BiSolidDownArrow
        className={`${id === open ? "rotate-180" : ""}  transition-transform `}
      />
    </div>
  );
}

const accordionItemsData = [
  {
    id: 1,
    title: "Best interest rates on the market",
    content:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    symbol: <BsShieldFillCheck />,
  },
  {
    id: 2,
    title: "How to use Material Tailwind?",
    content:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    symbol: <FaTimesCircle />,
  },
  {
    id: 3,
    title: "What can I do with Material Tailwind?",
    content:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    symbol: <BiSolidBarChartSquare />,
  },
];

const AccordionItem = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className=" flex flex-col gap-4 pb-10">
        {accordionItemsData.map((item) => (
          <Accordion
            key={item.id}
            open={open === item.id}
            icon={<Icon id={item.id} open={open} />}
            className={`border-[1px] py-1 px-5  rounded-lg ${
              open === item.id ? "shadow-lg shadow-blue-300" : ""
            }`}
          >
            <AccordionHeader
              onClick={() => handleOpen(item.id)}
              className={`  font-[700] flex justify-between`}
            >
              <div className="text-[16px] p-3 rounded-lg bg-[#eeeeff] text-[#4368ff] ">
                {item.symbol}
              </div>
              <div className="text-[#1F3E72] text-[14px] sm:text-[18px] lg:text-sm">
                {item.title}
              </div>
            </AccordionHeader>
            <AccordionBody className="text-[#A2A1A1]">
              {item.content}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default AccordionItem;
