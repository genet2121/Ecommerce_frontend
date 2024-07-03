// src/view/Home.tsx
import React from 'react';
import Header from '../Components/NavBars/TopNav';

import Categories from '../Components/HomePage/Categories';
import Products from '../Components/HomePage/Products';

import PromoBar from '../Components/NavBars/PromoBar';
import SearchCategory from '../Components/HomePage/Search';
import EmailSubscription from '../Components/HomePage/EmailSubscription';
import QuickDisplay from '../Components/HomePage/QuickDisplay';
import DailySubscription from '../Components/HomePage/DailySubscription';
import FooterCom from '../Components/NavBars/FooterCom';
const Home: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
      <SearchCategory />
      <EmailSubscription />
      <Categories />
      <Products />
      <QuickDisplay />
      <DailySubscription />
      <FooterCom />
    
      
    </div>
  );
};

export default Home;

