import React from 'react'
import hero from '../images/Hero.png'

function Hero() {
  return (
    <div className=" flex flex-col md:flex-row px-4  md:px-12 lg:px-20 justify-center items-center my-10 snap-mandatory snap-center" id='Home'>
      <div className="">
        <h1 className="text-3xl md:4xl font-bold">
          Revitalize Your Routine, Fresh, Fruity, Fantastic!
        </h1>
        <h2 className="font-light mb-6 text-lg">
          "Savor the Symphony of Flavors, with Nature's Sweetness &
          deliciousness. Get the best variety of juices Here!"
        </h2>
        <div className="flex md:w-[50%] items-start gap-7">
          <button className="border border-black rounded-md px-2 py-3 text-white bg-orange-900 hover:bg-transparent transition-all duration-200 hover:text-black">
            View Menu
          </button>
          <button className="hover:text-white hover:bg-orange-900 px-2 py-3 border border-black rounded-md">
            Discount
          </button>
        </div>
      </div>
      <div className="ml-5 ">
        <img src={hero} className="max-h-screen" alt="My Hero image" />
      </div>
    </div>
  );
}

export default Hero