import React from 'react'
import { Link } from 'react-router-dom'

function Image() {
  return (
    <div>
     <Link to='profile'>
     <img  className='w-[570px] h-full'
        src="https://pbs.twimg.com/profile_images/1554741098555363329/CM_Jqtmu_400x400.jpg" alt=" " />
     </Link>
    </div>
  )
}

export default Image