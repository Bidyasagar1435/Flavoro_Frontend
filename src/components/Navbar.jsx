import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-7 py-3 mb-10">
      <div>
        <h3 className="text-xl text-gray-600 font-bold">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search Here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
