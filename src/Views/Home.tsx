// src/view/Home.tsx
import React from 'react';
import Header from '../Components/NavBars/TopNav';
import Hero from '../Components/Hero';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/NavBars/Footer';
import PromoBar from '../Components/NavBars/PromoBar';
import SearchCategory from '../Components/Search';
import EmailSubscription from '../Components/EmailSubscription';
import QuickDisplay from '../Components/QuickDisplay';
import DailySubscription from '../Components/DailySubscription';
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
      <Footer /> 
    </div>
  );
};

export default Home;
;
