// components/Paints.js
'use client'; // Ensure this is a client-side component if using Next.js 13+ App Router

import React from 'react';
import Orange from "../../../public/orange.png";
import Image from 'next/image';

const Paints = ({ homepageData }) => {
  const { categories, homeCategoryTitle, homeCategorySubtitle } = homepageData || {};

  if (!categories || categories.length === 0) {
    return null;
  }

  // Split categories into two groups
  const imageCategory = categories[0];
  const gridCategories = categories.slice(1);

  return (
    <section className="py-12  relative">
      <div
        className="absolute top-0 left-0 h-full w-[10px]"
        style={{
          background: "linear-gradient(to bottom, #E70000 10%, #FF9119 90%)",
        }}
      ></div>
      <div className="container mx-auto px-6">
        <h3 className='subtitle'>{homeCategorySubtitle}</h3>
        <h2 className='title'>
          {homeCategoryTitle}
          <Image
            src={Orange}
            alt="Category Color"
            width={150} // Adjust width and height as needed
            className="inline ml-3" // Ensure the image is inline with the text
          />
        </h2>
        <div className="flex flex-col lg:flex-row lg:-mx-3  mt-16">
          {imageCategory && (
            <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0 relative">
              <a href={imageCategory.link} className="block relative group h-full">
                <img
                  src={imageCategory.image.node.sourceUrl}
                  alt={imageCategory.title}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform "
                />
                <div className="absolute bottom-0 left-0 w-full bg-[#FF9119] bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 text-center flex flex-row items-center max-sm:flex-col justify-between h-full">
                    <h3 className="text-2xl font-bold">{imageCategory.title}</h3>
                    <button className='bg-white text-[#FF9119] px-8 py-2 rounded-full mt-4'>Read More</button>
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Grid of 4 boxes */}
          <div className="w-full lg:w-1/2 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {gridCategories.map((category, index) => (
                <a key={index} href={category.link} className="group block relative">
                  <img
                    src={category.image.node.sourceUrl}
                    alt={category.title}
                    className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform "
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#FF9119] bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paints;
