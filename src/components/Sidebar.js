import React from 'react'
 import { Link } from 'react-router-dom'
import { BiHomeCircle, BiHash, BiMessage, BiDotsHorizontalRounded } from 'react-icons/bi'
import { VscBell } from 'react-icons/vsc'
import { BsBookmark, BsChatDots } from 'react-icons/bs'
import { RiFileList2Line, RiHome7Fill } from 'react-icons/ri'
import { IoPersonOutline } from 'react-icons/io5'
import { ImTwitter } from 'react-icons/im'
function Sidebar() {
  return (
    <div className='ml-12 mt-1 fixed' >
               <div className='ml-1 pl-2 pt-2 hover:bg-blue-100 h-12  w-12 rounded-full '>
                <div className='pb-4'>
        <Link to="/">
        <ImTwitter className='text-[#1D9BF0] h-8 w-8'/>
        </Link>
                </div>
               
                  </div>

                <div className='mt-3 '> 
                <Link to="/">
                  <div className='flex items-center space-x-5 hover:bg-gray-200 w-36 rounded-full pl-3 h-[52px] '>
                 
                   <div className='flex flex-col mb-7 space-y-1'>
                     <p className='h-2 w-2 bg-[#1D9BF0] rounded-full ml-4  '></p>
                   <RiHome7Fill className='h-7 w-7 absolute'/>
                   </div>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>
                  
                  Home
               
                      </h1>
                 </div>
                 </Link>
                 <Link to="/feed">
                 <div className='flex items-center space-x-5 hover:bg-gray-200 w-40 rounded-full pl-3 h-[52px] '>
                    <BiHash className='h-7 w-7'/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>
                  
                   Explore
                      </h1>
                 </div>
                 </Link>

                <Link to="/notifications">
                  
                <div className='flex items-center space-x-5 hover:bg-gray-200 w-48 rounded-full pl-3 h-[52px]'>
                    <VscBell className='h-6 w-6 '/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>Notifications</h1>
                 </div>
                </Link>

               <Link to="/messages">
               <div className='flex items-center space-x-5 hover:bg-gray-200 w-44 rounded-full pl-3 h-[52px]'>
                    <BiMessage className='h-6 w-6 '/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>Messages</h1>
                 </div>
               </Link>
<Link to="/bookmarks">
                 <div className='flex items-center space-x-5 hover:bg-gray-200 w-44 rounded-full pl-3  h-[52px]'>
                    <BsBookmark className='h-6 w-6 '/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>Bookmarks</h1>
                 </div>
                 </Link>
                 <Link to="/edit">
                 <div className='flex items-center space-x-5 hover:bg-gray-200 w-32 rounded-full pl-[10px] h-[52px]'>
                    <RiFileList2Line className='h-6 w-8 '/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>Lists</h1>
                 </div>
                 </Link>
               <Link to="/profile">
               <div className='flex items-center space-x-5 hover:bg-gray-200 w-32 rounded-full pl-3  h-[52px]'>
                    <IoPersonOutline className='h-6 w-6 '/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505] '>Profile</h1>
                 </div>
               </Link>
<Link to="/more">
                 <div className='flex items-center space-x-5 hover:bg-gray-200 w-32 rounded-full pl-[13px]  h-[52px]'>
                    <BsChatDots className='h-6 w-6'/>
                    <h1 className='text-[#0F1419] tracking-wide text-[20px] hover:text-[#050505]'>More</h1>
                 </div>
                 </Link>
              </div>
             <div className='bg-[#1D9BF0] hover:bg-[#1682ca] h-12 w-52  rounded-full mt-2'>
               <button className='text-[#FFFFFF] pl-[76px] pt-[6px] text-[20px] font-medium '>
                <a href="https://twitter.com/compose/tweet" target="_blank">Tweet</a> 
               </button>
             </div>
             <Link to="profile">
             
           
             <div className='flex items-center mt-3 pl-2  justify-between h-16 w-[280px] rounded-full
              pr-4 hover:bg-gray-100 '>
               <div className='flex items-center space-x-2'>
                 <img className='h-11 w-11 rounded-full' 
                 
                 src="https://pbs.twimg.com/profile_images/1554741098555363329/CM_Jqtmu_400x400.jpg"
                 alt=""
                 />
                 <div>
                   <p className='font-semibold'> zain fiaz</p>
                   <p>@zainfb1122</p>
                 </div>
             
               </div>
             
               <div className='pr-3'>
               <BiDotsHorizontalRounded className='h-6 w-6'/>
               </div>
             </div>
             </Link>
      </div>
  )
}

export default Sidebar