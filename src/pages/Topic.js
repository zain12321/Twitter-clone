import React, { useState } from 'react'

function Topic() {
     const defaultList = [
          
          { name: "Hrdik Pandya" },
          { name: "Sir Virat Kohli" },
          { name: "Sachin Tendu" },
          { name: "Mahin Dhoni" },
          { name: "Kail RahulSIN" }
     
        ];
      
        const [list, updateList] = useState(defaultList);
      
        const handleRemoveItem = (e) => {
         const name = e.target.getAttribute("name")
          updateList(list.filter(item => item.name !== name));
        };
         
     //    const [list, updateList] = useState(defaultList);
      
     //    const handleRemoveItem = (e) => {
     //      const name = e.target.getAttribute("name")
     //       updateList(list.filter(item => item.name2!== name));
     //    };
      
         
     //    const [list, updateList] = useState(defaultList);
      
     //    const handleRemoveItem = (e) => {
     //     const name = e.target.getAttribute("name")
     //      updateList(list.filter(item => item.name1 !== name));
     //    };
      
         
     //    const [list, updateList] = useState(defaultList);
      
     //    const handleRemoveItem = (e) => {
     //     const name = e.target.getAttribute("name")
     //      updateList(list.filter(item => item.name1 !== name));
     //    };
      
         
     //    const [list, updateList] = useState(defaultList);
      
     //    const handleRemoveItem = (e) => {
     //     const name = e.target.getAttribute("name")
     //      updateList(list.filter(item => item.name1 !== name));
     //    };
      
         
     //    const [list, updateList] = useState(defaultList);
      
     //    const handleRemoveItem = (e) => {
     //     const name = e.target.getAttribute("name")
     //      updateList(list.filter(item => item.name1 !== name));
     //    };
      
      

  return (
       <div className='cursor-pointer'>
    <div className='w-[570px] flex space-x-3 ml-2 '>
          <div className='flex flex-col space-y-2'>
          {list.map(item => {
               return (
<>
  <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between'>
    <div className=' '>
               <h1 className='
               flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '> {item.name}<span className='text-[30px] text-blue-600 pl-9 pb-1'>
                    +</span></h1>
         
          </div> 
          <p className='pl-5 pt-[5px] w-12 
                h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100 '
                 name={item.name} onClick={handleRemoveItem}
                >X</p>
  </div>
 {/* <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between'>
 <div className=' '>
            <h1 className='flex h-[38px] rounded-bl-full 
rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
            pb-1  pr-2 '>hardik pandy<span className=
'text-[30px] text-blue-600 pl-9 pb-1'>+</span></h1>
     
       </div> 
       <p className='pl-5 pt-[5px] w-12 
             h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100 '
              name={item.name1} onClick={handleRemoveItem}
             >X</p>
 </div>  */}
</>
               )

                 }  )}
          {/* <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>hhh vvv<span className='text-[30px] text-blue-600 pl-9 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>  */}
        {/* <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Virat Kohli<span className='text-[30px] text-blue-600 pl-14 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
        
          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Sports Tak<span className='text-[30px] text-blue-600 pl-14 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
         */}

          {/* <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Imran Khan<span className='text-[30px] text-blue-600 pl-[45px] pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
        
          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Babar Azam<span className='text-[30px] text-blue-600 pl-11 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>  */}
          </div> 
 



          <div className='flex flex-col space-y-2'>
          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Sahid Afridi<span className='text-[30px] text-blue-600 pl-12 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Salman Khan<span className='text-[30px] text-blue-600 pl-9 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
        
          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Zubyr Butt<span className='text-[30px] text-blue-600 pl-[54px] pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
        

          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Sanjay Dutt<span className='text-[30px] text-blue-600 pl-12 pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
        
          <div className='flex items-center  h-10  w-56 rounded-full border border-[#050505] justify-between '>
               <h1 className='flex h-[38px] rounded-bl-full rounded-tl-full w-44 hover:bg-blue-100 items-center pl-4
               pb-1  pr-2 '>Nadir Ali<span className='text-[30px] text-blue-600 pl-[68px] pb-1'>+</span></h1>
               <p className='pl-5 pt-[5px] w-12  h-[38px] rounded-tr-full rounded-br-full hover:bg-blue-100'>X</p>
          </div>
          </div>











<div className=' space-y-2'>
<div className='flex items-center  h-10 hover:bg-blue-100  w-[87px] rounded-tl-full rounded-bl-full border-y border-l border-[#050505] justify-between '>
            
            <h1 className='pl-4 text-[#050505]'>Dhoni</h1>
          </div>
         
 <div className='flex items-center  h-10 hover:bg-blue-100  w-[87px] rounded-tl-full rounded-bl-full border-y border-l border-[#050505] justify-between '>
            
            <h1 className='pl-4 text-[#050505]'>Carlos</h1>
          </div>
         
          <div className='flex items-center  h-10 hover:bg-blue-100  w-[87px] rounded-tl-full rounded-bl-full border-y border-l border-[#050505] justify-between '>
            
            <h1 className='pl-4 text-[#050505]'>Michael</h1>
          </div>
         
          <div className='flex items-center  h-10 hover:bg-blue-100  w-[87px] rounded-tl-full rounded-bl-full border-y border-l border-[#050505] justify-between '>
            
            <h1 className='pl-4 text-[#050505]'>JohnF</h1>
          </div>
         
          <div className='flex items-center  h-10 hover:bg-blue-100  w-[87px] rounded-tl-full rounded-bl-full border-y border-l border-[#050505] justify-between '>
            
            <h1 className='pl-4 text-[#050505]'>RobinK </h1>
          </div> 
</div>





    </div>


    <div  className='text-blue-500 mt-3 ml-4'>
        More Topics
    </div>
    </div>
  )
}

export default Topic