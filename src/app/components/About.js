
'use client'; // Ensure this is a client-side component if using Next.js 13+ App Router
import Image from 'next/image';
import React from 'react';
import Aboutcolor from "../../../public/about-color.png";
import { FaPlayCircle } from 'react-icons/fa'; 

const AboutSection = ({ homepageData }) => {
  const {
    homeAboutTitle,
    homeAboutSubtitle,
    homeAboutDescription,
    homeAboutVideoImage,
    homeAboutVideoUrl,
    homeAboutButton
  } = homepageData || {};

  return (
    <section className="py-12 relative">
      <div
        className="absolute top-0 left-0 h-full w-[10px]"
        style={{
          background: "linear-gradient(to bottom, #E70000 10%, #E70000 90%)",
        }}
      ></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="subtitle">{homeAboutSubtitle}</h3>
            <h2 className="title">
              {homeAboutTitle}
              <Image
                src={Aboutcolor}
                alt="About Color"
                width={150} 
                className="inline ml-3" 
              />
            </h2>
            <div className="text-[#656565] mb-6 max-sm:mt-4 pe-10 dynamic-content" dangerouslySetInnerHTML={{ __html: homeAboutDescription }} />
            {homeAboutButton && (
              <a
                href={homeAboutButton.url}
                className="text-[#E70000] border rounded-full border-[#E70000] p-3 px-6 mt-6 hover:underline"
                target={homeAboutButton.target || '_self'}
                rel="noopener noreferrer"
              >
                {homeAboutButton.title}
              </a>
            )}
          </div>
          <div className="md:w-1/2 relative">
            {homeAboutVideoImage?.node?.sourceUrl && (
              <div className="relative">
                <img
                  src={homeAboutVideoImage.node.sourceUrl}
                  alt="About"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <a
                  href={homeAboutVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FaPlayCircle className="text-white text-6xl" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
