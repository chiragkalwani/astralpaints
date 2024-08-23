'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/swiper-bundle.css';
import WaveSVG from '../../../public/wave.svg';

export default function Banners({ homepageData }) {
    const banners = homepageData?.banners || [];

    return (
        <div className="relative">
            {banners.length > 0 ? (
                <Swiper
                    modules={[Pagination, Autoplay]} 
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }} 
                    navigation={false} 
                    className="my-swiper"
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-[600px] max-sm:h-[400px]'>
                                <img
                                    src={banner.bannerImage.node.sourceUrl}
                                    alt={banner.bannersTitle || 'Banner Image'}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div> 
                                <div className='relative container h-[600px] max-sm:h-[400px] flex items-center mx-auto px-4 py-6'>
                                    <div className='text-left align-middle text-white'>
                                        <h2 className='text-5xl max-sm:text-2xl font-bold'>{banner.bannersTitle}</h2>
                                        <p className='mt-2 text-xl max-sm:text-base'>{banner.bannerDescription}</p>
                                        <a
                                            href={banner.bannerButton.url}
                                            target={banner.bannerButton.target || '_self'}
                                            rel="noopener noreferrer"
                                            aria-label={`Learn more about ${banner.bannersTitle}`}
                                            className='mt-4 inline-block bg-[#0060AF] text-white px-6 py-3 rounded-full'
                                        >
                                            {banner.bannerButton.title}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>No banners available.</p>
            )}
            <WaveSVG className="w-full absolute top-56 z-10 pointer-events-none max-sm:top-0" />
        </div>
    );
}
