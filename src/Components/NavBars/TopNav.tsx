// // components/Header.js
// import React from 'react';



// const Header = () => {
//   return (
 

//     <div className="w-full max-w-screen-xl mx-auto h-[63px] relative bg-white border-t border-b border-gray-200">
//     {/* <div className="w-[43.49px] h-[70px] left-[400px] top-0 absolute text-slate-700 text-base font-bold  leading-[70px]">Deals</div> */}
//     <div className="w-[43.49px] h-[70px] left-[400px] top-0 absolute flex items-center text-slate-700 text-base font-bold leading-[70px]">
//   <img src="images/deals.jpg" alt="Deals" className="w-5 h-5 mr-1.5" />
//   Deals
// </div>
//     <div className="w-5 h-[21px] left-[639px] top-[24px] absolute flex-col justify-center items-center inline-flex">
//       <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
//         <div className="self-stretch grow shrink basis-0 pt-[0.52px] pb-[0.48px] flex-col justify-center items-center inline-flex">
//           <div className="w-5 h-5 relative">
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="w-[50.52px] h-[70px] left-[510.58px] top-[-0.25px] absolute text-purple-900 text-base font-bold  leading-[70px]">Home </div>
//     <div className="w-[46.54px] h-[70px] left-[595.58px] top-[-0.25px] absolute text-slate-700 text-base font-bold  leading-[70px]">About</div>
//     <div className="w-9 h-[38px] left-[1578.86px] top-[17.50px] absolute flex-col justify-center items-center inline-flex">
//       <div className="self-stretch grow shrink basis-0 py-px flex-col justify-center items-center inline-flex">
//         <div className="self-stretch grow shrink basis-0 px-[0.02px] py-[3px] justify-center items-center inline-flex"></div>
//       </div>
//     </div>
//     {/* <div className="w-[124.81px] h-[33px] left-[1150.86px] top-[13.50px] absolute text-purple-900 text-[20px] font-bold leading-relaxed">8100</div> */}
//     <div className="flex items-center w-[124.81px] h-[33px] left-[1140.86px] top-[13.50px] absolute text-purple-900 text-[20px] font-bold leading-relaxed">
//         <img src="images/support.jpg" alt="support" className="w-6 h-7 mr-2 top-[20.50px]"  />
//         8100
//       </div>
//     <div className="w-[126.73px] h-3 left-[1170.86px] top-[43.50px] absolute text-zinc-500 text-xs font-medium font-['Lato'] leading-3 tracking-wide">24/7 Support Center</div>
//     <div className="w-[43.78px] h-[70px] left-[690.58px] top-[-0.25px] absolute text-slate-700 text-base font-bold  leading-[70px]">Shop </div>
//     <div className="w-[62px] h-[70px] left-[770px] top-0 absolute text-slate-700 text-base font-bold leading-[70px]">Sellers </div>
//     <div className="w-[103px] h-[70px] left-[860px] top-0 absolute text-slate-700 text-base font-bold  leading-[70px]">How it works </div>
//     <div className="w-2 h-2 py-0.5 left-[1178.58px] top-[41px] absolute justify-center items-center inline-flex"></div>
//     <div className="w-[61.41px] h-[70px] left-[1000.58px] top-[-0.25px] absolute text-slate-700 text-base font-bold  leading-[70px]">Contact</div>
//     <div className="w-[219px] h-[71px] left-3 top-[1px] absolute">
//       <img className="w-[69px] h-[51px] left-0 top-0 absolute" src="images/logo.jpg" />
//       <div className="w-[41px] h-[22.31px] left-[94px] top-[7.10px] absolute text-zinc-800 text-base font-bold font-['Century Gothic']">Time</div>
//       <div className="w-[115px] h-[22.31px] left-[94px] top-[30.43px] absolute text-purple-900 text-lg font-normal font-['Questrial']">Technologies</div>
//     </div>
//   </div>
//   );
// };

// export default Header;


import React from 'react';

const Header = () => {
  return (
    // <div className="w-full max-w-screen-xl mb-9 mx-auto h-[63px] bg-white border-t border-b border-gray-200 flex items-center justify-between px-4">
    <div className="w-full  mb-20 mx-auto h-[63px] bg-white border-t border-b border-gray-200 flex items-center justify-between px-36">

      <div className="flex items-center ">
        <img src="images/logo.jpg" alt="Logo" className="w-[69px] h-[51px] mr-3" />
        <div className="flex flex-col">
          <div className="text-zinc-800 text-base font-bold font-['Century Gothic']">Time</div>
          <div className="text-purple-900 text-lg font-normal font-['Questrial']">Technologies</div>
        </div>
      </div>
      <div className="flex items-center space-x-16"> {/* Adjust space-x value as needed */}
        <div className="flex items-center text-slate-700 text-base font-bold leading-[70px]">
          <img src="images/deals.jpg" alt="Deals" className="w-5 h-5 mr-1.5" />
          Deals
        </div>
        <div className="text-purple-900 text-base font-bold leading-[70px]">Home</div>
        <div className="text-slate-700 text-base font-bold leading-[70px]">About</div>
        <div className="text-slate-700 text-base font-bold leading-[70px]">Shop</div>
        <div className="text-slate-700 text-base font-bold leading-[70px]">Sellers</div>
        <div className="text-slate-700 text-base font-bold leading-[70px]">How it works</div>
        <div className="text-slate-700 text-base font-bold leading-[70px]">Contact</div>
      </div>
      <div className="flex flex-col items-start  ml-10">
        <div className="flex items-center text-purple-900 text-[20px] font-bold leading-relaxed">
          <img src="images/support.jpg" alt="support" className="w-6 h-7 mr-2  self-center" />
          8100
        </div>
        <div className="text-zinc-500 text-xs font-medium font-['Lato'] leading-3 tracking-wide ml-8">
          24/7 Support Center
        </div>
      </div>
   
    </div>
  );
};

export default Header;

