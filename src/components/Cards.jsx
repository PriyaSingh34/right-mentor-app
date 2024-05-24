import React from 'react'

const Cards = ({id,img,heading,info}) => {
  return (
    <div
    key={id}
    className="m-auto card  w-[343px] bg-white h-[451px] border rounded-[35px] p-10"
  >
    <div className="w-[112.13px] h-[103px] ">
      <img src={img} alt="" />
    </div>
    <div className="pt-10">
      <div className="w-[229px] h-[50px]  ">
        <h1 className="text-[22px] leading-[25.48px] font-medium">
          {heading}
        </h1>
      </div>
      <div className="w-[269px] text-[16px] h-[132px] leading-[22.4px] mt-[15px]  font-medium">
        <p>{info}</p>
      </div>
    </div>
  </div>
  )
}

export default Cards