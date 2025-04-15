import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import foodData from "../data/FoodData.js";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice.js";


const FoodDetails = ({handleToast}) => {

  
  const navigate = useNavigate();
  const params = useParams();
  const filteredItem = foodData.find((item) => item.id === Number(params.id));
  console.log(filteredItem);
  
  const dispatch = useDispatch();
  // const { id, name, price, desc, rating, img } = data;

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <button
          onClick={() => navigate(-1)}
          className="bg-green-500 font-semibold text-white px-5 py-2 rounded-lg hover:bg-green-600 absolute left-6 top-6 "
        >
          Go To Back
        </button>
        <div className="w-[500px] h-[700px] bg-white shadow-md flex justify-between flex-col p-5 lg:flex-row lg:w-[1000px] lg:h-[500px] lg:items-center">
          <div className="w-[460px] h-[350px] flex justify-center items-center">
            <img
              src={filteredItem.img}
              alt=""
              className="w-[350px] h-[330px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[400px] h-[450px]">
            <h1 className="font-semibold text-2xl text-green-500">
              {filteredItem.name}
            </h1>
            <p className="text-gray-600 font-light mt-4">{filteredItem.desc}</p>
            <h1 className="font-semibold text-2xl text-green-500 mt-4">
              {" "}
              Price: {filteredItem.price}
            </h1>
            <span className="flex items-center gap-1 mt-4">
              <FaStar className="text-yellow-400" /> {filteredItem.rating}
            </span>
            <button
              onClick={() => {
                dispatch(addToCart({...filteredItem, qty: 1 }));
                handleToast(name);
              }}
              className="bg-green-500 font-semibold text-white px-10 py-3 mt-6 rounded-lg hover:bg-green-600 transition-all duration-500 z-50"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
