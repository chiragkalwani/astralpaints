import React from 'react';
import Yellow from "../../../public/yellow.png"
import Image from 'next/image';
export default function Services({ homepageData }) {
  const { homeServicesTitle, homeServicesSubtitle } = homepageData || {};

  const backgroundImages = [
    {
      image: '/Rectangle9.png',
      title: 'Web Development',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/Rectangle10.png',
      title: 'Water Solution',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/Rectangle11.png',
      title: 'Painting',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  return (
    <section className="py-12 relative">
         <div
    className="absolute top-0 left-0 h-full w-[10px]"
    style={{
      background: "linear-gradient(to bottom, #FF9119 10%, #F5E847 90%)",
    }}
  ></div>
      <div className="container mx-auto px-6">
        <h3 className=" text-lg text-gray-600 mb-4">{homeServicesSubtitle}</h3>
        <h2 className=" text-3xl font-bold mb-16">{homeServicesTitle} <Image
        src={Yellow}
        alt="About Color"
        width={150} // Adjust width and height as needed
        
        className="inline ml-3" // Ensure the image is inline with the text
      /></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {backgroundImages.map(({ image, title, subtitle }, index) => (
            <div
              key={index}
              className="relative h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute w-full h-fit bottom-0 flex flex-col justify-end bg-[#FFE710] bg-opacity-50 p-4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold ">{title}</h3>
                  <p className="text-base">{subtitle}</p>
                </div>
                <button className="bg-white text-black px-8 py-2 rounded-full w-fit">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
