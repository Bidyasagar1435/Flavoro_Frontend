import React, { useState, useEffect } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/slices/CategorySlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const CatagoryMenu = () => {
  const [categories, setcategories] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setcategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
    let categoryFromParams = searchParams.get("category") || "All";
    categoryFromParams =
      categoryFromParams[0].toUpperCase() + categoryFromParams.slice(1);
    dispatch(addCategory(categoryFromParams));
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const handleCategory = (category) => {
    dispatch(addCategory(category));
    navigate(`?category=${category.toLowerCase()}`);
  };

  const handleAllClick = () => {
    dispatch(addCategory("All"));
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  return (
    <div className="mx-7">
      <h2 className="text-xl font-semibold">Find the best food</h2>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
        <button
          onClick={handleAllClick}
          className={`px-4 py-1 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => {
                handleCategory(category);
              }}
              key={index}
              className={`px-4 py-1 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CatagoryMenu;
