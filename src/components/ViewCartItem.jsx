import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewCartItem = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const { pathname } = useLocation();
  console.log(pathname);


  return (
    <>
      {cartItems?.length > 0 && pathname != "/cart-details" ? (
        <div className="w-full h-[40px] flex justify-center">
          <div className="w-[700px] h-[50px] bg-green-500  rounded-t-lg flex items-center justify-between px-4 fixed bottom-0">
            <span className="font-light text-white">{ totalQty } Items added</span>
            <Link
              className="text-white font-semibold border-1 border-white px-3 py-1.5 rounded-lg"
              to="/cart-details"
            >
              Viewitem
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ViewCartItem;
