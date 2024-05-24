import React from 'react'

const ImgCard = ({id, img, title, para}) => {
  return (
    <div key={id} className='w-48 h-[301px] bg-black-gray-gradient rounded-2xl mt-10'>
    <div className='relative w-full h-[60%] flex flex-col justify-center items-center'>
         <div className='absolute top-[-70px] w-44'>

         <img className=' w-44' src={img} alt="" />
         </div>
    </div>
    <div className='w-full h-[40%] p-7'>
          <h1 className='text-white text-lg font-bold '>{title}</h1>
          <p className='text-white text-base font-medium'>{para}</p>
    </div>
  </div>
  )
}

export default ImgCard