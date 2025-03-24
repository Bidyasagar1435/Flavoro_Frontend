import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import foodData from '../data/FoodData.js'
import { FaStar } from "react-icons/fa";





const FoodDetails = () => {

  const navigate = useNavigate();

  const params = useParams();
  // console.log({
  //   params,
  //   foodData
  // })
  const filteredItem = foodData.find(item => item.id === Number(params.id));
  // console.log("xxxx >>>", filteredItem)

  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      <div className='w-[1230px] h-[540px] bg-white shadow-lg flex justify-between items-center px-10'>
        <button onClick={() => navigate(-1)} className='absolute top-10 left-10 bg-green-500 px-3 py-2 text-white font-semibold rounded-lg hover:bg-green-600'>Go to back</button>
        <div className='w-[500px] h-[400px] flex justify-center items-center'>
          <img src={filteredItem.img} alt="" className='w-[480px] h-[380px] ml-4 hover:scale-105 transition-all duration-500 ease-in-out' />
        </div>
        <div className='w-[580px] h-[400px]'>
          <h1 className='text-3xl text-green-600 font-semibold'> {filteredItem.name} </h1>
          <p className='mt-7 text-gray-700'> {filteredItem.desc} </p>
          <span className='text-2xl'>Price: ₹{filteredItem.price} </span>
          <span className='flex items-center mt-10'>
            <FaStar className='text-yellow-400' /> {filteredItem.rating}
          </span>
          <button className='bg-green-500 px-25 py-4 text-xl font-bold text-white rounded-lg mt-10 ml-32 hover:bg-green-600' > Add To Cart</button>
        </div>
      </div>
    </div >
  )
}

export default FoodDetails
