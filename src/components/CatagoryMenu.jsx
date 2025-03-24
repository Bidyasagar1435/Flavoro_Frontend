import React, { useState, useEffect } from 'react'
import FoodData from "../data/FoodData"
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/slices/CategorySlice';
import { useSelector } from 'react-redux';

const CatagoryMenu = () => {
    const [categories, setcategories] = useState([]);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        setcategories(uniqueCategories);
        console.log(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category)




    return (
        <div className='mx-7'>
            <h2 className='text-xl font-semibold'>Find the best food</h2>
            <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden '>
            <button onClick= {() => {
                                dispatch(addCategory("All"))
                     }} className={`px-4 py-1 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${ selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>

                {
                    categories.map((category, index) => {
                        return (
                            <button onClick= {() => {
                                dispatch(addCategory(category))
                            }} key={index} className={`px-4 py-1 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${ selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default CatagoryMenu
