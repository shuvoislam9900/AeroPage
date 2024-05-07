import React from "react";
import { PiBaseballFill } from "react-icons/pi";
import ball from "./imgs/ball.png";

const Card = () => {
  return (
    <>
      <div className="max-w-container mx-auto">
        <div className="cards flex justify-between mb-[139px]">
          <a href="#">
            <div className=" w-[357px] h-[135px] bg-cardOrange rounded-[15px] items-center flex">
              <div className=" relative">
                <div className='w-[28.4px] h-[35px] ml-6   after:content-[""] after:absolute after:bottom-[50%] after:translate-y-[50%] after:right-[-20px] after:bg-borderOrange after:h-[82px] after:w-[2px]'>
                  {/* <PiBaseballFill className=' size-8' /> */}
                  <img src={ball} alt="ball" />
                </div>
              </div>
              <div className="ml-[46px]">
                <h3 className=" font-roboto font-medium text-[20px] leading-7 ">
                  Immediate Deployment
                </h3>
                <p className=" font-roboto font-medium text-base text-cardText w-[207px]">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className=" w-[357px] h-[135px] bg-cardOrange rounded-[15px] items-center flex">
              <div className=" relative">
                <div className='w-[28.4px] h-[35px] ml-6   after:content-[""] after:absolute after:bottom-[50%] after:translate-y-[50%] after:right-[-20px] after:bg-borderOrange after:h-[82px] after:w-[2px]'>
                  {/* <PiBaseballFill className=' size-8' /> */}
                  <img src={ball} alt="ball" />
                </div>
              </div>
              <div className="ml-[46px]">
                <h3 className=" font-roboto font-medium text-[20px] leading-7 ">
                  Immediate Deployment
                </h3>
                <p className=" font-roboto font-medium text-base text-cardText w-[207px]">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className=" w-[357px] h-[135px] bg-cardOrange rounded-[15px] items-center flex">
              <div className=" relative">
                <div className='w-[28.4px] h-[35px] ml-6   after:content-[""] after:absolute after:bottom-[50%] after:translate-y-[50%] after:right-[-20px] after:bg-borderOrange after:h-[82px] after:w-[2px]'>
                  {/* <PiBaseballFill className=' size-8' /> */}
                  <img src={ball} alt="ball" />
                </div>
              </div>
              <div className="ml-[46px]">
                <h3 className=" font-roboto font-medium text-[20px] leading-7 ">
                  Immediate Deployment
                </h3>
                <p className=" font-roboto font-medium text-base text-cardText w-[207px]">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
