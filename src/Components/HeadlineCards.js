
import React from 'react'


const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative' >
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
            <p className='font-bold text-2xl px-2 pt-4'>Chowmin(Chiken)</p>
            <p className='px-2'>Rs.130</p>
           <button className='border-white text-black bg-white rounded-xl p-1 absolute bottom-4 mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={ require("../assets/a.png")}></img>
        </div>
         {/* card */}
         <div className='rounded-xl relative' >
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
            <p className='font-bold text-2xl px-2 pt-4'>Pasta</p>
            <p className='px-2'>Rs.120</p>
           <button className='border-white text-black bg-white rounded-xl p-1 absolute bottom-4 mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={ require("../assets/b.png")}></img>
        </div>
         {/* card */}
         <div className='rounded-xl relative' >
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
            <p className='font-bold text-2xl px-2 pt-4'>Pizza(chiken)</p>
            <p className='px-2'>Rs.350</p>
           <button className='border-white text-black bg-white rounded-xl p-1 absolute bottom-4 mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={ require("../assets/c.png")}></img>
        </div>
         {/* card */}
         <div className='rounded-xl relative' >
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
            <p className='font-bold text-2xl px-2 pt-4'>Momo</p>
            <p className='px-2'>Rs.140</p>
           <button className='border-white text-black bg-white rounded-xl p-1 absolute bottom-4 mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={ require("../assets/d.png")}></img>
        </div>
         {/* card */}
         <div className='rounded-xl relative' >
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
            <p className='font-bold text-2xl px-2 pt-4'>french fries</p>
            <p className='px-2'>Rs.110</p>
           <button className='border-white text-black bg-white rounded-xl p-1 absolute bottom-4 mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={ require("../assets/f.png")}></img>
        </div>
         {/* card */}
         <div className='rounded-xl relative' >
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
            <p className='font-bold text-2xl px-2 pt-4'>Whole Chiken</p>
            <p className='px-2'>Rs.1200</p>
           <button className='border-white text-black bg-white rounded-xl p-1 absolute bottom-4 mx-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={ require("../assets/e.png")}></img>
        </div>
    </div>
  )  
}


export default HeadlineCards