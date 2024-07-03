import React from "react";

interface FeatureCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-1 gap-5 justify-between py-6 pr-16 pl-5 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
      <img
        loading="lazy"
        src={imgSrc}
        className="shrink-0 aspect-square w-[60px]"
      />
      <div className="flex flex-col my-auto">
        <div className="text-base font-bold leading-5 text-slate-700">
          {title}
        </div>
        <div className="mt-4 text-sm leading-6 text-zinc-500">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
