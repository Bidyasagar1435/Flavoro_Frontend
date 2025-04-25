import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { BsArrowLeft } from "react-icons/bs";

const CartDetails = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[460px] h-[580px] bg-white absolute right-50 top-20 lg:w-[30vw] 2xl:w-[20vw] p-2 mb-3">
        <div className="flex justify-between my-3 flex-col">
          <span className="text-xl font-bold text-gray-700">My Order</span>
          {cartItems.length > 0 ? (
            cartItems.map((food, index) => {
              return (
                <ItemCard
                  key={food.id || index}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  qty={food.qty}
                  img={food.img}
                />
              );
            })
          ) : (
            <h2 className="text-center font-bold text-xl text-gray-800 mt-2">
              Your cart is empty
            </h2>
          )}
          <div className="absolute bottom-1">
            <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
            <h3 className="font-semibold text-gray-800">
              Total Amount : {totalPrice}{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-[900px] h-[500px] mt-20 ml-24 flex flex-col gap-8 ">
        <div className="w-[810px] h-[210px] bg-white ml-22 flex flex-col ">
          <h2 className="font-semibold text-xl ml-12 mt-4">Accounts</h2>
          <p className="font-semibold text-gray-500 ml-12 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          </p>
          <div className="w-[400px] h-[70px] ml-12 mt-8 flex items-center gap-6">
            <button
              onClick={() => navigate("/login")}
              className="py-3 px-12 border text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-white"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="py-3 px-12 bg-green-500 text-white font-semibold cursor-pointer hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-[810px] h-[80px] bg-white ml-22 flex items-center text-gray-500 font-semibold pl-12">
          Delivery Address
        </div>
        <div className="w-[810px] h-[80px] bg-white ml-22 flex items-center text-gray-500 font-semibold pl-12">
          Payment
        </div>
      </div>
      <BsArrowLeft
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-2xl"
      />
    </>
  );
};

export default CartDetails;
