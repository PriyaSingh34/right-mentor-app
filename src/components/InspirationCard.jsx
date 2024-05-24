import React from "react";

const InspirationCard = ({id, img1, quote, img2, author }) => {
  return (
    <div key={id} className="w-full flex flex-col lg:flex-row items-center justify-center ">
      <div className=" w-[248px] h-[248px] lg:w-[295px] lg:h-[295] flex justify-center ">
        <div className="absolute z-[100] top-[40px]">
          <div className="w-[248px] lg:w-[295px] ">
            <img src={img1} className="" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-black-gray-gradient w-[345px] lg:w-[505px] h-[301px] lg:ml-[25px] text-white lg:mt-[163px] rounded-[35px] p-12">
        <div className="">
          <div className="mt-4">
            <div className="w-[230px]">
            <p className="font-medium text-[32px] leading-10">{quote}</p>
            </div>
           
            <div className="flex justify-between text-center  ">
              <img className="mt-16" src={img2} alt="" />
              <p className="mt-16 ">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
