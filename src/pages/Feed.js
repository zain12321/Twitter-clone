import React from 'react'
import { Link } from 'react-router-dom'
import {RiSearchLine} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import Home from './Home'
import Postscard from './Postscard'
function Feed() {
  return (

    <div>
      <div className='fixed
  bg-white border-x w-[570px]  h-14 flex justify-between items-center px-6  '>
    
    <div className='  flex pt-1 pl-4 items-center space-x-4 w-[570px] h-14 bg-[#FFFFFF] '>
    <div className=' h-11  pl-6 w-[400px] flex items-center space-x-3 px-16 rounded-full bg-gray-100 '>
        <RiSearchLine/>
     
        <input type="search" name="search"
        placeholder='Search Twitter' className='bg-gray-100 outline-none'
        required/>
      </div>
    </div>
    <div><FiSettings className='h-5 w-5'/></div>

    </div>


  <div className='pt-20'>
             <img className='h-[400px] w-[570px] '
              src="https://pbs.twimg.com/semantic_core_img/1498087429575643136/Xbsg8m7i?format=jpg&name=small"
             alt=""
             />
            
<span className='text-md pl-3  pt-4 font-semibold text-[16px] tracking-wide'>
Entertainment
·
LIVE
</span>
<p className='text-xl  pl-3 font-bold text-[#050505] tracking-wider'>
Happy birthday, Jennifer Morrison 🎂
             </p>
  </div>
    <div className='mt-11'>
       <Postscard/>
    </div>
     </div>

  )
}

export default Feed