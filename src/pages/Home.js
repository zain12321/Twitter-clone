import React from 'react'
import { 
    HiOutlineSparkles
     } from 'react-icons/hi'
import Follow from './Follow'
import { Link } from 'react-router-dom'
import Postscard from './Postscard'
import What from './What'
function Home() {
  return (
    <div className=''>
        <div className='fixed
          backdrop-blur-xl bg-white/90 border-l border-r w-[570px]  h-14 flex items-center px-3  justify-between'>
            <div className='text-[#050505] font-bold text-[20px]'>
              <Link to="/home">
                Home
                </Link>
            </div>
            <div>
                <HiOutlineSparkles className='h-6 w-6'/>

            </div>
        </div>
    
        <div className='pt-16  '>
           <What/>
        </div>
             <Postscard/>
          
             
    </div>
  )
}

export default Home