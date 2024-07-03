// // // src/components/Products.tsx


import React from "react";
import ProductCard from "../shared/ProductCard";
import SectionHeader from "../shared/SectionHeader";

const Products = () => {
  return (
    <div className="flex flex-col mb-32 ">
      <SectionHeader
        title="Popular Products"
        linkText="See more"
        linkImgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bec69ac7837c292634d81d0232892eeb8f7aceae57a2e9378f415c8bed71071a?apiKey=4e645b7baa1b40a5bedea55067e1f89f&"
      />
      {/* <div className="flex gap-5 px-5 mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full"> */}
      <div className="grid grid-cols-5 gap-5 px-5 mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">

        <ProductCard
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7e1df7aebbde1b8f3a536b167bcad305fb871b95bbb7c3175fb749afc2283709?apiKey=4e645b7baa1b40a5bedea55067e1f89f&width=2000"
          imgAlt="Seeds of Change"
          category="Snack"
          name="Seeds of Change Organic Quinoa"
          rating="4.0"
          seller="NestFood"
          price="28.85"
          oldPrice="32.8"
        />
        <ProductCard
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b5652351deba30b8423d3628690e90ea29e38ff86572fc938677defd2e7af659?apiKey=4e645b7baa1b40a5bedea55067e1f89f&width=2000"
          imgAlt="Hodo Foods"
          category="Hodo Foods"
          name="All Natural Italian-Style Chicken Meatballs"
          rating="3.5"
          seller="Stouffer"
          price="52.85"
          oldPrice="55.8"
        />
           <ProductCard
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b5652351deba30b8423d3628690e90ea29e38ff86572fc938677defd2e7af659?apiKey=4e645b7baa1b40a5bedea55067e1f89f&width=2000"
          imgAlt="Hodo Foods"
          category="Hodo Foods"
          name="All Natural Italian-Style Chicken Meatballs"
          rating="3.5"
          seller="Stouffer"
          price="52.85"
          oldPrice="55.8"
        />
           <ProductCard
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b5652351deba30b8423d3628690e90ea29e38ff86572fc938677defd2e7af659?apiKey=4e645b7baa1b40a5bedea55067e1f89f&width=2000"
          imgAlt="Hodo Foods"
          category="Hodo Foods"
          name="All Natural Italian-Style Chicken Meatballs"
          rating="3.5"
          seller="Stouffer"
          price="52.85"
          oldPrice="55.8"
        />
           <ProductCard
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b5652351deba30b8423d3628690e90ea29e38ff86572fc938677defd2e7af659?apiKey=4e645b7baa1b40a5bedea55067e1f89f&width=2000"
          imgAlt="Hodo Foods"
          category="Hodo Foods"
          name="All Natural Italian-Style Chicken Meatballs"
          rating="3.5"
          seller="Stouffer"
          price="52.85"
          oldPrice="55.8"
        />
          
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
};

export default Products;


