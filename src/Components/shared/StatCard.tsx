import React from "react";

interface StatCardProps {
  number: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, description }) => {
  return (
    <div className="flex flex-col self-stretch px-20 pt-5 pb-px my-auto max-md:px-5">
      <div className="self-center text-7xl max-md:text-4xl">{number}</div>
      <div className="mt-5 text-2xl">{description}</div>
    </div>
  );
};

export default StatCard;
