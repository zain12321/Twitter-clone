import React from 'react'

function BookMarks() {
  return (
    <div className='px-6  h-screen'>
        <div>
            <h1 className='font-bold text-[20px] tracking-wider'>
BookMarks
            </h1>
            <p>@zainfb1122</p>
        </div>
        <div className='ml-12 mt-12'>
            <img  src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-400x200.v1.png"
            alt=""
            />
           <div className='pl-14'>
           <h1 className='text-3xl font-bold '>Save Tweets for later</h1>
            <p className='text-[16px] text-gray-700 pt-2'>Don’t let the good ones fly away! Bookmark </p>
            <p className='text-[16px] text-gray-700'>Tweets to easily find them again in the future.</p>
           </div>
        </div>
    </div>
  )
}

export default BookMarks