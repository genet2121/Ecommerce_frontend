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
const Home: React.FC = () => {
  return (
    <div>
        <PromoBar />
      <Header />
      <SearchCategory />
      <EmailSubscription />
      {/* <Hero /> */}
      {/* <Categories />
      <Products />
      <Footer /> */}
    </div>
  );
};

export default Home;
;
