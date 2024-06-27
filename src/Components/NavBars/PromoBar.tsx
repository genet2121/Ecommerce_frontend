// import React from 'react';
// import styled from 'styled-components';


// const Container = styled.div`
//   width: 100%;
//   height: 37px;
//   padding-top: 1.5px;
//   padding-bottom: 7px;
//   background-color: #5D328F; 
//   border-bottom: 1px solid #e5e7eb;
//   display: flex;
//   justify-content: center;
//   align-items: center; // Centering vertically
//   gap: 18px;
//   margin: 0 auto; // Center the container horizontally within the viewport
// `;

// const SaleText = styled.div`
//   color: white;
//   font-size: 12px; 
//   font-weight: normal;
//   font-family: 'Poppins', sans-serif;
//   line-height: 21px;
// `;

// const ShopNowText = styled.div`
//   text-align: center;
//   color: white;
//   font-size: 14px; // text-sm
//   font-weight: 600; // font-semibold
//   font-family: 'Poppins', sans-serif;
//   text-decoration: underline;
//   line-height: normal;
// `;

// const PromoBar: React.FC = () => {
//   return (
//     <Container>
//       <SaleText>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</SaleText>
//       <ShopNowText>ShopNow</ShopNowText>
//     </Container>
//   );
// };

// export default PromoBar;


import React from 'react';

const PromoBar: React.FC = () => {
  return (
    // <div className="w-full h-16 pt-1.5 pb-7 bg-purple-800 border-b border-gray-300 flex justify-center items-center gap-18 mx-auto">
    //   <div className="text-white text-xs font-normal font-poppins leading-21">
    //     Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    //   </div>
    //   <div className="text-white text-center text-sm font-semibold font-poppins underline">
    //     ShopNow
    //   </div>
    // </div>
    <div className="w-[1920px] h-[37px] pt-1.5 pb-[7px] bg-purple-900 border-b border-gray-200 justify-center items-end gap-[18px] inline-flex">
  <div className="text-white text-xs font-normal font-['Poppins'] leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
  <div className="text-center text-white text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
</div>
  );
};

export default PromoBar;
