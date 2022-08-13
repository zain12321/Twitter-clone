import React from 'react'
import { BsThreeDots, BsArrow90DegUp, BsArrow90DegRight, BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
function Posts() {
  return (
    <div className='h-[660px] w-[570px] hover:bg-gray-100 border-b'>
      <div className='flex justify-between px-3 py-3'>
          <div className='flex space-x-2'>
              <img className='h-10 w-10 rounded-full'
               src="https://pbs.twimg.com/profile_images/1526278959746392069/t3sMBz94_400x400.jpg"
              alt=""
              /> 
              <p className='flex'>
<span className='text-[#050505] font-normal'>
@ImranKhan
</span>
<img className='h-6 w-10 rounded-full'
 src="https://i.pinimg.com/736x/5e/a5/4d/5ea54d3b115ae0fc0f51a3fc7086a49d.jpg"
alt=""
/>
<span className='text-gray-700'>@Pti
·
11h</span></p>
          </div>
          <div className='px-3'>
            <p className='ml-14'>  <BsThreeDots/></p>
              <p className='pt-4'>#Imran#Pakistan</p></div>
      </div>
      <div>
          <img className='h-[500px] w-[420px] ml-16 rounded-xl'
           src="https://pbs.twimg.com/media/FVX7mBhXoAIY7Gr?format=jpg&name=small"
          alt=""
          />
      </div>
      <div className='flex text-gray-500 items-center  space-x-5 py-4 pl-[70px] w-[500px] '>
          <div className='flex items-center h-12 w-28'>
         <div className='h-7 w-7 rounded-full hover:bg-blue-200  pt-1 pb-1 pl-[6px] mt-1'>
         <FaRegComment  className='hover:text-blue-300'/>
         </div>
        <p className='pl-3 text-[15px]  hover:text-[#1D9BF0]'>  1.1M</p>
          </div>
          <div className='flex px-3 h-12 w-28 items-center '>
            <div className='h-9 w-9 hover:bg-green-200 flex items-center hover:text-green-500 rounded-full pl-[6px]'>
            <BsArrow90DegUp className='h-3 w-3'/>
              <BsArrow90DegRight className='rotate-90
              h-3 w-3'/>
            </div>
              <p className='pl-1 text-[15px] hover:text-green-400'>11.1k</p>
          </div>
          <div className='flex items-center  h-12 w-28'>
          <div className='h-8 w-8 rounded-full hover:bg-red-200 pt-2 pl-2'>
          <BsHeart/>
          </div>
            <p className='pl-3 text-[15px] hover:text-red-500'>  2.9M</p>
          </div>
          <div className=''>
              <FiShare className='hover:text-blue-400'/>
          </div>
      </div>
    </div>
  )
}

export default Posts