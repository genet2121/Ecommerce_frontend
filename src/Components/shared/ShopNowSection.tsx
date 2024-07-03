import React from 'react';

interface ShopNowSectionProps {
    imageUrl: string;
    altText: string;
    title: string;
}

const ShopNowSection: React.FC<ShopNowSectionProps> = ({ imageUrl, altText, title }) => {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-end items-start px-12 py-11 font-bold rounded-xl min-h-[237px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src={imageUrl} className="object-cover absolute inset-0 size-full" />
                <div className="relative text-2xl leading-7 text-slate-100">{title}</div>
                <div className="flex relative gap-1.5 justify-end px-7 py-2 mt-14 text-xs tracking-wide leading-4 text-center text-white bg-purple-900 rounded max-md:px-5 max-md:mt-10">
                    <button className="flex-auto my-auto">Shop Now</button>

                </div>
            </div>
        </div>
    );
};

export default ShopNowSection;
