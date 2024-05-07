import React from "react";
import logo from "/logo.png";
import { FaCloudUploadAlt } from "react-icons/fa";

const NavComp = () => {
  return (
    <>
      <div className=" max-w-container mb-[101px] mx-auto h-[89px]">
        <div className="flex justify-between">
          <div className="h-[89px] lg:w-[328px]">
            <img src={logo} alt="logo" />
          </div>
          <ul className="list-none flex gap-[83px] my-auto font-roboto text-medium text-kala ">
            <li>
              <a className="  hover:text-komola duration-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a className=" hover:text-komola duration-300" href="#">
                About
              </a>
            </li>
            <li>
              <a className=" hover:text-komola duration-300" href="#">
                Service
              </a>
            </li>
            <li>
              <a className=" hover:text-komola duration-300" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex">
            <button className="text-komola font-roboto font-medium border-2 border-komola hover:border-white hover:bg-komola hover:text-white duration-300  px-[55px] py-[18px] m-auto flex rounded-[20px] justify-center gap-[28px]">
              <FaCloudUploadAlt className=" m-auto rotate-180 size-6" />
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavComp;
