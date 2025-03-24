import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const handleToast = (name) => {
    toast.success(`Add ${name}`)
  }

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex flex-wrap gap-3 justify-center lg:justify-start my-7'>
        {
          FoodData.filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((food) => (
            <FoodCard key={food.id} data={food} handleToast={handleToast} />
          ))
        }



      </div>
    </>
  )
}

export default FoodItems
