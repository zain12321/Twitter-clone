import React from 'react'
import { AiOutlineSetting} from 'react-icons/ai'
import { CgBox} from 'react-icons/cg'
function Messages() {
  return (
    <div className='fixed w-[440px] border-x h-screen'> 
        <div className='flex items-center justify-between px-6 '>
            <h1 className='text-[20px] font-bold'>Messages</h1>
            <div className='flex space-x-2 '>
                     <AiOutlineSetting className='h-5 w-5'/>
                     <CgBox className='h-5 w-5'/>
            </div>
        </div>

        <div className='pt-11 pl-9'>
            <h1 className='text-4xl font-bold'>Send a message, get <br/> a message</h1>
            <p className='text-[14px] text-gray-500'>Direct Messages are private conversations<br/> between you and other people on Twitter. Share <br/>Tweets, media, and more!</p>
            <div className='mt-6 h-12 text-center rounded-full w-64 bg-[#1D9BF0]'>
                <button className='text-[#FFFFFF] font-bold pt-[10px]'>Start a Conversation</button>
            </div>
        </div>

    </div>
  )
}

export default Messages