import React from 'react'
import { IoEarth } from 'react-icons/io5'
import { RiGalleryLine, RiBuilding2Line } from 'react-icons/ri'
import { MdGif } from 'react-icons/md'
import {  BsEmojiSmile } from 'react-icons/bs'
import {  TiLocationOutline } from 'react-icons/ti'
import { CgInbox  } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import {  ChartBarIcon } from '@heroicons/react/outline'
function What() {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center space-x-3 px-2'>
<Link to="profile">
        <img className='h-12 w-12 rounded-full'
         src="https://pbs.twimg.com/profile_images/1554741098555363329/CM_Jqtmu_400x400.jpg" alt=""/>
         </Link>
            <p className='text-[#050505]  text-[20px] font-normal'><input id="search"
            name="search" placeholder="What's happening" className='outline-none text-[#050505]' required /></p>
        </div>
 <div className='border-b w-[470px] ml-12 pb-2'>
 <div className='flex items-center pl-4  w-48   mt-2 rounded-full h-7 space-x-2 text-[#1D9BF0] hover:bg-blue-100'>
         <IoEarth className='h-4 w-4'/>
         <p className='text-[14px] font-semibold'>Everyone can reply</p>
     </div>
 </div>
     <div className='w-[500px] mt-4 ml-14 flex  items-center justify-between'>
         <div className='flex text-[#1D9BF0] '>
             <p className='h-8 pl-[6px] pt-[6px] w-8 rounded-full hover:bg-blue-200'><RiGalleryLine className='h-5 w-5'/></p>
             <p className='h-8 pl-[8px] pt-[8px] w-8 rounded-full hover:bg-blue-200 '><MdGif className='border
              border-[#1D9BF0] h-4 w-4'/></p>
             <p className='h-8 pl-[6px] pt-[6px] w-8 rounded-full hover:bg-blue-200'> <ChartBarIcon className='rotate-90 
             h-5 w-5 '/></p> 
             <p className='h-8 pl-[8px] pt-[6px] w-8 rounded-full  hover:bg-blue-200'><BsEmojiSmile className='h-5'/></p>
             <p className='h-8 pl-[6px] pt-[6px] w-8 rounded-full hover:bg-blue-200'><CgInbox className='h-5 w-5 '/></p>
             <p className='h-8 pl-[6px] pt-[6px] w-8 rounded-full  text-blue-300 hover:bg-blue-200'><TiLocationOutline className='h-5 w-5'/></p>
         </div>
         <div>
             <button className='bg-blue-300 font-bold h-10 w-20 rounded-full text-[#FFFFFF]'>Tweet</button>
         </div>
     </div>
     <div className='border-t border-b w-[570px] h-12 mt-4 text-center pt-[10px] hover:bg-gray-100'>
         <p className='text-[#1D9BF0] '>Show 37 Tweets</p>
     </div>
    </div>
  )
}

export default What