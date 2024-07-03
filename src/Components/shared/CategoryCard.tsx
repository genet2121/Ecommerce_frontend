
import React from 'react';

interface CategoryCardProps {
  imageUrl: string;
  altText: string;
  categoryName: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, altText, categoryName, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="flex flex-col flex-1 justify-end items-center px-8 py-9 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:px-5 cursor-pointer"
    >
      <img loading="lazy" alt={altText} src={imageUrl} className="aspect-[1.33] w-[116px]" />
      <div className="mt-6">{categoryName}</div>
    </div>
  );
};

export default CategoryCard;
