// import * as React from "react";

// const QuickDisplay = () => {
//   return (
//     <div className="flex flex-col items-center px-5">
//       <div className="text-6xl font-bold  leading-[72px] max-md:max-w-full max-md:text-4xl" style={{color:'#5D328F'}}>
//         Ethiopia’s leading B2C market place
//       </div>
//       <div className="flex gap-0 items-center py-20 mt-16 w-full font-bold text-center text-white rounded-2xl leading-[120%] max-w-[1610px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full" style={{background:'#493B59'}}>
//         <div className="flex flex-col self-stretch px-20 pt-5 pb-px my-auto max-md:px-5">
//           <div className="self-center text-7xl max-md:text-4xl">0+</div>
//           <div className="mt-5 text-2xl">Glorious years</div>
//         </div>
//         <div className="flex flex-col items-center self-stretch px-16 pt-5 pb-1.5 my-auto whitespace-nowrap max-md:px-5">
//           <div className="flex flex-col">
//             <div className="text-7xl max-md:text-4xl">0+</div>
//             <div className="mt-6 text-2xl">Partners</div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center self-stretch px-16 pt-5 pb-px my-auto whitespace-nowrap max-md:px-5">
//           <div className="flex flex-col">
//             <div className="text-7xl max-md:text-4xl">0+</div>
//             <div className="mt-6 text-2xl">Buyers</div>
//           </div>
//         </div>
//         <div className="flex flex-col self-stretch px-20 pt-5 pb-1.5 my-auto max-md:px-5">
//           <div className="self-center text-7xl max-md:text-4xl">0+</div>
//           <div className="self-start mt-5 text-2xl max-md:ml-1.5">
//             Verified Sellers
//           </div>
//         </div>
//         <div className="flex flex-col self-stretch px-20 pt-5 pb-1.5 my-auto max-md:px-5">
//           <div className="self-center text-7xl max-md:text-4xl">0+</div>
//           <div className="mt-5 text-2xl max-md:mr-1 max-md:ml-0.5">
//             Products Sold
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 self-stretch mt-24 w-full text-center max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//         <div className="flex flex-1 gap-2.5 px-3 py-6 bg-violet-100 rounded-xl border border-solid border-slate-100">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac2dfbff58e42471bb984afd29fe76afd021584eeb8641c6c005bdbb8688561d?apiKey=7cc667458d2043d895938c0111c31bd4&"
//             className="shrink-0 aspect-square w-[60px]"
//           />
//           <div className="flex flex-col my-auto">
//             <div className="self-center text-base font-bold leading-5 text-slate-700">
//               Best prices & offers
//             </div>
//             <div className="mt-4 text-sm leading-6 text-zinc-500">
//               Best price for product in the market
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-5 justify-between py-6 pr-16 pl-5 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/40af762eb2d745c4c81a5a2974bafa63b72f06432c80949e8cc3e3643bafd021?apiKey=7cc667458d2043d895938c0111c31bd4&"
//             className="shrink-0 aspect-square w-[60px]"
//           />
//           <div className="flex flex-col my-auto">
//             <div className="text-base font-bold leading-5 text-slate-700">
//               Free delivery
//             </div>
//             <div className="mt-4 text-sm leading-6 text-zinc-500">
//               free delivery 24/7
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-5 justify-between py-6 pr-20 pl-4 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0023cef3df608d1230b3b3d41a9a9ef2ef839bf80607869d252f58a31c22244?apiKey=7cc667458d2043d895938c0111c31bd4&"
//             className="shrink-0 aspect-square w-[60px]"
//           />
//           <div className="flex flex-col my-auto">
//             <div className="self-start ml-3 text-base font-bold leading-5 text-slate-700 max-md:ml-2.5">
//               Great deals
//             </div>
//             <div className="mt-5 text-sm leading-6 text-zinc-500">
//               when you sign up
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-5 justify-between py-6 pr-12 pl-4 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d05cc6572032cdad84790d54bfdbe97eb26d253af910b86d40397097d79c2e1?apiKey=7cc667458d2043d895938c0111c31bd4&"
//             className="shrink-0 aspect-square w-[60px]"
//           />
//           <div className="flex flex-col my-auto">
//             <div className="text-base font-bold leading-5 text-slate-700">
//               Wide assortments
//             </div>
//             <div className="self-center mt-5 text-sm leading-6 text-zinc-500">
//               Mega discounts
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-5 justify-between py-6 pr-16 pl-5 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd48b027120be7da76a756a30a8270c3b3aed10ea4732d9eac538483b3954c94?apiKey=7cc667458d2043d895938c0111c31bd4&"
//             className="shrink-0 aspect-square w-[60px]"
//           />
//           <div className="flex flex-col my-auto">
//             <div className="text-base font-bold leading-5 text-slate-700">
//               Easy returns
//             </div>
//             <div className="mt-4 text-sm leading-6 text-zinc-500">
//               Within 30 days
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default QuickDisplay;
import * as React from "react";
import StatCard from "../shared/StatCard";
import FeatureCard from "../shared/FeatureCard";

const QuickDisplay = () => {
  const stats = [
    { number: "0+", description: "Glorious years" },
    { number: "0+", description: "Partners" },
    { number: "0+", description: "Buyers" },
    { number: "0+", description: "Verified Sellers" },
    { number: "0+", description: "Products Sold" },
  ];

  const features = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac2dfbff58e42471bb984afd29fe76afd021584eeb8641c6c005bdbb8688561d?apiKey=7cc667458d2043d895938c0111c31bd4&",
      title: "Best prices & offers",
      description: "Best price for product in the market",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/40af762eb2d745c4c81a5a2974bafa63b72f06432c80949e8cc3e3643bafd021?apiKey=7cc667458d2043d895938c0111c31bd4&",
      title: "Free delivery",
      description: "Free delivery 24/7",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0023cef3df608d1230b3b3d41a9a9ef2ef839bf80607869d252f58a31c22244?apiKey=7cc667458d2043d895938c0111c31bd4&",
      title: "Great deals",
      description: "When you sign up",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d05cc6572032cdad84790d54bfdbe97eb26d253af910b86d40397097d79c2e1?apiKey=7cc667458d2043d895938c0111c31bd4&",
      title: "Wide assortments",
      description: "Mega discounts",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd48b027120be7da76a756a30a8270c3b3aed10ea4732d9eac538483b3954c94?apiKey=7cc667458d2043d895938c0111c31bd4&",
      title: "Easy returns",
      description: "Within 30 days",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-6xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl" style={{ color: '#5D328F' }}>
        Ethiopia’s leading B2C market place
      </div>
      <div className="flex gap-0 items-center py-20 mt-16 w-full font-bold text-center text-white rounded-2xl leading-[120%] max-w-[1610px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full" style={{ background: '#493B59' }}>
        {stats.map((stat, index) => (
          <StatCard key={index} number={stat.number} description={stat.description} />
        ))}
      </div>
      <div className="flex gap-5 self-stretch mt-24 w-full text-center max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} imgSrc={feature.imgSrc} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}

export default QuickDisplay;

