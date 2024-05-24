import React from 'react'

const PhnCard = ({id, img, heading, info}) => {
  return (
    <div
    key={id}
    className="card  w-[295px] bg-white h-[495px] border rounded-[35px]"
  >
    <div className="w-[112.13px] h-[103px] ml-[24px] pt-[61px]">
      <img src={img} alt="" />
    </div>
    <div className="ml-[24px] mt-[100px]">
      <div className="w-[229px] h-[50px]  ">
        <h1 className="text-[22px] leading-[25.48px] font-medium">
          {heading}
        </h1>
      </div>
      <div className="w-[241px] text-[16px] h-[162px] leading-[22.4px] mt-[15px]  font-medium">
        <p>{info}</p>
      </div>
    </div>
  </div>
  )
}

export default PhnCard