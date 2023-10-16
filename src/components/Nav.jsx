import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa6";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  return (
    <>
      <div className=" absolute top-0 w-full px-5 py-3 flex justify-between items-center">
        <div className="w-24">
          <a href="#">
            <img src="https://real-estate-web.pages.dev/logo.png" alt="" />
          </a>
        </div>
        <div className="block sm:hidden">
          <Menu as="div" className="relative z-[99] ">
            <Menu.Button className={`text-white text-xl  p-2`}>
              <FaBars />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-75"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in-out duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-75"
            >
              <Menu.Items
                className={`absolute bg-white top-10 right-10 w-[200px] p-1 rounded-lg  text-black`}
              >
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active && "bg-blue-500 text-white"
                      }  font-semibold transition-all ease-in-out duration-200 p-1 py-3 pl-3 rounded-lg`}
                    >
                      <a href="#residencies">
                        <div>Residencies</div>
                      </a>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active && "bg-blue-500 text-white"
                      }  font-semibold transition-all ease-in-out duration-200 p-1 py-3 pl-3 rounded-lg`}
                    >
                      <a href="#ourValue">
                        <div>Our Value</div>
                      </a>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active && "bg-blue-500 text-white"
                      }  font-semibold transition-all ease-in-out duration-200 p-1 py-3 pl-3 rounded-lg`}
                    >
                      <a href="#contactUs">
                        <div>Contact Us</div>
                      </a>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active && "bg-blue-500 text-white"
                      }  font-semibold transition-all ease-in-out duration-200 p-1 py-3 pl-3 rounded-lg`}
                    >
                      <a href="#getStarted">
                        <div>Get Started</div>
                      </a>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden sm:flex  list-none text-white">
          <li className="hover:bg-blue-500 font-semibold transition-all ease-in-out duration-200  rounded-lg mx-1 px-3 py-2">
            <a href="#residencies">
              <div>Residencies</div>
            </a>
          </li>
          <li className="hover:bg-blue-500 font-semibold transition-all ease-in-out duration-200  rounded-lg mx-1 px-3 py-2">
            <a href="#ourValue">
              <div>Our Value</div>
            </a>
          </li>
          <li className="hover:bg-blue-500 font-semibold transition-all ease-in-out duration-200  rounded-lg mx-1 px-3 py-2">
            <a href="#contactUs">
              <div>Contact Us</div>
            </a>
          </li>
          <li className="hover:bg-blue-500 font-semibold transition-all ease-in-out duration-200  rounded-lg mx-1 px-3 py-2">
            <a href="#getStarted">
              <div>Get Started</div>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
