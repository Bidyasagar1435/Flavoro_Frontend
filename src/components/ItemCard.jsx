import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCard = ({ id, name, price, qty, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex shadow-md gap-2 p-2 rounded-lg mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, price, qty, img }));
          toast(` ${name} Removed!`, {
            icon: "🖐️",
          });
        }}
        className="absolute right-7 text-gray-700"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>

        <div className="flex justify-between">
          <span className="text-green-500 font-semibold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FiMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-800 rounded-sm hover:text-white hover: hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <GoPlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-800 rounded-sm hover:text-white hover: hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
