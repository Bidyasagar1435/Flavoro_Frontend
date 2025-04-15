import React from "react";
import { IoIosClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setactiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`w-full bg-white h-full fixed right-0 top-0 lg:w-[30vw] 2xl:w-[20vw] p-5 mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-700">My Order</span>
          <IoIosClose
            onClick={() => setactiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:border-red-500 hover:text-red-500 cursor-pointer"
          />
        </div>
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
          <h2 className="text-center font-bold text-xl text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}{" "}
          </h3>
          <hr className="w-[90vw] lg:[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="px-3 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 lg:w-[18vw] w-[90vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setactiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
