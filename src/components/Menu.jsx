import React from 'react'
import First from '../images/Image1.png'
import Second from '../images/Image2.png'
import Third from '../images/image3.png'
import { CiHeart } from "react-icons/ci";

function Menu() {
  return (
    <div
      className="flex flex-col gap-y-8 mt-10 px-4  md:px-12 lg:px-20 snap-mandatory snap-center"
      id="Menu"
    >
      <div>
        <h1 className=" text-2xl font-bold md:text-2xl">
          Explore best Menu selections
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="hover:cursor-pointer transition-all duration-200 hover:scale-105 relative px-3 bg-gradient-to-b from-[#f8da56] to-orange-600 border border-orange-200 rounded-2xl shadow-2xl  pb-4 max-h-[450px]">
          <div className="bg-red-600 absolute top-0 right-0 rounded-tr-xl rounded-bl-xl py-2 px-3 text-white font-bold">
            <CiHeart />
          </div>
          <img
            src={First}
            className="max-h-[50%] rounded-lg"
            alt="My first image"
          />
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="font-bold text-lg text-orange-900">Mango Juice</h1>
          <h2 className="font-light text-lg mb-10">
            Tasty, cool and juolizing{" "}
          </h2>
          <p className="font-bold">
            <span className="text-red-700">KES </span>10
          </p>
        </div>
        <div className="hover:cursor-pointer transition-all duration-200 hover:scale-105 relative px-3 bg-gradient-to-b from-[#f8da56] to-orange-600 border border-orange-200 rounded-2xl shadow-2xl max-h-[450px]">
          <div className="bg-red-600 absolute top-0 right-0 rounded-tr-xl rounded-bl-xl py-2 px-3 text-white font-bold ">
            <CiHeart />
          </div>
          <img
            src={Second}
            className="max-h-[50%] rounded-lg"
            alt="My first image"
          />
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="font-bold text-lg text-orange-900">
            Pineapple and Strawberry Cocktail
          </h1>
          <h2 className="font-light text-lg mb-10">
            Tasty, cool and juolizing{" "}
          </h2>
          <p className="font-bold">
            <span className="text-red-700">KES </span>15
          </p>
        </div>
        <div className="hover:cursor-pointer transition-all duration-200 hover:scale-105 relative px-3 bg-gradient-to-b from-[#f8da56] to-orange-600 border border-orange-200 rounded-2xl shadow-2xl max-h-[450px]">
          <div className="bg-red-600 absolute top-0 right-0 rounded-tr-xl rounded-bl-xl py-2 px-3 text-white font-bold">
            <CiHeart />
          </div>
          <img
            src={Third}
            className="max-h-[50%] rounded-lg"
            alt="My first image"
          />
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="font-bold text-lg text-orange-900">Grapes Yoghurt</h1>
          <h2 className="font-light text-lg mb-10">
            Tasty, cool and juolizing{" "}
          </h2>
          <p className="font-bold">
            <span className="text-red-700">KES </span>10
          </p>
        </div>
      </div>
      <h1 className="w-full text-right items-end hover:text-red-900 hover:cursor-pointer">
        View more ⮕
      </h1>
    </div>
  );
}

export default Menu