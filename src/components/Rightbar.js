import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import Rightbarb from './Rightbarb'
import { BiDotsHorizontalRounded
} from 'react-icons/bi'
function Rightbar() {
  return (
    <div className='mr-11 pb-32'>
   
    <div className='fixed z-20  flex pt-1 pl-4 items-center space-x-4 w-[440px] h-14 bg-[#FFFFFF] '>
    <div className=' h-11  pl-6 w-[370px] flex items-center space-x-3  rounded-full bg-gray-100 '>
        <RiSearchLine/>
     
        <input type="search" name="search"
        placeholder='Search Twitter' className='bg-gray-100 w-[310px] outline-none '
        required/>
      </div>
    </div>
   <div className=' sticky top-0 ml-4'>
   <div className=' h-[870px] bg-gray-100 rounded-xl w-[370px] mt-16 '>
   
   <h1 className='text-[#0F1419] font-bold text-[20px] pt-3 pl-3 '>Trendings for you </h1>
   <div className='flex items-center h-24 w-[370px] justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div className='text-gray-500 text-[15px]'>
       <p className=''>Trending In Pakistan</p>
       <p className='pt-4'>2.14M Tweets</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
       <p>#امپورٹڈ_حکومت_نامنظور</p>
     </div>
   </div>




   <div className='flex items-center h-24 justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div className='text-[15px] text-gray-500'>
       <p>Trending In Pakistan</p>
       <p className='text-[#1D9BF0]'>#bajwa</p>
       <p className=''>1.1M Tweets</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
     
     </div>
   </div>


   <div className='flex items-center h-24  justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div className='text-gray-500 text-[15px]' >
       <p>Trending In Pakistan</p>
       <p className='text-[#050505] font-semibold'>LaLa</p>
       <p>2.3k Tweets</p>

     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
     
     </div>
   </div>


   <div className='flex items-center h-24  justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div className='text-gray-500 text-[15px]'>
       <p>Trending In Pakistan</p>
     <p className='text-[#1D9BF0]'>  #Imran Khan</p>
       <p className=''>2.14k Tweets</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
      
     </div>
   </div>





   <div className='flex items-center h-24 justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div className='text-gray-500  text-[15px]'>
       <p>Trending In India</p>
       <p className='text-[#1D9BF0]'>#IPL#RCB</p>
       <p className=''>1.14k Tweets</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
  
     </div>
   </div>






   <div className='flex items-center h-24 justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div className='text-gray-500  text-[15px]'>
       <p>Trending In America</p>
       <p className='text-[#1D9BF0] '> #Ukraine#Safe</p>
       <p className=''>1.94M Tweets</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
       
     </div>
   </div>





   <div className='flex items-center h-24  justify-between bg-gray-100 
   px-4 hover:bg-gray-200 pt-3'>
     <div  className='text-gray-500 text-[15px]'>
       <p>Trending In Pakistan</p>
       <p className='text-[15px] text-[#050505] font-semibold'>What a MAN</p>
       <p className=''>2.14M tweets</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
    
     </div>
   </div>



   <div className='flex items-center h-24 justify-between bg-gray-100 
   px-4 hover:bg-gray-200 mt-1 pt-9'>
     <div className='text-[15px] text-gray-500 '>
       <p>Trending In Russia</p>
       <p className='text-[#1D9BF0]'>#Putin</p>
       <p className=''>2.14M tweets</p>
       <p className='text-[#1D9BF0] pt-9'>Show More</p>
     </div>
     <div>
       <p className='pl-36 '><BiDotsHorizontalRounded className='h-5 w-5'/></p>
      
     </div>
     
   </div>
  
   </div>
   <div className='  mt-[50px] bg-gray-100 rounded-xl   h-[300px] w-[370px]  pt-3'>
     <h1 className='text-[20px] text-[#050505] font-bold pl-4'>Who to Follow</h1>
          <Rightbarb/>
</div>
   </div>
     
    </div>

  )
}

export default Rightbar