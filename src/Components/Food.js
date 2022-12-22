import React,{useState} from 'react'
import { data} from '../data/data'

const Food = () => {
    // console.log(data)
    const[foods, setFoods] = useState(data);
    // filter type burgers/pizza/etc
    const filterType =(category) => {
      setFoods(
        data.filter((item) => {
          return item.category ===category;
        })
      );
    };
    // filter by price
    const filterPrice = (price) =>{
      setFoods(
        data.filter((item) =>{
          return item.price === price;
        })
      )
    }
  return (
    
    <div className='max-w-[1640px] m-auto px-4 py-11'>
    <h1 className='text-black font-bold text-4xl text-center'>
        Top Related Menu Items
    </h1>
    {/* Filter Row */}
    <div className='flex flex-col lg:flex-row justify-between'>
    {/* Filter type */}
        <div>
<p className='font-bold text-gray-700'>Filter Type</p>
<div className='flex justify-between flex-wrap'>
    <button onClick={()=> setFoods(data)} className="m-1 border-orange-600 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black ">All</button>
    <button  onClick={()=> filterType('burger')}className='m-1 bg-orange-500 rounded-xl px-4 text-white hover:bg-orange-300 hover:text-black'>Burgers</button>
    <button onClick={()=> filterType('pizza')} className='m-1 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black'>Pizza</button>
    <button onClick={()=>filterType('salad')}className='m-1 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black'>Salad</button>
    <button onClick={()=>filterType('chiken')}className='m-1 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black'>Chiken</button>
</div>
        </div>
        {/* Filter price */}
        <div>
<p className='font-bold text-gray-700'>Filter Price</p>
<div className='flex justify-between max-w[390px] w-full'> <button className='m-1 border-orange-600 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black'>$</button>
<button onClick={() => filterPrice('$')}className="m-1 border-orange-600 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black">$</button>
<button  onClick={() => filterPrice('$$')}className='m-1 border-orange-600 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-black'>$$</button>
<button  onClick={() => filterPrice('$$$')}className='m-1 border-orange-600 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-blacks'>$$$</button>
<button  onClick={() => filterPrice('$$$$')}className='m-1 border-orange-600 bg-orange-500 rounded-xl p-1 text-white hover:bg-orange-300 hover:text-blacks'>$$$$</button>
</div>
        </div>
    </div>
    {/* Display Foods */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
      {foods.map((item,index)=>(
        <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
          <img src={item.image} alt={item.name} className="w-full  h-[200px] object-cover rounded-t-lg"/>
          <div className='flex justify-between px-2 py-2'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='bg-orange-500 text-white rounded-full p-1'>{item.price}</span>
            </p>
          </div>
        </div>
      )
      
      )}
    </div>
    </div>
  )
}

export default Food