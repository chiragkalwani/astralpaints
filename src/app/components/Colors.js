import React from 'react';
import Green from "../../../public/green.png"
import Image from 'next/image';

export default function Colors({ homepageData, allColourCategory }) {
  const { homeColoursTitle, homeColoursSubtitle } = homepageData || {};
  let colours = allColourCategory?.[0]?.colours?.nodes || [];

  // Double the array to ensure there are 6 items
  if (colours.length > 0 && colours.length < 6) {
    colours = [...colours, ...colours].slice(0, 6);
  }

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 h-full w-[10px]"
        style={{
          background: "linear-gradient(to bottom, #F5E847 10%, #00AE44 90%)",
        }}
      ></div>
      <section className="py-10 container mx-auto px-4 sm:px-6">
        <div className="mt-4 flex justify-between items-center flex-wrap">
          <div className="mb-4 sm:mb-0">
            <h3 className="subtitle text-center sm:text-left">{homeColoursSubtitle}</h3>
            <h2 className="title text-center sm:text-left">
              {homeColoursTitle}
              <Image
                src={Green}
                alt="About Color"
                width={120} // Adjust width for better mobile fit
                className="inline ml-3 align-middle" // Ensure the image is inline with the text
              />
            </h2>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <button className="px-4 py-2 border rounded-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition duration-200">
              Explore More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 py-4">
          {colours.map((colour, index) => (
            <div
              key={index}
              className="relative group py-4 rounded-3xl  max-sm:shadow-xl max-sm:border hover:shadow-xl hover:border border-white border hover:border-gray-200 w-full sm:w-48 flex flex-col items-center transition duration-300 ease-in-out transform"
            >
              <div className='text-base group-hover:opacity-100  max-sm:opacity-100 opacity-0 font-bold'>Astral Pipe</div>
              <div
                className="w-full h-24 sm:h-32 mb-4 border rounded flex justify-center items-center transition duration-300 ease-in-out group-hover:bg-white"
                style={{
                  backgroundColor: colour.colourInfo.selectColor,
                }}
              >
                <div className="w-20 sm:w-32 h-16 sm:h-24 border border-white group-hover:border-gray-300"></div>
              </div>
              <h3 className="text-center text-sm sm:text-base font-semibold opacity-0 max-sm:opacity-100 group-hover:opacity-100">
                {colour.title}
              </h3>
              <p className="text-center text-gray-600 opacity-0 group-hover:opacity-100 max-sm:opacity-100 transition duration-300 ease-in-out text-xs sm:text-base">
                {`RGB: ${colour.colourInfo.colourRgb}`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
