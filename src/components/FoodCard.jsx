import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom';


const FoodCard = ({ handleToast, data }) => {

    const { id, name, price, desc, rating, img,  } = data;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='w-[250px] bg-white rounded-lg font-semibold flex flex-col p-5 ml-7 gap-2'>
            <img src={img} alt="" onClick={() => navigate(`/food-details/${id}`, {})} className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />

            <div className='flex justify-between text-sm'>
                <h2>{name}</h2>
                <span className='text-green-500'>₹{price}</span>
            </div>
            <p className='text-sm font-normal overflow-'>{desc.slice(0, 50)}</p>
            <div className='flex justify-between'>
                <span className='flex justify-center items-center'>
                    <FaStar className='text-yellow-400 mr-1.5' /> {rating}
                </span>
                <button onClick={() => { dispatch(addToCart({ id, name, price, rating, img, qty: 1 })); handleToast(name) }} className='p-1 bg-green-500 rounded-lg text-center outline-none text-white text-sm hover:bg-green-600'>Add to cart</button>
            </div>
        </div>
    )
}

export default FoodCard
