import React from "react";
import { CiBellOn } from "react-icons/ci";
import heroImg from "./images/hero.png";

const Hero = () => {
  return (
    <>
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2">
          <div className="">
            <button
              className=" mt-[90px] mb-[35px] flex items-center duration-300 hover:bg-komola hover:text-white 
            w-[179px] border-[1px] border-black hover:border-white h-[37px]  gap-2 rounded-[20px] font-[roboto] font-normal text-base"
            >
              <CiBellOn className="size-5 bg-lightOrange rounded-full h-[35px] w-[35px]" />
              <p>Startup Business</p>
            </button>
            <div>
              <h1 className=" font-roboto font-medium text-[36px] leading-[45px] w-[456px] mb-8">
                Empowering startups to fuel their business growth
              </h1>
            </div>
            <div>
              <p className="font-roboto text-[18px] font-regular leading-7 w-[529px]">
                Eu posuere mi sed purus proin quisque molestie. Ut amet, at
                amet, velit
              </p>
              <p className="font-roboto text-[18px] font-regular leading-7 w-[529px] mb-9">
                nibh arcu eu. Id sem varius malesuada tincidunt sodales.
              </p>
            </div>
            <button className=" font-roboto bg-komola hover:bg-white duration-[400ms] py-[9px] px-[23px] rounded-[5px] text-white hover:text-komola border-2 border-white hover:border-komola ">Get started now </button>
          </div>
          <div className="">
            <img className=" ml-auto " src={heroImg} alt="heroImg" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[124px] h-90 mt-[109px]">
            <div>
              
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
