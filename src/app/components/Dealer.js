import React from 'react';

export default function Dealer({ homepageData }) {
    const { homeJoinTitle, homeJoinSubtitle, homeJoinButton, homeJoinDescription } = homepageData || {};

    return (
        <div className="relative flex flex-col items-center justify-center text-center py-12 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/dealer.png')" }}>
            <div
    className="absolute top-0 left-0 h-full w-[10px]"
    style={{
      background: "linear-gradient(to bottom, #00AE44 10%, #00AE44 90%)",
    }}
  ></div>
            <div className="max-w-2xl mx-auto">
            <h3 className="subtitle text-white">{homeJoinSubtitle}</h3>

                <h2 className="title text-white">{homeJoinTitle}</h2>
                <div className="text-lg text-gray-200 dynamic-content" dangerouslySetInnerHTML={{ __html: homeJoinDescription }} />

                <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded-full">
                    {homeJoinButton.title}
                </button>
            </div>
        </div>
    );
}
