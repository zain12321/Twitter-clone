import React from 'react'
import {
    HiArrowNarrowLeft
     } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { TiLocationOutline } from 'react-icons/ti'
import { BsCalendar3 } from 'react-icons/bs'
import Follow from './Follow'
import Topic from './Topic'
import Topicitems from './Topicitems'
function Profile() {
  return (
  <div>
        <div className='fixed
    backdrop-blur-xl bg-white/90 border-l border-r w-[570px]  h-14 flex items-center px-3  justify-between'>
      <div className=' flex items-center space-x-8'>
       <Link to="/bookmarks">
       <HiArrowNarrowLeft className='h-5  w-5'/></Link>
           <div>
               <p className='text-[#050505] text-[16px] font-bold'>zain fiaz</p>
               <p>0 Tweets</p>
           </div>
      </div>
      
  </div>

  <div className='bg-gray-300 h-[250px] pt-4 w-[57opx]'>
  <div className='flex w-[570px] justify-between pt-40  pl-9'>

  <Link to='image'>
  <img className='h-36  w-36 rounded-full border-4 bg-white hover:brightness-90 border-white' 
     src="https://pbs.twimg.com/profile_images/1554741098555363329/CM_Jqtmu_400x400.jpg"
     alt=""
     />
     </Link>
     <Link to="edit">
     <p className='mt-20 rounded-full h-8 w-28 pt-[2px] mr-10  hover:bg-gray-200 border border-gray-400'> 
     <span className='pl-4 text-[#050505] font-semibold  cursor-pointer '>
         Edit Profile</span></p> 
     </Link>
  
  </div>
  </div>
  <div className='mt-20 ml-6'>
          <p className='font-bold text-[#050505] text-[20px]'>zain fiaz</p>
         <p className='text-gray-500'>@zainfb1122</p>
  </div>
  <div className='text-gray-50items-center 0 flex space-x-4 ml-6 mt-2 '>
      <div className='flex items-center  space-x-2'>
      <TiLocationOutline/>
      <p>Islamabad</p>
      </div>
      <div className='flex items-center space-x-2'>
          <BsCalendar3 className='h-3 w-3'/>
          <p>Joined April 2022</p>
      </div>
   
  </div>
  <div className='flex space-x-3 ml-6 mt-2 '>
      <p className='text-[#050505]  font-semibold hover:underline'>14<span className='text-gray-400 pl-2'>Following</span></p>
      <p className='text-[#050505]  font-semibold hover:underline'>1<span  className='text-gray-400 pl-2'>Follower</span></p>
  </div>
  <div className=' flex items-center mt-2 border-b w-[570px]'>
     <div className='h-11 text-center pt-2 w-32 pl-1 hover:bg-gray-200 cursor-pointer '>
         <p className='w-16 border-b-4 border-[#1D9BF0] ml-4 pb-2'>Tweets</p></div>
     <div className='h-11 text-center pt-2 w-48 pl-1 cursor-pointer hover:bg-gray-200 
     '><p>Tweete & Replies</p></div>
     <div className='h-11 cursor-pointer text-center pt-2 w-32 pl-1 hover:bg-gray-200 
   ' ><p>Media</p></div>
     <div className='h-11 cursor-pointer text-center pt-2 w-32 pl-1 hover:bg-gray-200 
   '><p>Likes</p></div>
  </div>
<div>
    <Follow/>
 
</div>
<div className='py-3 pl-4'
>
       <h1 className='text-[20px] text-[#050505] font-bold'>Topics to follow</h1>
       <p className='text-[13px] text-gray-500'>
Tweets about the Topics you follow show up in your Home timeline</p>
</div>
<div>
      <Topic/>
</div>
  </div>
  )
}

export default Profile