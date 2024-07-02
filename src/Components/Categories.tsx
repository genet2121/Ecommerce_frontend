

import React from 'react';
import CategoryCard from '../Components/shared/CategoryCard';
import ShopNowSection from '../Components/shared/ShopNowSection';

const Categories = () => {
  return (
    <div className="flex flex-col mb-9">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 self-start px-5 mt-2.5">
          <div className="grow text-3xl font-bold leading-10 text-slate-700">Top Categories</div>
          <div className="flex gap-2.5 self-start mt-3 text-base font-semibold leading-6 text-purple-900">
            <div className="grow">All Categories</div>
            <img
              loading="lazy"
              alt="all category icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69fc8e7a615c8b6b530f6aae19650545aefe21711b0ddab02b4d9e172ffeb45?"
              className="shrink-0 self-start mt-1.5 w-3 aspect-square"
            />
          </div>
        </div>
        <img
          loading="lazy"
          alt="next back button"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e31c8ddcacfd5dfd7c560ae0e8ab148106fe243cceac9457922f63173246425?"
          className="shrink-0 max-w-full aspect-[5.26] w-[215px]"
        />
      </div>
      <div className="flex gap-5 px-5 mt-11 text-base font-bold leading-5 text-center text-slate-700 max-md:flex-wrap max-md:mt-10">
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5ac8a39c4acac57edb0f18e2e1d654faa54975a6aaefe03f21d6fe40e4a59a6a?"
          altText="Groceries"
          categoryName="Groceries"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ba1039bbedd197f1dd23e39e0e24805ae32e2330994373b9acaa5c36751efd?"
          altText="Electronics"
          categoryName="Electronics"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ff0b8e8643cd5b7e9966c13631399cba3014e8b84b99d005d8c7c4d8334cd253?"
          altText="Apparel"
          categoryName="Apparel & Fashion"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c834cd986ec4384ac4521f3865f641d2f728bfa5b4828e137c8988e1b0a1842b?"
          altText="Office Supplies"
          categoryName="Office Supplies"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/60343fa845112c83c4cee835734b8cc9dfffa8a1b8e30772c214c6739c765a04?"
          altText="Toys"
          categoryName="Toys & Games"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/26f95084421e31177f0423d38d86c4e9d5430c4b2b95042b19590a0453c5cf26?"
          altText="Beauty"
          categoryName="Beauty & Personal Care"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5931964eb58044fc1133ec1c795915d6a1bfffd54e3c38207103212ca96e03c6?"
          altText="Automotives"
          categoryName="Automotives"
        />
        <CategoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c05e7350a8d7c8f809d74244380349945a73838159b0c72cba7a25219f12665e?"
          altText="Decor"
          categoryName="Home Decor & Garden"
        />
      </div>
      <div className="px-5 mt-32 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <ShopNowSection
            imageUrl="images/groceries.jpg"
            altText="images/shop-now-arrow.jpg"
            title="Everyday Fresh & Clean with Our Products"
          />
          <ShopNowSection
            imageUrl="images/phone.jpg"
            altText="images/shop-now-arrow.jpg"
            title="I Phone 15 pro max & other tech products"
          />
          <ShopNowSection
            imageUrl="images/fashion.jpg"
            altText="images/shop-now-arrow.jpg"
            title="The latest trend in fashion"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
