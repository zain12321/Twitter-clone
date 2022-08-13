import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
function Notifications() {
  return (
    <div className='h-screen'>

      <div className='fixed h-32 w-[570px] border-b   border-x  backdrop-blur-xl bg-white/90 '>
         <div className='w-[570px] flex items-center justify-between px-5 py-2'>
           <h1 className='text-[20px] font-bold'>Notifications</h1>
           <AiOutlineSetting className='h-5  w-5'/>
         </div>
         <div className=' flex '>
                  <div className='w-[285px] text-center h-16 mt-4 hover:bg-gray-100'>
                    <p className='pt-4 text-[17px] ml-[116px] pb-[19px] w-14 border-b-4 border-[#1D9BF0]'>All</p>
                  </div>
              <div className='w-[285px]  h-16 mt-4  text-center  hover:bg-gray-100'>
              <p className='pt-4 text-lg'>Mentions</p>
              </div>
         </div>
      </div>
          <div className='pt-40 h-16   '>
           <div className='flex flex-col border-b pl-14 space-x-2  px-5  '>
          <div className='flex space-x-2'>
          <BsPersonFill className='h-7 text-[#1D9BF0] w-7'/>
             <img className='h-9 w-9 rounded-full' src="https://pbs.twimg.com/profile_images/1513711957463166978/rdHQuZYo_400x400.jpg"
             alt=""
             /> 

          </div>
              <p className='text-[#050505] font-semibold pl-8 pt-3'>Zain Hassan <span className='text-gray-500'>Followed you </span></p>
           </div>
          
          </div> 
    </div>
  )
}

export default Notifications