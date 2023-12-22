import React from 'react'
import img1 from '../images/kisspng-spritzer-sea-breeze-wine-cocktail-cocktail-garnish-aperol-spritz-5b33fc27c66ce2.6961993315301335438128.png'
import img2 from '../images/5a1ce6b990d185.9054182915118435135932.png'
import img3 from '../images/Realistic-ftuiys-juice-splash-on-transparent-background-PNG.png'


function Features() {
  return (
    <div className="flex flex-col md:flex-row pt-4 justify-between items-center px-4  md:px-12 lg:px-20 gap-x-5 snap-mandatory snap-center" id='Features'>
      <div>
        <h1 className="flex-none my-10 text-3xl md:4xl font-bold">
          Why we are better than Others
        </h1>
        <h2 className="font-light text-lg">
          Our commitment to excellence in the realm of juices sets us apart from
          the competition
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 max-w-[70%]">
        <div className="hover:cursor-pointer transition-all duration-200 hover:scale-105 bg-gradient-to-b from-[#f8da56] to-[#E5BD0F] border border-orange-200 rounded-lg shadow-2xl max-h-[80%]">
          <img
            src={img1}
            className="max-h-[100%] rounded-lg"
            alt="My first image"
          />
        </div>
        <div className="md:mx-6 hover:cursor-pointer transition-all duration-200 hover:scale-105 bg-gradient-to-b from-[#f8da56] to-[#E5BD0F] border border-orange-200 rounded-lg shadow-2xl mt-[20%] max-h-[80%]">
          <img
            src={img2}
            className="max-h-[100%] rounded-lg"
            alt="My first image"
          />
        </div>
        <div className="hover:cursor-pointer transition-all duration-200 hover:scale-105 bg-gradient-to-b from-[#f8da56] to-[#E5BD0F] border border-orange-200 rounded-lg shadow-2xl max-h-[80%]">
          <img src={img3} className="rounded-lg" alt="My first image" />
        </div>
      </div>
    </div>
  );
}

export default Features