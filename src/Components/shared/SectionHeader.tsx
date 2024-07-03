import React from "react";


interface SectionHeaderProps {
    title: string;
    linkText: string;
    linkImgSrc: string;
}



const SectionHeader: React.FC<SectionHeaderProps> = ({ title, linkText, linkImgSrc }) => {
    return (
        <div className="flex gap-5 px-5 w-full leading-[120%] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-3xl font-bold text-slate-700">
                {title}
            </div>
            <div className="flex gap-5 justify-between self-start mt-5 text-xl text-black">
                <div>{linkText}</div>
                <img
                    loading="lazy"
                    src={linkImgSrc}
                    className="shrink-0 self-start mt-1.5 w-4 aspect-[1.33]"
                    alt="Link Icon"
                />
            </div>
        </div>
    );
};

export default SectionHeader;
