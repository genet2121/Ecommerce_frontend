import React from "react";

interface ProductCardProps {
    imgSrc: string;
    imgAlt: string;
    category: string;
    name: string;
    rating: string;
    seller: string;
    price: string;
    oldPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imgSrc,
    imgAlt,
    category,
    name,
    rating,
    seller,
    price,
    oldPrice,
}) => {
    return (
        <div className="flex flex-col pt-px pb-5 bg-white rounded-2xl border border-gray-200 border-solid w-[298px] h-[401px]">
            <div className="flex flex-col justify-center px-6 pt-6 bg-white">
                <img
                    loading="lazy"
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-[150px] object-cover rounded-t-xl"
                />
            </div>
            <div className="flex flex-col items-start px-6 py-4">
                <div className="text-xs leading-6 text-gray-400">{category}</div>
                <div className="mt-2 text-base font-bold leading-5 text-gray-700">
                    {name}
                </div>
                <div className="flex items-center mt-2">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-9 h-9">
                        <img
                            loading="lazy"
                            src={imgSrc}
                            alt={imgAlt}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="ml-2 text-sm leading-6 text-gray-400">{`(${rating})`}</div>
                </div>
                <div className="mt-2 text-sm leading-6 text-purple-900">
                    By <span className="font-bold">{seller}</span>
                </div>
                <div className="flex items-center mt-3">
                    <div className="text-lg font-bold text-purple-900">{`$${price}`}</div>
                    <div className="ml-2 text-sm text-gray-400 line-through">{`$${oldPrice}`}</div>
                    <div className="ml-auto flex items-center px-3 py-1 text-sm font-semibold text-purple-900 bg-purple-300 rounded">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/104fb840ae1f873fd6cfb56701d2fb2f674dfc48396f4681ac0433f03c1ab4b6?apiKey=4e645b7baa1b40a5bedea55067e1f89f&"
                            alt="Add Icon"
                            className="w-4 h-4 mr-1"
                        />
                        <div>Add</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
